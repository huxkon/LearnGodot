# System Patterns

## Architecture

- Klasik script kullanan, hash-routed, dependency-free SPA.
- `src/js/site-config.js` public site adı, production base URL, default locale, title ve description için küçük merkezi metadata kaynağıdır.
- `assets/brand/learngodot-icon.svg` tek canonical marka ikonudur; sidebar, boot ve favicon varyantları aynı mavi rounded-square / beyaz `L` kimliğini kullanır.
- Canonical homepage sabit production URL'sinde kalır; runtime hash route title'ları değişebilir fakat canonical hash'e çevrilmez.
- `content.database.json` canonical combined source; split JSON dosyaları ve `src/data/content.js` eşit temsillerdir.
- `src/data/locale.js` geçerli content locale'ini, `curriculum.js` beginner presentation metadata'sını sağlar.
- `src/js/ui-copy.js` brand, navigation, action, status, empty state, toast, search, quiz/review ve ARIA copy'sini eğitim içeriğinden ayırır.
- `window.GodotApp` data, storage, router, components, views ve app katmanlarının ortak namespace'idir.
- `window.GODOT_LESSON_GUIDES` guided dosyaların lesson ID ile kayıt olduğu registry'dir.

## Load Order

1. site config
2. content
3. locale
4. curriculum
5. bulunan guided lesson veri dosyaları
6. UI copy
7. data, storage, router, components, views, app

`defer` sırası korunur; fetch/import/export yoktur.

## Content and Presentation

- Source lesson `id`, order ve ilişkileri kalıcıdır.
- `data.js` lesson kayıtlarını locale'e uygun curriculum `displayTitle`, `displayDescription`, `section` ve `technicalTopics` ile zenginleştirir.
- Canonical source kaydı UI bağlamında yeniden anlamlandırılmaz; farklı anlamlar farklı ID kullanır.
- Guided renderer lesson numarasını hard-code etmez. Topic order, quick terms, recognize coverage, summary ve navigation guide verisinden gelir.
- Guided `order`, source lesson `core_term_ids` ile yalnız aynı kümeyi değil birebir aynı sırayı taşır; core-course bütün lesson core listelerinin sıralı birleşimidir.

## State

- `completedLessonIds`, `learnedTermIds`, `favoriteTermIds`, `reviewTermIds`, `quizResults`, `lastVisitedLessonId` canonical ID tabanlıdır.
- `completeTerm` ve `completeLesson` ayrı işlemlerdir.
- `reviewCount`, manual review term sayısı ile quiz `review` question sayısını toplar.
- `completedLessonIds` getter'ı classic lesson flag'lerini olduğu gibi korur; guided lesson flag'ini mevcut guide topic kümesinin tamamlanmasına göre savunmacı biçimde filtreler.
- `preferredLocale` yalnız tamamlanmış content locale'ine çözülür; şu an güvenli fallback `tr`'dir.
- `getNextCourseLesson`, ilk tamamlanmamış lesson'ı; kurs tamamen bittiyse `null` döndürür. Dashboard null durumunu ayrı completion hero ile karşılar.

## Guided UX

- `/learn/:lessonId` landing, `/learn/:lessonId/:termId` topic rotasıdır.
- CTA state'i progress durumundan hesaplanır; tüm topic'ler bitince ilk topic'e yanlış devam dönüşü yapılmaz.
- `richGuideText`, önce data metnini escape eder; hem `[[quickId|label]]` hem güvenli tek-backtick inline code syntax'ını ortak akışta render eder.
- Quick-term katalog canonical title taşır; `[[id|label]]` içindeki label yalnız cümle grameridir.
- Recognize kartı tanım yanında core bağlantısı, yerleştirme nedeni ve karıştırma ayrımı sağlar.
- Opsiyonel bridge geçişi, summary ders ilişkisini açıklar.

## Accessibility

- Keyboard routing/dialog davranışı korunur.
- Tüm SPA container canlı bölge değildir; yalnız toast/status için ayrı polite live region kullanılır.
