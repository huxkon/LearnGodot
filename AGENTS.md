# LearnGodot Project Agent Instructions

Bu projede çalışan her agent, her görevin başında `memory-bank/` altındaki altı core dosyanın tamamını okumalıdır. Bu dosyalar oturumlar arasında proje bağlamını, teknik kararları ve güncel çalışma odağını taşır.

## Core Files

1. `projectbrief.md` — ürün kapsamı ve değişmez gereksinimler
2. `productContext.md` — kullanıcı problemi ve deneyim hedefleri
3. `activeContext.md` — güncel durum, aktif kararlar ve sıradaki işler
4. `systemPatterns.md` — mimari ve kritik etkileşim kalıpları
5. `techContext.md` — teknoloji, çalışma ortamı ve doğrulama yaklaşımı
6. `progress.md` — kısa tamamlananlar listesi ve bilinen açık QA işleri

## Workflow

- Göreve başlamadan önce altı dosyanın tamamını oku ve repo durumunu doğrula.
- Task guided lesson, curriculum, quick-term, contextual recognize veya lesson pedagogy ile ilgiliyse kod değişikliğinden önce `docs/GUIDED_LEARNING_SPEC.md` dosyasının tamamını da oku.
- Source-of-truth içeriği, runtime verisini ve presentation katmanlarını birbirine karıştırma.
- Yeni bir mimari karar, önemli içerik migrasyonu veya doğrulanmış durum değişikliği olduğunda Memory Bank'i güncelle.
- Kullanıcı `update memory bank` dediğinde altı dosyanın tamamını yeniden incele; yalnızca güncel ve tekrar kullanılabilir bilgiyi tut.
- `activeContext.md` ve `progress.md` dosyalarını kısa tut. Git geçmişinde bulunan ayrıntıları sonsuz changelog olarak tekrar etme.
- Eğitim içeriğini view/component dosyalarına gömme; ders bazlı veri veya canonical source katmanında tut.
- Mevcut `file://`, klasik script, Vanilla JavaScript ve LocalStorage mimarisini koru.

Memory Bank proje hafızasıdır; agent kimliğine veya belirli bir araca bağlı değildir.
