# Active Context

## Current Focus

1. dersin guided learning dönüşümü tamamlandı ve kullanıcı tarafından kalan dersler için referans uygulama olarak belirlendi. Diğer 13 ders ile genel görsel sistem henüz değiştirilmedi. Güncel odak, mevcut kalıbı koruyarak kalan derslere nasıl ölçekleneceğinin planlanmasıdır.

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
- Guided içerik `src/data/lesson-01-guided.js` içinde tutuluyor; ana database/source dosyaları değiştirilmedi.
- Ön koşullar yalnızca gerektiğinde gösteriliyor; recognize terimler ilgili core konulara dağıtıldı.
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
- 1. ders landing ekranı, sekiz ayrı guided konu rotası, inline terim dialogları, zihinsel modeller, Godot bağlamları, örnekler, yaygın hatalar, mini sorular ve net önceki/sonraki eylemleri.

## Next Steps

1. Her kalan ders için source core sırasını, gerçek ön koşulları, recognize dağılımını ve bağlam çakışmalarını ders bazında analiz et.
2. 1. dersin sekiz bölümlü guided konu şemasını ve mevcut görsel bileşenlerini koruyarak renderer/route tarafını lesson ID'den çalışan ortak yapıya genelleştir; ders başına yalnızca içerik verisi ekle.
3. Dersleri tek tek dönüştür ve her ders sonunda ID kapsamı, ilerleme ayrımı, inline terimler, önceki/sonraki akışı, mobil görünüm ve kaynak değişmezliğini doğrula.
4. Uygulama değişikliğine başlamadan önce kullanıcıdan sonraki uygulama kapsamını al; bu inceleme task'ında kod değiştirilmedi.
