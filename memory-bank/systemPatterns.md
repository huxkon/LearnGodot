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
2. `src/js/ui-copy.js`
3. `src/js/data.js`
4. `src/js/storage.js`
5. `src/js/router.js`
6. `src/js/components.js`
7. `src/js/views.js`
8. `src/js/app.js`

Bu sıra `defer` özellikli klasik script etiketleriyle korunur. `fetch`, `import`, `export` veya bundler kullanılmaz.

## State Pattern

Kalıcı kullanıcı durumu şu anahtarlarla saklanır: `completedLessonIds`, `learnedTermIds`, `favoriteTermIds`, `reviewTermIds`, `quizResults`, `lastVisitedLessonId`. Tema tercihi `godotTheme` anahtarıyla ayrıca saklanır. Kullanıcı aksiyonları storage katmanını güncelledikten sonra ilgili görünümü yeniden render eder.

## Interaction Patterns

- Uygulama seviyesindeki event delegation dinamik render edilen butonların davranışlarını merkezileştirir.
- Global arama native `dialog` kullanır; Ctrl/Cmd+K, ok tuşları, Enter ve Escape desteklenir.
- Mobil navigasyon CSS sınıfıyla açılan drawer ve scrim yapısını kullanır.
- Tema CSS custom properties üzerinden değiştirilir ve sistem tercihi ilk varsayılan olarak kabul edilir.
- Quiz yanıtları kullanıcı isteyene kadar gizlidir; öz değerlendirme `correct` veya `review` olarak saklanır.

## Content Relationships

- Dersler `core_term_ids` ve `recognize_term_ids` üzerinden terimlere bağlanır.
- Terimler `related_term_ids` ile birbirine bağlanır.
- Temel terim sırası `previous_core_term_id` ve `next_core_term_id` ile izlenir.
- Quizler `lesson_id`, dersler `quiz_id` ile eşleşir.
- İlk 50 ilerlemesi `learning_paths.paths[id=first-50].term_ids` üzerinden hesaplanır.
