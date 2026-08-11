(function initViews(namespace) {
"use strict";

const {
  filterTerms,
  getAllLessons,
  getAllTerms,
  getDatabase,
  getCurriculumSections,
  getLesson,
  getLessonTerms,
  getLearningPath,
  getNextCourseLesson,
  getQuizByLesson,
  getStats,
  getTermById,
  getTermForContext,
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
const lessonGuides = window.GODOT_LESSON_GUIDES || {};

const percent = (value, total) => (total ? Math.round((value / total) * 100) : 0);
const lessonTitle = (lesson) => lesson.displayTitle ?? lesson.title;
const lessonDescription = (lesson) => lesson.displayDescription ?? lesson.description;
const pageHead = (eyebrow, title, description, actions = "") => `<header class="page-head"><div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div>${actions}</header>`;

function nextLesson() {
  return getNextCourseLesson(progress.completedLessonIds);
}

function dashboardView() {
  const stats = getStats();
  const first50 = getLearningPath("first-50");
  const learned = new Set(progress.learnedTermIds);
  const first50Learned = first50.term_ids.filter((id) => learned.has(id)).length;
  const lessonProgress = percent(progress.completedLessonIds.length, stats.lessons);
  const coreLearned = getAllTerms().filter((term) => term.tier === "core" && learned.has(term.id)).length;
  const current = nextLesson();
  const currentTerms = current ? getLessonTerms(current.id) : null;
  const reviewCount = progress.reviewCount;
  const pageAction = current ? `<a class="button button--primary" href="#/learn/${current.id}">${icon("book", 18)} ${escapeHtml(COPY.actions.continueCourse)}</a>` : "";
  const courseHero = current
    ? `<article class="hero-progress">
        <div class="hero-progress__copy"><span class="overline">${escapeHtml(COPY.status.nextLesson)} · ${escapeHtml(COPY.status.lessonNumber(current.number))}</span><h2>${escapeHtml(lessonTitle(current))}</h2><p>${escapeHtml(lessonDescription(current))}</p><div class="meta-row"><span>${icon("clock", 16)} ${escapeHtml(COPY.status.minutesShort(current.estimated_minutes))}</span><span>${escapeHtml(COPY.status.coreConcepts(currentTerms.core.length))}</span></div></div>
        <div class="lesson-orbit" aria-hidden="true"><span>${current.number}</span><small>/ ${stats.lessons}</small></div>
        <a class="stretched-link" href="#/learn/${current.id}" aria-label="${escapeHtml(COPY.aria.openLesson(lessonTitle(current)))}"></a>
      </article>`
    : `<article class="hero-progress hero-progress--complete">
        <div class="hero-progress__copy"><span class="overline">${escapeHtml(COPY.dashboard.completeEyebrow)}</span><h2>${escapeHtml(COPY.dashboard.completeTitle)}</h2><p>${escapeHtml(COPY.dashboard.completeDescription)}</p><div class="dashboard-complete-actions"><a class="button button--primary" href="#/review">${escapeHtml(COPY.actions.goToReview)}</a><a class="button button--secondary" href="#/terms">${escapeHtml(COPY.actions.browseGlossary)}</a></div></div>
        <div class="lesson-orbit" aria-hidden="true">${icon("check", 32)}</div>
      </article>`;

  return `<div class="page dashboard-page">
    ${pageHead(COPY.dashboard.eyebrow, COPY.dashboard.title, COPY.productPositioning, pageAction)}
    <section class="dashboard-grid">
      ${courseHero}
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon">${icon("book")}</span><span>${lessonProgress}%</span></div><h3>${escapeHtml(COPY.dashboard.lessonProgress)}</h3><p>${escapeHtml(COPY.status.lessonsCompleted(progress.completedLessonIds.length, stats.lessons))}</p>${progressBar(lessonProgress, COPY.dashboard.lessonProgress)}</article>
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon metric-icon--violet">${icon("check")}</span><span>${percent(coreLearned, stats.coreTerms)}%</span></div><h3>${escapeHtml(COPY.dashboard.coreTerms)}</h3><p>${escapeHtml(COPY.status.termsLearned(coreLearned, stats.coreTerms))}</p>${progressBar(percent(coreLearned, stats.coreTerms), COPY.dashboard.coreTerms)}</article>
      <article class="progress-card"><div class="progress-card__head"><span class="metric-icon metric-icon--amber">50</span><span>${percent(first50Learned, first50.term_ids.length)}%</span></div><h3>${escapeHtml(COPY.dashboard.first50)}</h3><p>${escapeHtml(COPY.status.termsLearned(first50Learned, first50.term_ids.length))}</p>${progressBar(percent(first50Learned, first50.term_ids.length), COPY.dashboard.first50)}</article>
    </section>
    <section class="dashboard-lower">
      <div class="panel recent-panel"><div class="panel-heading"><div><p class="eyebrow">${escapeHtml(COPY.dashboard.roadmap)}</p><h2>${escapeHtml(COPY.dashboard.overview)}</h2></div><a href="#/learn">${escapeHtml(COPY.dashboard.viewAll)} ${icon("arrow", 16)}</a></div>
        <div class="mini-lessons">${getAllLessons().slice(0, 5).map((lesson) => { const done = progress.completedLessonIds.includes(lesson.id); return `<a href="#/learn/${lesson.id}"><span class="lesson-state ${done ? "is-done" : ""}">${done ? icon("check", 15) : String(lesson.number).padStart(2, "0")}</span><span><strong>${escapeHtml(lessonTitle(lesson))}</strong><small>${escapeHtml(COPY.status.minutesShort(lesson.estimated_minutes))} · ${escapeHtml(COPY.status.coreTerms(lesson.core_term_ids.length))}</small></span>${icon("chevron", 17)}</a>`; }).join("")}</div>
      </div>
      <div class="panel review-panel"><div class="panel-heading"><div><p class="eyebrow">${escapeHtml(COPY.dashboard.recall)}</p><h2>${escapeHtml(COPY.dashboard.reviewQueue)}</h2></div></div>${reviewCount ? `<div class="review-count"><strong>${reviewCount}</strong><span>${escapeHtml(COPY.dashboard.waitingReview)}</span></div><a class="button button--secondary button--full" href="#/review">${escapeHtml(COPY.dashboard.startReview)} ${icon("arrow", 16)}</a>` : `<div class="quiet-success">${icon("check")}<strong>${escapeHtml(COPY.dashboard.queueClean)}</strong><p>${escapeHtml(COPY.dashboard.queueCleanDescription)}</p></div>`}</div>
    </section>
  </div>`;
}

function learnView() {
  const stats = getStats();
  const done = progress.completedLessonIds.length;
  const lessons = getAllLessons();
  return `<div class="page">
    ${pageHead(COPY.learn.eyebrow, COPY.learn.title, `${COPY.productPositioning} ${COPY.learn.description}`)}
    <section class="course-summary"><div><strong>${done} / ${stats.lessons}</strong><span>${escapeHtml(COPY.status.completed)}</span></div>${progressBar(percent(done, stats.lessons), COPY.learn.courseProgress)}<p>${escapeHtml(COPY.status.percentCompleted(percent(done, stats.lessons)))}</p></section>
    <div class="course-outline">${getCurriculumSections().map((section) => {
      const sectionLessons = lessons.filter((lesson) => lesson.section === section.id);
      return `<section class="course-section" aria-labelledby="section-${section.id}"><div class="course-section__heading"><span>${String(section.order).padStart(2, "0")}</span><h2 id="section-${section.id}">${escapeHtml(section.title)}</h2></div><div class="lesson-list">${sectionLessons.map((lesson) => lessonCard(lesson)).join("")}</div></section>`;
    }).join("")}</div>
  </div>`;
}

function lessonCard(lesson) {
  const complete = progress.completedLessonIds.includes(lesson.id);
  const isCurrent = nextLesson()?.id === lesson.id;
  const learnedCount = lesson.core_term_ids.filter((id) => progress.learnedTermIds.includes(id)).length;
  const allTopicsDone = learnedCount === lesson.core_term_ids.length;
  const actionLabel = complete ? COPY.actions.repeatLesson : allTopicsDone ? COPY.actions.finishLesson : learnedCount ? COPY.actions.continue : COPY.actions.start;
  return `<article class="lesson-card ${complete ? "is-complete" : ""}">
    <div class="lesson-number">${complete ? icon("check", 18) : String(lesson.number).padStart(2, "0")}</div>
    <div class="lesson-card__body"><div class="eyebrow-row">${isCurrent && !complete ? badge(COPY.status.nextLesson, "accent") : ""}${complete ? badge(COPY.status.completed, "success") : ""}</div><h3>${escapeHtml(lessonTitle(lesson))}</h3><p>${escapeHtml(lessonDescription(lesson))}</p><small class="technical-topics">${escapeHtml((lesson.technicalTopics ?? []).join(" · "))}</small><div class="lesson-card__progress"><span>${learnedCount} / ${escapeHtml(COPY.status.topics(lesson.core_term_ids.length))}</span>${progressBar(percent(learnedCount, lesson.core_term_ids.length), COPY.status.lessonProgressLabel(lessonTitle(lesson)))}</div></div>
    <span class="lesson-open">${escapeHtml(actionLabel)} ${icon("arrow", 17)}</span><a class="stretched-link" href="#/learn/${lesson.id}" aria-label="${escapeHtml(lessonTitle(lesson))}: ${escapeHtml(actionLabel)}"></a>
  </article>`;
}

function richGuideText(text, quickTerms = {}) {
  const pattern = /\[\[([^|\]]+)\|([^\]]+)\]\]|`([^`\r\n]+)`/g;
  let html = "";
  let cursor = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    html += escapeHtml(text.slice(cursor, match.index));
    if (match[3] !== undefined) {
      html += `<code class="inline-code">${escapeHtml(match[3])}</code>`;
    } else {
      const quickId = match[1];
      const inlineLabel = match[2];
      const quickTerm = quickTerms[quickId];
      html += quickTerm
        ? `<button class="inline-term" type="button" data-action="inline-term" data-quick-id="${escapeHtml(quickId)}" aria-label="${escapeHtml(COPY.aria.explainConcept(quickTerm.canonicalTitle))}">${escapeHtml(inlineLabel)}<span aria-hidden="true">?</span></button>`
        : escapeHtml(inlineLabel);
    }
    cursor = match.index + match[0].length;
  }
  return html + escapeHtml(text.slice(cursor));
}

function getTopicQuickTerms(guide, topic) {
  const selected = {};
  [...new Set(topic.quickTermIds ?? [])].forEach((id) => {
    if (guide.quickTerms?.[id]) selected[id] = guide.quickTerms[id];
  });
  return selected;
}

function guideQuickReferences(quickTerms) {
  return Object.entries(quickTerms).map(([id, term]) => ({ id, canonicalTitle: term.canonicalTitle }));
}

function guidedLessonLanding(lesson) {
  const guide = lessonGuides[lesson.id];
  const completedIds = new Set(progress.learnedTermIds);
  const completedCount = guide.order.filter((id) => completedIds.has(id)).length;
  const firstIncomplete = guide.order.find((id) => !completedIds.has(id));
  const hasStarted = completedCount > 0;
  const allTopicsDone = completedCount === guide.order.length;
  const lessonComplete = progress.completedLessonIds.includes(lesson.id);
  const startTarget = lessonComplete || !hasStarted ? guide.order[0] : firstIncomplete;
  const ctaLabel = lessonComplete ? COPY.actions.repeatLesson : allTopicsDone ? COPY.actions.finishLesson : hasStarted ? COPY.actions.continueLesson : COPY.actions.startLesson;
  const cta = allTopicsDone && !lessonComplete
    ? `<button class="button button--primary button--large" data-action="guided-complete-from-landing" data-lesson-id="${lesson.id}">${escapeHtml(ctaLabel)} ${icon("arrow", 18)}</button>`
    : `<a class="button button--primary button--large" href="#/learn/${lesson.id}/${startTarget}">${escapeHtml(ctaLabel)} ${icon("arrow", 18)}</a>`;

  return `<div class="page guided-landing">
    <nav class="breadcrumbs" aria-label="${escapeHtml(COPY.aria.contentPath)}"><a href="#/learn">${escapeHtml(COPY.nav.learn)}</a>${icon("chevron", 14)}<span>${escapeHtml(COPY.status.lessonNumber(lesson.number))}</span></nav>
    <header class="guided-landing__hero">
      <div><p class="eyebrow">${escapeHtml(COPY.guided.lesson)} · ${escapeHtml(COPY.status.minutesLong(lesson.estimated_minutes))}</p><h1>${escapeHtml(lessonTitle(lesson))}</h1><p>${escapeHtml(lessonDescription(lesson))}</p><div class="guided-start-actions">${cta}${hasStarted ? `<span>${escapeHtml(COPY.status.topicsCompleted(completedCount, guide.order.length))}</span>` : `<span>${escapeHtml(COPY.status.noPrerequisite)}</span>`}</div></div>
      <aside class="guided-promise"><p class="eyebrow">${escapeHtml(COPY.guided.afterLesson)}</p><p>${escapeHtml(lesson.goal)}</p><ul><li>${icon("check", 15)} ${escapeHtml(COPY.guided.oneScreen)}</li><li>${icon("check", 15)} ${escapeHtml(COPY.guided.inlineHelp)}</li><li>${icon("check", 15)} ${escapeHtml(COPY.guided.oneDirection)}</li></ul></aside>
    </header>
    <section class="guided-outline"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.guided.route)}</p><h2>${escapeHtml(COPY.guided.routeTitle)}</h2><p>${escapeHtml(COPY.guided.routeDescription)}</p></div><ol>${guide.order.map((id, index) => { const topic = guide.topics[id]; const done = completedIds.has(id); const active = id === firstIncomplete; return `<li class="${done ? "is-done" : ""} ${active ? "is-next" : ""}"><span class="outline-index">${done ? icon("check", 16) : String(index + 1).padStart(2, "0")}</span><div><small>${escapeHtml(active ? COPY.status.nextTopic : done ? COPY.status.completed : `${COPY.routeTitles.topic} ${index + 1}`)}</small><strong>${escapeHtml(topic.shortTitle)}</strong></div>${active ? `<a href="#/learn/${lesson.id}/${id}" aria-label="${escapeHtml(COPY.aria.startTopic(topic.shortTitle))}">${escapeHtml(COPY.actions.start)} ${icon("arrow", 16)}</a>` : ""}</li>`; }).join("")}</ol></section>
    <section class="recognize-preview"><div><p class="eyebrow">${escapeHtml(COPY.guided.recognizeEyebrow)}</p><h2>${escapeHtml(COPY.guided.recognizeTitle)}</h2><p>${escapeHtml(COPY.guided.recognizeDescription(lesson.recognize_term_ids.length))}</p></div><div class="recognize-chips">${lesson.recognize_term_ids.map((id) => { const term = getTermForContext(id, lesson.id); return `<span>${escapeHtml(term.name)}</span>`; }).join("")}</div></section>
  </div>`;
}

function guidedModel(model, quickTerms) {
  return `<div class="mental-model"><p>${richGuideText(model.intro, quickTerms)}</p><div class="model-flow">${model.steps.map((step, index) => `<div><span>${index + 1}</span><strong>${richGuideText(step, quickTerms)}</strong></div>${index < model.steps.length - 1 ? `<span class="flow-arrow" aria-hidden="true">↓</span>` : ""}`).join("")}</div><p class="model-conclusion">${richGuideText(model.conclusion, quickTerms)}</p></div>`;
}

function guidedExample(example, quickTerms) {
  if (!example) return "";
  const text = example.text ? `<p>${richGuideText(example.text, quickTerms)}</p>` : "";
  const flow = example.flow ? `<div class="example-flow">${example.flow.map((step, index) => `<span>${richGuideText(step, quickTerms)}</span>${index < example.flow.length - 1 ? `<b aria-hidden="true">→</b>` : ""}`).join("")}</div>` : "";
  const code = example.code ? codeExample({ language: "gdscript", code: example.code }) : "";
  const lines = example.lines?.length ? `<ol class="code-lines">${example.lines.map((line) => `<li>${richGuideText(line, quickTerms)}</li>`).join("")}</ol>` : "";
  return `${text}${flow}${code}${lines}`;
}

function guidedRecognizeCards(entries, lessonId) {
  return `<div class="recognize-callouts">${entries.map((entry) => {
    const config = typeof entry === "string" ? { id: entry } : entry;
    const term = getTermForContext(config.id, lessonId);
    if (!term) return "";
    const model = config.model?.length ? `<div class="recognize-model">${config.model.map((step, index) => `<span>${richGuideText(step)}</span>${index < config.model.length - 1 ? `<b aria-hidden="true">↓</b>` : ""}`).join("")}</div>` : "";
    return `<article><span>${escapeHtml(COPY.guided.cardTag)}</span><h3>${escapeHtml(term.name)}</h3><dl><div><dt>${escapeHtml(COPY.guided.cardBrief)}</dt><dd>${richGuideText(config.brief ?? term.short_definition)}</dd></div>${config.connection ? `<div><dt>${escapeHtml(COPY.guided.cardConnection)}</dt><dd>${richGuideText(config.connection)}</dd></div>` : ""}${config.whyHere ? `<div><dt>${escapeHtml(COPY.guided.cardWhy)}</dt><dd>${richGuideText(config.whyHere)}</dd></div>` : ""}</dl>${model}${config.example ? `<p class="recognize-example"><strong>${escapeHtml(COPY.guided.example)}:</strong> ${richGuideText(config.example)}</p>` : ""}${config.distinction ? `<p class="recognize-distinction"><strong>${escapeHtml(COPY.guided.cardDistinction)}:</strong> ${richGuideText(config.distinction)}</p>` : ""}</article>`;
  }).join("")}</div>`;
}

function guidedBridge(bridge) {
  if (!bridge) return "";
  return `<section class="guided-bridge"><div><p class="eyebrow">${escapeHtml(COPY.guided.bridge)}</p><h2>${escapeHtml(bridge.title)}</h2>${bridge.steps?.length ? `<div class="bridge-flow">${bridge.steps.map((step, index) => `<span>${richGuideText(step)}</span>${index < bridge.steps.length - 1 ? `<b aria-hidden="true">↓</b>` : ""}`).join("")}</div>` : ""}<p>${richGuideText(bridge.text)}</p></div></section>`;
}

function guidedLessonSummary(summary) {
  if (!summary) return "";
  return `<section class="lesson-relation-summary"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.guided.summary)}</p><h2>${richGuideText(summary.title ?? COPY.guided.defaultSummaryTitle)}</h2><p>${richGuideText(summary.intro ?? "")}</p></div><div class="summary-groups">${summary.groups.map((group) => `<article><h3>${richGuideText(group.title)}</h3><div>${group.steps.map((step, index) => `<span>${richGuideText(step)}</span>${index < group.steps.length - 1 ? `<b aria-hidden="true">↓</b>` : ""}`).join("")}</div>${group.note ? `<p>${richGuideText(group.note)}</p>` : ""}</article>`).join("")}</div>${summary.closing ? `<p class="summary-closing">${richGuideText(summary.closing)}</p>` : ""}</section>`;
}

function guidedTopicView(lessonId, termId) {
  const guide = lessonGuides[lessonId];
  if (!guide || !guide.order.includes(termId)) return notFoundView(COPY.errors.notFoundDescription);
  const lesson = getLesson(lessonId);
  const topic = guide.topics[termId];
  const term = getTermForContext(termId, lessonId);
  const index = guide.order.indexOf(termId);
  const previousId = guide.order[index - 1];
  const nextId = guide.order[index + 1];
  const learned = new Set(progress.learnedTermIds);
  const completedCount = guide.order.filter((id) => learned.has(id)).length;
  const prerequisiteTerms = (topic.prerequisites ?? []).map((id) => ({ id, topic: guide.topics[id], learned: learned.has(id) }));
  const recognizeEntries = topic.recognize ?? [];
  const quickTerms = getTopicQuickTerms(guide, topic);
  const quickReferences = guideQuickReferences(quickTerms);
  progress.setLastLesson(lessonId);

  return `<div class="page guided-topic-page">
    <nav class="guided-topnav"><a href="#/learn/${lessonId}">← ${escapeHtml(COPY.guided.lessonPlan)}</a><div><span>${escapeHtml(COPY.status.topicPosition(index + 1, guide.order.length))}</span>${progressBar(((index + 1) / guide.order.length) * 100, COPY.learn.courseProgress)}</div><span>${completedCount} ${escapeHtml(COPY.status.completedLower)}</span></nav>
    <header class="guided-topic-hero"><div class="topic-number">${String(index + 1).padStart(2, "0")}</div><div><p class="eyebrow">${escapeHtml(COPY.status.lessonNumber(lesson.number))} · ${escapeHtml(COPY.status.coreConcept)}</p><h1>${escapeHtml(term.name)}</h1><p>${escapeHtml(term.short_definition)}</p></div>${learned.has(termId) ? `<span class="topic-complete-mark">${icon("check", 16)} ${escapeHtml(COPY.status.completed)}</span>` : ""}</header>
    ${prerequisiteTerms.length ? `<aside class="prerequisite-box"><span>${icon("bookmark", 18)}</span><div><strong>${escapeHtml(COPY.guided.prerequisite)}</strong>${prerequisiteTerms.map((item) => `<a href="#/learn/${lessonId}/${item.id}">${item.learned ? icon("check", 14) : ""}${escapeHtml(item.topic.shortTitle)}</a>`).join("")}</div></aside>` : ""}
    ${guidedBridge(topic.bridge)}
    <div class="guided-content">
      <section class="guided-section"><div class="guided-section__label"><span>01</span><p>${escapeHtml(COPY.guided.fast)}</p></div><div class="guided-section__body guided-fast">${topic.fast.map((paragraph) => `<p>${richGuideText(paragraph, quickTerms)}</p>`).join("")}</div></section>
      <section class="guided-section"><div class="guided-section__label"><span>02</span><p>${escapeHtml(COPY.guided.model)}</p></div><div class="guided-section__body">${guidedModel(topic.model, quickTerms)}</div></section>
      <section class="guided-section"><div class="guided-section__label"><span>03</span><p>${escapeHtml(COPY.guided.why)}</p></div><div class="guided-section__body"><p>${richGuideText(topic.why, quickTerms)}</p></div></section>
      <section class="guided-section"><div class="guided-section__label"><span>04</span><p>${escapeHtml(COPY.guided.godotContext)}</p></div><div class="guided-section__body"><ul class="godot-context-list">${topic.godot.map((item) => `<li>${icon("chevron", 15)}<span>${richGuideText(item, quickTerms)}</span></li>`).join("")}</ul></div></section>
      <section class="guided-section"><div class="guided-section__label"><span>05</span><p>${escapeHtml(COPY.guided.example)}</p></div><div class="guided-section__body guided-example">${guidedExample(topic.example, quickTerms)}</div></section>
      ${quickReferences.length ? `<section class="guided-section"><div class="guided-section__label"><span>06</span><p>${escapeHtml(COPY.guided.quickTerms)}</p></div><div class="guided-section__body"><div class="quick-reference-box"><p>${escapeHtml(COPY.guided.quickTermsDescription)}</p><div>${quickReferences.map((item) => `<button class="inline-term inline-term--chip" type="button" data-action="inline-term" data-quick-id="${escapeHtml(item.id)}">${escapeHtml(item.canonicalTitle)}<span aria-hidden="true">?</span></button>`).join("")}</div></div></div></section>` : ""}
      ${recognizeEntries.length ? `<section class="guided-section guided-recognize"><div class="guided-section__label"><span>+</span><p>${escapeHtml(COPY.guided.recognize)}</p></div><div class="guided-section__body">${guidedRecognizeCards(recognizeEntries, lessonId)}</div></section>` : ""}
      <section class="guided-section"><div class="guided-section__label"><span>07</span><p>${escapeHtml(COPY.guided.mistake)}</p></div><div class="guided-section__body"><div class="common-mistake"><span>!</span><p>${richGuideText(topic.mistake, quickTerms)}</p></div></div></section>
      <section class="guided-section guided-check"><div class="guided-section__label"><span>08</span><p>${escapeHtml(COPY.guided.check)}</p></div><div class="guided-section__body"><div class="mini-check"><p class="eyebrow">${escapeHtml(COPY.guided.answerPrompt)}</p><h2>${richGuideText(topic.check.question, quickTerms)}</h2><button class="button button--secondary" data-action="reveal-guided-answer">${escapeHtml(COPY.actions.revealAnswer)}</button><div class="mini-check__answer" hidden><p class="eyebrow">${escapeHtml(COPY.guided.shortAnswer)}</p><p>${richGuideText(topic.check.answer, quickTerms)}</p></div></div></div></section>
    </div>
    ${!nextId ? guidedLessonSummary(guide.summary) : ""}
    <nav class="guided-navigation" aria-label="${escapeHtml(COPY.aria.lessonTopics)}">${previousId ? `<a class="button button--secondary" href="#/learn/${lessonId}/${previousId}">← ${escapeHtml(COPY.actions.previousTopic)}<span>${escapeHtml(guide.topics[previousId].shortTitle)}</span></a>` : `<span></span>`}${nextId ? `<button class="button button--primary" data-action="guided-next" data-lesson-id="${lessonId}" data-term-id="${termId}" data-next-id="${nextId}"><span>${escapeHtml(learned.has(termId) ? COPY.actions.nextTopic : COPY.actions.completeTopic)}</span>${escapeHtml(guide.topics[nextId].shortTitle)} →</button>` : `<button class="button button--primary guided-finish-button" data-action="guided-complete-lesson" data-term-id="${termId}" data-lesson-id="${lessonId}">${icon("check", 18)} ${escapeHtml(COPY.actions.completeLesson)}</button>`}</nav>
    <dialog class="quick-term-dialog" aria-labelledby="quick-term-title"><button class="icon-button" data-action="close-inline-term" aria-label="${escapeHtml(COPY.actions.closeExplanation)}">${icon("close", 18)}</button><p class="eyebrow">${escapeHtml(COPY.guided.enoughForNow)}</p><h2 id="quick-term-title"></h2><p class="quick-term-definition"></p><div class="quick-term-example" hidden><strong>${escapeHtml(COPY.guided.example)}</strong><p></p></div><p class="quick-term-context" hidden></p></dialog>
  </div>`;
}

function lessonView(id) {
  const lesson = getLesson(id);
  if (!lesson) return notFoundView(COPY.errors.notFoundDescription);
  if (lessonGuides[id]) return guidedLessonLanding(lesson);
  const { core, recognize } = getLessonTerms(id);
  const complete = progress.completedLessonIds.includes(id);
  const learnedCount = core.filter((term) => progress.learnedTermIds.includes(term.id)).length;
  const prev = getLesson(`lesson-${String(lesson.number - 1).padStart(2, "0")}`);
  const next = getLesson(`lesson-${String(lesson.number + 1).padStart(2, "0")}`);
  progress.setLastLesson(id);
  return `<div class="page lesson-detail-page">
    <nav class="breadcrumbs" aria-label="${escapeHtml(COPY.aria.contentPath)}"><a href="#/learn">${escapeHtml(COPY.nav.learn)}</a>${icon("chevron", 14)}<span>${escapeHtml(COPY.status.lessonNumber(lesson.number))}</span></nav>
    <header class="lesson-hero"><div><p class="eyebrow">${escapeHtml(COPY.status.lessonNumber(lesson.number))} · ${escapeHtml(COPY.status.minutesLong(lesson.estimated_minutes))}</p><h1>${escapeHtml(lessonTitle(lesson))}</h1><p>${escapeHtml(lessonDescription(lesson))}</p><small class="technical-topics">${escapeHtml((lesson.technicalTopics ?? []).join(" · "))}</small></div><div class="lesson-goal"><span>${icon("bookmark", 19)}</span><div><strong>${escapeHtml(COPY.lesson.goal)}</strong><p>${escapeHtml(lesson.goal)}</p></div></div></header>
    <section class="lesson-progress"><div><strong>${learnedCount} / ${core.length}</strong><span>${escapeHtml(COPY.status.coreTermsLearned)}</span></div>${progressBar(percent(learnedCount, core.length), COPY.lesson.termsProgress)}</section>
    <section class="lesson-section"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.lesson.activeLearning)}</p><h2>${escapeHtml(COPY.lesson.coreTerms)}</h2><p>${escapeHtml(COPY.lesson.coreDescription)}</p></div><div class="term-grid">${core.map((term) => termCard(term)).join("")}</div></section>
    <section class="lesson-section recognize-section"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.lesson.quickRecognition)}</p><h2>${escapeHtml(COPY.lesson.recognizeTitle)}</h2><p>${escapeHtml(COPY.lesson.recognizeDescription)}</p></div><div class="recognize-list">${recognize.map((term) => `<a href="#/terms/${term.id}"><strong>${escapeHtml(term.name)}</strong><span>${escapeHtml(term.short_definition)}</span>${icon("chevron", 16)}</a>`).join("")}</div></section>
    <section class="lesson-finish"><div><span class="finish-icon">${icon(complete ? "check" : "book")}</span><div><h2>${escapeHtml(complete ? COPY.lesson.completedTitle : COPY.lesson.finishTitle)}</h2><p>${escapeHtml(complete ? COPY.lesson.completedDescription : COPY.lesson.finishDescription)}</p></div></div><button class="button ${complete ? "button--secondary" : "button--primary"}" data-action="complete-lesson" data-lesson-id="${lesson.id}">${escapeHtml(complete ? COPY.actions.undoLesson : COPY.actions.completeLesson)}</button></section>
    <nav class="lesson-pagination">${prev ? `<a href="#/learn/${prev.id}"><small>← ${escapeHtml(COPY.lesson.previous)}</small><strong>${escapeHtml(lessonTitle(prev))}</strong></a>` : "<span></span>"}${next ? `<a class="next" href="#/learn/${next.id}"><small>${escapeHtml(COPY.lesson.next)} →</small><strong>${escapeHtml(lessonTitle(next))}</strong></a>` : `<a class="next" href="#/quiz"><small>${escapeHtml(COPY.lesson.upNext)}</small><strong>${escapeHtml(COPY.lesson.goToQuizzes)} →</strong></a>`}</nav>
  </div>`;
}

function glossaryView(route) {
  const query = route.params.get("q") ?? "";
  const tier = route.params.get("tier") ?? "all";
  const category = route.params.get("category") ?? "all";
  const letter = route.params.get("letter") ?? "all";
  const terms = filterTerms({ query, tier, category, letter });
  const categories = getDatabase().categories;
  const activeLocale = namespace.locale?.contentLocale ?? "tr";
  const letters = [...new Set(getAllTerms().map((term) => term.name.replace(/^[^A-Za-zÇĞİÖŞÜçğıöşü]/, "#").slice(0, 1).toLocaleUpperCase(activeLocale)))].sort((a, b) => a.localeCompare(b, activeLocale));
  return `<div class="page glossary-page">
    ${pageHead(COPY.glossary.eyebrow, COPY.glossary.title, COPY.glossary.description(getAllTerms().length))}
    <section class="filter-panel" aria-label="${escapeHtml(COPY.aria.termFilters)}"><div class="inline-search">${icon("search", 18)}<input id="glossary-search" type="search" value="${escapeHtml(query)}" placeholder="${escapeHtml(COPY.search.glossaryPlaceholder)}" aria-label="${escapeHtml(COPY.search.glossaryPlaceholder)}"></div><select id="tier-filter" aria-label="${escapeHtml(COPY.aria.termFilters)}"><option value="all">${escapeHtml(COPY.glossary.allLevels)}</option><option value="core" ${tier === "core" ? "selected" : ""}>${escapeHtml(COPY.status.core)}</option><option value="recognize" ${tier === "recognize" ? "selected" : ""}>${escapeHtml(COPY.status.recognize)}</option></select><select id="category-filter" aria-label="${escapeHtml(COPY.aria.termFilters)}"><option value="all">${escapeHtml(COPY.glossary.allCategories)}</option>${categories.map((item) => `<option value="${item.id}" ${category === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}</select></section>
    <div class="alphabet-filter" aria-label="${escapeHtml(COPY.aria.letterFilter)}"><button data-action="filter-letter" data-letter="all" class="${letter === "all" ? "is-active" : ""}">${escapeHtml(COPY.glossary.allLetters)}</button>${letters.map((item) => `<button data-action="filter-letter" data-letter="${item}" class="${letter === item ? "is-active" : ""}">${escapeHtml(item)}</button>`).join("")}</div>
    <div class="results-bar"><strong>${escapeHtml(COPY.status.termCount(terms.length))}</strong><span>${escapeHtml(query || tier !== "all" || category !== "all" || letter !== "all" ? COPY.glossary.filtered : COPY.glossary.alphabetical)}</span></div>
    ${terms.length ? `<div class="glossary-list">${terms.map((term) => termCard(term, { compact: true })).join("")}</div>` : emptyState(COPY.glossary.noResults, COPY.search.empty, "search", `<button class="button button--secondary" data-action="clear-filters">${escapeHtml(COPY.actions.clearFilters)}</button>`)}
  </div>`;
}

function termView(id) {
  const term = getTermById(id);
  if (!term) return notFoundView(COPY.errors.notFoundDescription);
  const favorite = progress.favoriteTermIds.includes(id);
  const review = progress.reviewTermIds.includes(id);
  const learned = progress.learnedTermIds.includes(id);
  return `<div class="page term-detail-page">
    <nav class="breadcrumbs" aria-label="${escapeHtml(COPY.aria.contentPath)}"><a href="#/terms">${escapeHtml(COPY.nav.terms)}</a>${icon("chevron", 14)}<span>${escapeHtml(term.name)}</span></nav>
    <header class="term-hero"><div class="eyebrow-row">${badge(term.tier === "core" ? COPY.termDetail.core : COPY.termDetail.recognize, term.tier)}${term.category_names.map((name) => badge(name)).join("")}</div><div class="term-title-row"><div><h1>${escapeHtml(term.name)}</h1>${term.aliases?.length ? `<p class="aliases">${escapeHtml(COPY.termDetail.aliases)}: ${term.aliases.map(escapeHtml).join(", ")}</p>` : ""}</div><div class="term-actions"><button class="button button--icon-text ${favorite ? "is-active" : ""}" data-action="favorite" data-term-id="${term.id}" aria-pressed="${favorite}">${icon("star", 18)}<span>${escapeHtml(favorite ? COPY.status.favorited : COPY.status.favorite)}</span></button><button class="button button--icon-text ${review ? "is-active" : ""}" data-action="review" data-term-id="${term.id}" aria-pressed="${review}">${icon("repeat", 18)}<span>${escapeHtml(review ? COPY.status.inReview : COPY.actions.repeat)}</span></button></div></div></header>
    <article class="definition-box"><p class="eyebrow">${escapeHtml(COPY.termDetail.definition)}</p><p>${escapeHtml(term.definition)}</p></article>
    <div class="term-content-grid"><div>
      ${term.where_heard ? `<section class="detail-section context-block"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.termDetail.context)}</p><h2>${escapeHtml(COPY.termDetail.whereHeard)}</h2></div><blockquote>“${escapeHtml(term.where_heard)}”</blockquote></section>` : ""}
      ${term.memory_hook ? `<section class="detail-section memory-hook"><span class="memory-hook__icon">✦</span><div><p class="eyebrow">${escapeHtml(COPY.termDetail.memory)}</p><p>${escapeHtml(term.memory_hook)}</p></div></section>` : ""}
      ${term.code_example ? `<section class="detail-section"><div class="section-heading"><p class="eyebrow">GDScript</p><h2>${escapeHtml(COPY.termDetail.codeExample)}</h2></div>${codeExample(term.code_example)}</section>` : ""}
      ${relatedTerms(term)}
    </div><aside class="term-side"><div class="side-card"><p class="eyebrow">${escapeHtml(COPY.termDetail.studyStatus)}</p><button class="learn-toggle ${learned ? "is-learned" : ""}" data-action="learn" data-term-id="${term.id}"><span>${learned ? icon("check") : icon("book")}</span><span><strong>${escapeHtml(learned ? COPY.status.learned : COPY.termDetail.markLearned)}</strong><small>${escapeHtml(learned ? COPY.termDetail.savedLearned : COPY.termDetail.saveProgress)}</small></span></button></div><div class="side-card"><p class="eyebrow">${escapeHtml(COPY.termDetail.inContent)}</p><dl><div><dt>${escapeHtml(COPY.termDetail.level)}</dt><dd>${escapeHtml(term.tier === "core" ? COPY.status.core : COPY.status.recognize)}</dd></div><div><dt>${escapeHtml(COPY.termDetail.lesson)}</dt><dd>${term.lesson_ids.map((lessonId) => { const lesson = getLesson(lessonId); return lesson ? `<a href="#/learn/${lesson.id}">${String(lesson.number).padStart(2, "0")}</a>` : "—"; }).join(", ")}</dd></div><div><dt>${escapeHtml(COPY.termDetail.relation)}</dt><dd>${escapeHtml(COPY.status.relatedTerms(term.related_term_ids.length))}</dd></div></dl></div></aside></div>
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
    ${pageHead(COPY.quiz.eyebrow, COPY.quiz.title, COPY.quiz.description)}
    <section class="quiz-toolbar"><div><strong>${answered} / ${questions.length}</strong><span>${escapeHtml(COPY.quiz.evaluated)}</span></div>${progressBar(percent(answered, questions.length), COPY.quiz.progress)}<select id="quiz-lesson-filter" aria-label="${escapeHtml(COPY.aria.quizLesson)}"><option value="all">${escapeHtml(COPY.quiz.allLessons)}</option>${getAllLessons().map((lesson) => `<option value="${lesson.id}" ${selectedLesson === lesson.id ? "selected" : ""}>${String(lesson.number).padStart(2, "0")} · ${escapeHtml(lessonTitle(lesson))}</option>`).join("")}</select></section>
    <div class="quiz-list">${quizzes.map((quiz) => { const lesson = getLesson(quiz.lesson_id); return `<section class="quiz-group"><div class="quiz-group__head"><span>${escapeHtml(COPY.status.lessonNumber(lesson.number))}</span><h2>${escapeHtml(lessonTitle(lesson))}</h2></div>${quiz.questions.map((question, i) => quizCard(question, i, results[question.id])).join("")}</section>`; }).join("")}</div>
  </div>`;
}

