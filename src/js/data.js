(function initDataLayer(namespace) {
  "use strict";

  const database = window.GODOT_LEARN_DATA;
  if (!database) throw new Error("GODOT_LEARN_DATA yüklenmedi.");

  const termMap = new Map(database.terms.map((term) => [term.id, term]));
  const lessonMap = new Map(database.lessons.map((lesson) => [lesson.id, lesson]));

  const normalize = (value = "") =>
    String(value)
      .toLocaleLowerCase("tr-TR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const getDatabase = () => database;
  const getAllTerms = () => database.terms;
  const getTermById = (id) => termMap.get(id);
  const getAllLessons = () => database.lessons;
  const getLesson = (id) => lessonMap.get(id);
  const getQuiz = (id) => database.quizzes.find((quiz) => quiz.id === id);
  const getQuizByLesson = (lessonId) => database.quizzes.find((quiz) => quiz.lesson_id === lessonId);
  const getCategory = (id) => database.categories.find((category) => category.id === id);
  const getLearningPath = (id) => database.learning_paths.paths.find((path) => path.id === id);

  function getLessonTerms(id) {
    const lesson = getLesson(id);
    if (!lesson) return { core: [], recognize: [] };
    return {
      core: lesson.core_term_ids.map(getTermById).filter(Boolean),
      recognize: lesson.recognize_term_ids.map(getTermById).filter(Boolean),
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
      .sort((a, b) => b.score - a.score || a.term.name.localeCompare(b.term.name, "tr"))
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
      .sort((a, b) => a.name.localeCompare(b.name, "tr"));
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
    getAllLessons,
    getLesson,
    getQuiz,
    getQuizByLesson,
    getCategory,
    getLearningPath,
    getLessonTerms,
    getRelatedTerms,
    searchTerms,
    filterTerms,
    getStats,
  };
})(window.GodotApp = window.GodotApp || {});
