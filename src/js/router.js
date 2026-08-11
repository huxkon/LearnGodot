(function initRouter(namespace) {
  "use strict";
  const { COPY } = namespace;

  const routes = [
    { name: "dashboard", pattern: /^\/?$/, title: COPY.nav.dashboard },
    { name: "dashboard", pattern: /^\/dashboard\/?$/, title: COPY.nav.dashboard },
    { name: "learn", pattern: /^\/learn\/?$/, title: COPY.nav.learn },
    { name: "lesson", pattern: /^\/learn\/([^/]+)\/?$/, title: COPY.routeTitles.lesson },
    { name: "lesson-topic", pattern: /^\/learn\/([^/]+)\/([^/]+)\/?$/, title: COPY.routeTitles.topic },
    { name: "terms", pattern: /^\/terms\/?$/, title: COPY.nav.terms },
    { name: "term", pattern: /^\/terms\/([^/]+)\/?$/, title: COPY.routeTitles.term },
    { name: "quiz", pattern: /^\/quiz\/?$/, title: COPY.nav.quiz },
    { name: "review", pattern: /^\/review\/?$/, title: COPY.nav.review },
    { name: "favorites", pattern: /^\/favorites\/?$/, title: COPY.nav.favorites },
  ];

  function getRoute() {
    const raw = location.hash.slice(1) || "/dashboard";
    const [pathname, query = ""] = raw.split("?");
    for (const route of routes) {
      const match = pathname.match(route.pattern);
      if (match) return { ...route, param: match[1], subparam: match[2], params: new URLSearchParams(query), pathname };
    }
    return { name: "not-found", title: COPY.routeTitles.notFound, pathname };
  }

  function navigate(path) {
    location.hash = path.startsWith("/") ? path : `/${path}`;
  }

  namespace.router = { getRoute, navigate };
})(window.GodotApp = window.GodotApp || {});
