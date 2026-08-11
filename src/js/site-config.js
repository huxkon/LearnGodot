(function initSiteConfig(namespace) {
  "use strict";

  namespace.site = Object.freeze({
    siteName: "LearnGodot",
    baseUrl: "https://huxkon.github.io/LearnGodot/",
    brandIconPath: "assets/brand/learngodot-icon.svg",
    defaultLocale: "tr",
    defaultTitle: "Türkçe Godot Öğren | LearnGodot",
    defaultDescription: "Godot'u ve GDScript'in temelini Türkçe öğren. Node, Scene, Script, Signal, fizik, UI ve oyun geliştirme kavramlarını başlangıç seviyesinden sırayla keşfet.",
  });
})(window.GodotApp = window.GodotApp || {});
