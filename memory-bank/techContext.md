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
- `src/js/ui-copy.js`: tamamlanmış `tr` app/UI copy tablosu ve reusable LearnGodot brand kaynağı
- `src/data/lesson-*-guided.js`: dynamically discoverable guided data
- `docs/GUIDED_LEARNING_SPEC.md`: canonical guided and localization contract

## Maintenance

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-content.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\validate-content.ps1
```

Validator checks combined/split/runtime equality; exact baseline counts; metadata; unique and valid term, lesson, quiz and related IDs; ordered global previous/next chain; exact core-course order; curriculum records; every discovered guided file's exact source topic order, quick-term, inline marker, recognize and navigation coverage. It also guards LearnGodot branding, 14/14 null completion wiring, legacy warning placement, guided inline-code linkage, `file://` constraints and root live-region misuse.

## QA Limit

Static validation and HTTP asset smoke tests are automated. The current environment may not provide a supported real/headless browser; responsive layout, dialog focus and persisted click flows then require manual browser QA.
