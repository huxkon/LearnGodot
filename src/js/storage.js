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

  function read(key) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return ARRAY_KEYS.has(key) ? [] : key === STORAGE_KEYS.quizResults ? {} : null;
      return JSON.parse(raw);
    } catch {
      return ARRAY_KEYS.has(key) ? [] : key === STORAGE_KEYS.quizResults ? {} : null;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("İlerleme tarayıcı depolamasına yazılamadı.", error);
    }
  }

  const progress = {
    get completedLessonIds() { return read(STORAGE_KEYS.completedLessonIds); },
    get learnedTermIds() { return read(STORAGE_KEYS.learnedTermIds); },
    get favoriteTermIds() { return read(STORAGE_KEYS.favoriteTermIds); },
    get reviewTermIds() { return read(STORAGE_KEYS.reviewTermIds); },
    get quizResults() { return read(STORAGE_KEYS.quizResults); },
    get lastVisitedLessonId() { return read(STORAGE_KEYS.lastVisitedLessonId); },

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
