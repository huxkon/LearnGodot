# Project Brief

## Project

Godot + GDScript odaklı, Türkçe bir developer education web uygulaması.

## Core Requirements

- Eğitim içeriğinin doğruluk kaynağı `godot_learning_web_content/content.database.json` dosyasıdır; tarayıcı için içerik değiştirilmeden `src/data/content.js` içine sarılır.
- Dashboard, 14 derslik Learn akışı, ders detayları, A-Z sözlük, terim detayı, quiz, tekrar, favoriler ve global arama ekranları bulunur.
- Uygulama hem sıralı öğrenme deneyimi hem de hızlı referans olarak çalışır.
- İlerleme, favoriler, tekrar listesi, quiz sonuçları ve son ziyaret edilen ders LocalStorage'da saklanır.
- Backend, kimlik doğrulama, ödeme, yönetim paneli, sosyal özellikler ve AI sohbeti MVP kapsamı dışındadır.
- Tema, responsive tasarım, klavye kullanımı ve erişilebilirlik desteklenir.
- Uygulama yalnızca HTML, CSS ve Vanilla JavaScript kullanır; `index.html` çift tıklanarak sunucusuz çalışır.
- Framework, TypeScript, npm paketi, bundler, build sistemi, backend ve server-side database kullanılmaz.
- 1. ve 2. ders guided learning deneyimidir; 1. ders ekosistemin sekiz core kavramını, 2. ders kodun on iki temel yapı taşını sırayla öğretir. Ders 3–14 mevcut sunumunu korur.
- Guided derste her core terim ayrı tamamlanır; ders tamamlanması terimleri topluca öğrenildi saymaz.

## Content Rules

- Eğitim metinleri UI bileşenlerine kopyalanmaz veya uydurulmaz.
- `tier: core` terimleri öğretici, `tier: recognize` terimleri kompakt biçimde sunulur.
- Arama `name`, `aliases` ve `definition` alanlarını kapsar.
- Kod örnekleri ve ilgili terimler veri ilişkilerinden üretilir.
- İlerleme oranları veri içindeki gerçek listelerden hesaplanır.
- Guided derslerin genişletilmiş öğretim metni ana database'i değiştirmeden ders bazlı ayrı uygulama içerik katmanlarında tutulur.
- Guided quick-term sisteminde cümledeki çekimli inline label ile canonical teknik kavram adı ayrıdır. Her topic gerekli quick-term ID'lerini açıkça seçer; liste metin taramasından otomatik üretilmez.
- Recognize terimler yalnızca ilgili core konunun yanında bağlam, yerleştirme nedeni ve gerekli ayrımla gösterilir; uzun bağımsız konuya dönüştürülmez.
- Aynı ID altında karışmış Scope ve Loop anlamları kaynak dosya değiştirilmeden ders bağlamına göre ayrılır.

## Acceptance Summary

343 terimin tümü erişilebilir olmalı; 14 ders ve detay rotaları çalışmalı; arama alias bulmalı; ilişkili terimler linklenmeli; ilerleme yenilemeden sonra korunmalı; açık/koyu tema ve mobil görünüm çalışmalı; kritik konsol hatası olmamalı; README çalışma ve içerik geliştirme akışını açıklamalıdır.
