(function defineCurriculum() {
  "use strict";

  window.GODOT_CURRICULUM = {
    defaultLocale: "tr",
    supportedLocales: ["tr", "en"],
    contentLocales: ["tr"],
    sections: {
      tr: [
        { id: "baslangic", title: "Başlangıç", order: 1 },
        { id: "oyunu-hareket-ettir", title: "Oyunu Hareket Ettir", order: 2 },
        { id: "gorsel-arayuz", title: "Görsel ve Arayüz", order: 3 },
        { id: "oyun-sistemleri", title: "Oyun Sistemleri", order: 4 },
        { id: "gelistirici-olarak-calismak", title: "Geliştirici Olarak Çalışmak", order: 5 },
      ],
    },
    lessons: {
      tr: {
        "lesson-01": { lessonId: "lesson-01", displayTitle: "Godot'a Başlangıç", displayDescription: "Godot nedir, editörde ne görürsün ve bir oyun projesi hangi parçalardan oluşur?", section: "baslangic", order: 1, technicalTopics: ["Motor", "Editör", "Proje"] },
        "lesson-02": { lessonId: "lesson-02", displayTitle: "GDScript Temelleri", displayDescription: "Değişken, veri tipi, fonksiyon, koşul ve döngü gibi kodun temel yapılarını öğren.", section: "baslangic", order: 2, technicalTopics: ["Değişken", "Fonksiyon", "Koşul", "Döngü"] },
        "lesson-03": { lessonId: "lesson-03", displayTitle: "Node ve Scene'leri Anlamak", displayDescription: "Godot'ta bir oyunun Node'lardan ve Scene'lerden nasıl kurulduğunu öğren.", section: "baslangic", order: 3, technicalTopics: ["Node", "Scene", "SceneTree"] },
        "lesson-04": { lessonId: "lesson-04", displayTitle: "Oyun Nasıl Güncellenir?", displayDescription: "Oyunun neden sürekli güncellendiğini, delta'nın ne yaptığını ve oyuncu girdisinin nasıl okunduğunu öğren.", section: "oyunu-hareket-ettir", order: 4, technicalTopics: ["Frame", "Delta", "Input"] },
        "lesson-05": { lessonId: "lesson-05", displayTitle: "Konum, Yön ve Vector", displayDescription: "Bir nesnenin nerede olduğunu, hangi yöne gittiğini ve mesafeyi nasıl düşündüğünü öğren.", section: "oyunu-hareket-ettir", order: 5, technicalTopics: ["Koordinat", "Vector", "Transform"] },
        "lesson-06": { lessonId: "lesson-06", displayTitle: "Hareket ve Çarpışma", displayDescription: "Karakter hareketini, çarpışmaları ve fizik nesnelerinin nasıl davrandığını öğren.", section: "oyunu-hareket-ettir", order: 6, technicalTopics: ["Physics", "Collision", "Body", "Area"] },
        "lesson-07": { lessonId: "lesson-07", displayTitle: "Görseller, Kamera ve Animasyon", displayDescription: "Sprite, kamera, animasyon ve oyunun ekranda nasıl gösterildiğiyle ilgili temel kavramları öğren.", section: "gorsel-arayuz", order: 7, technicalTopics: ["Sprite", "Camera", "Animation"] },
        "lesson-08": { lessonId: "lesson-08", displayTitle: "Arayüz Yapmak", displayDescription: "Menü, HUD ve farklı ekran boyutlarına uyum sağlayan arayüzlerin temel mantığını öğren.", section: "gorsel-arayuz", order: 8, technicalTopics: ["UI", "Control", "Container", "Resolution"] },
        "lesson-09": { lessonId: "lesson-09", displayTitle: "Veriyi Kaydetmek ve Kodu Düzenlemek", displayDescription: "Oyun verisini düzenlemeyi, kaydetmeyi ve büyüyen projelerde sistemleri temiz biçimde ayırmayı öğren.", section: "oyun-sistemleri", order: 9, technicalTopics: ["Resource", "Save/Load", "State"] },
        "lesson-10": { lessonId: "lesson-10", displayTitle: "Oyun Mekanikleri ve AI", displayDescription: "Spawn, rastgelelik, pathfinding ve AI gibi oyun sistemlerinin temel mantığını tanı.", section: "oyun-sistemleri", order: 10, technicalTopics: ["Spawn", "RNG", "Pathfinding"] },
        "lesson-11": { lessonId: "lesson-11", displayTitle: "Ses ve Multiplayer'a Giriş", displayDescription: "Oyundaki sesi nasıl yönettiğimizi ve client/server, ping ve RPC gibi multiplayer kavramlarının ne anlama geldiğini öğren.", section: "oyun-sistemleri", order: 11, technicalTopics: ["Audio", "Client/Server", "RPC"] },
        "lesson-12": { lessonId: "lesson-12", displayTitle: "Hata Bulma ve Performans", displayDescription: "Hataların neden olduğunu anlamayı, debugger ve profiler gibi araçların ne işe yaradığını öğren.", section: "gelistirici-olarak-calismak", order: 12, technicalTopics: ["Debugger", "Profiler", "CPU/GPU"] },
        "lesson-13": { lessonId: "lesson-13", displayTitle: "Git, Build ve Oyunu Yayınlamak", displayDescription: "Kod değişikliklerini takip etmeyi, oyunun build'ini almayı ve yayınlama sürecindeki temel kavramları öğren.", section: "gelistirici-olarak-calismak", order: 13, technicalTopics: ["Git", "Export", "Release"] },
        "lesson-14": { lessonId: "lesson-14", displayTitle: "Oyunu Planlamak ve Bitirmek", displayDescription: "Bir oyun fikrini prototype'tan tamamlanabilir bir projeye götürürken kullanılan temel üretim kavramlarını öğren.", section: "gelistirici-olarak-calismak", order: 14, technicalTopics: ["Prototype", "MVP", "Scope", "Playtest"] },
      },
    },
  };
})();
