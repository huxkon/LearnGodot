(function initStorage(namespace) {
  "use strict";

  const STORAGE_KEYS = {
    completedLessonIds: "completedLessonIds",
    learnedTermIds: "learnedTermIds",
    favoriteTermIds: "favoriteTermIds",
    reviewTermIds: "reviewTermIds",
    quizResults: "quizResults",
    lastVisitedLessonId: "lastVisitedLessonId",
  };

  const ARRAY_KEYS = new Set([
    STORAGE_KEYS.completedLessonIds,
    STORAGE_KEYS.learnedTermIds,
    STORAGE_KEYS.favoriteTermIds,
    STORAGE_KEYS.reviewTermIds,
  ]);

  const memoryFallback = new Map();
  const VALID_QUIZ_STATUSES = new Set(["correct", "review"]);

  function defaultValue(key) {
    if (ARRAY_KEYS.has(key)) return [];
    if (key === STORAGE_KEYS.quizResults) return {};
    return null;
  }

  function isPlainObject(value) {
    if (value === null || typeof value !== "object" || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
  }

  function normalizeStringIds(value) {
    if (!Array.isArray(value)) return [];
    return [...new Set(value.filter((id) => typeof id === "string" && id.length > 0))];
  }

  function normalizeQuizResults(value) {
    if (!isPlainObject(value)) return {};
    return Object.fromEntries(Object.entries(value).filter(([questionId, result]) => (
      questionId.length > 0
      && isPlainObject(result)
      && VALID_QUIZ_STATUSES.has(result.status)
    )));
  }

  function normalize(key, value) {
    if (ARRAY_KEYS.has(key)) return normalizeStringIds(value);
    if (key === STORAGE_KEYS.quizResults) return normalizeQuizResults(value);
    if (key === STORAGE_KEYS.lastVisitedLessonId) return typeof value === "string" ? value : null;
    return value;
  }

  function read(key) {
    if (memoryFallback.has(key)) return normalize(key, memoryFallback.get(key));

    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return defaultValue(key);
      return normalize(key, JSON.parse(raw));
    } catch {
      return defaultValue(key);
    }
  }

  function write(key, value) {
    const normalized = normalize(key, value);
    try {
      localStorage.setItem(key, JSON.stringify(normalized));
      memoryFallback.delete(key);
    } catch (error) {
      memoryFallback.set(key, normalized);
      console.warn("İlerleme tarayıcı depolamasına yazılamadı.", error);
    }
  }

  const progress = {
    get completedLessonIds() {
      const learned = new Set(this.learnedTermIds);
      const guides = window.GODOT_LESSON_GUIDES || {};
      return read(STORAGE_KEYS.completedLessonIds).filter((lessonId) => {
        const guide = guides[lessonId];
        return !guide || guide.order.every((termId) => learned.has(termId));
      });
    },
    get learnedTermIds() { return read(STORAGE_KEYS.learnedTermIds); },
    get favoriteTermIds() { return read(STORAGE_KEYS.favoriteTermIds); },
    get reviewTermIds() { return read(STORAGE_KEYS.reviewTermIds); },
    get quizResults() { return read(STORAGE_KEYS.quizResults); },
    get lastVisitedLessonId() { return read(STORAGE_KEYS.lastVisitedLessonId); },
    get reviewCount() {
      const quizReviewCount = Object.values(this.quizResults).filter((result) => result?.status === "review").length;
      return this.reviewTermIds.length + quizReviewCount;
    },

    has(key, id) {
      return read(key).includes(id);
    },

    toggle(key, id, force) {
      const values = new Set(read(key));
      const shouldAdd = force ?? !values.has(id);
      shouldAdd ? values.add(id) : values.delete(id);
      write(key, [...values]);
      return shouldAdd;
    },

    setLastLesson(id) {
      if (this.lastVisitedLessonId === id) return;
      write(STORAGE_KEYS.lastVisitedLessonId, id);
    },

    completeLesson(lesson, completed = true) {
      this.toggle(STORAGE_KEYS.completedLessonIds, lesson.id, completed);
    },

    completeTerm(termId, completed = true) {
      return this.toggle(STORAGE_KEYS.learnedTermIds, termId, completed);
    },

    setQuizResult(questionId, status) {
      const results = this.quizResults;
      results[questionId] = { status, updatedAt: new Date().toISOString() };
      write(STORAGE_KEYS.quizResults, results);
    },
  };

  namespace.storage = { STORAGE_KEYS, progress };
})(window.GodotApp = window.GodotApp || {});
