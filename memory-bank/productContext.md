# Product Context

## Why It Exists

Yeni başlayanların Godot, GDScript ve genel oyun geliştirme terimlerini bir kurs veya dokümantasyonda duyduklarında yabancılık çekmemelerini sağlar. PDF'yi sayfa sayfa taklit etmek yerine kaynak içeriği etkileşimli öğrenme ve hızlı başvuru deneyimine dönüştürür.

## User Experience

- Kullanıcı Dashboard'dan kaldığı derse dönebilir ve ilerlemesini görebilir.
- Learn alanında dersleri sırayla çalışabilir; temel kavramları ayrıntılı, tanıma terimlerini kompakt okuyabilir.
- Terimler ekranında tüm sözlüğü arayabilir ve kategori/seviye filtresi uygulayabilir.
- Quizlerde cevabı kendisi hatırladıktan sonra açar, sonucunu değerlendirir.
- Zorlandığı terimleri tekrar listesine, önemli bulduklarını favorilere ekler.
- Global arama ile klavyeden hızlıca herhangi bir terime geçer.
- Kullanıcı kurulum veya yerel sunucu hazırlamadan `index.html` dosyasını doğrudan açabilir.
- Kullanıcı guided 1–3. derslerde hangi konuyu seçeceğini düşünmeden “Başla → Sonraki Konu → Dersi Tamamla” akışını izler.
- Bilinmeyen teknik kelimeler, mevcut konudan ayrılmadan inline açıklama penceresinde okunur.
- Cümlede “adıdır” veya “değeri” gibi çekimli bir parça tıklansa bile modal ve “Bilmediğim Terimler” listesi `Identifier (Tanımlayıcı)` veya `Value (Değer)` gibi canonical kavram adını gösterir.
- “Bilmediğim Terimler” yalnızca topic için elle seçilmiş gerekli teknik kavramları, duplicate oluşturmadan listeler.
- Her konu kısa açıklama, zihinsel model, ihtiyaç, Godot bağlamı, örnek, yaygın hata ve mini soruyla çalışılır.
- “Bunu duyarsan tanı” kartları terimi yalnızca tanımlamaz; mevcut core konuyla bağlantısını, neden o anda gösterildiğini ve karıştırılabilecek kavramdan farkını açıklar.
- Zor kavram geçişlerindeki “Buraya nasıl geldik?” köprüleri ve ders sonu ilişki özeti, kavramları ezber listesi yerine görünür bir zihinsel modele bağlar.

## Personal Use Principle

Uygulama taşınabilir ve kişisel kullanıma uygundur. Bütün uygulama ile içerik repo klasöründe bulunur; ilerleme yalnızca tarayıcıdaki LocalStorage alanında kalır. İnternet, hesap veya sunucu gerektirmez.

## Design Direction

Modern geliştirici dokümantasyonu ile premium SaaS öğrenme ürünü arasında; ciddi, ferah, tipografisi güçlü, ince bordürlü ve ölçülü hareket kullanan bir arayüz. Çocukça gamification ve gereksiz dekorasyon kullanılmaz.