function quizCard(question, index, result) {
  return `<article class="quiz-card" data-question-id="${question.id}"><div class="quiz-card__count">${String(index + 1).padStart(2, "0")}</div><div class="quiz-card__body"><p class="eyebrow">${escapeHtml(COPY.quiz.answerYourself)}</p><h3>${escapeHtml(question.question)}</h3><button class="button button--secondary reveal-answer" data-action="reveal-answer">${escapeHtml(COPY.actions.revealAnswer)}</button><div class="quiz-answer" hidden><p class="eyebrow">${escapeHtml(COPY.quiz.sourceAnswer)}</p><p>${escapeHtml(question.answer)}</p><div class="self-rating"><span>${escapeHtml(COPY.quiz.rating)}</span><button data-action="rate-quiz" data-question-id="${question.id}" data-status="correct" class="${result?.status === "correct" ? "is-selected" : ""}">${icon("check", 16)} ${escapeHtml(COPY.quiz.remembered)}</button><button data-action="rate-quiz" data-question-id="${question.id}" data-status="review" class="${result?.status === "review" ? "is-selected" : ""}">${icon("repeat", 16)} ${escapeHtml(COPY.actions.repeat)}</button></div></div></div></article>`;
}

function reviewView() {
  const terms = progress.reviewTermIds.map(getTermById).filter(Boolean);
  const resultMap = progress.quizResults;
  const quizItems = getDatabase().quizzes.flatMap((quiz) => quiz.questions).filter((q) => resultMap[q.id]?.status === "review");
  return `<div class="page">
    ${pageHead(COPY.review.eyebrow, COPY.review.title, COPY.review.description)}
    ${terms.length ? `<section class="review-section"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.review.terms)}</p><h2>${escapeHtml(COPY.status.reviewTerms(terms.length))}</h2></div><div class="term-grid">${terms.map((term) => termCard(term)).join("")}</div></section>` : ""}
    ${quizItems.length ? `<section class="review-section"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.review.questions)}</p><h2>${escapeHtml(COPY.review.thinkAgain)}</h2></div><div class="quiz-list">${quizItems.map((question, index) => quizCard(question, index, resultMap[question.id])).join("")}</div></section>` : ""}
    ${!terms.length && !quizItems.length ? emptyState(COPY.review.emptyTitle, COPY.review.emptyDescription, "repeat", `<a class="button button--secondary" href="#/terms">${escapeHtml(COPY.actions.browseTerms)}</a>`) : ""}
  </div>`;
}

function favoritesView() {
  const terms = progress.favoriteTermIds.map(getTermById).filter(Boolean);
  return `<div class="page">${pageHead(COPY.favorites.eyebrow, COPY.favorites.title, COPY.favorites.description)}${terms.length ? `<div class="term-grid">${terms.map((term) => termCard(term)).join("")}</div>` : emptyState(COPY.favorites.emptyTitle, COPY.favorites.emptyDescription, "star", `<a class="button button--secondary" href="#/terms">${escapeHtml(COPY.actions.discoverTerms)}</a>`)}</div>`;
}

function notFoundView(message = COPY.errors.notFoundDescription) {
  return `<div class="page">${emptyState(COPY.routeTitles.notFound, message, "search", `<a class="button button--primary" href="#/dashboard">${escapeHtml(COPY.actions.returnDashboard)}</a>`)}</div>`;
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
