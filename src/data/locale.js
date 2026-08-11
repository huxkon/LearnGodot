(function initLocale(namespace) {
  "use strict";

  const config = {
    defaultLocale: "tr",
    supportedLocales: ["tr", "en"],
    contentLocales: ["tr"],
    preferenceKey: "preferredLocale",
    crossLanguageLabelKey: "showCrossLanguageLabels",
    secondaryLocales: { tr: "en", en: "tr" },
  };

  function preferredLocale() {
    try {
      const saved = localStorage.getItem(config.preferenceKey);
      return config.supportedLocales.includes(saved) ? saved : config.defaultLocale;
    } catch {
      return config.defaultLocale;
    }
  }

  function resolveContentLocale(locale = preferredLocale()) {
    return config.contentLocales.includes(locale) ? locale : config.defaultLocale;
  }

  function showCrossLanguageLabels() {
    try {
      return localStorage.getItem(config.crossLanguageLabelKey) !== "false";
    } catch {
      return true;
    }
  }

  function secondaryLocale(locale = resolveContentLocale()) {
    return config.secondaryLocales[locale] ?? null;
  }

  namespace.locale = {
    ...config,
    get preferredLocale() { return preferredLocale(); },
    get contentLocale() { return resolveContentLocale(); },
    get showCrossLanguageLabels() { return showCrossLanguageLabels(); },
    resolveContentLocale,
    secondaryLocale,
  };
})(window.GodotApp = window.GodotApp || {});
