# Active Context

## Current State

- Final kullanıcı markası LearnGodot'tur; `window.GodotApp`, route, canonical ID ve LocalStorage anahtarları değişmedi.
- Production canonical URL `https://huxkon.github.io/LearnGodot/` değeridir. Homepage metadata, sosyal metadata, `robots.txt` ve tek-URL sitemap içeren SEO Foundation aktiftir.
- Hash SPA bilinçli olarak korunur; hash lesson/term route'ları canonical veya sitemap URL'si yapılmaz.
- Uygulama beginner curriculum sunumunu source taxonomy'den ayırır; 14 lesson beş bölümden oluşan kompakt course outline olarak görünür.
- Lesson ID'leri, route'lar ve LocalStorage progress anahtarları değişmedi.
- Lesson 1–7 guided; Lesson 8–14 klasik içerik sunumundadır.
- Canonical veri 346 terim içerir: 128 core, 218 recognize.
- Lesson 3 core akışında Node'dan sonra `script`, ardından Scene bulunur.
- Basic `signal` Lesson 4 core metadata'sında input/polling sonrasına konumlandı; ileri event-driven architecture Lesson 9'da ayrıdır.
- Lesson 4 canonical/guided sırası Game Loop → Frame/FPS → delta → `_process()` → `_physics_process()` → Input Action/Input Map → Polling/Event-driven Input → Signal → Timer/Cooldown olarak hizalıdır.
- Lesson 5 canonical/guided sırası Coordinate System → Vector2/Vector3 → Magnitude/Length → Normalize → Local/Global Coordinates → Transform → Interpolation/Lerp → Distance/Direction olarak korunur.
- Lesson 6 canonical/guided sırası Lesson 5'e doğal hareket köprüsü için Velocity/Acceleration → Collision → CollisionShape → CharacterBody → RigidBody → StaticBody → Area → Collision Layer/Mask → RayCast/ShapeCast olarak hizalıdır.
- Lesson 7 canonical/guided sırası Sprite/Texture → Atlas/Sprite Sheet → Tile/TileMap → Camera → Viewport → Material/Shader → AnimationPlayer → Tween → Draw Call olarak korunur.
- `scope` / `project-scope` ve `loop` / `audio-loop` farklı canonical kayıtlardır.
- Combined source, split JSON dosyaları ve runtime veri aynı source-of-truth'un doğrulanan temsilleridir.
- Locale altyapısı `tr` içerik ile aktiftir; `en` içerik tamamlanana kadar kullanıcıya yarım bir dil modu sunulmaz.
- App/UI metinleri `GODOT_UI_COPY.tr` altında merkezidir; curriculum ve guided eğitim içeriği bu tabloya taşınmaz.
- Search normalization Türkçe/İngilizce `I/İ/ı/i` ile accent varyasyonlarını ortak fold eder.
- Course “Sıradaki ders” durumu ilk tamamlanmamış lesson'dır; `lastVisitedLessonId` bunu değiştirmez.
- Bütün lesson'lar tamamlandığında next course lesson `null` olur; Dashboard course-complete state gösterir ve Learn ekranında sıradaki badge'i kalmaz.
- Guided completion flag'i yalnız mevcut guide order'ın bütün topic'leri öğrenildiyse etkili kabul edilir.
- Lesson 2 canonical/guided sırası Conditional → Array/Dictionary → Loop → Class/Object/Instance olarak hizalıdır.

## Current Focus

- Yeni guided lesson ancak açık bir görev kapsamıyla, `docs/GUIDED_LEARNING_SPEC.md` standardına göre eklenmeli.
- Full crawlable lesson/term SEO mimarisi Türkçe guided curriculum tamamlandıktan sonra ayrı bir aşamada ele alınmalı.
- İlk gerçek tarayıcı QA turunda search, dört review kombinasyonu, guided inline code, responsive görünüm, dialog focus ve LocalStorage devamlılığı kontrol edilmeli.
- Yeni içerik eklenince sync ve dynamic validator birlikte çalıştırılmalı.

## Constraints

- `file://`, Vanilla JavaScript, `window.GodotApp` ve no-build mimarisi korunur.
- State translated title değil canonical ID üzerinden tutulur.
- Memory Bank mevcut durumu anlatır; ayrıntılı değişiklik geçmişi Git'te kalır.
