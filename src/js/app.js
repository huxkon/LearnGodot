(function initApplication(namespace) {
"use strict";

const { searchTerms, getLesson, getTermById } = namespace.data;
const { appShell, icon, searchResults, toast } = namespace.components;
const { getRoute, navigate } = namespace.router;
const { progress, STORAGE_KEYS } = namespace.storage;
const { renderView } = namespace.views;
const { COPY } = namespace;
const { site } = namespace;

const app = document.querySelector("#app");
let currentRoute;
let searchIndex = 0;
let glossaryTimer;
let sessionTheme = null;
const VALID_THEMES = new Set(["light", "dark"]);
const sidebarMedia = safeMediaQuery("(max-width: 820px)");
document.documentElement.lang = namespace.locale?.contentLocale ?? site.defaultLocale;

function safeMediaQuery(query) {
  try {
    return typeof window.matchMedia === "function" ? window.matchMedia(query) : null;
  } catch {
    return null;
  }
}

function isMobileSidebar() {
  return sidebarMedia?.matches ?? window.innerWidth <= 820;
}

function systemTheme() {
  return safeMediaQuery("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function documentTitleFor(route) {
  if (route.name === "term") return getTermById(route.param)?.name ?? route.title;
  if (route.name === "lesson-topic") return getTermById(route.subparam)?.name ?? getLesson(route.param)?.displayTitle ?? route.title;
  if (route.name === "lesson") return getLesson(route.param)?.displayTitle ?? route.title;
  return route.title;
}

function preferredTheme() {
  if (VALID_THEMES.has(sessionTheme)) return sessionTheme;
  try {
    const storedTheme = localStorage.getItem("godotTheme");
    if (VALID_THEMES.has(storedTheme)) sessionTheme = storedTheme;
  } catch { /* Sistem tercihi güvenli fallback'tir. */ }
  return sessionTheme ?? systemTheme();
}

function applyTheme(theme) {
  const resolvedTheme = VALID_THEMES.has(theme) ? theme : "light";
  document.documentElement.dataset.theme = resolvedTheme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", resolvedTheme === "dark" ? "#111410" : "#f6f7f2");
  const button = document.querySelector('[data-action="toggle-theme"]');
  if (button) button.innerHTML = icon(resolvedTheme === "dark" ? "sun" : "moon");
}

function render({ focus = false } = {}) {
  currentRoute = getRoute();
  document.title = currentRoute.name === "dashboard" ? site.defaultTitle : `${documentTitleFor(currentRoute)} · ${site.siteName}`;
  app.innerHTML = appShell(currentRoute, renderView(currentRoute));
  applyTheme(preferredTheme());
  document.body.classList.remove("menu-open");
  syncSidebarState();
  if (focus) document.querySelector("#main-content")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function updateQuery(key, value, { replace = true } = {}) {
  const route = getRoute();
  const params = new URLSearchParams(route.params);
  if (!value || value === "all") params.delete(key); else params.set(key, value);
  const hash = `#${route.pathname}${params.size ? `?${params}` : ""}`;
  if (location.hash === hash) {
    render();
  } else if (replace) {
    location.replace(hash);
  } else {
    location.hash = hash.slice(1);
  }
}

function openSearch() {
  const dialog = document.querySelector(".search-dialog");
  if (!dialog?.open) dialog?.showModal();
  searchIndex = 0;
  setSearchIndex(0);
  requestAnimationFrame(() => document.querySelector("#global-search")?.focus());
}

function selectedSearchLink() {
  return document.querySelectorAll(".search-result")[searchIndex];
}

function setSearchIndex(next) {
  const links = [...document.querySelectorAll(".search-result")];
  const input = document.querySelector("#global-search");
  if (!links.length) {
    searchIndex = 0;
    input?.setAttribute("aria-expanded", "false");
    input?.removeAttribute("aria-activedescendant");
    return;
  }
  searchIndex = (next + links.length) % links.length;
  links.forEach((link, index) => {
    link.classList.toggle("is-selected", index === searchIndex);
    link.setAttribute("aria-selected", String(index === searchIndex));
  });
  input?.setAttribute("aria-expanded", "true");
  input?.setAttribute("aria-activedescendant", links[searchIndex].id);
  links[searchIndex].scrollIntoView({ block: "nearest" });
}

function collapseSearch() {
  const input = document.querySelector("#global-search");
  input?.setAttribute("aria-expanded", "false");
  input?.removeAttribute("aria-activedescendant");
}

function syncSidebarState() {
  const sidebar = document.querySelector("#sidebar");
  const menuButton = document.querySelector('[data-action="open-menu"]');
  const pageColumn = document.querySelector(".page-column");
  const skipLink = document.querySelector(".skip-link");
  if (!sidebar) return;
  const mobile = isMobileSidebar();
  const open = mobile && document.body.classList.contains("menu-open");
  const hidden = mobile && !open;
  sidebar.toggleAttribute("inert", hidden);
  sidebar.setAttribute("aria-hidden", String(hidden));
  if (open) {
    sidebar.setAttribute("role", "dialog");
    sidebar.setAttribute("aria-modal", "true");
  } else {
    sidebar.removeAttribute("role");
    sidebar.removeAttribute("aria-modal");
  }
  pageColumn?.toggleAttribute("inert", open);
  skipLink?.toggleAttribute("inert", open);
  menuButton?.setAttribute("aria-expanded", String(open));
}

function openSidebar() {
  if (!isMobileSidebar()) return;
  document.body.classList.add("menu-open");
  syncSidebarState();
  requestAnimationFrame(() => document.querySelector("#sidebar .brand, #sidebar .nav-link")?.focus());
}

function closeSidebar({ restoreFocus = true } = {}) {
  const wasOpen = document.body.classList.contains("menu-open");
  document.body.classList.remove("menu-open");
  syncSidebarState();
  if (wasOpen && restoreFocus) requestAnimationFrame(() => document.querySelector('[data-action="open-menu"]')?.focus());
}

function sidebarFocusableElements() {
  return [...document.querySelectorAll("#sidebar a[href], #sidebar button:not([disabled])")]
    .filter((element) => !element.closest("[inert]") && element.getClientRects().length > 0);
}

function containSidebarFocus(event) {
  const focusable = sidebarFocusableElements();
  if (!focusable.length) return;
  const sidebar = document.querySelector("#sidebar");
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const focusInDrawer = sidebar?.contains(document.activeElement);
  if (event.shiftKey && (document.activeElement === first || !focusInDrawer)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (document.activeElement === last || !focusInDrawer)) {
    event.preventDefault();
    first.focus();
  }
}

function reducedMotionEnabled() {
  const query = safeMediaQuery("(prefers-reduced-motion: reduce)");
  return query?.matches ?? true;
}

function revealAndFocusAnswer(button, selector) {
  const answer = button.closest(".quiz-card, .mini-check")?.querySelector(selector);
  if (!answer) return;
  answer.hidden = false;
  button.hidden = true;
  requestAnimationFrame(() => {
    answer.focus({ preventScroll: true });
    answer.scrollIntoView({ behavior: reducedMotionEnabled() ? "auto" : "smooth", block: "nearest" });
  });
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error(COPY.errors.copyUnsupported);
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    const sidebarLink = event.target.closest("#sidebar a[href]");
    if (isMobileSidebar() && document.body.classList.contains("menu-open") && sidebarLink) {
      const selectsCurrentRoute = sidebarLink.hash === location.hash;
      closeSidebar({ restoreFocus: false });
      if (selectsCurrentRoute) requestAnimationFrame(() => document.querySelector("#main-content")?.focus({ preventScroll: true }));
    }
    return;
  }
  const action = target.dataset.action;

  if (action === "open-menu") {
    openSidebar();
  }
  if (action === "close-menu") {
    closeSidebar({ restoreFocus: target.classList.contains("sidebar-scrim") });
  }
  if (action === "open-search") openSearch();
  if (action === "toggle-theme") {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    sessionTheme = theme;
    try { localStorage.setItem("godotTheme", theme); } catch { /* Tema yine bu oturumda uygulanır. */ }
    applyTheme(theme);
  }
  if (action === "favorite") {
    const added = progress.toggle(STORAGE_KEYS.favoriteTermIds, target.dataset.termId);
    render();
    toast(added ? COPY.messages.favoriteAdded : COPY.messages.favoriteRemoved);
  }
  if (action === "review") {
    const added = progress.toggle(STORAGE_KEYS.reviewTermIds, target.dataset.termId);
    render();
    toast(added ? COPY.messages.reviewAdded : COPY.messages.reviewRemoved);
  }
  if (action === "learn") {
    const added = progress.toggle(STORAGE_KEYS.learnedTermIds, target.dataset.termId);
    render();
    toast(added ? COPY.messages.learnedAdded : COPY.messages.learnedRemoved);
  }
  if (action === "complete-lesson") {
    const lesson = getLesson(target.dataset.lessonId);
    const completed = !progress.completedLessonIds.includes(lesson.id);
    progress.completeLesson(lesson, completed);
    render();
    toast(completed ? COPY.messages.lessonCompleted : COPY.messages.lessonUncompleted);
  }
  if (action === "filter-letter") updateQuery("letter", target.dataset.letter);
  if (action === "clear-filters") navigate("/terms");
  if (action === "reveal-answer") {
    revealAndFocusAnswer(target, ".quiz-answer");
  }
  if (action === "reveal-guided-answer") {
    revealAndFocusAnswer(target, ".mini-check__answer");
  }
  if (action === "inline-term") {
    const dialog = document.querySelector(".quick-term-dialog");
    const quickId = target.dataset.quickId;
    const route = getRoute();
    const guide = window.GODOT_LESSON_GUIDES?.[route.param];
    const topic = guide?.topics?.[route.subparam];
    const isCurated = topic?.quickTermIds?.includes(quickId);
    const quickEntry = isCurated ? guide?.quickTerms?.[quickId] : null;
    if (!dialog || !quickEntry) return;
    dialog.querySelector("#quick-term-title").textContent = quickEntry.canonicalTitle;
    dialog.querySelector(".quick-term-definition").textContent = quickEntry.shortExplanation;
    const exampleElement = dialog.querySelector(".quick-term-example");
    exampleElement.querySelector("p").textContent = quickEntry.example || "";
    exampleElement.hidden = !quickEntry.example;
    const contextElement = dialog.querySelector(".quick-term-context");
    contextElement.textContent = quickEntry.context || "";
    contextElement.hidden = !quickEntry.context;
    if (!dialog.open) dialog.showModal();
  }
  if (action === "close-inline-term") {
    target.closest("dialog")?.close();
  }
  if (action === "guided-next") {
    progress.completeTerm(target.dataset.termId, true);
    navigate(`/learn/${target.dataset.lessonId}/${target.dataset.nextId}`);
  }
  if (action === "guided-complete-lesson") {
    progress.completeTerm(target.dataset.termId, true);
    const guide = window.GODOT_LESSON_GUIDES[target.dataset.lessonId];
    const firstIncomplete = guide.order.find((id) => !progress.learnedTermIds.includes(id));
    if (firstIncomplete) {
      navigate(`/learn/${target.dataset.lessonId}/${firstIncomplete}`);
      setTimeout(() => toast(COPY.messages.finishRemaining), 80);
    } else {
      progress.completeLesson(getLesson(target.dataset.lessonId), true);
      navigate(`/learn/${target.dataset.lessonId}`);
      setTimeout(() => toast(COPY.messages.numberedLessonCompleted(getLesson(target.dataset.lessonId).number)), 80);
    }
  }
  if (action === "guided-complete-from-landing") {
    const lesson = getLesson(target.dataset.lessonId);
    progress.completeLesson(lesson, true);
    render();
    toast(COPY.messages.numberedLessonCompleted(lesson.number));
  }
  if (action === "rate-quiz") {
    progress.setQuizResult(target.dataset.questionId, target.dataset.status);
    target.parentElement.querySelectorAll("button").forEach((button) => button.classList.toggle("is-selected", button === target));
    toast(target.dataset.status === "correct" ? COPY.messages.answerSaved : COPY.messages.questionReviewAdded);
  }
  if (action === "copy-code") {
    const code = target.closest(".code-block").querySelector("code").textContent;
    try {
      await copyText(code);
      target.textContent = COPY.actions.copied;
      setTimeout(() => { target.textContent = COPY.actions.copy; }, 1400);
    } catch { toast(COPY.messages.copyFailed); }
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "global-search") {
    searchIndex = 0;
    document.querySelector("#global-search-results").innerHTML = searchResults(searchTerms(event.target.value), event.target.value);
    setSearchIndex(0);
  }
  if (event.target.id === "glossary-search") {
    clearTimeout(glossaryTimer);
    const value = event.target.value;
    glossaryTimer = setTimeout(() => updateQuery("q", value), 220);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "tier-filter") updateQuery("tier", event.target.value);
  if (event.target.id === "category-filter") updateQuery("category", event.target.value);
  if (event.target.id === "quiz-lesson-filter") updateQuery("lesson", event.target.value);
});

document.addEventListener("keydown", (event) => {
  if (isMobileSidebar() && document.body.classList.contains("menu-open")) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSidebar();
      return;
    }
    if (event.key === "Tab") {
      containSidebarFocus(event);
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      return;
    }
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
  const dialog = document.querySelector(".search-dialog");
  if (dialog?.open && event.target.id === "global-search") {
    if (event.key === "ArrowDown") { event.preventDefault(); setSearchIndex(searchIndex + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); setSearchIndex(searchIndex - 1); }
    if (event.key === "Enter") { event.preventDefault(); selectedSearchLink()?.click(); }
  }
});

document.addEventListener("click", (event) => {
  const dialog = event.target.closest(".search-dialog");
  if (event.target === dialog) { collapseSearch(); dialog.close(); }
  if (event.target.closest(".search-result")) { collapseSearch(); dialog?.close(); }
  const quickDialog = event.target.closest(".quick-term-dialog");
  if (event.target === quickDialog) quickDialog.close();
});

document.addEventListener("close", (event) => {
  if (event.target.matches?.(".search-dialog")) collapseSearch();
}, true);

function handleSidebarBreakpoint() {
  const mobile = isMobileSidebar();
  if (!mobile) document.body.classList.remove("menu-open");
  if (mobile && document.querySelector("#sidebar")?.contains(document.activeElement)) {
    document.querySelector('[data-action="open-menu"]')?.focus();
  }
  syncSidebarState();
}

if (sidebarMedia?.addEventListener) sidebarMedia.addEventListener("change", handleSidebarBreakpoint);
else if (sidebarMedia?.addListener) sidebarMedia.addListener(handleSidebarBreakpoint);
window.addEventListener("resize", handleSidebarBreakpoint);

window.addEventListener("hashchange", () => render({ focus: true }));

applyTheme(preferredTheme());
try {
  if (!location.hash) location.hash = "/dashboard";
  render();
} catch (error) {
  console.error(error);
  app.innerHTML = `<div class="fatal-error"><strong>${COPY.errors.startupTitle}</strong><p>${COPY.errors.startupDescription}</p><code>${String(error.message)}</code></div>`;
}
})(window.GodotApp = window.GodotApp || {});
