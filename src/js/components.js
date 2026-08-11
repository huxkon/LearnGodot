(function initComponents(namespace) {
"use strict";

const { getRelatedTerms, getTermById } = namespace.data;
const { progress, STORAGE_KEYS } = namespace.storage;
const { COPY } = namespace;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name, size = 20) {
  const paths = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M8 7h8M8 11h6"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.7 1.8c-1 .7-1.5 1.1-1.5 2.2M12 17h.01"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    moon: '<path d="M20 15.2A8 8 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    bookmark: '<path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4V4Z"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
  };
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? ""}</svg>`;
}

function badge(text, tone = "neutral") {
  return `<span class="badge badge--${tone}">${escapeHtml(text)}</span>`;
}

function progressBar(value, label = COPY.status.progress) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));
  return `<div class="progress-track" role="progressbar" aria-label="${escapeHtml(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(safe)}"><span style="width:${safe}%"></span></div>`;
}

function emptyState(title, description, iconName = "book", action = "") {
  return `<div class="empty-state"><div class="empty-icon">${icon(iconName, 24)}</div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p>${action}</div>`;
}

function termCard(term, { compact = false } = {}) {
  const favorite = progress.has(STORAGE_KEYS.favoriteTermIds, term.id);
  const learned = progress.has(STORAGE_KEYS.learnedTermIds, term.id);
  return `<article class="term-card ${compact ? "term-card--compact" : ""}">
    <a class="term-card__link" href="#/terms/${encodeURIComponent(term.id)}" aria-label="${escapeHtml(term.name)} ${escapeHtml(COPY.terms.openDetails)}"></a>
    <div class="term-card__head">
      <div>
        <div class="eyebrow-row">${badge(term.tier === "core" ? COPY.status.core : COPY.status.recognize, term.tier)}${learned ? `<span class="learned-mark">${icon("check", 14)} ${escapeHtml(COPY.status.learned)}</span>` : ""}</div>
        <h3>${escapeHtml(term.name)}</h3>
      </div>
      <button class="icon-button card-action ${favorite ? "is-active" : ""}" data-action="favorite" data-term-id="${escapeHtml(term.id)}" aria-label="${escapeHtml(favorite ? COPY.terms.removeFavorite : COPY.terms.addFavorite)}" aria-pressed="${favorite}">${icon("star", 18)}</button>
    </div>
    <p>${escapeHtml(compact ? term.short_definition : term.definition)}</p>
    <div class="term-card__footer"><span>${escapeHtml(term.category_names[0] ?? COPY.status.general)}</span><span class="detail-link">${escapeHtml(COPY.terms.viewDetails)} ${icon("arrow", 15)}</span></div>
  </article>`;
}

function codeExample(example) {
  if (!example?.code) return "";
  const highlighted = escapeHtml(example.code)
    .replace(/\b(func|var|const|if|else|for|while|return|extends|class_name|await|signal|enum|match|in|as|is)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/(&quot;[^&]*?&quot;)/g, '<span class="tok-string">$1</span>')
    .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-number">$1</span>')
    .replace(/\b(true|false|null|void|float|int|String|Array|Dictionary|Vector2|Vector3)\b/g, '<span class="tok-type">$1</span>');
  return `<div class="code-block"><div class="code-block__bar"><span>${icon("code", 15)} ${escapeHtml(example.language ?? "gdscript")}</span><button class="copy-code" data-action="copy-code" type="button">${escapeHtml(COPY.actions.copy)}</button></div><pre><code>${highlighted}</code></pre></div>`;
}

function relatedTerms(term) {
  const related = getRelatedTerms(term);
  if (!related.length) return "";
  return `<section class="detail-section"><div class="section-heading"><p class="eyebrow">${escapeHtml(COPY.terms.connections)}</p><h2>${escapeHtml(COPY.terms.related)}</h2></div><div class="related-grid">${related.map((item) => `<a href="#/terms/${encodeURIComponent(item.id)}"><span>${escapeHtml(item.name)}</span>${icon("arrow", 16)}</a>`).join("")}</div></section>`;
}

const navItems = [
  ["dashboard", "/dashboard", "grid", COPY.nav.dashboard],
  ["learn", "/learn", "book", COPY.nav.learn],
  ["terms", "/terms", "list", COPY.nav.terms],
  ["quiz", "/quiz", "quiz", COPY.nav.quiz],
  ["review", "/review", "repeat", COPY.nav.review],
  ["favorites", "/favorites", "star", COPY.nav.favorites],
];

function appShell(route, content) {
  const activeName = route.name === "lesson" || route.name === "lesson-topic" ? "learn" : route.name === "term" ? "terms" : route.name;
  return `<div class="app-shell">
    <aside class="sidebar" id="sidebar" aria-label="${escapeHtml(COPY.aria.mainNavigation)}">
      <a class="brand" href="#/dashboard"><span class="brand-mark">L</span><span><strong>${escapeHtml(COPY.appName)}</strong><small>${escapeHtml(COPY.appTagline)}</small></span></a>
      <nav>${navItems.map(([name, path, iconName, label]) => `<a href="#${path}" class="nav-link ${activeName === name ? "is-active" : ""}" ${activeName === name ? 'aria-current="page"' : ""}>${icon(iconName)}<span>${label}</span>${name === "review" && progress.reviewCount ? `<b>${progress.reviewCount}</b>` : ""}</a>`).join("")}</nav>
      <div class="sidebar-foot"><div class="data-note"><span class="status-dot"></span><span><strong>${escapeHtml(COPY.status.localProgress)}</strong><small>${escapeHtml(COPY.saved)}</small></span></div></div>
    </aside>
    <button class="sidebar-scrim" data-action="close-menu" aria-label="${escapeHtml(COPY.aria.closeMenu)}"></button>
    <div class="page-column">
      <header class="topbar">
        <button class="icon-button mobile-menu" data-action="open-menu" aria-label="${escapeHtml(COPY.aria.openMenu)}">${icon("menu")}</button>
        <button class="search-trigger" data-action="open-search">${icon("search", 18)}<span>${escapeHtml(COPY.actions.search)}</span><kbd>${escapeHtml(COPY.search.shortcut)}</kbd></button>
        <div class="topbar-actions"><a class="text-link topbar-learn" href="#/learn">${escapeHtml(COPY.actions.continueLearning)}</a><button class="icon-button" data-action="toggle-theme" aria-label="${escapeHtml(COPY.aria.changeTheme)}">${icon("moon")}</button></div>
      </header>
      <main id="main-content" class="main-content" tabindex="-1">${content}</main>
    </div>
    ${searchDialog()}
    <div class="toast-region" aria-live="polite" aria-atomic="true"></div>
  </div>`;
}

function searchDialog() {
  return `<dialog class="search-dialog" aria-labelledby="search-title">
    <div class="search-dialog__head"><div class="search-field">${icon("search", 20)}<label class="sr-only" id="search-title" for="global-search">${escapeHtml(COPY.search.label)}</label><input id="global-search" type="search" autocomplete="off" placeholder="${escapeHtml(COPY.search.placeholder)}" /><kbd>ESC</kbd></div></div>
    <div class="search-results" role="listbox"><div class="search-intro"><span>${icon("search", 24)}</span><p>${escapeHtml(COPY.search.intro)}</p></div></div>
    <div class="search-dialog__foot"><span><kbd>↑</kbd><kbd>↓</kbd> ${escapeHtml(COPY.search.navigate)}</span><span><kbd>↵</kbd> ${escapeHtml(COPY.search.open)}</span></div>
  </dialog>`;
}

function searchResults(terms, query) {
  if (!query.trim()) return `<div class="search-intro"><span>${icon("search", 24)}</span><p>${escapeHtml(COPY.search.prompt)}</p></div>`;
  if (!terms.length) return `<div class="search-intro"><p>${escapeHtml(COPY.search.empty)}</p></div>`;
  return `<div class="search-result-meta">${escapeHtml(COPY.search.results(terms.length))}</div>${terms.slice(0, 12).map((term, index) => `<a class="search-result ${index === 0 ? "is-selected" : ""}" role="option" aria-selected="${index === 0}" href="#/terms/${encodeURIComponent(term.id)}"><span class="search-result__icon">${term.name.slice(0, 1).toLocaleUpperCase(namespace.locale?.contentLocale ?? "tr")}</span><span><strong>${escapeHtml(term.name)}</strong><small>${escapeHtml(term.short_definition)}</small></span><em>${escapeHtml(term.tier === "core" ? COPY.status.core : COPY.status.recognize)}</em></a>`).join("")}`;
}

function toast(message) {
  const region = document.querySelector(".toast-region");
  if (!region) return;
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  region.append(item);
  setTimeout(() => item.remove(), 2400);
}

function coreNavigation(term) {
  const previous = getTermById(term.previous_core_term_id);
  const next = getTermById(term.next_core_term_id);
  if (!previous && !next) return "";
  return `<nav class="term-pagination" aria-label="${escapeHtml(COPY.aria.coreTerms)}">
    ${previous ? `<a href="#/terms/${encodeURIComponent(previous.id)}"><small>← ${escapeHtml(COPY.terms.previousCore)}</small><strong>${escapeHtml(previous.name)}</strong></a>` : "<span></span>"}
    ${next ? `<a class="next" href="#/terms/${encodeURIComponent(next.id)}"><small>${escapeHtml(COPY.terms.nextCore)} →</small><strong>${escapeHtml(next.name)}</strong></a>` : "<span></span>"}
  </nav>`;
}

namespace.components = {
  escapeHtml,
  icon,
  badge,
  progressBar,
  emptyState,
  termCard,
  codeExample,
  relatedTerms,
  appShell,
  searchDialog,
  searchResults,
  toast,
  coreNavigation,
};
})(window.GodotApp = window.GodotApp || {});
