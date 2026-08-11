# Active Context

## Current State

- Final kullanıcı markası LearnGodot'tur; `window.GodotApp`, route, canonical ID ve LocalStorage anahtarları değişmedi.
- Uygulama beginner curriculum sunumunu source taxonomy'den ayırır; 14 lesson beş bölümden oluşan kompakt course outline olarak görünür.
- Lesson ID'leri, route'lar ve LocalStorage progress anahtarları değişmedi.
- Lesson 1–3 guided; Lesson 4–14 klasik içerik sunumundadır ve bu görevde guided içerik üretilmedi.
- Canonical veri 346 terim içerir: 128 core, 218 recognize.
- Lesson 3 core akışında Node'dan sonra `script`, ardından Scene bulunur.
- Basic `signal` Lesson 4 core metadata'sında input/polling sonrasına konumlandı; ileri event-driven architecture Lesson 9'da ayrıdır.
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
- İlk gerçek tarayıcı QA turunda search, dört review kombinasyonu, guided inline code, responsive görünüm, dialog focus ve LocalStorage devamlılığı kontrol edilmeli.
- Yeni içerik eklenince sync ve dynamic validator birlikte çalıştırılmalı.

## Constraints

- `file://`, Vanilla JavaScript, `window.GodotApp` ve no-build mimarisi korunur.
- State translated title değil canonical ID üzerinden tutulur.
- Memory Bank mevcut durumu anlatır; ayrıntılı değişiklik geçmişi Git'te kalır.
