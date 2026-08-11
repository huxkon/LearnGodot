# SEO

## Current SEO Foundation

LearnGodot'un canonical public ana sayfası `https://huxkon.github.io/LearnGodot/` adresidir. Mevcut foundation ana sayfayı indexlenebilir ve paylaşılabilir kılar; temel metadata ve sosyal metadata, `robots.txt` ve yalnız gerçek crawlable ana sayfayı içeren `sitemap.xml` sağlar.

Uygulama bu aşamada bilinçli olarak hash-routed SPA'dır. Hash lesson ve term route'ları ayrı crawlable sayfalar veya sitemap URL'leri olarak sunulmaz.

## Brand Icon and Search Appearance

Canonical LearnGodot marka ikonu `assets/brand/learngodot-icon.svg` dosyasıdır. Sidebar, başlangıç yüzeyi ve favicon varyantları aynı mavi rounded-square / beyaz `L` kimliğini kullanır. Raster favicon'lar `scripts/generate-brand-icons.ps1` ile bu geometriden yeniden üretilebilir.

Homepage `application-name`, `og:site_name`, favicon linkleri ve minimal `WebSite` structured data ile LearnGodot site-name sinyali sağlar. GitHub Pages project-site yapısı hostname'i diğer project'lerle paylaştığı için Google'ın favicon'u veya site adını ne zaman ve nasıl göstereceği garanti edilemez; deploy sonrasında yeniden indexleme istenebilir.

## Future Full SEO

Türkçe guided curriculum tamamlandıktan sonraki ayrı çalışma şunları kapsayabilir:

- Crawlable, hash kullanmayan lesson URL'leri
- Crawlable term sayfaları
- Genişletilmiş sitemap
- Ayrı Türkçe ve İngilizce URL'ler
- `hreflang`
- Sayfaya özel canonical, title ve description
- Google Search Console QA
