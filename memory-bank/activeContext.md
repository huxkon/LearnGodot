# Active Context

## Current Focus

1. ve 2. dersin guided quick-term sistemi canonical kavram adı ile cümledeki çekimli inline label'ı ayıracak biçimde düzeltildi. Recognize kartlarının bağlamsal yapısı korunuyor; Ders 3–14 klasik sunumu koruyor. Güncel odak gerçek tarayıcı QA'sı ve kullanıcı onayı sonrasında dersleri tek tek dönüştürmektir.

## Verified Source Facts

- Veri dosyasında 343 terim, 14 ders, 14 quiz grubu ve toplam 42 açık hatırlama sorusu var.
- Gerçek tier sayımı 125 `core`, 218 `recognize`; metadata 126 core diyor. Arayüz hesaplarında gerçek diziler kullanılmalı.
- 14 kategori ve üç öğrenme yolu var; `first-50` yolu tam 50 terim içeriyor.
- 18 terimde kod örneği bulunuyor.
- İlgili terim ve ders terim referanslarında eksik ID bulunmadı.
- Derslerde toplam 312 terim referansı, 309 benzersiz terim var; bazı terimler birden fazla derste geçiyor.

## Implementation Decisions

- Yalnızca HTML, CSS ve klasik Vanilla JavaScript kullanan SPA kuruldu.
- Statik host uyumluluğu için hash router kullanıldı.
- `file://` kısıtlarını önlemek için `fetch` ve ES module kaldırıldı.
- İçerik değiştirilmeden kaynak JSON `window.GODOT_LEARN_DATA` atamasıyla `src/data/content.js` içine sarıldı; metin eşitliği doğrulandı.
- Modüller `window.GodotApp` namespace'i kullanan sıralı klasik scriptlere dönüştürüldü.
- Harici font veya runtime bağımlılığı eklenmedi; sistem fontları kullanıldı.
- `core` ve `recognize` sunumları ayrıldı; bütün içerik ve ilişkiler data layer üzerinden çözülüyor.
- Quizde yanlış/yeniden çalışma seçilen sorular Review ekranında, manuel işaretlenen terimlerden ayrı olarak gösteriliyor.
- 1. dersin kaynak sırası pedagojik olarak korundu: Game Engine → Editor → Project → Asset → API → Library/Framework/Plugin → Build/Export → Runtime.
- 2. dersin guided sırası: Variable → Constant → Data Type → Dynamic/Static Typing → Function/Method → Parameter/Argument → Return Value → Scope → Conditional → Array/Dictionary → Loop → Class/Object/Instance. Collection, loop'un doğal ön koşulu olduğu için kaynak liste sunumunda loop'tan önce gösterilir.
- Guided içerik ders bazlı `src/data/lesson-01-guided.js` ve `src/data/lesson-02-guided.js` içinde tutuluyor; ana database/source dosyaları değiştirilmedi.
- Ön koşullar yalnızca gerektiğinde gösteriliyor; recognize terimler ilgili core konulara dağıtıldı.
- Ortak recognize kartları kısa tanım, core bağlantısı, yerleştirme nedeni ve kavram ayrımı içeriyor. 1. dersteki `pipeline` yalnızca Asset altında, `platform` yalnızca Build/Export altında gösteriliyor; Runtime'a zayıf tekrar eklenmiyor.
- Project → Repository ayrımı Godot project dosyaları ile Git değişiklik geçmişini ayrı katmanlar olarak açıklar.
- Inline quick terms guide düzeyinde canonical katalog, topic düzeyinde explicit `quickTermIds` kullanıyor. Popup başlığı tıklanan surface label'dan değil `canonicalTitle` alanından geliyor; kısa açıklama ve isteğe bağlı örnek ayrı gösteriliyor.
- Lesson 1 ve 2'nin her birinde 14 curated quick-term bulunuyor. Normal Türkçe/tekrar niteliğindeki işaretler kaldırıldı; aynı ID listede yalnızca bir kez gösteriliyor.
- Opsiyonel bridge ve ders sonu summary ortak renderer tarafından üretiliyor.
- Ders tamamlanması ile terim tamamlanması storage katmanında ayrıldı.
- Scope ve Loop kavramlarının karışmış anlamları lesson context override ile düzeltildi.

## Implemented Features

- Dashboard: devam edilen ders, ders/temel terim/İlk 50 ilerlemesi, tekrar kuyruğu.
- Learn ve Lesson Detail: 14 ders, temel/tanıma terimleri, öğrenildi ve ders tamamlandı durumları.
- Glossary ve Term Detail: arama, harf/seviye/kategori filtreleri, alias, kod, ilişkiler ve temel terim navigasyonu.
- Quiz, Review ve Favorites akışları.
- Ctrl/Cmd+K global arama ve klavye navigasyonu.
- LocalStorage kalıcılığı, açık/koyu tema, responsive sidebar drawer ve reduced-motion desteği.
- README, içerik senkronizasyon/doğrulama scriptleri ve opsiyonel yerel sunucu.
- `index.html` dosyasına çift tıklayarak çalışma; sunucu veya kurulum gerektirmeme.
- 1. ve 2. ders landing ekranları, toplam yirmi ayrı guided konu rotası, inline terim dialogları, zihinsel modeller, Godot bağlamları, örnekler, yaygın hatalar, mini sorular ve net önceki/sonraki eylemleri.

## Next Steps

1. Gerçek tarayıcıda file:// açılış, 1. ve 2. ders başla/devam et, önceki/sonraki, cevap açma, inline dialog, son konu özeti ve LocalStorage yenileme akışlarını elle doğrula.
2. Variable ekranında `adıdır` inline label'ının modalda `Identifier (Tanımlayıcı)` başlığını; canonical listenin duplicate ve çekimli label içermediğini gerçek tarayıcıda kontrol et.
3. Mobil genişlikte quick-term modalını, zengin recognize kartlarını, bridge akışlarını, sticky guided navigasyonu ve ders özetini görsel olarak kontrol et.
4. Kullanıcı yeni bir ders kapsamı verdiğinde yalnızca o dersin source core sırasını, ön koşullarını, recognize dağılımını ve bağlam çakışmalarını analiz edip ayrı guide verisi ekle; quick-term'leri explicit curate et.
5. Ders 3–14'ü topluca veya kullanıcı onayı olmadan guided yapıya dönüştürme.
