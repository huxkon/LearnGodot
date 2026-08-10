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
- `scripts/sync-content.ps1`, kaynak JSON metnini değiştirmeden `window.GODOT_LEARN_DATA` atamasına sarar. Bu script yalnızca içerik bakımı içindir; uygulamayı çalıştırmak için gerekmez.

## Verification

- `scripts/validate-content.ps1` JSON sayımlarını, benzersiz ID'leri, ders/quiz/related-term ilişkilerini, İlk 50 yolunu, gömülü JSON'un kaynakla karakter karakter eşitliğini ve ES module kalıntısı olmadığını denetler.
- `scripts/serve.ps1` ek bağımlılık gerektirmeyen, yalnızca loopback üzerinde çalışan küçük bir statik sunucudur.
- Statik taramada `fetch`, `type="module"`, `import/export`, framework, paket ve build kalıntısı bulunmadı.
- Ortamda Node.js ve desteklenen headless browser bulunmadığından otomatik tarayıcı DOM/etkileşim testi çalıştırılamadı; tarayıcı smoke testi sonraki kalite adımıdır.
