# Tech Context

## Stack and Constraints

- Semantic HTML5, modern CSS, classic Vanilla JavaScript, LocalStorage
- No Node/npm/framework/TypeScript/bundler/backend
- `file://` compatible; optional PowerShell loopback server
- Windows development; `.gitattributes` text LF, PowerShell CRLF standardı uygular

## Key Files

- `godot_learning_web_content/content.database.json`: canonical combined data
- split JSON files: structurally equal source representations
- `src/data/content.js`: synchronized runtime wrapper
- `src/data/locale.js`, `curriculum.js`: localization-ready presentation
- `src/js/site-config.js`: canonical public-site metadata constants
- `assets/brand/learngodot-icon.svg`: canonical LearnGodot brand icon; root favicon PNG/ICO dosyaları bunun raster varyantlarıdır
- `src/js/ui-copy.js`: tamamlanmış `tr` app/UI copy tablosu ve reusable LearnGodot brand kaynağı
- `src/data/lesson-*-guided.js`: dynamically discoverable guided data
- `docs/GUIDED_LEARNING_SPEC.md`: canonical guided and localization contract

## Maintenance

Sürüme duyarlı içerik resmi Godot stable belgeleriyle kontrol edilir. Son kontroller 2026-08-12 tarihinde [Godot 4.7.1 stable release](https://godotengine.org/article/maintenance-release-godot-4-7-1/), [TileMap](https://docs.godotengine.org/en/stable/classes/class_tilemap.html), [TileMapLayer](https://docs.godotengine.org/en/stable/classes/class_tilemaplayer.html), [Debugger panel](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/debugger_panel.html), [The Profiler](https://docs.godotengine.org/en/stable/tutorials/scripting/debug/the_profiler.html) ve [General optimization tips](https://docs.godotengine.org/en/stable/tutorials/performance/general_optimization.html) belgeleriyle yapıldı.

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-content.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\validate-content.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\serve.ps1 -BasePath LearnGodot
powershell -ExecutionPolicy Bypass -File .\scripts\generate-brand-icons.ps1
```

Validator checks combined/split/runtime equality; exact baseline counts; metadata; unique and valid term, lesson, quiz and related IDs; ordered global previous/next chain; exact core-course order; curriculum records; every discovered guided file's exact source topic order, topic-key/order equality, guide-local prerequisites, quick-term, inline marker, recognize and navigation coverage. Guided dosyalar için string syntax guard, tekil runtime registry kaydı, script load order ve registry tabanlı generic landing/topic dispatch de korunur. Validator ayrıca SEO title/description/canonical, robots/sitemap, LearnGodot branding, 14/14 null completion wiring, legacy warning placement, guided inline-code linkage, `file://` constraints, root live-region misuse ve token/composite tabanlı WCAG metin/focus kontrast kontrollerini yapar. `serve.ps1 -BasePath LearnGodot` GitHub Pages proje yolunu localde taklit eder.

## QA Limit

Static validation ve HTTP asset smoke otomasyona ek olarak izole headless Brave kalite kapısı vardır. `file://` matrisi script parse, route render, storage/theme fallback, search/review, responsive drawer ve cevap odağını; `/LearnGodot/` smoke'u gerçek alt-yol asset yüklemesini doğrular.
