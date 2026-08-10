# System Patterns

## Architecture

- Bağımlılıksız istemci tarafı web uygulaması; doğrudan `index.html` üzerinden `file://` ile çalışır. Statik sunucu yalnızca opsiyonel geliştirme aracıdır.
- Hash tabanlı router statik hostlarda sunucu yönlendirmesi gerektirmeden ekranları açar.
- Asıl kaynak `godot_learning_web_content/content.database.json`; runtime verisi bunun birebir `window.GODOT_LEARN_DATA` atamasına sarılmış `src/data/content.js` halidir.
- JavaScript dosyaları ES module yerine sıralı klasik script olarak yüklenir ve `window.GodotApp` namespace'i üzerinden bağımlılık paylaşır.
- `src/js/data.js` veri erişimi ve ilişki çözümleme katmanıdır.
- `src/js/storage.js` LocalStorage şeması ve ilerleme işlemlerini merkezileştirir.
- `src/js/router.js` rota eşleme ve navigasyonu yönetir.
- Görünüm fonksiyonları `src/js/views.js`, tekrar kullanılan UI üreticileri `src/js/components.js` içinde tutulur.
- Kullanıcıya dönük yeni mikro metinler `src/js/ui-copy.js` içinde tutulur.

## Script Load Order

1. `src/data/content.js`
2. `src/data/lesson-01-guided.js`
3. `src/data/lesson-02-guided.js`
4. `src/data/lesson-03-guided.js`
5. `src/js/ui-copy.js`
6. `src/js/data.js`
7. `src/js/storage.js`
8. `src/js/router.js`
9. `src/js/components.js`
10. `src/js/views.js`
11. `src/js/app.js`

Bu sıra `defer` özellikli klasik script etiketleriyle korunur. `fetch`, `import`, `export` veya bundler kullanılmaz.

## State Pattern

Kalıcı kullanıcı durumu şu anahtarlarla saklanır: `completedLessonIds`, `learnedTermIds`, `favoriteTermIds`, `reviewTermIds`, `quizResults`, `lastVisitedLessonId`. Tema tercihi `godotTheme` anahtarıyla ayrıca saklanır. `completeTerm` yalnızca tek terimi, `completeLesson` yalnızca ders durumunu değiştirir; bu iki ilerleme birbirinden bağımsızdır. Kullanıcı aksiyonları storage katmanını güncelledikten sonra ilgili görünümü yeniden render eder.

## Interaction Patterns

- Uygulama seviyesindeki event delegation dinamik render edilen butonların davranışlarını merkezileştirir.
- Global arama native `dialog` kullanır; Ctrl/Cmd+K, ok tuşları, Enter ve Escape desteklenir.
- Mobil navigasyon CSS sınıfıyla açılan drawer ve scrim yapısını kullanır.
- Tema CSS custom properties üzerinden değiştirilir ve sistem tercihi ilk varsayılan olarak kabul edilir.
- Quiz yanıtları kullanıcı isteyene kadar gizlidir; öz değerlendirme `correct` veya `review` olarak saklanır.
- `window.GODOT_LESSON_GUIDES`, guided içeriği lesson ID ile kaydeden registry'dir. Görünüm ve eylemler ders numarasını hard-code etmeden bu registry üzerinden çalışır.
- `/learn/:lessonId` kayıtlı bir guided dersin planıdır; `/learn/:lessonId/:termId` tek konu çalışma ekranıdır.
- “Sonraki Konu” eylemi açık terimi tamamlar ve ilgili guide'ın sıradaki terimine gider. Son eylem guide içindeki tüm core terimleri kontrol ettikten sonra dersi tamamlar.
- Guided metindeki `[[quickId|inlineLabel]]` işaretinde label yalnızca cümlenin gramerine uyan tıklanabilir surface metindir; modal/list başlığı olarak kullanılmaz.
- Her guide'ın `quickTerms` kataloğu `{ canonicalTitle, shortExplanation, example?, context? }` kayıtları taşır. Her topic gerekli kavramları explicit `quickTermIds` listesiyle seçer.
- Renderer “Bilmediğim Terimler” listesini metindeki işaretleri tarayarak değil `quickTermIds` üzerinden üretir. `Set` tabanlı seçim aynı ID'nin duplicate görünmesini engeller.
- Inline işaret explicit seçili değilse renderer onu düğmeye dönüştürmez; yalnızca normal metin olarak gösterir. Modal da yalnızca açık topic tarafından seçilmiş kayıtları açar.
- Recognize terimler uzun konu olmaz; ilgili core ekranında ortak kart renderer'ı ile “Kısaca”, “Bu konuyla bağlantısı”, “Neden burada?”, örnek/model ve “Karıştırma” alanlarında görünür.
- Konu verisindeki opsiyonel `bridge` kavram geçişini, guide düzeyindeki `summary` ise son konuda ders ilişkilerini görünür kılar.

## Context Overrides

- Kaynak JSON immutable tutulur.
- `src/js/data.js`, `scope` için lesson-02'de programlama kapsamı ve lesson-14'te proje kapsamı gösterir.
- Aynı katman `loop` için lesson-02'de programlama döngüsü ve lesson-11'de ses döngüsü gösterir.
- Genel sözlük/terim detayında iki anlam birlikte ve açık bir bağlam ayrımıyla sunulur.

## Content Relationships

- Dersler `core_term_ids` ve `recognize_term_ids` üzerinden terimlere bağlanır.
- Terimler `related_term_ids` ile birbirine bağlanır.
- Temel terim sırası `previous_core_term_id` ve `next_core_term_id` ile izlenir.
- Quizler `lesson_id`, dersler `quiz_id` ile eşleşir.
- İlk 50 ilerlemesi `learning_paths.paths[id=first-50].term_ids` üzerinden hesaplanır.
