# LearnGodot Project Brief

## Purpose

LearnGodot; Godot'u, GDScript'in temelini ve oyun geliştirme kavramlarını Türkçe ve sıralı biçimde öğreten, kurs ile başvuru sözlüğünü birleştiren taşınabilir bir beginner learning application.

## Requirements

- HTML, CSS ve Vanilla JavaScript; framework, npm, build, backend veya hesap yok.
- `index.html` doğrudan `file://` üzerinden çalışır.
- Canonical public homepage `https://huxkon.github.io/LearnGodot/` adresidir; hash route'lar ayrı crawlable sayfa sayılmaz.
- Canonical source `content.database.json`; split JSON ve runtime `content.js` bunun eşit temsilleridir.
- Eğitim içeriği güncel stable Godot 4.x'i hedefler; sürüme duyarlı anlatım resmi stable belgelerle doğrulanır.
- 14 lesson'ın canonical ID/order değeri korunur; beginner başlık ve gruplama curriculum presentation katmanından gelir.
- Dashboard, Learn, term detail, glossary, quiz, review, favorites ve global search bulunur.
- Progress, favorites, manual review ve quiz state canonical ID'lerle LocalStorage'da saklanır.
- Lesson 1–11 guided; Lesson 12–14 classic. Guided ilerleme topic ve lesson tamamlanmasını ayrı tutar.
- UI copy, curriculum metadata ve eğitim içeriği localization için ayrı katmanlardır.
- `COPY.appName` kullanıcıya dönük tek reusable brand kaynağıdır; teknik namespace ve canonical ID'ler brand'den bağımsızdır.
- Erişilebilir klavye/focus davranışı, responsive görünüm ve açık/koyu tema korunur.
- Full crawlable SEO Lesson 14 guided tamamlandıktan sonra; İngilizce sürüm ise Türkçe 14/14 guided, QA ve Full SEO sonrasında ele alınır. Özel alan adı mevcut kapsamda değildir.

## Content Rules

- Core kavram ayrıntılı öğretilir; recognize kavram ilgili core bağlamında anlamlı bir kartla tanıtılır.
- Inline grammatical quick label ile canonical quick-term title birbirinden ayrıdır.
- Source lesson taxonomy kullanıcıya gösterilen beginner curriculum olmak zorunda değildir.
- `scope`, `project-scope`, `loop` ve `audio-loop` ayrı anlamlar ve canonical ID'ler taşır.
- State ve ilişkiler translated title üzerinden değil stable ID üzerinden kurulur.

## Acceptance Baseline

346 terim (128 core, 218 recognize), 14 lesson, 42 quiz sorusu; çalışan route/state; source/split/runtime eşitliği; scalable guided validation; README ve güncel Memory Bank.
