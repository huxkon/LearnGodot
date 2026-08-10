(function initApplication(namespace) {
"use strict";

const { searchTerms, getLesson, getTermById } = namespace.data;
const { appShell, icon, searchResults, toast } = namespace.components;
const { getRoute, navigate } = namespace.router;
const { progress, STORAGE_KEYS } = namespace.storage;
const { renderView } = namespace.views;

const app = document.querySelector("#app");
let currentRoute;
let searchIndex = 0;
let glossaryTimer;

function preferredTheme() {
  try {
    return localStorage.getItem("godotTheme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  } catch {
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#111410" : "#f6f7f2");
  const button = document.querySelector('[data-action="toggle-theme"]');
  if (button) button.innerHTML = icon(theme === "dark" ? "sun" : "moon");
}

function render({ focus = false } = {}) {
  currentRoute = getRoute();
  document.title = `${currentRoute.title} · Godot Atlası`;
  app.innerHTML = appShell(currentRoute, renderView(currentRoute));
  applyTheme(preferredTheme());
  document.body.classList.remove("menu-open");
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
  requestAnimationFrame(() => document.querySelector("#global-search")?.focus());
}

function selectedSearchLink() {
  return document.querySelectorAll(".search-result")[searchIndex];
}

function setSearchIndex(next) {
  const links = [...document.querySelectorAll(".search-result")];
  if (!links.length) return;
  searchIndex = (next + links.length) % links.length;
  links.forEach((link, index) => {
    link.classList.toggle("is-selected", index === searchIndex);
    link.setAttribute("aria-selected", String(index === searchIndex));
  });
  links[searchIndex].scrollIntoView({ block: "nearest" });
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
  if (!copied) throw new Error("Kopyalama desteklenmiyor.");
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "open-menu") document.body.classList.add("menu-open");
  if (action === "close-menu") document.body.classList.remove("menu-open");
  if (action === "open-search") openSearch();
  if (action === "toggle-theme") {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("godotTheme", theme); } catch { /* Tema yine bu oturumda uygulanır. */ }
    applyTheme(theme);
  }
  if (action === "favorite") {
    const added = progress.toggle(STORAGE_KEYS.favoriteTermIds, target.dataset.termId);
    render();
    toast(added ? "Favorilere eklendi." : "Favorilerden çıkarıldı.");
  }
  if (action === "review") {
    const added = progress.toggle(STORAGE_KEYS.reviewTermIds, target.dataset.termId);
    render();
    toast(added ? "Tekrar listesine eklendi." : "Tekrar listesinden çıkarıldı.");
  }
  if (action === "learn") {
    const added = progress.toggle(STORAGE_KEYS.learnedTermIds, target.dataset.termId);
    render();
    toast(added ? "Terim öğrenildi olarak işaretlendi." : "Öğrenildi işareti kaldırıldı.");
  }
  if (action === "complete-lesson") {
    const lesson = getLesson(target.dataset.lessonId);
    const completed = !progress.completedLessonIds.includes(lesson.id);
    progress.completeLesson(lesson, completed);
    render();
    toast(completed ? "Ders tamamlandı. Harika iş." : "Ders tamamlanmadı olarak işaretlendi.");
  }
  if (action === "filter-letter") updateQuery("letter", target.dataset.letter);
  if (action === "clear-filters") navigate("/terms");
  if (action === "reveal-answer") {
    const answer = target.closest(".quiz-card").querySelector(".quiz-answer");
    answer.hidden = false;
    target.hidden = true;
    answer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  if (action === "reveal-guided-answer") {
    const answer = target.closest(".mini-check").querySelector(".mini-check__answer");
    answer.hidden = false;
    target.hidden = true;
    answer.focus?.();
  }
  if (action === "inline-term") {
    const dialog = document.querySelector(".quick-term-dialog");
    const quickId = target.dataset.quickId;
    const fallbackTerm = getTermById(quickId);
    const definition = window.GODOT_LESSON_01_GUIDE.quickTerms[quickId] ?? fallbackTerm?.short_definition;
    dialog.querySelector("#quick-term-title").textContent = target.firstChild?.textContent?.trim() || fallbackTerm?.name || "Kısa açıklama";
    dialog.querySelector(".quick-term-definition").textContent = definition || "Bu terim için kısa açıklama bulunamadı.";
    if (!dialog.open) dialog.showModal();
  }
  if (action === "close-inline-term") {
    target.closest("dialog")?.close();
  }
  if (action === "guided-next") {
    progress.completeTerm(target.dataset.termId, true);
    navigate(`/learn/lesson-01/${target.dataset.nextId}`);
  }
  if (action === "guided-complete-lesson") {
    progress.completeTerm(target.dataset.termId, true);
    const guide = window.GODOT_LESSON_01_GUIDE;
    const firstIncomplete = guide.order.find((id) => !progress.learnedTermIds.includes(id));
    if (firstIncomplete) {
      navigate(`/learn/lesson-01/${firstIncomplete}`);
      setTimeout(() => toast("Dersi tamamlamadan önce kalan konuyu çalış."), 80);
    } else {
      progress.completeLesson(getLesson(target.dataset.lessonId), true);
      navigate(`/learn/${target.dataset.lessonId}`);
      setTimeout(() => toast("1. ders tamamlandı."), 80);
    }
  }
  if (action === "rate-quiz") {
    progress.setQuizResult(target.dataset.questionId, target.dataset.status);
    target.parentElement.querySelectorAll("button").forEach((button) => button.classList.toggle("is-selected", button === target));
    toast(target.dataset.status === "correct" ? "Yanıt kaydedildi." : "Soru tekrar listene eklendi.");
  }
  if (action === "copy-code") {
    const code = target.closest(".code-block").querySelector("code").textContent;
    try {
      await copyText(code);
      target.textContent = "Kopyalandı";
      setTimeout(() => { target.textContent = "Kopyala"; }, 1400);
    } catch { toast("Kod kopyalanamadı."); }
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "global-search") {
    searchIndex = 0;
    document.querySelector(".search-results").innerHTML = searchResults(searchTerms(event.target.value), event.target.value);
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
  if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "k") {
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
  if (event.target === dialog) dialog.close();
  if (event.target.closest(".search-result")) dialog?.close();
  const quickDialog = event.target.closest(".quick-term-dialog");
  if (event.target === quickDialog) quickDialog.close();
});

window.addEventListener("hashchange", () => render({ focus: true }));

applyTheme(preferredTheme());
try {
  if (!location.hash) location.hash = "/dashboard";
  render();
} catch (error) {
  console.error(error);
  app.innerHTML = `<div class="fatal-error"><strong>Uygulama başlatılamadı.</strong><p>İçerik dosyalarının index.html ile birlikte bulunduğundan emin ol.</p><code>${String(error.message)}</code></div>`;
}
})(window.GodotApp = window.GodotApp || {});
