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
- 1. ders guided landing ve sekiz sıralı core konu ekranı ortak renderer üzerinden çalışıyor.
- Her guided konuda 30 saniyelik açıklama, zihinsel model, ihtiyaç, Godot bağlamı, örnek, inline bilinmeyen terimler, yaygın hata ve mini kontrol sorusu eklendi.
- On recognize terimin tamamı ilgili core konulara “Bunu duyarsan tanı” kutuları olarak dağıtıldı.
- Önceki/Sonraki Konu ve son konudaki Dersi Tamamla akışı bağlandı.
- `learnedTermIds` tek tek konu geçişlerinde; `completedLessonIds` yalnızca ders bitişinde güncellenecek şekilde ayrıldı.
- Scope ve Loop için programlama/proje yönetimi ile programlama/audio bağlam düzeltmeleri uygulama katmanında yapıldı; kaynak database değiştirilmedi.
- Guided içerik kapsam doğrulaması başarılı: 8/8 core, 10/10 recognize ve her core için 8 zorunlu öğretim alanı mevcut.
- Kaynak JSON ile runtime verisinin birebir eşitliği yeniden doğrulandı; bütün direct-file assetleri mevcut.
- Guided renderer lesson ID tabanlı `window.GODOT_LESSON_GUIDES` registry'sine genellendi; rota, devam, konu tamamlama ve ders tamamlama eylemlerindeki 1. ders hard-code'ları kaldırıldı.
- 1. dersin 10 recognize terimi ilgili core konularda tam bir kez gösterilecek biçimde yeniden denetlendi. Project → Repository örneği, Import/Pipeline, API/SDK, paket bağımlılığı/lisans ve Export/Platform ayrımları görünür hale getirildi.
- Inline quick term dialogu opsiyonel bağlam cümlesi destekliyor; 1. dersin kritik terimlerine konu düzeyi bağlam eklendi.
- Ortak `bridge` ve `summary` sunumları eklendi; 1. derste dört kavram köprüsü ve üç ilişkisel özet grubu bulunuyor.
- Yalnızca 2. ders guided yapıya dönüştürüldü: 12/12 core konu ve 21/21 recognize terim kapsanıyor; her recognize terim tam bir bağlamsal kartta bir kez bulunuyor.
- 2. ders pedagojik sırası Variable → Constant → Data Type → Dynamic/Static Typing → Function/Method → Parameter/Argument → Return Value → Scope → Conditional → Array/Dictionary → Loop → Class/Object/Instance olarak belirlendi.
- 2. ders recognize dağılımı: Variable (Annotation, @export, @onready, Null), Constant (Enum), Data Type (Int, Float, Bool, String, Variant), Typing (Casting), Function/Method (Callable, Lambda, Await), Conditional (Operator, Expression, Statement), Class/Object/Instance (extends, class_name, Inheritance, Composition). Zayıf bağ kurulacak core konulara kart zorlanmadı.
- 2. derste değer/tür, function giriş-çıkışı, scope, karar/collection/loop ve class-instance ilişkileri bridge'ler ile ders sonu dört parçalı özet içinde görünür kılındı.
- Ders 3–14 guided yapıya geçirilmedi ve klasik görünümünü koruyor.
- README ortak guided veri/renderer mimarisini ve iki dersin ilerleme modelini açıklayacak biçimde güncellendi.
- Genişletilmiş doğrulama başarılı: 343 terim, 14 ders, 42 soru, kaynak/runtime metin eşitliği, 1–2. ders zorunlu alanları ve recognize kart tekilliği doğrulandı.
- HTTP smoke testi başarılı: index, CSS, ana veri, iki guided veri dosyası ve bütün klasik JS dosyaları 200 ve doğru MIME ile servis edildi.
- Lesson 1 ve Lesson 2 quick-term kullanımlarının tamamı audit edildi. Surface label'ın modal/list başlığı olması ve listenin metindeki işaretlerden otomatik çıkarılması kaldırıldı.
- Quick-term şeması `canonicalTitle`, `shortExplanation`, isteğe bağlı `example` / `context` ve topic başına explicit `quickTermIds` kullanacak biçimde yenilendi.
- Lesson 1'de 14 curated kavram tutuldu. Project altındaki tekrarlı Script, API örneğindeki genel Function ve aynı konudaki recognize kartıyla yinelenen Platform quick-term işaretleri kaldırıldı.
- Lesson 2'de 14 curated kavram tutuldu. Variable konusundaki genel “durumunu” işareti kaldırıldı; `değeri`, `bildirim`, `atama` ve `adıdır` sırasıyla Value, Declaration, Assignment ve Identifier canonical kayıtlarına bağlandı.
- Lesson 2 canonical kayıtları Type Inference, Function Body, Function Call, Calling Code, Member/Local Variable, Condition, Index, Key ve Iteration adlarıyla düzeltildi.
- Quick-term modalı artık DOM'daki tıklanan label'ı başlık olarak okumuyor; canonical başlık, kısa açıklama ve ayrı örnek alanı gösteriyor. Bilmediğim Terimler listesi de yalnızca canonical başlıkları gösteriyor.
- Duplicate önleme, katalog alanları, explicit seçim, marker bağlantısı ve eski `target.firstChild` davranışı doğrulama scriptine regresyon kontrolleri olarak eklendi.
- Son denetimde Lesson 1 ve Lesson 2 için ayrı ayrı 14 curated ID, 14 unique ID ve 14 inline marker doğrulandı. Kaynak/runtime veri eşitliği korundu ve değişen web assetleri HTTP üzerinden 200/doğru MIME ile yüklendi.
- Contextual recognize kartlarının renderer ve veri davranışı geri alınmadı veya değiştirilmedi.

## Remaining / Optional QA

- Ortamda Node.js veya desteklenen bir headless browser olmadığı için gerçek DOM tıklama/LocalStorage yenileme ve görsel responsive testi otomatik çalışmadı. Statik rota/aksiyon bağlantıları ile HTTP yüklemeleri doğrulandı; gerçek tarayıcı smoke testi önerilir.
- Dağıtım bu MVP görevinin kapsamında değildi.

## Latest Review

- `AGENTS.md`, altı memory-bank dosyası, mevcut mimari, 1. ders referans deneyimi ve `godot_learning_web_content` kaynak paketi yeniden incelendi.
- 1. ve 2. ders quick-term sistemi canonical/surface ayrımı ve explicit curated topic listeleriyle düzeltildi.
- Contextual recognize kartları aynı modelle çalışmaya devam ediyor.
- Kaynak JSON değişmedi. Scope/Loop context override'ları ve LocalStorage anahtarları korunuyor.

## Known Data Note

Metadata `core_terms: 126` bildirirken gerçek `tier: core` sayısı 125. İçerik değiştirilmez; UI gerçek veri üzerinden hesap yapar.
