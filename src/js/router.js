(function initRouter(namespace) {
  "use strict";

  const routes = [
    { name: "dashboard", pattern: /^\/?$/, title: "Dashboard" },
    { name: "dashboard", pattern: /^\/dashboard\/?$/, title: "Dashboard" },
    { name: "learn", pattern: /^\/learn\/?$/, title: "Öğren" },
    { name: "lesson", pattern: /^\/learn\/([^/]+)\/?$/, title: "Ders" },
    { name: "terms", pattern: /^\/terms\/?$/, title: "Terimler" },
    { name: "term", pattern: /^\/terms\/([^/]+)\/?$/, title: "Terim" },
    { name: "quiz", pattern: /^\/quiz\/?$/, title: "Quiz" },
    { name: "review", pattern: /^\/review\/?$/, title: "Tekrar" },
    { name: "favorites", pattern: /^\/favorites\/?$/, title: "Favoriler" },
  ];

  function getRoute() {
    const raw = location.hash.slice(1) || "/dashboard";
    const [pathname, query = ""] = raw.split("?");
    for (const route of routes) {
      const match = pathname.match(route.pattern);
      if (match) return { ...route, param: match[1], params: new URLSearchParams(query), pathname };
    }
    return { name: "not-found", title: "Sayfa bulunamadı", pathname };
  }

  function navigate(path) {
    location.hash = path.startsWith("/") ? path : `/${path}`;
  }

  namespace.router = { getRoute, navigate };
})(window.GodotApp = window.GodotApp || {});
