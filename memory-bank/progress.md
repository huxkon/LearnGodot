# Progress

## Completed

- `AGENTS.md` okundu.
- Kaynak dosya listesi, README ve ana prompt incelendi.
- `content.database.json` ana yapısı ve ilişkileri doğrulandı.
- Altı zorunlu memory bank dosyası oluşturuldu.
- Hash router, app shell, desktop sidebar ve mobil drawer tamamlandı.
- Dashboard, Learn, Lesson Detail, Glossary, Term Detail, Quiz, Review ve Favorites ekranları tamamlandı.
- Data layer, LocalStorage ilerlemesi, global arama, tema ve responsive stiller tamamlandı.
- GDScript kod blokları, ilgili terim linkleri ve önceki/sonraki temel terim navigasyonu tamamlandı.
- README, yerel statik sunucu ve otomatik içerik doğrulama scripti eklendi.
- Veri doğrulaması başarılı: 343 terim, 14 ders, 42 soru, 50 terimlik İlk 50 yolu ve geçerli ilişkiler.
- Kaynak ile çalışma JSON kopyasının SHA-256 hash değerleri eşleşiyor.
- HTTP smoke-test başarılı: giriş, JSON ve JS 200/doğru MIME; eksik kaynak 404.
- Frameworksüz çalışma şartı kesinleştirildi: proje yalnızca HTML, CSS ve Vanilla JavaScript kullanıyor.
- `fetch` ve ES module mimarisi kaldırıldı; tüm dosyalar `window.GodotApp` namespace'ini kullanan klasik scriptlere geçirildi.
- Kaynak JSON, eğitim içeriği değişmeden `src/data/content.js` içindeki `window.GODOT_LEARN_DATA` atamasına dönüştürüldü.
- `index.html` doğrudan çift tıklamayla çalışacak sıralı klasik script yükleme düzenine geçirildi.
- Opsiyonel `scripts/sync-content.ps1` bakım aracı ve doğrudan açılışa uygun README eklendi.
- Son doğrulamada kaynak ve runtime verisi karakter karakter aynı bulundu; `fetch`, ES module, framework, paket ve build kalıntısı bulunmadı.
- Yalnızca 1. ders için guided landing ve sekiz sıralı core konu ekranı oluşturuldu; diğer 13 ders değiştirilmedi.
- Her guided konuda 30 saniyelik açıklama, zihinsel model, ihtiyaç, Godot bağlamı, örnek, inline bilinmeyen terimler, yaygın hata ve mini kontrol sorusu eklendi.
- On recognize terimin tamamı ilgili core konulara “Bunu duyarsan tanı” kutuları olarak dağıtıldı.
- Önceki/Sonraki Konu ve son konudaki Dersi Tamamla akışı bağlandı.
- `learnedTermIds` tek tek konu geçişlerinde; `completedLessonIds` yalnızca ders bitişinde güncellenecek şekilde ayrıldı.
- Scope ve Loop için programlama/proje yönetimi ile programlama/audio bağlam düzeltmeleri uygulama katmanında yapıldı; kaynak database değiştirilmedi.
- Guided içerik kapsam doğrulaması başarılı: 8/8 core, 10/10 recognize ve her core için 8 zorunlu öğretim alanı mevcut.
- Kaynak JSON ile runtime verisinin birebir eşitliği yeniden doğrulandı; bütün direct-file assetleri mevcut.

## Remaining / Optional QA

- Ortamda Node.js veya headless browser olmadığı için otomatik browser interaction testi çalışmadı. Gerçek tarayıcıda responsive ve etkileşim smoke testi önerilir.
- Dağıtım bu MVP görevinin kapsamında değildi.

## Latest Review

- `AGENTS.md`, altı memory-bank dosyası, mevcut uygulama mimarisi, 1. ders guided veri/rota/storage/interaction zinciri ve `godot_learning_web_content` kaynak paketi yeniden incelendi.
- Kullanıcı 1. dersi kalan dersler için referans uygulama olarak belirledi.
- Kalan 13 derste toplam 118 core ve 176 recognize referansı bulunuyor; `scope`, `loop` ve `repository` çoklu ders bağlamında özel dikkat gerektiriyor.
- Bu inceleme aşamasında uygulama kodu değiştirilmedi; yalnızca plan ve denetim sonucu memory bank'e kaydedildi.

## Known Data Note

Metadata `core_terms: 126` bildirirken gerçek `tier: core` sayısı 125. İçerik değiştirilmez; UI gerçek veri üzerinden hesap yapar.
