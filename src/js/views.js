(function initViews(namespace) {
"use strict";

const {
  filterTerms,
  getAllLessons,
  getAllTerms,
  getDatabase,
  getLesson,
  getLessonTerms,
  getLearningPath,
  getQuizByLesson,
  getStats,
  getTermById,
  getTermForContext,
  getTermContexts,
} = namespace.data;
const { progress, STORAGE_KEYS } = namespace.storage;
const {
  badge,
  codeExample,
  coreNavigation,
  emptyState,
  escapeHtml,
  icon,
  progressBar,
  relatedTerms,
  termCard,
} = namespace.components;
const { COPY } = namespace;
const lessonOneGuide = window.GODOT_LESSON_01_GUIDE;

const percent = (value, total) => (total ? Math.round((value / total) * 100) : 0);
const pageHead = (eyebrow, title, description, actions = "") => `<header class="page-head"><div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div>${actions}</header>`;

function nextLesson() {
  const lessons = getAllLessons();
  const completed = new Set(progress.completedLessonIds);
  const last = getLesson(progress.lastVisitedLessonId);
  if (last && !completed.has(last.id)) return last;
  return lessons.find((lesson) => !completed.has(lesson.id)) ?? lessons.at(-1);
}

function dashboardView() {
  const stats = getStats();
  const first50 = getLearningPath("first-50");
  const learned = new Set(progress.learnedTermIds);
  const first50Learned = first50.term_ids.filter((id) => learned.has(id)).length;
  const lessonProgress = percent(progress.completedLessonIds.length, stats.lessons);
  const coreLearned = getAllTerms().filter((term) => term.tier === "core" && learned.has(term.id)).length;
  const current = nextLesson();
  const currentTerms = getLessonTerms(current.id);

  return `<div class="page dashboard-page">
    ${pageHead("Çalışma alanın", "Tekrar hoş geldin.", "Godot diline alışmak için küçük ama düzenli adımlar at.", `<a class="button button--primary" href="#/learn/${current.id}">${icon("book", 18)} Derse devam et</a>`)}
    <section class="dashboard-grid">
      <article class="hero-progress">
        <div class="hero-progress__copy"><span class="overline">Sıradaki ders · ${String(current.number).padStart(2, "0")}</span><h2>${escapeHtml(current.title)}</h2><p>${escapeHtml(current.description)}</p><div class="meta-row"><span>${icon("clock", 16)} ${current.estimated_minutes} dk</span><span>${currentTerms.core.length} temel kavram</span></div></div>
        <div class="lesson-orbit" aria-hidden="true"><span>${current.number}</span><small>/ ${stats.lessons}</small></div>
        <a class="stretched-link" href="#/learn/${current.id}" aria-label="${escapeHtml(current.title)} dersini aç"></a>
      </article>
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon">${icon("book")}</span><span>${lessonProgress}%</span></div><h3>Ders ilerlemesi</h3><p>${progress.completedLessonIds.length} / ${stats.lessons} ders tamamlandı</p>${progressBar(lessonProgress, "Ders ilerlemesi")}</article>
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon metric-icon--violet">${icon("check")}</span><span>${percent(coreLearned, stats.coreTerms)}%</span></div><h3>Temel terimler</h3><p>${coreLearned} / ${stats.coreTerms} terim öğrenildi</p>${progressBar(percent(coreLearned, stats.coreTerms), "Temel terimler")}</article>
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon metric-icon--amber">50</span><span>${percent(first50Learned, first50.term_ids.length)}%</span></div><h3>İlk 50 rotası</h3><p>${first50Learned} / ${first50.term_ids.length} terim öğrenildi</p>${progressBar(percent(first50Learned, first50.term_ids.length), "İlk 50 rotası")}</article>
    </section>
    <section class="dashboard-lower">
      <div class="panel recent-panel"><div class="panel-heading"><div><p class="eyebrow">Yol haritası</p><h2>Derslere genel bakış</h2></div><a href="#/learn">Tümünü gör ${icon("arrow", 16)}</a></div>
        <div class="mini-lessons">${getAllLessons().slice(0, 5).map((lesson) => { const done = progress.completedLessonIds.includes(lesson.id); return `<a href="#/learn/${lesson.id}"><span class="lesson-state ${done ? "is-done" : ""}">${done ? icon("check", 15) : String(lesson.number).padStart(2, "0")}</span><span><strong>${escapeHtml(lesson.title)}</strong><small>${lesson.estimated_minutes} dk · ${lesson.core_term_ids.length} temel terim</small></span>${icon("chevron", 17)}</a>`; }).join("")}</div>
      </div>
      <div class="panel review-panel"><div class="panel-heading"><div><p class="eyebrow">Hatırlama</p><h2>Tekrar kuyruğu</h2></div></div>${progress.reviewTermIds.length ? `<div class="review-count"><strong>${progress.reviewTermIds.length}</strong><span>terim seni bekliyor</span></div><a class="button button--secondary button--full" href="#/review">Tekrara başla ${icon("arrow", 16)}</a>` : `<div class="quiet-success">${icon("check")}<strong>Kuyruk temiz</strong><p>Zorlandığın terimleri detay sayfasından ekleyebilirsin.</p></div>`}</div>
    </section>
  </div>`;
}

function learnView() {
  const stats = getStats();
  const done = progress.completedLessonIds.length;
  return `<div class="page">
    ${pageHead("14 derslik temel yol", "Godot'u parça parça öğren.", "Ekosistemden oyun tasarımına uzanan düzenli bir öğrenme rotası.")}
    <section class="course-summary"><div><strong>${done} / ${stats.lessons}</strong><span>ders tamamlandı</span></div>${progressBar(percent(done, stats.lessons), "Kurs ilerlemesi")}<p>%${percent(done, stats.lessons)} tamamlandı</p></section>
    <div class="lesson-list">${getAllLessons().map((lesson) => lessonCard(lesson)).join("")}</div>
  </div>`;
}

function lessonCard(lesson) {
  const complete = progress.completedLessonIds.includes(lesson.id);
  const isCurrent = nextLesson()?.id === lesson.id;
  return `<article class="lesson-card ${complete ? "is-complete" : ""}">
    <div class="lesson-number">${complete ? icon("check", 18) : String(lesson.number).padStart(2, "0")}</div>
    <div class="lesson-card__body"><div class="eyebrow-row">${isCurrent && !complete ? badge("Sıradaki", "accent") : ""}${complete ? badge("Tamamlandı", "success") : ""}</div><h2>${escapeHtml(lesson.title)}</h2><p>${escapeHtml(lesson.description)}</p><div class="meta-row"><span>${icon("clock", 15)} ${lesson.estimated_minutes} dk</span><span>${lesson.core_term_ids.length} temel</span><span>${lesson.recognize_term_ids.length} tanıma</span></div></div>
    <span class="lesson-open">Dersi aç ${icon("arrow", 17)}</span><a class="stretched-link" href="#/learn/${lesson.id}" aria-label="${escapeHtml(lesson.title)} dersini aç"></a>
  </article>`;
}

function richGuideText(text) {
  const quickTerms = lessonOneGuide.quickTerms;
  const pattern = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let html = "";
  let cursor = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    html += escapeHtml(text.slice(cursor, match.index));
    const quickId = match[1];
    const label = match[2];
    html += `<button class="inline-term" type="button" data-action="inline-term" data-quick-id="${escapeHtml(quickId)}" aria-label="${escapeHtml(label)} terimini açıkla">${escapeHtml(label)}<span aria-hidden="true">?</span></button>`;
    cursor = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(cursor));
}

function guideQuickReferences(topic) {
  const references = new Map();
  const pattern = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  const serialized = JSON.stringify(topic);
  let match;
  while ((match = pattern.exec(serialized)) !== null) references.set(match[1], match[2]);
  return [...references].map(([id, label]) => ({ id, label }));
}

function guidedLessonLanding(lesson) {
  const guide = lessonOneGuide;
  const completedIds = new Set(progress.learnedTermIds);
  const completedCount = guide.order.filter((id) => completedIds.has(id)).length;
  const firstIncomplete = guide.order.find((id) => !completedIds.has(id)) ?? guide.order[0];
  const hasStarted = completedCount > 0;

  return `<div class="page guided-landing">
    <nav class="breadcrumbs" aria-label="İçerik yolu"><a href="#/learn">Öğren</a>${icon("chevron", 14)}<span>Ders 01</span></nav>
    <header class="guided-landing__hero">
      <div><p class="eyebrow">Guided ders · ${lesson.estimated_minutes} dakika</p><h1>${escapeHtml(lesson.title)}</h1><p>${escapeHtml(guide.intro)}</p><div class="guided-start-actions"><a class="button button--primary button--large" href="#/learn/${lesson.id}/${firstIncomplete}">${hasStarted ? "Kaldığın yerden devam et" : "Derse başla"} ${icon("arrow", 18)}</a>${hasStarted ? `<span>${completedCount} / ${guide.order.length} konu tamamlandı</span>` : `<span>Ön bilgi gerektirmez</span>`}</div></div>
      <aside class="guided-promise"><p class="eyebrow">Bu dersten sonra</p><p>${escapeHtml(lesson.goal)}</p><ul><li>${icon("check", 15)} Her konu tek ekranda</li><li>${icon("check", 15)} Bilinmeyen terimler sayfadan ayrılmadan açıklanır</li><li>${icon("check", 15)} Her adımda tek bir sonraki yön vardır</li></ul></aside>
    </header>
    <section class="guided-outline"><div class="section-heading"><p class="eyebrow">Ders rotası</p><h2>Adım adım büyük resmi kur</h2><p>Konuları sırayla çalış. Bir sonraki konuya geçtiğinde bulunduğun konu ilerlemene kaydedilir.</p></div><ol>${guide.order.map((id, index) => { const topic = guide.topics[id]; const done = completedIds.has(id); const active = id === firstIncomplete; return `<li class="${done ? "is-done" : ""} ${active ? "is-next" : ""}"><span class="outline-index">${done ? icon("check", 16) : String(index + 1).padStart(2, "0")}</span><div><small>${active ? "Sıradaki konu" : done ? "Tamamlandı" : `Konu ${index + 1}`}</small><strong>${escapeHtml(topic.shortTitle)}</strong></div>${active ? `<a href="#/learn/${lesson.id}/${id}" aria-label="${escapeHtml(topic.shortTitle)} konusuna başla">Başla ${icon("arrow", 16)}</a>` : ""}</li>`; }).join("")}</ol></section>
    <section class="recognize-preview"><div><p class="eyebrow">Ders boyunca</p><h2>“Bunu duyarsan tanı” kutuları</h2><p>On ek terimi uzun derslere çevirmeden, ihtiyaç duyduğun konunun yanında kısa anlamıyla göreceksin.</p></div><div class="recognize-chips">${lesson.recognize_term_ids.map((id) => { const term = getTermForContext(id, lesson.id); return `<span>${escapeHtml(term.name)}</span>`; }).join("")}</div></section>
  </div>`;
}

function guidedModel(model) {
  return `<div class="mental-model"><p>${richGuideText(model.intro)}</p><div class="model-flow">${model.steps.map((step, index) => `<div><span>${index + 1}</span><strong>${richGuideText(step)}</strong></div>${index < model.steps.length - 1 ? `<span class="flow-arrow" aria-hidden="true">↓</span>` : ""}`).join("")}</div><p class="model-conclusion">${richGuideText(model.conclusion)}</p></div>`;
}

function guidedExample(example) {
  if (!example) return "";
  const text = example.text ? `<p>${richGuideText(example.text)}</p>` : "";
  const flow = example.flow ? `<div class="example-flow">${example.flow.map((step, index) => `<span>${richGuideText(step)}</span>${index < example.flow.length - 1 ? `<b aria-hidden="true">→</b>` : ""}`).join("")}</div>` : "";
  const code = example.code ? codeExample({ language: "gdscript", code: example.code }) : "";
  const lines = example.lines?.length ? `<ol class="code-lines">${example.lines.map((line) => `<li>${richGuideText(line)}</li>`).join("")}</ol>` : "";
  return `${text}${flow}${code}${lines}`;
}

function guidedTopicView(lessonId, termId) {
  if (lessonId !== "lesson-01" || !lessonOneGuide.order.includes(termId)) return notFoundView("Bu guided konu bulunamadı.");
  const lesson = getLesson(lessonId);
  const guide = lessonOneGuide;
  const topic = guide.topics[termId];
  const term = getTermForContext(termId, lessonId);
  const index = guide.order.indexOf(termId);
  const previousId = guide.order[index - 1];
  const nextId = guide.order[index + 1];
  const learned = new Set(progress.learnedTermIds);
  const completedCount = guide.order.filter((id) => learned.has(id)).length;
  const prerequisiteTerms = (topic.prerequisites ?? []).map((id) => ({ id, topic: guide.topics[id], learned: learned.has(id) }));
  const recognizeTerms = (topic.recognize ?? []).map((id) => getTermForContext(id, lessonId)).filter(Boolean);
  const quickReferences = guideQuickReferences(topic);
  progress.setLastLesson(lessonId);

  return `<div class="page guided-topic-page">
    <nav class="guided-topnav"><a href="#/learn/${lessonId}">← Ders planı</a><div><span>Konu ${index + 1} / ${guide.order.length}</span>${progressBar(((index + 1) / guide.order.length) * 100, "Ders içindeki konum")}</div><span>${completedCount} tamamlandı</span></nav>
    <header class="guided-topic-hero"><div class="topic-number">${String(index + 1).padStart(2, "0")}</div><div><p class="eyebrow">Ders 01 · Temel kavram</p><h1>${escapeHtml(term.name)}</h1><p>${escapeHtml(term.short_definition)}</p></div>${learned.has(termId) ? `<span class="topic-complete-mark">${icon("check", 16)} Tamamlandı</span>` : ""}</header>
    ${prerequisiteTerms.length ? `<aside class="prerequisite-box"><span>${icon("bookmark", 18)}</span><div><strong>Bu konudan önce bilmen iyi olur</strong>${prerequisiteTerms.map((item) => `<a href="#/learn/${lessonId}/${item.id}">${item.learned ? icon("check", 14) : ""}${escapeHtml(item.topic.shortTitle)}</a>`).join("")}</div></aside>` : ""}
    <div class="guided-content">
      <section class="guided-section"><div class="guided-section__label"><span>01</span><p>30 saniyede</p></div><div class="guided-section__body guided-fast">${topic.fast.map((paragraph) => `<p>${richGuideText(paragraph)}</p>`).join("")}</div></section>
      <section class="guided-section"><div class="guided-section__label"><span>02</span><p>Basit zihinsel model</p></div><div class="guided-section__body">${guidedModel(topic.model)}</div></section>
      <section class="guided-section"><div class="guided-section__label"><span>03</span><p>Neden buna ihtiyacımız var?</p></div><div class="guided-section__body"><p>${richGuideText(topic.why)}</p></div></section>
      <section class="guided-section"><div class="guided-section__label"><span>04</span><p>Godot'ta nerede görürüm?</p></div><div class="guided-section__body"><ul class="godot-context-list">${topic.godot.map((item) => `<li>${icon("chevron", 15)}<span>${richGuideText(item)}</span></li>`).join("")}</ul></div></section>
      <section class="guided-section"><div class="guided-section__label"><span>05</span><p>Örnek</p></div><div class="guided-section__body guided-example">${guidedExample(topic.example)}</div></section>
      ${quickReferences.length ? `<section class="guided-section"><div class="guided-section__label"><span>06</span><p>Bilmediğim terimler</p></div><div class="guided-section__body"><div class="quick-reference-box"><p>Açıklamadaki altı çizili kelimelere istediğin anda dokunabilirsin. Sayfadan ayrılmadan kısa anlamını görürsün.</p><div>${quickReferences.map((item) => `<button class="inline-term inline-term--chip" type="button" data-action="inline-term" data-quick-id="${escapeHtml(item.id)}">${escapeHtml(item.label)}<span aria-hidden="true">?</span></button>`).join("")}</div></div></div></section>` : ""}
      ${recognizeTerms.length ? `<section class="guided-section guided-recognize"><div class="guided-section__label"><span>+</span><p>Bunu duyarsan tanı</p></div><div class="guided-section__body"><div class="recognize-callouts">${recognizeTerms.map((item) => `<article><span>Tanı</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.short_definition)}</p></article>`).join("")}</div></div></section>` : ""}
      <section class="guided-section"><div class="guided-section__label"><span>07</span><p>Yaygın hata</p></div><div class="guided-section__body"><div class="common-mistake"><span>!</span><p>${richGuideText(topic.mistake)}</p></div></div></section>
      <section class="guided-section guided-check"><div class="guided-section__label"><span>08</span><p>Kendini kontrol et</p></div><div class="guided-section__body"><div class="mini-check"><p class="eyebrow">Tek cümleyle yanıtla</p><h2>${escapeHtml(topic.check.question)}</h2><button class="button button--secondary" data-action="reveal-guided-answer">Cevabı göster</button><div class="mini-check__answer" hidden><p class="eyebrow">Kısa cevap</p><p>${escapeHtml(topic.check.answer)}</p></div></div></div></section>
    </div>
    <nav class="guided-navigation" aria-label="Ders konuları arasında gezinme">${previousId ? `<a class="button button--secondary" href="#/learn/${lessonId}/${previousId}">← Önceki Konu<span>${escapeHtml(guide.topics[previousId].shortTitle)}</span></a>` : `<span></span>`}${nextId ? `<button class="button button--primary" data-action="guided-next" data-term-id="${termId}" data-next-id="${nextId}"><span>${learned.has(termId) ? "Sonraki Konu" : "Konuyu tamamla"}</span>${escapeHtml(guide.topics[nextId].shortTitle)} →</button>` : `<button class="button button--primary guided-finish-button" data-action="guided-complete-lesson" data-term-id="${termId}" data-lesson-id="${lessonId}">${icon("check", 18)} Dersi Tamamla</button>`}</nav>
    <dialog class="quick-term-dialog" aria-labelledby="quick-term-title"><button class="icon-button" data-action="close-inline-term" aria-label="Açıklamayı kapat">${icon("close", 18)}</button><p class="eyebrow">Şimdilik bunu bilmen yeterli</p><h2 id="quick-term-title"></h2><p class="quick-term-definition"></p></dialog>
  </div>`;
}

function lessonView(id) {
  const lesson = getLesson(id);
  if (!lesson) return notFoundView("Bu ders bulunamadı.");
  if (id === "lesson-01") return guidedLessonLanding(lesson);
  const { core, recognize } = getLessonTerms(id);
  const complete = progress.completedLessonIds.includes(id);
  const learnedCount = core.filter((term) => progress.learnedTermIds.includes(term.id)).length;
  const prev = getLesson(`lesson-${String(lesson.number - 1).padStart(2, "0")}`);
  const next = getLesson(`lesson-${String(lesson.number + 1).padStart(2, "0")}`);
  progress.setLastLesson(id);
  return `<div class="page lesson-detail-page">
    <nav class="breadcrumbs" aria-label="İçerik yolu"><a href="#/learn">Öğren</a>${icon("chevron", 14)}<span>Ders ${String(lesson.number).padStart(2, "0")}</span></nav>
    <header class="lesson-hero"><div><p class="eyebrow">Ders ${String(lesson.number).padStart(2, "0")} · ${lesson.estimated_minutes} dakika</p><h1>${escapeHtml(lesson.title)}</h1><p>${escapeHtml(lesson.description)}</p></div><div class="lesson-goal"><span>${icon("bookmark", 19)}</span><div><strong>Bu dersteki hedefin</strong><p>${escapeHtml(lesson.goal)}</p></div></div></header>
    <section class="lesson-progress"><div><strong>${learnedCount} / ${core.length}</strong><span>temel terim öğrenildi</span></div>${progressBar(percent(learnedCount, core.length), "Ders terimleri")}</section>
    <section class="lesson-section"><div class="section-heading"><p class="eyebrow">Aktif öğrenme</p><h2>Temel terimler</h2><p>Tanımın yanında bağlamı ve hatırlama ipucunu da çalış.</p></div><div class="term-grid">${core.map((term) => termCard(term)).join("")}</div></section>
    <section class="lesson-section recognize-section"><div class="section-heading"><p class="eyebrow">Hızlı tanıma</p><h2>Duyunca yabancı gelmesin</h2><p>Şimdilik bu terimleri kategorisi ve kısa anlamıyla tanıman yeterli.</p></div><div class="recognize-list">${recognize.map((term) => `<a href="#/terms/${term.id}"><strong>${escapeHtml(term.name)}</strong><span>${escapeHtml(term.short_definition)}</span>${icon("chevron", 16)}</a>`).join("")}</div></section>
    <section class="lesson-finish"><div><span class="finish-icon">${icon(complete ? "check" : "book")}</span><div><h2>${complete ? "Bu dersi tamamladın" : "Dersi bitirdin mi?"}</h2><p>${complete ? "İstersen terimleri yeniden gözden geçirebilirsin." : "Ders durumu ile tek tek öğrenilen terimler birbirinden bağımsız kaydedilir."}</p></div></div><button class="button ${complete ? "button--secondary" : "button--primary"}" data-action="complete-lesson" data-lesson-id="${lesson.id}">${complete ? "Tamamlamayı geri al" : "Dersi tamamla"}</button></section>
    <nav class="lesson-pagination">${prev ? `<a href="#/learn/${prev.id}"><small>← Önceki ders</small><strong>${escapeHtml(prev.title)}</strong></a>` : "<span></span>"}${next ? `<a class="next" href="#/learn/${next.id}"><small>Sonraki ders →</small><strong>${escapeHtml(next.title)}</strong></a>` : `<a class="next" href="#/quiz"><small>Sırada</small><strong>Quizlere geç →</strong></a>`}</nav>
  </div>`;
}

function glossaryView(route) {
  const query = route.params.get("q") ?? "";
  const tier = route.params.get("tier") ?? "all";
  const category = route.params.get("category") ?? "all";
  const letter = route.params.get("letter") ?? "all";
  const terms = filterTerms({ query, tier, category, letter });
  const categories = getDatabase().categories;
  const letters = [...new Set(getAllTerms().map((term) => term.name.replace(/^[^A-Za-zÇĞİÖŞÜçğıöşü]/, "#").slice(0, 1).toLocaleUpperCase("tr-TR")))].sort((a, b) => a.localeCompare(b, "tr"));
  return `<div class="page glossary-page">
    ${pageHead("Hızlı referans", "Terimler A–Z", `${getAllTerms().length} Godot, GDScript ve oyun geliştirme terimi.`)}
    <section class="filter-panel" aria-label="Terim filtreleri"><div class="inline-search">${icon("search", 18)}<input id="glossary-search" type="search" value="${escapeHtml(query)}" placeholder="Terimlerde ara…" aria-label="Terimlerde ara"></div><select id="tier-filter" aria-label="Seviye filtresi"><option value="all">Tüm seviyeler</option><option value="core" ${tier === "core" ? "selected" : ""}>Temel</option><option value="recognize" ${tier === "recognize" ? "selected" : ""}>Tanı</option></select><select id="category-filter" aria-label="Kategori filtresi"><option value="all">Tüm kategoriler</option>${categories.map((item) => `<option value="${item.id}" ${category === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}</select></section>
    <div class="alphabet-filter" aria-label="Harf filtresi"><button data-action="filter-letter" data-letter="all" class="${letter === "all" ? "is-active" : ""}">Tümü</button>${letters.map((item) => `<button data-action="filter-letter" data-letter="${item}" class="${letter === item ? "is-active" : ""}">${escapeHtml(item)}</button>`).join("")}</div>
    <div class="results-bar"><strong>${terms.length} terim</strong><span>${query || tier !== "all" || category !== "all" || letter !== "all" ? "Filtrelenmiş sonuçlar" : "Alfabetik sıralama"}</span></div>
    ${terms.length ? `<div class="glossary-list">${terms.map((term) => termCard(term, { compact: true })).join("")}</div>` : emptyState("Sonuç bulunamadı", COPY.emptySearch, "search", `<button class="button button--secondary" data-action="clear-filters">Filtreleri temizle</button>`)}
  </div>`;
}

function termView(id) {
  const term = getTermById(id);
  if (!term) return notFoundView("Bu terim bulunamadı.");
  const termContexts = getTermContexts(id);
  const favorite = progress.favoriteTermIds.includes(id);
  const review = progress.reviewTermIds.includes(id);
  const learned = progress.learnedTermIds.includes(id);
  return `<div class="page term-detail-page">
    <nav class="breadcrumbs" aria-label="İçerik yolu"><a href="#/terms">Terimler</a>${icon("chevron", 14)}<span>${escapeHtml(term.name)}</span></nav>
    <header class="term-hero"><div class="eyebrow-row">${badge(term.tier === "core" ? "Temel terim" : "Tanıma terimi", term.tier)}${term.category_names.map((name) => badge(name)).join("")}</div><div class="term-title-row"><div><h1>${escapeHtml(term.name)}</h1>${term.aliases?.length ? `<p class="aliases">Diğer adları: ${term.aliases.map(escapeHtml).join(", ")}</p>` : ""}</div><div class="term-actions"><button class="button button--icon-text ${favorite ? "is-active" : ""}" data-action="favorite" data-term-id="${term.id}" aria-pressed="${favorite}">${icon("star", 18)}<span>${favorite ? "Favoride" : "Favori"}</span></button><button class="button button--icon-text ${review ? "is-active" : ""}" data-action="review" data-term-id="${term.id}" aria-pressed="${review}">${icon("repeat", 18)}<span>${review ? "Tekrarda" : "Tekrar et"}</span></button></div></div></header>
    <article class="definition-box"><p class="eyebrow">Tanım</p><p>${escapeHtml(term.definition)}</p></article>
    ${termContexts.length ? `<section class="context-distinction"><div class="section-heading"><p class="eyebrow">Bağlam ayrımı</p><h2>Aynı kelime, farklı kavramlar</h2><p>Bu terimin anlamını duyduğun ders veya konuşma belirler.</p></div><div>${termContexts.map((context) => { const lesson = getLesson(context.lessonId); return `<article><span>Ders ${String(lesson.number).padStart(2, "0")}</span><h3>${escapeHtml(context.name)}</h3><p>${escapeHtml(context.definition)}</p><a href="#/learn/${lesson.id}">${escapeHtml(lesson.title)} ${icon("arrow", 15)}</a></article>`; }).join("")}</div></section>` : ""}
    <div class="term-content-grid"><div>
      ${term.where_heard ? `<section class="detail-section context-block"><div class="section-heading"><p class="eyebrow">Bağlam</p><h2>Nerede duyarsın?</h2></div><blockquote>“${escapeHtml(term.where_heard)}”</blockquote></section>` : ""}
      ${term.memory_hook ? `<section class="detail-section memory-hook"><span class="memory-hook__icon">✦</span><div><p class="eyebrow">Akılda kalsın</p><p>${escapeHtml(term.memory_hook)}</p></div></section>` : ""}
      ${term.code_example ? `<section class="detail-section"><div class="section-heading"><p class="eyebrow">GDScript</p><h2>Kod örneği</h2></div>${codeExample(term.code_example)}</section>` : ""}
      ${relatedTerms(term)}
    </div><aside class="term-side"><div class="side-card"><p class="eyebrow">Çalışma durumu</p><button class="learn-toggle ${learned ? "is-learned" : ""}" data-action="learn" data-term-id="${term.id}"><span>${learned ? icon("check") : icon("book")}</span><span><strong>${learned ? "Öğrenildi" : "Öğrendim olarak işaretle"}</strong><small>${learned ? "İlerlemene eklendi" : "İlerlemene kaydet"}</small></span></button></div><div class="side-card"><p class="eyebrow">Bu içerikte</p><dl><div><dt>Seviye</dt><dd>${term.tier === "core" ? "Temel" : "Tanı"}</dd></div><div><dt>Ders</dt><dd>${term.lesson_ids.map((lessonId) => { const lesson = getLesson(lessonId); return lesson ? `<a href="#/learn/${lesson.id}">${String(lesson.number).padStart(2, "0")}</a>` : "—"; }).join(", ")}</dd></div><div><dt>İlişki</dt><dd>${term.related_term_ids.length} terim</dd></div></dl></div></aside></div>
    ${coreNavigation(term)}
  </div>`;
}

function quizView(route) {
  const selectedLesson = route.params.get("lesson") ?? "all";
  const quizzes = selectedLesson === "all" ? getDatabase().quizzes : getDatabase().quizzes.filter((quiz) => quiz.lesson_id === selectedLesson);
  const questions = quizzes.flatMap((quiz) => quiz.questions);
  const results = progress.quizResults;
  const answered = questions.filter((question) => results[question.id]).length;
  return `<div class="page quiz-page">
    ${pageHead("Açık hatırlama", "Kendini test et.", "Önce cevabı zihninden kur, sonra kaynak cevabı aç ve kendini değerlendir.")}
    <section class="quiz-toolbar"><div><strong>${answered} / ${questions.length}</strong><span>değerlendirildi</span></div>${progressBar(percent(answered, questions.length), "Quiz ilerlemesi")}<select id="quiz-lesson-filter" aria-label="Quiz dersi"><option value="all">Tüm dersler</option>${getAllLessons().map((lesson) => `<option value="${lesson.id}" ${selectedLesson === lesson.id ? "selected" : ""}>${String(lesson.number).padStart(2, "0")} · ${escapeHtml(lesson.title)}</option>`).join("")}</select></section>
    <div class="quiz-list">${quizzes.map((quiz) => { const lesson = getLesson(quiz.lesson_id); return `<section class="quiz-group"><div class="quiz-group__head"><span>Ders ${String(lesson.number).padStart(2, "0")}</span><h2>${escapeHtml(lesson.title)}</h2></div>${quiz.questions.map((question, i) => quizCard(question, i, results[question.id])).join("")}</section>`; }).join("")}</div>
  </div>`;
}

function quizCard(question, index, result) {
  return `<article class="quiz-card" data-question-id="${question.id}"><div class="quiz-card__count">${String(index + 1).padStart(2, "0")}</div><div class="quiz-card__body"><p class="eyebrow">Kendi cümlenle yanıtla</p><h3>${escapeHtml(question.question)}</h3><button class="button button--secondary reveal-answer" data-action="reveal-answer">Cevabı göster</button><div class="quiz-answer" hidden><p class="eyebrow">Kaynak cevap</p><p>${escapeHtml(question.answer)}</p><div class="self-rating"><span>Nasıl geçti?</span><button data-action="rate-quiz" data-question-id="${question.id}" data-status="correct" class="${result?.status === "correct" ? "is-selected" : ""}">${icon("check", 16)} Hatırladım</button><button data-action="rate-quiz" data-question-id="${question.id}" data-status="review" class="${result?.status === "review" ? "is-selected" : ""}">${icon("repeat", 16)} Tekrar et</button></div></div></div></article>`;
}

function reviewView() {
  const terms = progress.reviewTermIds.map(getTermById).filter(Boolean);
  const resultMap = progress.quizResults;
  const quizItems = getDatabase().quizzes.flatMap((quiz) => quiz.questions).filter((q) => resultMap[q.id]?.status === "review");
  return `<div class="page">
    ${pageHead("Odaklı tekrar", "Zorlandıklarına geri dön.", "İşaretlediğin terimler ve yeniden çözmek istediğin sorular burada toplanır.")}
    ${terms.length ? `<section class="review-section"><div class="section-heading"><p class="eyebrow">Terimler</p><h2>${terms.length} terim tekrar listende</h2></div><div class="term-grid">${terms.map((term) => termCard(term)).join("")}</div></section>` : emptyState("Tekrar listesi boş", COPY.noReview, "repeat", `<a class="button button--secondary" href="#/terms">Terimlere göz at</a>`)}
    ${quizItems.length ? `<section class="review-section"><div class="section-heading"><p class="eyebrow">Sorular</p><h2>Yeniden düşün</h2></div><div class="quiz-list">${quizItems.map((question, index) => quizCard(question, index, resultMap[question.id])).join("")}</div></section>` : ""}
  </div>`;
}

function favoritesView() {
  const terms = progress.favoriteTermIds.map(getTermById).filter(Boolean);
  return `<div class="page">${pageHead("Kişisel koleksiyon", "Favori terimlerin", "Sık döndüğün kavramları tek yerde tut.")}${terms.length ? `<div class="term-grid">${terms.map((term) => termCard(term)).join("")}</div>` : emptyState("Koleksiyonun boş", COPY.noFavorites, "star", `<a class="button button--secondary" href="#/terms">Terimleri keşfet</a>`)}</div>`;
}

function notFoundView(message = "Aradığın sayfa burada değil.") {
  return `<div class="page">${emptyState("Sayfa bulunamadı", message, "search", `<a class="button button--primary" href="#/dashboard">Dashboard'a dön</a>`)}</div>`;
}

function renderView(route) {
  switch (route.name) {
    case "dashboard": return dashboardView();
    case "learn": return learnView();
    case "lesson": return lessonView(route.param);
    case "lesson-topic": return guidedTopicView(route.param, route.subparam);
    case "terms": return glossaryView(route);
    case "term": return termView(route.param);
    case "quiz": return quizView(route);
    case "review": return reviewView();
    case "favorites": return favoritesView();
    default: return notFoundView();
  }
}

namespace.views = {
  dashboardView,
  learnView,
  lessonView,
  guidedTopicView,
  glossaryView,
  termView,
  quizView,
  reviewView,
  favoritesView,
  notFoundView,
  renderView,
};
})(window.GodotApp = window.GodotApp || {});
