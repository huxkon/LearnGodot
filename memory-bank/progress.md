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

## Remaining / Optional QA

- Ortamda Node.js veya headless browser olmadığı için otomatik browser interaction testi çalışmadı. Gerçek tarayıcıda responsive ve etkileşim smoke testi önerilir.
- Dağıtım bu MVP görevinin kapsamında değildi.

## Known Data Note

Metadata `core_terms: 126` bildirirken gerçek `tier: core` sayısı 125. İçerik değiştirilmez; UI gerçek veri üzerinden hesap yapar.
