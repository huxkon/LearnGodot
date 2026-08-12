# Progress

## Working

- Kullanıcıya dönük ürün adı LearnGodot; root/source README, metadata, app title ve serve mesajı güncel.
- SEO Foundation canonical `https://huxkon.github.io/LearnGodot/`, homepage/social metadata, görünür Türkçe onboarding copy, `robots.txt` ve yalnız homepage'i içeren sitemap ile aktiftir.
- Sidebar, boot screen ve favicon'lar tek canonical mavi `L` brand icon asset'ini kullanır; homepage application/site-name ve minimal WebSite sinyalleri taşır.
- Dashboard, Learn, lesson/term detail, glossary, search, quiz, review ve favorites rotaları çalışır.
- Learn ekranı beginner display metadata, section grouping, sıra, açıklama, technical topics, ilerleme ve bağlama uygun CTA gösterir.
- Lesson 1–12 ortak guided registry/renderer kullanır; Lesson 12 bug'ı tekrar üretme ve hata türlerini ayırmadan Debugger/Stack Trace ile gözleme, Profiler ile ölçme, bottleneck ve kaynak ayrımından kontrollü optimizasyona ilerler.
- Lesson 2 operator prerequisite'i conditional içinde görünürdür; Collection quick-term'i Array/Dictionary bağımlılığını açıklar.
- Guided CTA state'leri başlanmadı, kısmi, topic'ler bitti ve lesson tamamlandı durumlarını ayırır.
- Review badge manual terimler ile review durumundaki quiz sorularını birlikte sayar.
- SPA root'taki geniş `aria-live` kaldırıldı; toast live region korunur.
- Curriculum, UI copy ve locale katmanları eğitim source verisinden ayrıdır.
- Non-educational app copy `GODOT_UI_COPY.tr` altında merkezileştirildi; document language resolved content locale'den gelir.
- Search `I/İ/ı/i` ve accent folding ile Türkçe/İngilizce teknik sorguları birlikte bulur.
- LocalStorage state'i bozuk veri tiplerine karşı normalize edilir; yazma engelinde anahtar bazlı session fallback eski okunabilir kalıcı değerden önce gelir ve başarılı yazmada temizlenir.
- Tema seçimi ayrı session fallback'iyle stale/engelli storage altında korunur; mobil drawer modal focus containment, breakpoint cleanup ve aynı-rota main focus davranışı taşır.
- Light normal metin/badge çiftleri en az 4.5:1, iki temadaki görünür focus ringleri test edilen yüzeylerde en az 3:1 kontrast taşır; search inputları global keyboard ringini kullanır.
- Lesson 7 Tile/TileSet/TileMapLayer ayrımı Godot 4.7.1 stable belgeleriyle hizalıdır; deprecated TileMap yalnız eski proje/eğitim bağlamında anlatılır.
- Review global empty state, yalnız term ve quiz kuyruklarının ikisi de boşsa görünür.
- “Sıradaki ders” ilk tamamlanmamış course lesson'ıdır; guided stale completion flag'i eksik topic varsa etkisizdir.
- 14/14 tamamlanınca next lesson null olur; Dashboard tekrar/sözlük eylemli completion state gösterir ve Learn'de fake sıradaki badge'i yoktur.
- Lesson 2 source, guided, previous/next ve core-course sırası Conditional → Array/Dictionary → Loop → Class/Object/Instance olarak eşitlendi.
- Guided backtick syntax güvenli inline code olarak render edilir; Lesson 2 Class/Object/Instance forward-reference'ları sadeleştirildi.
- Script, basic Signal, project-scope ve audio-loop migration'ları canonical kaynaklara işlendi.
- AGENTS agent-independent; legacy prompt uyarılı; guided standardı ve i18n planı belgeli; `.gitattributes` mevcut.

## Verified Baseline

- 346 term: 128 core, 218 recognize
- 14 lesson, 42 quiz question
- First 50 path: 50; core course: 128; full glossary: 346
- Combined/split/runtime equality ve ilişkiler validator kapsamındadır.
- Marka, legacy prompt başlangıcı, exact counts ve inline-code renderer bağlantısı validator kapsamındadır.
- Guided/source exact sıra, flattened core-course sırası, global core zinciri ve 14/14 null completion bağlantısı validator kapsamındadır.
- Guided dosyalar hard-code edilmeden keşfedilir; şu an Lesson 1–12 bulunur.
- Guided dosya syntax/registry kaydı ile landing/topic dispatch'in registry tabanlı kalması validator tarafından korunur.
- Guided topic key/order eşitliği ve guide-local prerequisite lookup kontratı validator tarafından korunur.
- SEO static validator ve `/LearnGodot/` HTTP path smoke testi homepage, robots, sitemap, CSS ve JS asset'leri için başarılıdır.
- Canonical SVG ile 16/32/48 PNG ve ICO varyantları boyut, deterministik üretim, `file://` relative path ve `/LearnGodot/` HTTP erişimi açısından doğrulandı.
- İzole gerçek Brave `file://` matrisi bütün JavaScript dosyalarını, normal/tam engelli/stale-okunabilir storage'ı, tema, search, dört review kombinasyonu, drawer/focus/breakpoint, reduced-motion cevap akışları ile bütün route ve term render'larını doğrular.
- Lesson 12 kısa gerçek Brave `file://` smoke'u guided landing, Start → `bug`, ilk ve son topic route'ları, concept map ve completion eylemini fatal UI olmadan render eder.

## Remaining

- Lesson 13–14 için guided içerik yalnız gelecekte ayrı görevlerle üretilecek.
- İngilizce curriculum/guided içerik henüz yok; locale switcher bu nedenle gösterilmiyor.
- Crawlable non-hash lesson/term URL'leri, expanded sitemap, TR/EN URL'leri, `hreflang` ve page-specific metadata Türkçe guided curriculum sonrasındaki Full SEO aşamasına bırakıldı.
