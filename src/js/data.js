(function initDataLayer(namespace) {
  "use strict";

  const database = window.GODOT_LEARN_DATA;
  if (!database) throw new Error("GODOT_LEARN_DATA yüklenmedi.");

  const rawTermMap = new Map(database.terms.map((term) => [term.id, term]));
  const lessonMap = new Map(database.lessons.map((lesson) => [lesson.id, lesson]));

  const GENERAL_TERM_OVERRIDES = {
    scope: {
      name: "Scope (Bağlama Göre Kapsam)",
      definition: "Programlamada bir isme kodun hangi bölümlerinden erişilebildiğini; proje yönetiminde ise yapılacak işin sınırlarını anlatır. Hangi anlamın kullanıldığını konuşmanın bağlamı belirler.",
      short_definition: "Programlamada erişim sınırı; proje yönetiminde yapılacak işin sınırlarıdır.",
      where_heard: "local scope, global scope; project scope, scope creep.",
    },
    loop: {
      name: "Loop (Bağlama Göre Döngü)",
      definition: "Programlamada bir işlemin tekrarlanmasını; ses bağlamında ise sesin sona gelince başa dönüp yeniden çalmasını anlatır. Hangi anlamın kullanıldığını konuşmanın bağlamı belirler.",
      short_definition: "Programlamada işlem tekrarı; audio bağlamında sesin yeniden başlamasıdır.",
      where_heard: "for loop, while loop; audio loop, loop playback.",
    },
  };

  const CONTEXT_TERM_OVERRIDES = {
    "lesson-02": {
      scope: {
        name: "Scope (Programlama Kapsamı)",
        definition: "Bir değişkenin, fonksiyonun veya ismin kodun hangi bölümünden erişilebilir olduğunu belirleyen sınırdır.",
        short_definition: "Bir isme kodun hangi bölümünden erişilebildiğini belirleyen sınırdır.",
        where_heard: "local scope, function scope, global scope.",
      },
      loop: {
        name: "Loop (Programlama Döngüsü)",
        definition: "Aynı işlemi bir koleksiyon veya koşul üzerinden tekrarlar. for ve while temel programlama döngüleridir.",
        short_definition: "Bir kod işlemini belirli kurala göre tekrarlar.",
        where_heard: "for loop, while loop.",
      },
    },
    "lesson-11": {
      loop: {
        name: "Loop (Ses Döngüsü)",
        definition: "Bir sesin sona geldiğinde başa dönüp yeniden çalmasıdır. Arka plan müziğini kesintisiz sürdürmek gibi durumlarda kullanılır.",
        short_definition: "Ses sona geldiğinde başa dönüp yeniden çalar.",
        where_heard: "loop music, loop playback, audio loop.",
      },
    },
    "lesson-14": {
      scope: {
        name: "Scope (Proje Kapsamı)",
        definition: "Projede yapılacak işlerin, özelliklerin ve hedeflerin sınırıdır.",
        short_definition: "Projede yapılacak işin ve hedeflerin sınırlarıdır.",
        where_heard: "project scope, reduce the scope, scope creep.",
      },
    },
  };

  const withOverride = (term, override) => override ? { ...term, ...override } : term;
  const displayTerms = database.terms.map((term) => withOverride(term, GENERAL_TERM_OVERRIDES[term.id]));
  const displayTermMap = new Map(displayTerms.map((term) => [term.id, term]));

  const normalize = (value = "") =>
    String(value)
      .toLocaleLowerCase("tr-TR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const getDatabase = () => database;
  const getAllTerms = () => displayTerms;
  const getTermById = (id) => displayTermMap.get(id);
  const getTermForContext = (id, lessonId) => {
    const rawTerm = rawTermMap.get(id);
    if (!rawTerm) return undefined;
    return withOverride(rawTerm, CONTEXT_TERM_OVERRIDES[lessonId]?.[id] ?? GENERAL_TERM_OVERRIDES[id]);
  };
  const getTermContexts = (id) => {
    const contexts = [];
    for (const [lessonId, overrides] of Object.entries(CONTEXT_TERM_OVERRIDES)) {
      if (overrides[id]) contexts.push({ lessonId, ...overrides[id] });
    }
    return contexts;
  };
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
    getTermForContext,
    getTermContexts,
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
