# Tech Context

## Stack

- Semantic HTML5
- Modern CSS (custom properties, grid, container-friendly responsive düzen)
- Klasik Vanilla JavaScript dosyaları
- JavaScript globaline sarılmış JSON içerik verisi
- LocalStorage

## Runtime and Constraints

- Node.js, npm, framework, TypeScript, paket yöneticisi veya build adımı kullanılmaz.
- Uygulama `fetch` veya ES module kullanmaz; `index.html` doğrudan `file://` üzerinden açılabilir.
- Hash routing statik yayın ortamıyla uyumludur.
- Kaynak paket `godot_learning_web_content/` altında korunur; runtime verisi `src/data/content.js` olur.
- `src/data/lesson-01-guided.js`, `src/data/lesson-02-guided.js` ve `src/data/lesson-03-guided.js`, ilk üç dersin doğrulanmış kaynak kavramlarını yeni başlayanlara uygun öğretim adımlarına dönüştüren ek katmanlardır; ana JSON'u değiştirmez.
- `scripts/sync-content.ps1`, kaynak JSON metnini değiştirmeden `window.GODOT_LEARN_DATA` atamasına sarar. Bu script yalnızca içerik bakımı içindir; uygulamayı çalıştırmak için gerekmez.

## Verification

- `scripts/validate-content.ps1` JSON sayımlarını, benzersiz ID'leri, ders/quiz/related-term ilişkilerini, İlk 50 yolunu, gömülü JSON'un kaynakla karakter karakter eşitliğini ve ES module kalıntısı olmadığını denetler.
- `scripts/serve.ps1` ek bağımlılık gerektirmeyen, yalnızca loopback üzerinde çalışan küçük bir statik sunucudur.
- Statik taramada `fetch`, `type="module"`, `import/export`, framework, paket ve build kalıntısı bulunmadı.
- Doğrulama scripti 1–3. derslerin bütün core/recognize ID'lerini, her recognize terimin tam bir bağlamsal karta yalnızca bir kez yerleşmesini, bütün core konuların zorunlu öğretim alanlarını, ders özetlerini ve guided rota/aksiyon bağlantılarını kontrol eder.
- Quick-term doğrulaması her katalog kaydında `canonicalTitle` ve `shortExplanation` bulunmasını; topic listelerinde duplicate olmamasını; seçilen bütün ID'lerin katalogda bulunmasını; katalog kayıtlarının topicler tarafından kullanmasını ve bütün inline işaretlerin explicit seçime bağlı olmasını denetler.
- Son HTTP smoke testinde index, CSS, ana veri, iki guided veri dosyası ve bütün klasik JS dosyaları 200/doğru MIME ile yüklendi.
- Son kontrolde `content.js` kaynak JSON ile karakter karakter aynı kaldı; bütün doğrudan dosya assetleri bulundu ve ders/terim tamamlama fonksiyonları ayrılmış halde doğrulandı.
- Ortamda Node.js ve desteklenen headless browser bulunmadığından otomatik tarayıcı DOM/etkileşim testi çalıştırılamadı; tarayıcı smoke testi sonraki kalite adımıdır.
