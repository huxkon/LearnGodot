# Guided Learning Specification

Bu belge Lesson 1–3 ile kabul edilen guided-learning standardının canonical tanımıdır. Yeni bir ders ancak kullanıcı açıkça o dersi guided formata dönüştürme kapsamı verdiğinde bu standardı uygular.

## Topic structure

Her core topic, kavramın ihtiyacına göre şu parçaları kullanır:

1. **30 saniyede:** Teknik geçmişi olmayan kullanıcı için kısa açıklama.
2. **Buraya nasıl geldik?:** Önceki kavram gerçek bir ön koşulsa kısa bridge.
3. **Zihinsel model:** Kavramı gözde canlandıran örnek veya benzetme.
4. **Neden buna ihtiyacımız var?:** Kavramın çözdüğü problem.
5. **Godot / GDScript'te nerede görürüm?:** Editor, runtime veya kod bağlamı.
6. **Somut örnek ve gerektiğinde kod:** Kod yalnızca kavramı belirginleştiriyorsa eklenir; önemli satırlar açıklanır.
7. **Bilmediğim Terimler:** Yalnızca topic'i anlamak için gerekli curated canonical quick-term kayıtları.
8. **Bunu duyarsan tanı:** İlgili recognize kavramları bağlamsal kartlarla gösterilir.
9. **Yaygın hata:** Gerçek ve öğretici bir başlangıç hatası varsa kullanılır.
10. **Kendini kontrol et:** Ezberden çok senaryo veya kavram ayrımı sorusu.
11. **Önceki / Sonraki:** Her topic'te tek ve açık yön; son topic'te lesson completion.

Son topic, yeni bilgi öğretmeden core kavramların ilişkisini gösteren **Bu derste parçalar nasıl birleşiyor?** özetini içerir.

## Canonical quick terms

`[[quickId|inlineLabel]]` içindeki `inlineLabel`, yalnızca cümlenin Türkçe gramerine uyan yüzey metnidir. Popup ve “Bilmediğim Terimler” başlığı değildir.

Örnek:

```text
[[identifier|adıdır]]
```

Kullanıcı cümlede “adıdır” metnini görür; popup başlığı katalogdaki `Identifier (Tanımlayıcı)` olur. Her topic quick-term'lerini explicit `quickTermIds` ile seçer. Normal Türkçe kelimeler teknik terim gibi işaretlenmez; duplicate kayıt gösterilmez.

Guided metindeki tek backtick syntax'ı (ör. `` `extends` `` veya `` `_ready()` ``) reusable güvenli renderer tarafından `<code class="inline-code">` olarak gösterilir. Renderer önce düz metni escape eder; arbitrary HTML çalıştırmaz. Inline code ile `[[quickId|inlineLabel]]` aynı cümlede birlikte kullanılabilir. Kod görünümü için data içindeki backtick'ler tek tek silinmez.

## Prerequisite and forward-reference rule

Bir core kavram, kullanıcının henüz öğrenmediği başka bir teknik kavramı sessizce bilmesini gerektirmemelidir. Önce plain-language tercih edilir; yalnız gerçekten gerekli terim curated quick-term yapılır, gerçek bağımlılık ise prerequisite veya bridge olarak görünür hale getirilir. İleri derslerde öğretilecek bir kavram, mevcut örneğe zorunlu katkı sağlamıyorsa daha genel bir örnekle değiştirilir.

## Contextual recognize cards

Recognize kartı yalnızca sözlük tanımı değildir. Kullanıcının şu sorularından gerekli olanları cevaplar:

- Bu nedir?
- Şu an öğrendiğim core kavramla bağlantısı nedir?
- Neden burada gösteriliyor?
- Core kavramla neyi karıştırmamalıyım?

Kartlar `brief`, `connection`, `whyHere`, `distinction` ve gerektiğinde küçük model/örnek alanlarını kullanabilir. Bağı zayıf bir recognize terim sırf source listesinde bulunduğu için rastgele topic'e eklenmez.

## Progress semantics

- Topic geçişi yalnızca açık canonical term ID'sini `learnedTermIds` içine ekler.
- Lesson completion ayrı `completedLessonIds` state'idir.
- Lesson tamamlamak bütün terimleri otomatik öğrenilmiş yapmaz.
- Eksik topic varsa completion ilk eksik topic'e yönlendirir.
- State başlık veya çeviri metniyle değil canonical lesson/term ID ile saklanır.

## Localization direction

- Canonical ID'ler dile bağlı değildir: `variable`, `signal`, `node`, `scene` gibi ID'ler bütün locale'lerde aynıdır.
- UI copy, curriculum presentation metadata ve guided eğitim içeriği ayrı katmanlardır.
- Şu anda yalnızca `tr` tamamlanmış content locale'idir. `en` desteklenen gelecek locale olarak kayıtlıdır; içerik tamamlanmadan yarım İngilizce UI gösterilmez.
- Curriculum aynı `lessonId` için locale bazlı `displayTitle`, `displayDescription` ve `technicalTopics` taşıyabilir.
- Mevcut Türkçe guided dosyaları riskli bir toplu taşıma ile yeniden düzenlenmez. Türkçe dersler tamamlandıktan sonra hedef yapı `guided/tr/lesson-XX.js` ve `guided/en/lesson-XX.js` gibi locale klasörlerine ayrılabilir.
- `preferredLocale` gelecekte LocalStorage'da tutulabilir. Progress, favorites, review ve quiz state canonical ID kullandığı için locale değişiminden etkilenmez.
- Türkçe modda canonical İngilizce teknik ad glossary, topic başlığı veya quick-term modalında secondary label olarak gösterilebilir. Gelecekte İngilizce modda yön tersine döner. Bu görünürlük eğitim progress'inden bağımsız `showCrossLanguageLabels` tercihiyle kapatılabilir; locale katmanı karşı locale'i `secondaryLocale()` ile çözer.

## Architecture constraints

Guided içerik `window.GODOT_LESSON_GUIDES[lessonId]` registry'sine kaydolur ve ortak renderer kullanır. Framework, module, fetch, backend veya build bağımlılığı eklenmez; uygulama `file://` üzerinden çalışmayı sürdürür.
