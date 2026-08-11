(function initDataLayer(namespace) {
  "use strict";

  const database = window.GODOT_LEARN_DATA;
  if (!database) throw new Error("GODOT_LEARN_DATA yüklenmedi.");
  const curriculum = window.GODOT_CURRICULUM;
  if (!curriculum) throw new Error("GODOT_CURRICULUM yüklenmedi.");
  const contentLocale = namespace.locale?.resolveContentLocale() ?? curriculum.defaultLocale;
  const curriculumLessons = curriculum.lessons[contentLocale] ?? curriculum.lessons[curriculum.defaultLocale];
  const curriculumSections = curriculum.sections[contentLocale] ?? curriculum.sections[curriculum.defaultLocale];

  const displayTerms = database.terms;
  const displayTermMap = new Map(displayTerms.map((term) => [term.id, term]));
  const lessonMap = new Map(database.lessons.map((lesson) => [lesson.id, { ...lesson, ...(curriculumLessons[lesson.id] ?? {}) }]));

  const normalize = (value = "") =>
    String(value)
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[Iİı]/g, "i")
      .toLowerCase();

  const getDatabase = () => database;
  const getAllTerms = () => displayTerms;
  const getTermById = (id) => displayTermMap.get(id);
  const getTermForContext = (id) => displayTermMap.get(id);
  const getAllLessons = () => [...lessonMap.values()].sort((a, b) => a.order - b.order);
  const getLesson = (id) => lessonMap.get(id);
  const getCurriculumSections = () => [...curriculumSections].sort((a, b) => a.order - b.order);
  const getQuiz = (id) => database.quizzes.find((quiz) => quiz.id === id);
  const getQuizByLesson = (lessonId) => database.quizzes.find((quiz) => quiz.lesson_id === lessonId);
  const getCategory = (id) => database.categories.find((category) => category.id === id);
  const getLearningPath = (id) => database.learning_paths.paths.find((path) => path.id === id);
  const getNextCourseLesson = (completedLessonIds = []) => {
    const lessons = getAllLessons();
    const completed = new Set(completedLessonIds);
    return lessons.find((lesson) => !completed.has(lesson.id)) ?? null;
  };

  function getLessonTerms(id) {
    const lesson = getLesson(id);
    if (!lesson) return { core: [], recognize: [] };
    return {
      core: lesson.core_term_ids.map((termId) => getTermForContext(termId, id)).filter(Boolean),
      recognize: lesson.recognize_term_ids.map((termId) => getTermForContext(termId, id)).filter(Boolean),
    };
  }

  function getRelatedTerms(term) {
    return (term?.related_term_ids ?? []).map(getTermById).filter(Boolean);
  }

  function searchTerms(query) {
    const needle = normalize(query.trim());
    if (!needle) return [];
    return getAllTerms()
      .map((term) => {
        const name = normalize(term.name);
        const aliases = normalize((term.aliases ?? []).join(" "));
        const definition = normalize(term.definition);
        let score = 0;
        if (name === needle) score += 100;
        if (name.startsWith(needle)) score += 50;
        if (name.includes(needle)) score += 25;
        if (aliases.includes(needle)) score += 16;
        if (definition.includes(needle)) score += 6;
        return { term, score };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score || a.term.name.localeCompare(b.term.name, contentLocale))
      .map((result) => result.term);
  }

  function filterTerms({ query = "", tier = "all", category = "all", letter = "all" } = {}) {
    const needle = normalize(query.trim());
    return getAllTerms()
      .filter((term) => tier === "all" || term.tier === tier)
      .filter((term) => category === "all" || term.category_ids.includes(category))
      .filter((term) => letter === "all" || normalize(term.name).startsWith(normalize(letter)))
      .filter((term) => {
        if (!needle) return true;
        return normalize([term.name, ...(term.aliases ?? []), term.definition].join(" ")).includes(needle);
      })
      .sort((a, b) => a.name.localeCompare(b.name, contentLocale));
  }

  function getStats() {
    const first50 = getLearningPath("first-50");
    return {
      terms: getAllTerms().length,
      coreTerms: getAllTerms().filter((term) => term.tier === "core").length,
      lessons: getAllLessons().length,
      questions: database.quizzes.reduce((sum, quiz) => sum + quiz.questions.length, 0),
      first50Terms: first50?.term_ids.length ?? 0,
    };
  }

  namespace.data = {
    getDatabase,
    getAllTerms,
    getTermById,
    getTermForContext,
    getAllLessons,
    getLesson,
    getCurriculumSections,
    getQuiz,
    getQuizByLesson,
    getCategory,
    getLearningPath,
    getNextCourseLesson,
    getLessonTerms,
    getRelatedTerms,
    searchTerms,
    filterTerms,
    getStats,
    normalizeSearchText: normalize,
  };
})(window.GodotApp = window.GodotApp || {});
