# Godot Atlası

Godot, GDScript ve oyun geliştirme terminolojisini Türkçe öğrenmek için hazırlanmış, modern ve etkileşimli bir developer education web uygulaması. Kaynak PDF'yi göstermeye çalışmaz; yapılandırılmış içeriği ders, sözlük, quiz ve tekrar akışlarına dönüştürür.

## Özellikler

- Gerçek içerik verisinden üretilen Dashboard ve ilerleme yüzdeleri
- 14 derslik sıralı öğrenme yolu
- 1–3. dersler için ortak renderer kullanan guided çalışma akışı, bağlamsal tanıma kartları, inline terim açıklamaları ve konu bazlı ilerleme
- 343 terimlik aranabilir ve filtrelenebilir A–Z sözlük
- Tanım, bağlam, hatırlama ipucu, GDScript örneği ve ilişkili kavramlarla terim detayları
- 42 açık hatırlama sorusu ve öz değerlendirme
- Favoriler ve odaklı tekrar listesi
- `Ctrl+K` / `Cmd+K` ile ad, alias ve tanım içinde global arama
- Açık/koyu tema, mobil drawer ve klavye erişilebilirliği
- Tamamen tarayıcıda çalışan LocalStorage ilerlemesi; backend veya hesap gerekmez

## Çalıştırma

`index.html` dosyasına çift tıkla. Uygulama doğrudan `file://` üzerinden açılır; yerel sunucu, npm, build veya kurulum gerekmez.

İstersen geliştirme sırasında klasik bir HTTP adresi üzerinden de açabilirsin:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\serve.ps1
```

Bu yardımcı sunucu tamamen isteğe bağlıdır. Uygulamanın normal kullanımı için gerekli değildir.

## Doğrulama

İçerik kimliklerini, ders/quiz/related-term ilişkilerini, İlk 50 yolunu, doğrudan yüklenen veri dosyasının kaynakla aynı olduğunu ve ES module kalıntısı bulunmadığını kontrol etmek için:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\validate-content.ps1
```

## Klasör yapısı

```text
.
├── index.html                         # Uygulama girişi
├── src/
│   ├── data/content.js                # JSON'un doğrudan tarayıcıda yüklenen, birebir türetilmiş hali
│   ├── data/lesson-01-guided.js       # 1. dersin öğretici akış verisi
│   ├── data/lesson-02-guided.js       # 2. dersin öğretici akış verisi
│   ├── data/lesson-03-guided.js       # 3. dersin öğretici akış verisi
│   ├── js/
│   │   ├── app.js                     # Başlatma, olaylar ve UI davranışları
│   │   ├── components.js              # Tekrar kullanılan arayüz parçaları
│   │   ├── data.js                    # İçerik erişimi ve arama katmanı
│   │   ├── router.js                  # Hash tabanlı yönlendirme
│   │   ├── storage.js                 # LocalStorage ilerleme katmanı
│   │   ├── ui-copy.js                 # İçerikten bağımsız UI mikro metinleri
│   │   └── views.js                   # Sayfa görünümleri
│   └── styles.css                     # Tema, responsive ve component stilleri
├── scripts/                           # İçerik senkronizasyonu, doğrulama ve opsiyonel sunucu
├── godot_learning_web_content/        # Orijinal JSON/PDF kaynak paketi
└── memory-bank/                       # Proje bağlamı ve ilerleme dokümantasyonu
```

## İçerik modeli

Asıl eğitim kaynağı `godot_learning_web_content/content.database.json` dosyasıdır. Tarayıcıdaki `fetch()` ve yerel dosya CORS kısıtlarını önlemek için bu JSON, içerik değiştirilmeden şu atamayla `src/data/content.js` dosyasına sarılır:

```js
window.GODOT_LEARN_DATA = { /* kaynak JSON verisi */ };
```

`index.html` önce bu dosyayı, ardından klasik Vanilla JavaScript dosyalarını sıralı olarak yükler. ES module, bundler veya sunucu gerekmez. Başlıca veri koleksiyonları:

- `terms`: Terim tanımları, alias'lar, seviye, kategori, kod örneği ve ilişkiler
- `lessons`: Ders sırası ile temel/tanıma terim ID listeleri
- `quizzes`: Derslere bağlı açık hatırlama soruları
- `learning_paths`: İlk 50, temel kurs ve tam sözlük yolları
- `categories`: Ders ve filtre kategorileri

`lesson-01-guided.js`, `lesson-02-guided.js` ve `lesson-03-guided.js`, ana database'i değiştirmeden ilk üç dersin öğretim biçimini zenginleştirir. Her core terim için 30 saniyelik açıklama, zihinsel model, ihtiyaç, Godot bağlamı, örnek, inline kısa terimler, yaygın hata ve mini kontrol sorusu içerir. Tanıma terimleri ilgili temel kavramın yanında “Kısaca / Bu konuyla bağlantısı / Neden burada?” yapısıyla gösterilir. Zor kavram geçişlerinde “Buraya nasıl geldik?” köprüleri, son konuda da kavramların ilişkisini özetleyen bir bölüm bulunur. Ders 4–14 mevcut database sunumunu kullanmaya devam eder.

