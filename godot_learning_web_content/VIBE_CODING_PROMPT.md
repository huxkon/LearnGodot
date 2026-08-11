> **LEGACY / HISTORICAL INITIAL PROMPT - DO NOT EXECUTE AS CURRENT PROJECT INSTRUCTIONS**
>
> Güncel talimatlar için repo kökündeki `AGENTS.md`, `memory-bank/`, `docs/GUIDED_LEARNING_SPEC.md` ve `README.md` kaynaklarını kullan. Bu dosya yalnızca ilk prototipin tarihsel girdisidir.

# Vibe Coding Ana Prompt - Godot + GDScript Öğrenme Sitesi

Elimde bu repo ile birlikte gelen `src/data/content.database.json` (ve gerekirse ayrı JSON dosyaları) bulunuyor. Bunlar Godot + GDScript odaklı Türkçe bir oyun geliştirme öğrenme platformunun kaynak verisidir.

## Görev

PDF görüntüleyicisi veya statik dokümantasyon sitesi yapma. Veriyi kullanarak modern, sade, hızlı ve etkileşimli bir **developer education web app** oluştur.

## Ürün amacı

Yeni başlayan bir kullanıcı oyun geliştirme kursunda veya dokümantasyonda bir terim duyduğunda yabancılık çekmemeli. Site hem baştan sona ders olarak çalışılmalı hem de W3Schools benzeri hızlı referans görevi görmeli.

## MVP ekranları

1. **Dashboard** - ilerleme, devam edilen ders, İlk 50 ilerlemesi, tekrar edilecek terimler.
2. **Learn** - `lessons` verisindeki 14 dersi sırayla göster.
3. **Lesson Detail** - core terimleri güçlü kartlarla, recognize terimleri daha kompakt göster.
4. **Glossary A-Z** - bütün `terms` verisini alfabetik, aranabilir ve filtrelenebilir göster.
5. **Term Detail** - tanım, kategori, nerede duyulur, akılda kalsın, kod örneği, related terms ve önceki/sonraki temel terim.
6. **Quiz** - `quizzes` içindeki açık hatırlama sorularını göster; cevabı kullanıcı isterse açsın.
7. **Review** - yanlış/işaretlenen terimleri tekrar ettir.
8. **Favorites** - favori terimler.
9. **Global Search** - Ctrl/Cmd+K ile aç; name + aliases + definition alanlarında ara.

## İlerleme

Backend, auth ve database ekleme. İlk sürümde gerek yok.

LocalStorage kullan:
- completedLessonIds
- learnedTermIds
- favoriteTermIds
- reviewTermIds
- quizResults
- lastVisitedLessonId

İlerleme yüzdelerini JSON verisindeki gerçek sayılardan hesapla; sayıları UI'a hard-code etme.

## İçerik kuralları

- Eğitim içeriğini component dosyalarına kopyalama.
- Kaynak veri `content.database.json` olsun.
- `tier: core` terimleri öğretici kartlar halinde göster.
- `tier: recognize` terimleri hızlı sözlük/kısa tanıma biçiminde göster.
- `code_example` null değilse syntax-highlighted GDScript kod bloğu göster.
- `related_term_ids` gerçek term id'lerine link versin.
- Alias'lar aramada çalışsın.
- İçeriği değiştirme veya uydurma. UI için gereken yeni mikro metinleri ayrı UI copy olarak tut.

## Tasarım yönü

Modern developer documentation + premium SaaS öğrenme uygulaması hissi.

- sade ve ciddi
- bol whitespace
- güçlü tipografi
- açık/koyu tema
- ince border
- hafif rounded card
- gereksiz gradient ve aşırı animasyon yok
- mobil + desktop responsive
- çocuk oyunu gibi gamification yok
- kod blokları okunaklı
- klavye navigasyonuna ve erişilebilirliğe dikkat

Desktop layout:
- solda sidebar: Dashboard / Öğren / Terimler / Quiz / Tekrar / Favoriler
- üstte global search
- ana içerik geniş ve ferah

Mobilde sidebar drawer/hamburger olsun.

## Mimari

Kullandığın frameworkün güncel ve stabil yaklaşımını tercih et. Kod temiz ve modüler olsun.

Önerilen componentler:
- AppShell
- Sidebar
- GlobalSearchDialog
- ProgressOverview
- LessonCard
- TermCard
- DefinitionBox
- MemoryHook
- CodeExample
- RelatedTerms
- QuizCard
- ProgressBar
- ThemeToggle

Content access için küçük bir data layer yaz:
- getAllTerms()
- getTermById(id)
- searchTerms(query)
- getLesson(id)
- getLessonTerms(id)
- getRelatedTerms(term)

## Uygulama sırası

Önce veri dosyasını analiz et ve gerçek count/id/relationship yapısını doğrula.
Sonra routing + app shell kur.
Sonra Glossary ve Term Detail'i bitir.
Sonra Learn + Lesson Detail.
Sonra progress/localStorage.
Sonra Quiz/Review/Favorites.
En son polish, responsive ve accessibility.

İlk aşamada gereksiz backend, üyelik, ödeme, admin paneli, sosyal özellik veya AI chat ekleme.

## Kabul kriterleri

- Bütün terimler veri dosyasından erişilebilir.
- 14 ders listelenir ve detay sayfaları çalışır.
- Global arama terim + alias bulur.
- Related terms linkleri çalışır.
- Kod örnekleri düzgün görünür.
- İlerleme refresh sonrası korunur.
- Dark mode çalışır.
- Mobil görünüm bozulmaz.
- Console'da kritik hata yoktur.
- README'de çalıştırma, klasör yapısı ve yeni terim/ders ekleme anlatılır.

Önce çalışan MVP'yi tamamla; sonrasında görsel iyileştirme yap. Büyük bir redesign'a başlamadan önce mevcut fonksiyonların çalıştığını doğrula.
