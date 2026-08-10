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
- 1. ders, hiçbir ön bilgi varsaymadan sekiz core kavramı sırayla öğreten guided learning deneyimidir; diğer 13 ders mevcut sunumunu korur.
- Guided derste her core terim ayrı tamamlanır; ders tamamlanması terimleri topluca öğrenildi saymaz.

## Content Rules

- Eğitim metinleri UI bileşenlerine kopyalanmaz veya uydurulmaz.
- `tier: core` terimleri öğretici, `tier: recognize` terimleri kompakt biçimde sunulur.
- Arama `name`, `aliases` ve `definition` alanlarını kapsar.
- Kod örnekleri ve ilgili terimler veri ilişkilerinden üretilir.
- İlerleme oranları veri içindeki gerçek listelerden hesaplanır.
- Guided 1. dersin genişletilmiş öğretim metni ana database'i değiştirmeden ayrı bir uygulama içerik katmanında tutulur.
- Aynı ID altında karışmış Scope ve Loop anlamları kaynak dosya değiştirilmeden ders bağlamına göre ayrılır.

## Acceptance Summary

343 terimin tümü erişilebilir olmalı; 14 ders ve detay rotaları çalışmalı; arama alias bulmalı; ilişkili terimler linklenmeli; ilerleme yenilemeden sonra korunmalı; açık/koyu tema ve mobil görünüm çalışmalı; kritik konsol hatası olmamalı; README çalışma ve içerik geliştirme akışını açıklamalıdır.
