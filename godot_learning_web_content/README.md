# Godot + GDScript Öğrenme Platformu - Web Content Database

Bu paket, **Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript** PDF'sindeki içeriğin web uygulaması için yapılandırılmış sürümüdür.

## İçerik

- **343 terim** (`terms.json`)
- **126 TEMEL terim** ayrıntılı ders kartı verisiyle
- **14 ders** (`lessons.json`)
- **42 PDF mini kontrol sorusu + cevapları** (`quizzes.json`)
- PDF'deki **İlk 50 Terim** yolu (`learning_paths.json`)
- Arama/filtre için kategori ve alias alanları
- Terimler arası başlangıç seviyesinde `related_term_ids` ilişkileri
- Varsa GDScript kod örnekleri

## Dosyalar

| Dosya | Amaç |
|---|---|
| `content.database.json` | Her şeyi tek dosyada isteyen vibe-coding araçları için |
| `terms.json` | A-Z sözlük ve terim detay sayfalarının ana kaynağı |
| `lessons.json` | Learn ekranı ve 14 derslik akış |
| `quizzes.json` | PDF'deki mini kontrol soruları |
| `learning_paths.json` | İlk 50, temel ders yolu ve tam sözlük yolları |
| `categories.json` | Filtreleme ve kategori navigasyonu |
| `term.schema.json` | Terim veri modelinin JSON Schema'sı |
| `VIBE_CODING_PROMPT.md` | Siteyi üretecek coding agent'a verilecek ana prompt |

## Önerilen kullanım

1. İlk prototipte `content.database.json` dosyasını projeye `src/data/content.database.json` olarak koy.
2. UI kodunun içine terim metni hard-code etme; bütün içerik bu veriden gelsin.
3. Terim detay rotası `/terms/:id`, ders rotası `/learn/:lessonId` gibi kurulabilir.
4. Aramada `name`, `aliases`, `definition` alanlarını tara.
5. LocalStorage'da yalnızca kullanıcı ilerlemesini tut: tamamlanan dersler, quiz sonuçları, favoriler, tekrar listesi.
6. İçeriği büyütürken `terms.json` ve `lessons.json` ayrı tutulabilir; tek-dosya veritabanı sadece başlangıç kolaylığıdır.

## İçerik seviyesi

`tier = core` -> PDF'de **TEMEL** kart olarak işlenen, aktif öğrenilmesi gereken terim.

`tier = recognize` -> Şimdilik duyunca kategorisini tanımak için yeterli olan sözlük terimi.

## Sonraki içerik geliştirmeleri

Web sürümünün PDF'den daha öğretici olması için ikinci fazda her TEMEL terime şu alanlar eklenebilir:

- `common_mistakes`
- `real_game_example`
- `micro_exercise`
- `multiple_choice_quiz`
- `prerequisite_term_ids`
- `godot_demo_scene`

Bunları ilk MVP'den önce yapmak zorunlu değildir. Mevcut paket çalışan ve güçlü bir ilk site için yeterlidir.
