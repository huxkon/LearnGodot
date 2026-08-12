# LearnGodot Canonical Content Source

Bu klasör LearnGodot'un canonical Godot, GDScript ve oyun geliştirme içerik verisini taşır. Uygulama kodu veya ilk prototip çalışma talimatı değildir.

## Güncel veri özeti

- 346 canonical term
- 128 core term
- 218 recognize term
- 14 lesson
- 42 quiz question
- First 50 learning path: 50 term

Bu değerler `content.database.json` içindeki gerçek kayıtlardan türetilir ve `scripts/validate-content.ps1` tarafından doğrulanır.

## Source-of-truth modeli

- `content.database.json`: canonical combined source
- `meta.json`, `categories.json`, `terms.json`, `lessons.json`, `quizzes.json`, `learning_paths.json`: combined source'un yapısal olarak eş split temsilleri
- `../src/data/content.js`: combined JSON'un `window.GODOT_LEARN_DATA` atamasına sarılmış runtime kopyası

Combined source, split dosyalar ve runtime wrapper sessizce drift etmemelidir. Canonical veri değişikliğinden sonra repo kökünde şunları çalıştır:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\sync-content.ps1
powershell -ExecutionPolicy Bypass -File .\scripts\validate-content.ps1
```

## Uygulama katmanları

Beginner curriculum display title, description, section ve technical topic metadata'sı `../src/data/curriculum.js` içindedir. Bu presentation katmanı historical source lesson title'larını veya stable lesson ID'lerini değiştirmez.

Guided enrichment verisi `../src/data/lesson-*-guided.js` kalıbındaki dosyalardadır. Mevcut guided dosyalar validator tarafından dinamik keşfedilir; güncel lesson kapsamı Memory Bank'te tutulur. Guided açıklamalar canonical term kayıtlarını çoğaltmaz; ortak renderer tarafından source lesson/core ID'leriyle birleştirilir. Guided standardı `../docs/GUIDED_LEARNING_SPEC.md` içinde tanımlıdır.

## Historical prompt

`VIBE_CODING_PROMPT.md` yalnız ilk prototipin historical girdisidir ve güncel proje talimatı olarak çalıştırılmamalıdır. Güncel kaynaklar:

- `../AGENTS.md`
- `../memory-bank/`
- `../docs/GUIDED_LEARNING_SPEC.md`
- `../README.md`

Source PDF'nin gerçek adı ve teknik `Atlas / Sprite Sheet` kavramları ürün markasından bağımsızdır; branding cleanup sırasında değiştirilmez.
