# Progress

## Working

- Kullanıcıya dönük ürün adı LearnGodot; root/source README, metadata, app title ve serve mesajı güncel.
- SEO Foundation canonical `https://huxkon.github.io/LearnGodot/`, homepage/social metadata, görünür Türkçe onboarding copy, `robots.txt` ve yalnız homepage'i içeren sitemap ile aktiftir.
- Sidebar, boot screen ve favicon'lar tek canonical mavi `L` brand icon asset'ini kullanır; homepage application/site-name ve minimal WebSite sinyalleri taşır.
- Dashboard, Learn, lesson/term detail, glossary, search, quiz, review ve favorites rotaları çalışır.
- Learn ekranı beginner display metadata, section grouping, sıra, açıklama, technical topics, ilerleme ve bağlama uygun CTA gösterir.
- Lesson 1–7 ortak guided registry/renderer kullanır; Lesson 7 görsel veriden camera/viewport ayrımına, görünüm ayarlarına, animasyona ve draw call'a uzanan akışı bağlar.
- Lesson 2 operator prerequisite'i conditional içinde görünürdür; Collection quick-term'i Array/Dictionary bağımlılığını açıklar.
- Guided CTA state'leri başlanmadı, kısmi, topic'ler bitti ve lesson tamamlandı durumlarını ayırır.
- Review badge manual terimler ile review durumundaki quiz sorularını birlikte sayar.
- SPA root'taki geniş `aria-live` kaldırıldı; toast live region korunur.
- Curriculum, UI copy ve locale katmanları eğitim source verisinden ayrıdır.
- Non-educational app copy `GODOT_UI_COPY.tr` altında merkezileştirildi; document language resolved content locale'den gelir.
- Search `I/İ/ı/i` ve accent folding ile Türkçe/İngilizce teknik sorguları birlikte bulur.
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
- Guided dosyalar hard-code edilmeden keşfedilir; şu an Lesson 1–7 bulunur.
- Guided dosya syntax/registry kaydı ile landing/topic dispatch'in registry tabanlı kalması validator tarafından korunur.
- Guided topic key/order eşitliği ve guide-local prerequisite lookup kontratı validator tarafından korunur.
- SEO static validator ve `/LearnGodot/` HTTP path smoke testi homepage, robots, sitemap, CSS ve JS asset'leri için başarılıdır.
- Canonical SVG ile 16/32/48 PNG ve ICO varyantları boyut, deterministik üretim, `file://` relative path ve `/LearnGodot/` HTTP erişimi açısından doğrulandı.

## Remaining

- Lesson 8–14 için guided içerik yalnız gelecekte ayrı görevlerle üretilecek.
- İngilizce curriculum/guided içerik henüz yok; locale switcher bu nedenle gösterilmiyor.
- Crawlable non-hash lesson/term URL'leri, expanded sitemap, TR/EN URL'leri, `hreflang` ve page-specific metadata Türkçe guided curriculum sonrasındaki Full SEO aşamasına bırakıldı.
- Desteklenen bir gerçek/headless browser bulunduğunda search, LocalStorage migration, review kombinasyonları, inline code ve focus davranışı etkileşimsel olarak doğrulanmalı.