Guided quick-term sistemi surface metin ile canonical kavram adını ayırır. Ders düzeyindeki `quickTerms` kataloğunda her kayıt `canonicalTitle`, `shortExplanation` ve isteğe bağlı `example` / `context` alanlarını taşır. Bir topic yalnızca gerçekten gerekli kavramları `quickTermIds` içinde açıkça seçer. `[[identifier|adıdır]]` işaretindeki `adıdır` yalnızca cümlede görünen ve tıklanan inline label'dır; liste ve modal başlığı katalogdaki `Identifier (Tanımlayıcı)` değerini kullanır. Aynı ID farklı çekimlerle işaretlense bile canonical listede bir kez görünür.

## Guided derslerin ilerleme modeli

- `/learn/lesson-01`, `/learn/lesson-02` ve `/learn/lesson-03` ders planını ve tek bir belirgin başlama/devam etme eylemini gösterir.
- Her core kavram `/learn/:lessonId/:termId` rotasında ayrı bir çalışma ekranıdır.
- “Konuyu tamamla / Sonraki Konu” düğmesi yalnızca açık terimi `learnedTermIds` içine ekler.
- Son konuda “Dersi Tamamla” bütün konuların tek tek tamamlandığını kontrol eder ve yalnızca `completedLessonIds` değerini günceller.
- Ders tamamlanması artık terimleri topluca öğrenildi saymaz; iki ilerleme türü birbirinden bağımsızdır.
- Scope ve Loop terimleri kaynak dosya değiştirilmeden ders bağlamına göre programlama/proje yönetimi ve programlama/audio anlamlarına ayrılır.

Yeni bir guided ders eklenirken rehber verisi `window.GODOT_LESSON_GUIDES[lessonId]` kaydına eklenir; renderer veya ilerleme eylemleri ders numarasına göre kopyalanmaz. Rehberdeki `order` yalnızca pedagojik sunum sırasını belirler, kaynak database içindeki ders ve terim kayıtlarını değiştirmez.

## Yeni terim ekleme

1. Terimi kaynak paketteki `terms.json` ve birleşik `content.database.json` yapısına uygun ekle.
2. Benzersiz bir `id` kullan; `tier` değerini `core` veya `recognize` olarak belirle.
3. `lesson_ids`, `category_ids` ve `related_term_ids` alanlarında yalnızca var olan ID'leri kullan.
4. İlgili dersin `core_term_ids` veya `recognize_term_ids` listesine terim ID'sini ekle.
5. Çalışma veri scriptini kaynaktan yeniden üret:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\scripts\sync-content.ps1
   ```

6. `scripts/validate-content.ps1` doğrulamasını çalıştır.

Eğitim metnini JavaScript bileşenlerine ekleme; yalnızca buton ve durum mesajı gibi arayüz metinleri `ui-copy.js` içinde tutulmalıdır.

## Yeni ders ekleme

1. `lessons` koleksiyonuna benzersiz `id`, sıra, başlık, açıklama, hedef ve terim ID listeleriyle yeni ders ekle.
2. Dersin quiz grubunu `quizzes` koleksiyonuna ekleyip `quiz_id` / `lesson_id` bağlarını karşılıklı kur.
3. Gerekirse kategori ve öğrenme yolu listelerini güncelle.
4. Derste kullanılan terimlerin `lesson_ids` alanına yeni ders ID'sini ekle.
5. `scripts/sync-content.ps1` ile doğrudan yüklenen veri dosyasını yenile ve doğrulama scriptini çalıştır.

Mevcut MVP tasarımı 14 ders varsayımını ürün kapsamı gereği doğrular. Ders sayısı bilinçli olarak artırılırsa bu kabul kontrolü de güncellenmelidir.

## LocalStorage şeması

Uygulama şu anahtarları kullanır: `completedLessonIds`, `learnedTermIds`, `favoriteTermIds`, `reviewTermIds`, `quizResults`, `lastVisitedLessonId`. Tema tercihi ayrıca `godotTheme` anahtarında tutulur. Tüm veriler yalnızca kullanılan tarayıcı ve cihazda kalır.

## Teknik sınırlar

- Yalnızca HTML, CSS ve Vanilla JavaScript kullanılır.
- Klasik script dosyaları `window.GodotApp` namespace'i üzerinden haberleşir.
- React, Vue, Angular, Svelte, TypeScript, Tailwind, Vite veya başka bir framework yoktur.
- npm paketi, bundler, backend, authentication veya server-side database yoktur.
- `fetch()` kullanılmaz; bu nedenle uygulama `index.html` dosyasından doğrudan çalışır.
