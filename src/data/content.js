window.GODOT_LEARN_DATA = {
  "meta": {
    "project": "Godot + GDScript Öğrenme Platformu",
    "language": "tr",
    "source_document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
    "source_focus": "Godot 4.x + genel oyun geliştirme terminolojisi",
    "generated_from_pdf_text": true,
    "counts": {
      "terms": 343,
      "core_terms": 126,
      "lessons": 14,
      "source_quiz_questions": 42,
      "first_50_terms": 50
    },
    "content_principles": [
      "Terim önce doğru kategoriye yerleştirilir.",
      "TEMEL terimler aktif öğrenme, diğerleri önce tanıma düzeyindedir.",
      "PDF metni ana kaynak; web arayüzü metni sayfa sayfa kopyalamak yerine etkileşimli sunar."
    ],
    "unresolved_first_50": []
  },
  "categories": [
    {
      "id": "ecosystem",
      "name": "Motor ve Ekosistem",
      "lesson_id": "lesson-01",
      "order": 1
    },
    {
      "id": "programming",
      "name": "Programlama ve GDScript",
      "lesson_id": "lesson-02",
      "order": 2
    },
    {
      "id": "godot-scenes",
      "name": "Node, Scene ve SceneTree",
      "lesson_id": "lesson-03",
      "order": 3
    },
    {
      "id": "game-loop-input",
      "name": "Game Loop ve Input",
      "lesson_id": "lesson-04",
      "order": 4
    },
    {
      "id": "game-math",
      "name": "Koordinatlar ve Oyun Matematiği",
      "lesson_id": "lesson-05",
      "order": 5
    },
    {
      "id": "physics",
      "name": "Physics ve Collision",
      "lesson_id": "lesson-06",
      "order": 6
    },
    {
      "id": "rendering-animation",
      "name": "Görsel, Kamera ve Animasyon",
      "lesson_id": "lesson-07",
      "order": 7
    },
    {
      "id": "ui-responsive",
      "name": "UI ve Responsive Tasarım",
      "lesson_id": "lesson-08",
      "order": 8
    },
    {
      "id": "data-architecture",
      "name": "Data ve Mimari",
      "lesson_id": "lesson-09",
      "order": 9
    },
    {
      "id": "gameplay-ai",
      "name": "Gameplay ve AI",
      "lesson_id": "lesson-10",
      "order": 10
    },
    {
      "id": "audio-networking",
      "name": "Audio ve Networking",
      "lesson_id": "lesson-11",
      "order": 11
    },
    {
      "id": "debug-performance",
      "name": "Debugging ve Performance",
      "lesson_id": "lesson-12",
      "order": 12
    },
    {
      "id": "git-release",
      "name": "Git, Build ve Yayınlama",
      "lesson_id": "lesson-13",
      "order": 13
    },
    {
      "id": "design-production",
      "name": "Oyun Tasarımı ve Üretim",
      "lesson_id": "lesson-14",
      "order": 14
    }
  ],
  "terms": [
    {
      "id": "dot-gitignore",
      "name": ".gitignore",
      "aliases": [],
      "definition": "Git’in takip etmemesi gereken geçici/cache/build dosyalarını tarif eden dosyadır.",
      "short_definition": "Git’in takip etmemesi gereken geçici/cache/build dosyalarını tarif eden dosyadır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "ignore .godot folder.",
      "memory_hook": "Motor tarafından yeniden üretilebilen cache dosyaları çoğu zaman repoya konmaz.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cache",
        "branch",
        "merge",
        "debug-vs-release-build",
        "export-preset"
      ],
      "previous_core_term_id": "merge",
      "next_core_term_id": "debug-vs-release-build"
    },
    {
      "id": "at-export",
      "name": "@export",
      "aliases": [],
      "definition": "Bir property’yi Inspector’da düzenlenebilir hale getiren annotation.",
      "short_definition": "Bir property’yi Inspector’da düzenlenebilir hale getiren annotation.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "annotation",
        "inspector",
        "casting",
        "at-onready",
        "extends"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "at-onready",
      "name": "@onready",
      "aliases": [],
      "definition": "Node hazır olduğunda bir değişkeni initialize etmeyi kolaylaştıran annotation.",
      "short_definition": "Node hazır olduğunda bir değişkeni initialize etmeyi kolaylaştıran annotation.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "annotation",
        "node",
        "at-export",
        "extends",
        "class_name"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "_physics_process",
      "name": "_physics_process(delta)",
      "aliases": [
        "delta",
        "_physics_process"
      ],
      "definition": "Sabit fizik adımlarına yakın aralıklarla çalışan callback’tir. CharacterBody hareketi ve fizik ilişkili hesaplar burada yapılır.",
      "short_definition": "Sabit fizik adımlarına yakın aralıklarla çalışan callback’tir. CharacterBody hareketi ve fizik ilişkili hesaplar burada yapılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "physics tick.",
      "memory_hook": "Fizik için daha tutarlı zaman adımı sağlar.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "characterbody",
        "frame-fps",
        "_process",
        "delta",
        "input-action-input-map"
      ],
      "previous_core_term_id": "_process",
      "next_core_term_id": "delta"
    },
    {
      "id": "_process",
      "name": "_process(delta)",
      "aliases": [
        "delta",
        "_process"
      ],
      "definition": "Her çizim frame’inde çalışabilen callback’tir. UI, görsel takip, frame-temelli işler için sık kullanılır.",
      "short_definition": "Her çizim frame’inde çalışabilen callback’tir. UI, görsel takip, frame-temelli işler için sık kullanılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "process callback.",
      "memory_hook": "Fizik hareketini genellikle _physics_process’te tut.",
      "code_example": {
        "language": "gdscript",
        "code": "func _process(delta: float) -> void:\n    rotation += 1.5 * delta"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "_physics_process",
        "game-loop",
        "frame-fps",
        "delta"
      ],
      "previous_core_term_id": "frame-fps",
      "next_core_term_id": "_physics_process"
    },
    {
      "id": "_ready",
      "name": "_ready()",
      "aliases": [
        "_ready"
      ],
      "definition": "Node SceneTree’ye girip çocukları hazır olduğunda çağrılan temel lifecycle callback’lerinden biridir.",
      "short_definition": "Node SceneTree’ye girip çocukları hazır olduğunda çağrılan temel lifecycle callback’lerinden biridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "ready function.",
      "memory_hook": "Node referanslarını ve başlangıç kurulumunu burada sık görürsün.",
      "code_example": {
        "language": "gdscript",
        "code": "func _ready() -> void:\n    print(\"Hazır\")"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "lifecycle",
        "scenetree",
        "node",
        "nodepath-get_node",
        "packedscene-instantiate",
        "queue_free"
      ],
      "previous_core_term_id": "packedscene-instantiate",
      "next_core_term_id": "queue_free"
    },
    {
      "id": "aabb",
      "name": "AABB",
      "aliases": [],
      "definition": "Axis-Aligned Bounding Box; eksenlere hizalı sınırlayıcı kutu, özellikle 3D geometri/çarpışma optimizasyonunda çıkar.",
      "short_definition": "Axis-Aligned Bounding Box; eksenlere hizalı sınırlayıcı kutu, özellikle 3D geometri/çarpışma optimizasyonunda çıkar.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bounding-box",
        "axis"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "ability-skill",
      "name": "Ability / Skill",
      "aliases": [
        "Ability",
        "Skill"
      ],
      "definition": "Karakterin kullanabildiği özel eylem/yetenek.",
      "short_definition": "Karakterin kullanabildiği özel eylem/yetenek.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inventory",
        "quest",
        "damage",
        "health-hp"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "abstraction",
      "name": "Abstraction",
      "aliases": [],
      "definition": "Gereksiz iç ayrıntıları saklayıp önemli davranışı daha basit arayüzle sunma.",
      "short_definition": "Gereksiz iç ayrıntıları saklayıp önemli davranışı daha basit arayüzle sunma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "singleton",
        "event-bus",
        "interface",
        "dependency-injection"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "accessibility",
      "name": "Accessibility",
      "aliases": [],
      "definition": "Farklı fiziksel/duyusal/bilişsel ihtiyaçlara sahip oyuncuların deneyime erişebilmesini destekleyen tasarım.",
      "short_definition": "Farklı fiziksel/duyusal/bilişsel ihtiyaçlara sahip oyuncuların deneyime erişebilmesini destekleyen tasarım.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "ux",
        "ui"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "add-on",
      "name": "Add-on",
      "aliases": [],
      "definition": "Godot’a editor veya runtime özelliği ekleyen eklenti paketi.",
      "short_definition": "Godot’a editor veya runtime özelliği ekleyen eklenti paketi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "editor"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "add_child",
      "name": "add_child()",
      "aliases": [
        "add_child"
      ],
      "definition": "Runtime’da bir Node’u SceneTree’ye child olarak ekler.",
      "short_definition": "Runtime’da bir Node’u SceneTree’ye child olarak ekler.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scenetree",
        "runtime",
        "node",
        "main-scene",
        "owner",
        "remove_child"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "aggro",
      "name": "Aggro",
      "aliases": [],
      "definition": "AI’nın hedefe düşmanlık/öncelik göstermesini anlatan oyun terimi.",
      "short_definition": "AI’nın hedefe düşmanlık/öncelik göstermesini anlatan oyun terimi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "health-hp",
        "stamina-mana",
        "line-of-sight",
        "steering"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "alpha",
      "name": "Alpha",
      "aliases": [],
      "definition": "Renk/texture saydamlık kanalı.",
      "short_definition": "Renk/texture saydamlık kanalı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "anchor-offset",
      "name": "Anchor / Offset",
      "aliases": [
        "Anchor",
        "Offset"
      ],
      "definition": "Anchor parent boyutuna göre oransal referans; offset ise bu referansa eklenen piksel uzaklığıdır.",
      "short_definition": "Anchor parent boyutuna göre oransal referans; offset ise bu referansa eklenen piksel uzaklığıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "anchors preset, offsets.",
      "memory_hook": "Farklı çözünürlükte UI’nın yerini korumasına yardım eder.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "control",
        "container",
        "resolution",
        "aspect-ratio"
      ],
      "previous_core_term_id": "container",
      "next_core_term_id": "resolution"
    },
    {
      "id": "angle",
      "name": "Angle",
      "aliases": [],
      "definition": "İki yön arasındaki açısal değer.",
      "short_definition": "İki yön arasındaki açısal değer.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "rotation",
        "scale",
        "degree-radian",
        "dot-product"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "animationplayer",
      "name": "AnimationPlayer",
      "aliases": [],
      "definition": "Property değerlerini zaman içinde keyframe’lerle değiştiren genel animasyon aracıdır.",
      "short_definition": "Property değerlerini zaman içinde keyframe’lerle değiştiren genel animasyon aracıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "play animation, animation track.",
      "memory_hook": "Karakter dışında UI, kapı, kamera, renk gibi her şeyi animasyonlayabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "keyframe",
        "viewport",
        "material-shader",
        "tween",
        "draw-call"
      ],
      "previous_core_term_id": "material-shader",
      "next_core_term_id": "tween"
    },
    {
      "id": "animationtree",
      "name": "AnimationTree",
      "aliases": [],
      "definition": "Daha karmaşık animasyon blend ve state geçişlerini yöneten Godot sistemi.",
      "short_definition": "Daha karmaşık animasyon blend ve state geçişlerini yöneten Godot sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "blend",
        "state",
        "keyframe",
        "easing",
        "fov"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "annotation",
      "name": "Annotation",
      "aliases": [],
      "definition": "GDScript’te @ ile başlayan özel işaretler: @export, @onready.",
      "short_definition": "GDScript’te @ ile başlayan özel işaretler: @export, @onready.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "at-onready",
        "at-export",
        "null",
        "casting"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "anti-aliasing",
      "name": "Anti-aliasing",
      "aliases": [],
      "definition": "Tırtıklı kenarları yumuşatma tekniklerinin genel adı.",
      "short_definition": "Tırtıklı kenarları yumuşatma tekniklerinin genel adı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "api",
      "name": "API",
      "aliases": [],
      "definition": "Bir sistemin koddan kullanmana izin verdiği sınıf, metod, property ve kurallar bütünüdür.",
      "short_definition": "Bir sistemin koddan kullanmana izin verdiği sınıf, metod, property ve kurallar bütünüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "Godot API, Input API, Steam API.",
      "memory_hook": "API = “bu sistemle kod üzerinden nasıl konuşurum?”",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "project",
        "asset",
        "library-framework-plugin",
        "build-export"
      ],
      "previous_core_term_id": "asset",
      "next_core_term_id": "library-framework-plugin"
    },
    {
      "id": "area",
      "name": "Area",
      "aliases": [],
      "definition": "Fiziksel olarak duvar oluşturmak yerine başka body/area giriş-çıkışlarını algılayan bölgedir.",
      "short_definition": "Fiziksel olarak duvar oluşturmak yerine başka body/area giriş-çıkışlarını algılayan bölgedir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "trigger zone, Area2D.",
      "memory_hook": "Pickup, damage zone, checkpoint için çok kullanılır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "damage",
        "rigidbody",
        "staticbody",
        "velocity-acceleration",
        "collision-layer-mask"
      ],
      "previous_core_term_id": "staticbody",
      "next_core_term_id": "velocity-acceleration"
    },
    {
      "id": "array-dictionary",
      "name": "Array / Dictionary",
      "aliases": [
        "Array",
        "Dictionary"
      ],
      "definition": "Array sıralı değer listesi; Dictionary anahtar-değer eşleşmesi tutar.",
      "short_definition": "Array sıralı değer listesi; Dictionary anahtar-değer eşleşmesi tutar.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "list of enemies, stats dictionary.",
      "memory_hook": "Array’da index; Dictionary’de key düşün.",
      "code_example": {
        "language": "gdscript",
        "code": "var players: Array[String] = [\"Ali\", \"Ece\"]\nvar stats := {\"speed\": 80, \"shot\": 72}"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "conditional",
        "loop",
        "class-object-instance"
      ],
      "previous_core_term_id": "loop",
      "next_core_term_id": "class-object-instance"
    },
    {
      "id": "aspect-ratio",
      "name": "Aspect Ratio",
      "aliases": [],
      "definition": "Ekranın genişlik/yükseklik oranıdır: 16:9, 21:9 gibi.",
      "short_definition": "Ekranın genişlik/yükseklik oranıdır: 16:9, 21:9 gibi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "ultrawide support, aspect ratio.",
      "memory_hook": "Aynı aspect ratio farklı resolution’larda olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "resolution",
        "anchor-offset",
        "scaling-stretch",
        "theme"
      ],
      "previous_core_term_id": "resolution",
      "next_core_term_id": "scaling-stretch"
    },
    {
      "id": "asset",
      "name": "Asset",
      "aliases": [],
      "definition": "Oyunda kullanılan içerik dosyalarının genel adıdır: görsel, ses, font, 3D model, animasyon, veri dosyası vb.",
      "short_definition": "Oyunda kullanılan içerik dosyalarının genel adıdır: görsel, ses, font, 3D model, animasyon, veri dosyası vb.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "asset pack, asset pipeline, import asset.",
      "memory_hook": "Kod olmayan her şey asset değildir; bazı Resource dosyaları da asset kabul edilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "resource",
        "editor",
        "project",
        "api",
        "library-framework-plugin"
      ],
      "previous_core_term_id": "project",
      "next_core_term_id": "api"
    },
    {
      "id": "asset-pipeline",
      "name": "Asset Pipeline",
      "aliases": [],
      "definition": "Assetlerin üretilmesi, import edilmesi, işlenmesi ve projede kullanılmasına kadar olan süreç.",
      "short_definition": "Assetlerin üretilmesi, import edilmesi, işlenmesi ve projede kullanılmasına kadar olan süreç.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "import"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "atlas-sprite-sheet",
      "name": "Atlas / Sprite Sheet",
      "aliases": [
        "Atlas",
        "Sprite Sheet"
      ],
      "definition": "Birden fazla küçük görseli tek büyük texture içinde saklama yaklaşımıdır.",
      "short_definition": "Birden fazla küçük görseli tek büyük texture içinde saklama yaklaşımıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "sprite atlas, animation frames.",
      "memory_hook": "Animasyon frame’leri ve UI ikonlarında sık görürsün.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "sprite-texture",
        "tile-tilemap",
        "camera"
      ],
      "previous_core_term_id": "sprite-texture",
      "next_core_term_id": "tile-tilemap"
    },
    {
      "id": "audio-bus",
      "name": "Audio Bus",
      "aliases": [],
      "definition": "Sesleri gruplandırıp volume/effect gibi işlemleri topluca uyguladığın mixer kanalıdır.",
      "short_definition": "Sesleri gruplandırıp volume/effect gibi işlemleri topluca uyguladığın mixer kanalıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "Master bus, SFX bus, music bus.",
      "memory_hook": "Music ve SFX’i ayrı bus’larda tutmak yaygın pratiktir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "sfx-bgm",
        "client-server"
      ],
      "previous_core_term_id": "behavior-tree",
      "next_core_term_id": "sfx-bgm"
    },
    {
      "id": "audio-stream",
      "name": "Audio Stream",
      "aliases": [],
      "definition": "Çalınabilir ses verisini temsil eden kaynak türü fikri.",
      "short_definition": "Çalınabilir ses verisini temsil eden kaynak türü fikri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "db",
        "loop",
        "spatial-audio"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "authority",
      "name": "Authority",
      "aliases": [],
      "definition": "Bir ağ nesnesinin “doğru kabul edilen” durumunu hangi peer’ın kontrol ettiğini belirleyen yetki kavramıdır.",
      "short_definition": "Bir ağ nesnesinin “doğru kabul edilen” durumunu hangi peer’ın kontrol ettiğini belirleyen yetki kavramıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "server authority, multiplayer authority.",
      "memory_hook": "Hile önleme ve tutarlılık için önemlidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "peer",
        "rpc",
        "latency-ping",
        "replication-synchronization"
      ],
      "previous_core_term_id": "rpc",
      "next_core_term_id": "latency-ping"
    },
    {
      "id": "autoload",
      "name": "Autoload",
      "aliases": [],
      "definition": "Bir scene veya scripti proje boyunca otomatik yüklenen global erişilebilir node olarak kullanma mekanizmasıdır.",
      "short_definition": "Bir scene veya scripti proje boyunca otomatik yüklenen global erişilebilir node olarak kullanma mekanizmasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "GameManager autoload, global singleton.",
      "memory_hook": "Her şeyi Autoload yapmak yerine gerçekten global ömürlü servisler için kullan.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "node",
        "queue_free",
        "group"
      ],
      "previous_core_term_id": "group",
      "next_core_term_id": "game-loop"
    },
    {
      "id": "await",
      "name": "await",
      "aliases": [],
      "definition": "Bir signal veya coroutine benzeri işlemin tamamlanmasını bekleyip sonra devam etme.",
      "short_definition": "Bir signal veya coroutine benzeri işlemin tamamlanmasını bekleyip sonra devam etme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "coroutine",
        "signal",
        "callable",
        "lambda"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "axis",
      "name": "Axis",
      "aliases": [],
      "definition": "x, y, z yönlerinden biri.",
      "short_definition": "x, y, z yönlerinden biri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "origin",
        "position",
        "rotation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "backlog",
      "name": "Backlog",
      "aliases": [],
      "definition": "Henüz yapılmamış iş/özellik/fix listesinin havuzu.",
      "short_definition": "Henüz yapılmamış iş/özellik/fix listesinin havuzu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "milestone",
        "roadmap",
        "task",
        "bugfix"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "backup",
      "name": "Backup",
      "aliases": [],
      "definition": "Version control’den bağımsız ek veri kopyası; ikisi aynı şey değildir.",
      "short_definition": "Version control’den bağımsız ek veri kopyası; ikisi aynı şey değildir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "version-control",
        "control",
        "patch",
        "hotfix"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "bake",
      "name": "Bake",
      "aliases": [],
      "definition": "Önceden hesaplanabilen bir veriyi (navigation, light vb.) çalışma öncesinde üretmek.",
      "short_definition": "Önceden hesaplanabilen bir veriyi (navigation, light vb.) çalışma öncesinde üretmek.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "light"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "balancing",
      "name": "Balancing",
      "aliases": [],
      "definition": "Mekanik, ekonomi, zorluk ve değerleri istenen deneyime göre ayarlama sürecidir.",
      "short_definition": "Mekanik, ekonomi, zorluk ve değerleri istenen deneyime göre ayarlama sürecidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "balance damage, economy balance.",
      "memory_hook": "Her şeyin eşit olması balancing değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "iteration",
        "playtest",
        "game-feel-juice",
        "feedback-affordance"
      ],
      "previous_core_term_id": "playtest",
      "next_core_term_id": "game-feel-juice"
    },
    {
      "id": "bandwidth",
      "name": "Bandwidth",
      "aliases": [],
      "definition": "Belirli sürede taşınabilecek veri miktarı.",
      "short_definition": "Belirli sürede taşınabilecek veri miktarı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "spatial-audio",
        "packet",
        "packet-loss",
        "jitter"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "batching",
      "name": "Batching",
      "aliases": [],
      "definition": "Birden çok çizim işini daha az render komutunda birleştirmeye yönelik teknikler.",
      "short_definition": "Birden çok çizim işini daha az render komutunda birleştirmeye yönelik teknikler.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "culling",
        "lod",
        "cache",
        "benchmark"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "behavior-tree",
      "name": "Behavior Tree",
      "aliases": [],
      "definition": "AI davranışlarını seçici, sıra, koşul ve eylem gibi düğümlerle hiyerarşik biçimde modelleyen yaygın yaklaşım.",
      "short_definition": "AI davranışlarını seçici, sıra, koşul ve eylem gibi düğümlerle hiyerarşik biçimde modelleyen yaygın yaklaşım.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "BT, selector, sequence.",
      "memory_hook": "Başlangıçta FSM öğrenmek daha kolay; Behavior Tree daha karmaşık AI’da çıkar.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "pathfinding",
        "navigation-navmesh"
      ],
      "previous_core_term_id": "navigation-navmesh",
      "next_core_term_id": "audio-bus"
    },
    {
      "id": "benchmark",
      "name": "Benchmark",
      "aliases": [],
      "definition": "Belirli senaryoda performansı ölçüp karşılaştırma testi.",
      "short_definition": "Belirli senaryoda performansı ölçüp karşılaştırma testi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "batching",
        "cache",
        "hot-path"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "blend",
      "name": "Blend",
      "aliases": [],
      "definition": "İki animasyon veya değeri oranlı şekilde karıştırma.",
      "short_definition": "İki animasyon veya değeri oranlı şekilde karıştırma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "easing",
        "animationtree",
        "fov"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "blend-tree",
      "name": "Blend Tree",
      "aliases": [],
      "definition": "Animasyonları parametrelere göre karıştıran yapı; farklı motorlarda benzer terimler kullanılır.",
      "short_definition": "Animasyonları parametrelere göre karıştıran yapı; farklı motorlarda benzer terimler kullanılır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "bool",
      "name": "bool",
      "aliases": [],
      "definition": "true / false.",
      "short_definition": "true / false.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "int",
        "float",
        "string",
        "variant"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "bottleneck",
      "name": "Bottleneck",
      "aliases": [],
      "definition": "Sistemin genel performansını en çok sınırlayan dar boğazdır.",
      "short_definition": "Sistemin genel performansını en çok sınırlayan dar boğazdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "CPU bottleneck, GPU bottleneck.",
      "memory_hook": "En yavaş kritik bölüm iyileştirilmeden başka yerleri optimize etmek az sonuç verebilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stack-trace",
        "profiler",
        "cpu-vs-gpu",
        "memory-allocation"
      ],
      "previous_core_term_id": "profiler",
      "next_core_term_id": "cpu-vs-gpu"
    },
    {
      "id": "bounce-restitution",
      "name": "Bounce / Restitution",
      "aliases": [
        "Bounce",
        "Restitution"
      ],
      "definition": "Çarpışmada ne kadar sekme olacağını belirleyen fizik özelliği.",
      "short_definition": "Çarpışmada ne kadar sekme olacağını belirleyen fizik özelliği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "impulse",
        "friction",
        "normal",
        "kinematic"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "bounding-box",
      "name": "Bounding Box",
      "aliases": [],
      "definition": "Bir nesnenin kapladığı alanı yaklaşık çevreleyen kutu.",
      "short_definition": "Bir nesnenin kapladığı alanı yaklaşık çevreleyen kutu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "branch",
      "name": "Branch",
      "aliases": [],
      "definition": "Ana geliştirmeden ayrılan paralel değişiklik çizgisidir.",
      "short_definition": "Ana geliştirmeden ayrılan paralel değişiklik çizgisidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "feature branch, main branch.",
      "memory_hook": "Yeni özelliği ayrı branch’te deneyip sonra birleştirebilirsin.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "version-control",
        "commit",
        "merge",
        "dot-gitignore"
      ],
      "previous_core_term_id": "commit",
      "next_core_term_id": "merge"
    },
    {
      "id": "buff-debuff",
      "name": "Buff / Debuff",
      "aliases": [
        "Buff",
        "Debuff"
      ],
      "definition": "Geçici veya koşullu olumlu / olumsuz stat-etki.",
      "short_definition": "Geçici veya koşullu olumlu / olumsuz stat-etki.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stat",
        "cooldown",
        "inventory",
        "quest"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "bug",
      "name": "Bug",
      "aliases": [],
      "definition": "Programın beklenen davranıştan sapmasına neden olan hata/problem için genel terimdir.",
      "short_definition": "Programın beklenen davranıştan sapmasına neden olan hata/problem için genel terimdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "bug fix, regression bug.",
      "memory_hook": "Bug = her zaman syntax hatası değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "syntax-runtime-logic-error",
        "debugger-breakpoint"
      ],
      "previous_core_term_id": "replication-synchronization",
      "next_core_term_id": "syntax-runtime-logic-error"
    },
    {
      "id": "bugfix",
      "name": "Bugfix",
      "aliases": [],
      "definition": "Bir hatayı düzeltmeye yönelik değişiklik.",
      "short_definition": "Bir hatayı düzeltmeye yönelik değişiklik.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "backlog",
        "task",
        "scope-creep",
        "cut"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "build-export",
      "name": "Build / Export",
      "aliases": [
        "Build",
        "Export"
      ],
      "definition": "Projenin oyuncunun çalıştırabileceği platform çıktısına dönüştürülmesidir. Godot genellikle “Export” kelimesini kullanır.",
      "short_definition": "Projenin oyuncunun çalıştırabileceği platform çıktısına dönüştürülmesidir. Godot genellikle “Export” kelimesini kullanır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "Windows build, export preset, debug build.",
      "memory_hook": "Editor’de çalışan proje ile dağıttığın oyun dosyası aynı şey değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "platform",
        "editor",
        "api",
        "library-framework-plugin",
        "runtime"
      ],
      "previous_core_term_id": "library-framework-plugin",
      "next_core_term_id": "runtime"
    },
    {
      "id": "cache",
      "name": "Cache",
      "aliases": [],
      "definition": "Tekrar kullanılacak veriyi daha hızlı erişim için saklama.",
      "short_definition": "Tekrar kullanılacak veriyi daha hızlı erişim için saklama.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "lod",
        "batching",
        "benchmark",
        "hot-path"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "callable",
      "name": "Callable",
      "aliases": [],
      "definition": "Sonradan çağrılabilecek bir fonksiyonu temsil eden Godot türü.",
      "short_definition": "Sonradan çağrılabilecek bir fonksiyonu temsil eden Godot türü.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inheritance",
        "composition",
        "lambda",
        "await"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "camera",
      "name": "Camera",
      "aliases": [],
      "definition": "Oyuncuya dünyanın hangi bölümünün ve nasıl gösterileceğini belirler.",
      "short_definition": "Oyuncuya dünyanın hangi bölümünün ve nasıl gösterileceğini belirler.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "Camera2D smoothing, FOV.",
      "memory_hook": "Kamera sadece takip etmez; zoom, shake, framing ve game feel’in parçasıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "atlas-sprite-sheet",
        "tile-tilemap",
        "viewport",
        "material-shader"
      ],
      "previous_core_term_id": "tile-tilemap",
      "next_core_term_id": "viewport"
    },
    {
      "id": "canvas",
      "name": "Canvas",
      "aliases": [],
      "definition": "Godot 2D çizim dünyasının temel render katmanı kavramı.",
      "short_definition": "Godot 2D çizim dünyasının temel render katmanı kavramı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "renderer",
        "z-index",
        "layer"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "canvaslayer",
      "name": "CanvasLayer",
      "aliases": [],
      "definition": "Godot’ta 2D çizimleri farklı canvas katmanında tutmaya yarayan node; HUD için sık kullanılır.",
      "short_definition": "Godot’ta 2D çizimleri farklı canvas katmanında tutmaya yarayan node; HUD için sık kullanılır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "canvas",
        "node",
        "hud"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "casting",
      "name": "Casting",
      "aliases": [],
      "definition": "Bir değeri başka bir tipe dönüştürme veya o tipte ele alma.",
      "short_definition": "Bir değeri başka bir tipe dönüştürme veya o tipte ele alma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "enum",
        "null",
        "annotation",
        "at-export"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "characterbody",
      "name": "CharacterBody",
      "aliases": [],
      "definition": "Kodla kontrol edilen oyuncu/NPC karakterleri gibi hareketli gövdeler için tasarlanmış body türüdür.",
      "short_definition": "Kodla kontrol edilen oyuncu/NPC karakterleri gibi hareketli gövdeler için tasarlanmış body türüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "move_and_slide, CharacterBody2D.",
      "memory_hook": "RigidBody gibi tamamen fizik simülasyonuna bırakılmaz.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "rigidbody",
        "collision",
        "collisionshape2d-3d",
        "staticbody"
      ],
      "previous_core_term_id": "collisionshape2d-3d",
      "next_core_term_id": "rigidbody"
    },
    {
      "id": "ci-cd",
      "name": "CI/CD",
      "aliases": [],
      "definition": "Kod değişikliklerinden sonra test/build/export gibi adımları otomatik çalıştıran süreçlerin genel adı.",
      "short_definition": "Kod değişikliklerinden sonra test/build/export gibi adımları otomatik çalıştıran süreçlerin genel adı.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "GitHub Actions, build pipeline.",
      "memory_hook": "Başlangıçta şart değil; ekip/proje büyüdükçe duyarsın.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "debug-vs-release-build",
        "export-preset"
      ],
      "previous_core_term_id": "export-preset",
      "next_core_term_id": "prototype"
    },
    {
      "id": "clamp",
      "name": "Clamp",
      "aliases": [],
      "definition": "Bir değeri minimum ve maksimum sınır arasında tutma.",
      "short_definition": "Bir değeri minimum ve maksimum sınır arasında tutma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "dot-product",
        "cross-product",
        "remap",
        "smoothing"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "class-object-instance",
      "name": "Class / Object / Instance",
      "aliases": [
        "Class",
        "Object",
        "Instance"
      ],
      "definition": "Class bir tür/şablon fikridir; object o türden çalışan nesnedir; instance ise bir sınıfın veya sahnenin oluşturulmuş örneğidir.",
      "short_definition": "Class bir tür/şablon fikridir; object o türden çalışan nesnedir; instance ise bir sınıfın veya sahnenin oluşturulmuş örneğidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "instantiate, object instance.",
      "memory_hook": "Player sınıf fikri; sahnedeki Player_1 çalışan örnektir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "instance",
        "object",
        "loop",
        "array-dictionary"
      ],
      "previous_core_term_id": "array-dictionary",
      "next_core_term_id": "node"
    },
    {
      "id": "class_name",
      "name": "class_name",
      "aliases": [],
      "definition": "Script sınıfına global olarak kullanılabilen isim verir.",
      "short_definition": "Script sınıfına global olarak kullanılabilen isim verir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "at-onready",
        "extends",
        "inheritance",
        "composition"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "client-server",
      "name": "Client / Server",
      "aliases": [
        "Client",
        "Server"
      ],
      "definition": "Client oyuncunun uygulaması; server oyunun ortak durumunu barındıran/koordine eden taraf olarak kullanılan temel ağ modelidir.",
      "short_definition": "Client oyuncunun uygulaması; server oyunun ortak durumunu barındıran/koordine eden taraf olarak kullanılan temel ağ modelidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "dedicated server, client prediction.",
      "memory_hook": "Multiplayer’da “kime güveniyoruz?” sorusu merkezidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "audio-bus",
        "sfx-bgm",
        "peer",
        "rpc"
      ],
      "previous_core_term_id": "sfx-bgm",
      "next_core_term_id": "peer"
    },
    {
      "id": "clone",
      "name": "Clone",
      "aliases": [],
      "definition": "Remote repoyu yerel bilgisayara kopyalama.",
      "short_definition": "Remote repoyu yerel bilgisayara kopyalama.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "remote",
        "push",
        "pull",
        "diff",
        "conflict"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "cohesion",
      "name": "Cohesion",
      "aliases": [],
      "definition": "Bir sınıf veya modüldeki parçaların tek ve anlamlı bir sorumluluk etrafında ne kadar iyi toplandığını anlatır.",
      "short_definition": "Bir sınıf veya modüldeki parçaların tek ve anlamlı bir sorumluluk etrafında ne kadar iyi toplandığını anlatır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "high cohesion.",
      "memory_hook": "Bir script her işi yapıyorsa cohesion genellikle düşüktür.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "finite-state-machine",
        "coupling",
        "encapsulation",
        "signal-event-driven-architecture"
      ],
      "previous_core_term_id": "coupling",
      "next_core_term_id": "encapsulation"
    },
    {
      "id": "collision",
      "name": "Collision",
      "aliases": [],
      "definition": "İki fizik şeklinin birbirine temas/örtüşme durumunun motor tarafından algılanmasıdır.",
      "short_definition": "İki fizik şeklinin birbirine temas/örtüşme durumunun motor tarafından algılanmasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "collision detection.",
      "memory_hook": "Görsel sprite ile collision shape aynı şey değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "collisionshape2d-3d",
        "characterbody"
      ],
      "previous_core_term_id": "distance-direction",
      "next_core_term_id": "collisionshape2d-3d"
    },
    {
      "id": "collision-layer-mask",
      "name": "Collision Layer / Mask",
      "aliases": [
        "Collision Layer",
        "Mask"
      ],
      "definition": "Layer “ben hangi fizik katmanındayım?”, mask ise “hangi katmanları algılarım?” mantığıdır.",
      "short_definition": "Layer “ben hangi fizik katmanındayım?”, mask ise “hangi katmanları algılarım?” mantığıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "layer 1, mask 2.",
      "memory_hook": "Çarpışma filtrelemenin temelidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "layer",
        "area",
        "velocity-acceleration",
        "raycast-shapecast"
      ],
      "previous_core_term_id": "velocity-acceleration",
      "next_core_term_id": "raycast-shapecast"
    },
    {
      "id": "collisionshape2d-3d",
      "name": "CollisionShape2D / 3D",
      "aliases": [
        "CollisionShape2D",
        "3D"
      ],
      "definition": "Bir fizik nesnesinin çarpışma geometrisini tanımlar. Rectangle, capsule, sphere vb. şekiller kullanılabilir.",
      "short_definition": "Bir fizik nesnesinin çarpışma geometrisini tanımlar. Rectangle, capsule, sphere vb. şekiller kullanılabilir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "hitbox shape, collision shape.",
      "memory_hook": "Görsele mümkün olduğunca uygun ama gereksiz karmaşık olmayan şekil kullan.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "collision",
        "characterbody",
        "rigidbody"
      ],
      "previous_core_term_id": "collision",
      "next_core_term_id": "characterbody"
    },
    {
      "id": "commit",
      "name": "Commit",
      "aliases": [],
      "definition": "Projedeki belirli değişiklik grubunun isimlendirilmiş/sabitlenmiş kayıt noktasıdır.",
      "short_definition": "Projedeki belirli değişiklik grubunun isimlendirilmiş/sabitlenmiş kayıt noktasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "make a commit.",
      "memory_hook": "Küçük ve anlamlı commit’ler hata ayıklamayı kolaylaştırır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "version-control",
        "branch",
        "merge"
      ],
      "previous_core_term_id": "version-control",
      "next_core_term_id": "branch"
    },
    {
      "id": "component",
      "name": "Component",
      "aliases": [],
      "definition": "Tek sorumluluklu, başka nesneye eklenerek davranış kazandıran modüler parça fikri.",
      "short_definition": "Tek sorumluluklu, başka nesneye eklenerek davranış kazandıran modüler parça fikri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "composition",
      "name": "Composition",
      "aliases": [],
      "definition": "Davranışları tek dev sınıf yerine küçük parçaları birleştirerek kurma yaklaşımı.",
      "short_definition": "Davranışları tek dev sınıf yerine küçük parçaları birleştirerek kurma yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "class_name",
        "inheritance",
        "callable",
        "lambda"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "composition-over-inheritance",
      "name": "Composition over Inheritance",
      "aliases": [],
      "definition": "Davranışları derin inheritance zincirleri yerine küçük parçaları birleştirerek kurmayı tercih eden tasarım ilkesi.",
      "short_definition": "Davranışları derin inheritance zincirleri yerine küçük parçaları birleştirerek kurmayı tercih eden tasarım ilkesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inheritance",
        "interface",
        "dependency-injection",
        "object-pooling",
        "factory"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "conditional",
      "name": "Conditional",
      "aliases": [],
      "definition": "Koşula göre farklı kod yollarını çalıştırır. if / elif / else ve match bu amaçla kullanılır.",
      "short_definition": "Koşula göre farklı kod yollarını çalıştırır. if / elif / else ve match bu amaçla kullanılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "condition, branch.",
      "memory_hook": "Oyun mantığının büyük bölümü “eğer X ise Y yap”tır.",
      "code_example": {
        "language": "gdscript",
        "code": "if health <= 0:\n    die()"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "return-value",
        "scope",
        "loop",
        "array-dictionary"
      ],
      "previous_core_term_id": "scope",
      "next_core_term_id": "loop"
    },
    {
      "id": "config",
      "name": "Config",
      "aliases": [],
      "definition": "Ayar verilerini temsil eden genel kavram.",
      "short_definition": "Ayar verilerini temsil eden genel kavram.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "json",
        "schema",
        "manager"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "conflict",
      "name": "Conflict",
      "aliases": [],
      "definition": "Git otomatik birleştiremediğinde manuel karar gerektiren çakışma.",
      "short_definition": "Git otomatik birleştiremediğinde manuel karar gerektiren çakışma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "clone",
        "diff",
        "tag",
        "semantic-versioning"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "constant",
      "name": "Constant (Sabit)",
      "aliases": [
        "Sabit",
        "Constant"
      ],
      "definition": "Program çalışırken değiştirilmemesi amaçlanan değerdir. GDScript’te const ile tanımlanır.",
      "short_definition": "Program çalışırken değiştirilmemesi amaçlanan değerdir. GDScript’te const ile tanımlanır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "constants, magic numbers.",
      "memory_hook": "Değişmeyecek bir değere anlamlı isim ver.",
      "code_example": {
        "language": "gdscript",
        "code": "const MAX_HEALTH := 100"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "variable",
        "data-type",
        "dynamic-vs-static-typing"
      ],
      "previous_core_term_id": "variable",
      "next_core_term_id": "data-type"
    },
    {
      "id": "container",
      "name": "Container",
      "aliases": [],
      "definition": "Child Control node’larının boyut/konumunu otomatik düzenleyen UI node’larıdır. VBox, HBox, Grid, Margin gibi çeşitleri vardır.",
      "short_definition": "Child Control node’larının boyut/konumunu otomatik düzenleyen UI node’larıdır. VBox, HBox, Grid, Margin gibi çeşitleri vardır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "VBoxContainer, layout.",
      "memory_hook": "Responsive UI’nın en güçlü araçlarından biridir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "responsive-ui",
        "control",
        "node",
        "ui-gui",
        "anchor-offset",
        "resolution"
      ],
      "previous_core_term_id": "control",
      "next_core_term_id": "anchor-offset"
    },
    {
      "id": "control",
      "name": "Control",
      "aliases": [],
      "definition": "Godot’ta UI node’larının temel sınıf ailesidir. Position/size yerine anchors, offsets ve containers gibi UI düzen mantıklarıyla çalışır.",
      "short_definition": "Godot’ta UI node’larının temel sınıf ailesidir. Position/size yerine anchors, offsets ve containers gibi UI düzen mantıklarıyla çalışır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "Control node, custom minimum size.",
      "memory_hook": "Node2D ile UI yapmaya çalışmak yerine Control ailesini öğren.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "position",
        "node2d",
        "node",
        "ui-gui",
        "container",
        "anchor-offset"
      ],
      "previous_core_term_id": "ui-gui",
      "next_core_term_id": "container"
    },
    {
      "id": "cooldown",
      "name": "Cooldown",
      "aliases": [],
      "definition": "Bir ability/eylemin tekrar kullanılmadan önce bekleme süresi.",
      "short_definition": "Bir ability/eylemin tekrar kullanılmadan önce bekleme süresi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stat",
        "buff-debuff"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "coordinate-system",
      "name": "Coordinate System",
      "aliases": [],
      "definition": "Dünyadaki konumu eksenlerle ifade eden sistemdir. 2D’de x/y, 3D’de x/y/z kullanılır.",
      "short_definition": "Dünyadaki konumu eksenlerle ifade eden sistemdir. 2D’de x/y, 3D’de x/y/z kullanılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "coordinates, axis.",
      "memory_hook": "Ekran koordinatları ile dünya koordinatları aynı olmak zorunda değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "vector2-vector3",
        "magnitude-length"
      ],
      "previous_core_term_id": "timer-cooldown",
      "next_core_term_id": "vector2-vector3"
    },
    {
      "id": "core-loop",
      "name": "Core Loop",
      "aliases": [],
      "definition": "Oyuncunun oyunda tekrar tekrar yaptığı ana eylem döngüsüdür.",
      "short_definition": "Oyuncunun oyunda tekrar tekrar yaptığı ana eylem döngüsüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "gameplay loop, core loop.",
      "memory_hook": "Örn: keşfet -> savaş -> ödül al -> güçlen -> daha zor alana git.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "game-mechanic",
        "game-system",
        "spawn-despawn"
      ],
      "previous_core_term_id": "game-mechanic",
      "next_core_term_id": "game-system"
    },
    {
      "id": "coroutine",
      "name": "Coroutine",
      "aliases": [],
      "definition": "Çalışması zaman içinde duraklayıp daha sonra devam edebilen fonksiyon akışı için genel terim.",
      "short_definition": "Çalışması zaman içinde duraklayıp daha sonra devam edebilen fonksiyon akışı için genel terim.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "coupling",
      "name": "Coupling",
      "aliases": [],
      "definition": "İki sistemin birbirine ne kadar sıkı bağımlı olduğunu anlatır.",
      "short_definition": "İki sistemin birbirine ne kadar sıkı bağımlı olduğunu anlatır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "tightly coupled, decoupled.",
      "memory_hook": "Düşük coupling genellikle sistemi değiştirmeyi/test etmeyi kolaylaştırır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "state",
        "finite-state-machine",
        "cohesion",
        "encapsulation"
      ],
      "previous_core_term_id": "finite-state-machine",
      "next_core_term_id": "cohesion"
    },
    {
      "id": "cpu-vs-gpu",
      "name": "CPU vs GPU",
      "aliases": [],
      "definition": "CPU genel oyun mantığı, fizik, script vb.; GPU görüntü çizimi ve paralel grafik hesaplarında öne çıkar.",
      "short_definition": "CPU genel oyun mantığı, fizik, script vb.; GPU görüntü çizimi ve paralel grafik hesaplarında öne çıkar.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "CPU-bound, GPU-bound.",
      "memory_hook": "Performans problemi “oyun yavaş” demekle çözülmez; hangi taraf sınır?",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "profiler",
        "bottleneck",
        "memory-allocation",
        "premature-optimization"
      ],
      "previous_core_term_id": "bottleneck",
      "next_core_term_id": "memory-allocation"
    },
    {
      "id": "cross-product",
      "name": "Cross Product",
      "aliases": [],
      "definition": "3D’de vectorlere dik yön üretme gibi işlemlerde kullanılan çarpım.",
      "short_definition": "3D’de vectorlere dik yön üretme gibi işlemlerde kullanılan çarpım.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "degree-radian",
        "dot-product",
        "clamp",
        "remap"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "culling",
      "name": "Culling",
      "aliases": [],
      "definition": "Görünmeyecek nesneleri render işinden çıkarmak.",
      "short_definition": "Görünmeyecek nesneleri render işinden çıkarmak.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "fps-monitor",
        "frame-time",
        "lod",
        "batching"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "cut",
      "name": "Cut",
      "aliases": [],
      "definition": "Bir özelliği/kapsamı projeden çıkarmak.",
      "short_definition": "Bir özelliği/kapsamı projeden çıkarmak.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bugfix",
        "scope-creep",
        "polish",
        "onboarding"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "damage",
      "name": "Damage",
      "aliases": [],
      "definition": "Can veya başka kaynak üzerinde azalma üreten etki.",
      "short_definition": "Can veya başka kaynak üzerinde azalma üreten etki.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "quest",
        "ability-skill",
        "health-hp",
        "stamina-mana"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "data-type",
      "name": "Data Type (Veri Tipi)",
      "aliases": [
        "Veri Tipi",
        "Data Type"
      ],
      "definition": "Bir değerin ne tür veri olduğunu belirtir: int, float, bool, String, Vector2 gibi.",
      "short_definition": "Bir değerin ne tür veri olduğunu belirtir: int, float, bool, String, Vector2 gibi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "type mismatch, typed variable.",
      "memory_hook": "Tip, o veriye hangi işlemlerin uygulanabileceğini de belirler.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "string",
        "float",
        "bool",
        "int",
        "variable",
        "constant"
      ],
      "previous_core_term_id": "constant",
      "next_core_term_id": "dynamic-vs-static-typing"
    },
    {
      "id": "data-vs-logic",
      "name": "Data vs Logic",
      "aliases": [],
      "definition": "Data “ne var?” bilgisidir; logic “bu bilgiyle ne yapılır?” davranışıdır. Oyuncu speed=80 data; calculate_speed() logic örneğidir.",
      "short_definition": "Data “ne var?” bilgisidir; logic “bu bilgiyle ne yapılır?” davranışıdır. Oyuncu speed=80 data; calculate_speed() logic örneğidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "separate data from logic.",
      "memory_hook": "Veri yoğun oyunlarda bu ayrım projeyi çok rahatlatır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "resource",
        "serialization"
      ],
      "previous_core_term_id": "hud",
      "next_core_term_id": "resource"
    },
    {
      "id": "db",
      "name": "dB (Decibel)",
      "aliases": [
        "Decibel",
        "dB"
      ],
      "definition": "Ses seviyelerini ifade ederken kullanılan logaritmik birim; 0 dB “maksimum ses” anlamına gelmek zorunda değildir ama dijital mixer bağlamında referans seviyedir.",
      "short_definition": "Ses seviyelerini ifade ederken kullanılan logaritmik birim; 0 dB “maksimum ses” anlamına gelmek zorunda değildir ama dijital mixer bağlamında referans seviyedir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "audio-stream",
        "loop"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "dead-zone",
      "name": "Dead Zone",
      "aliases": [],
      "definition": "Analog stick küçük titreşimlerinin input sayılmaması için merkez çevresindeki tolerans.",
      "short_definition": "Analog stick küçük titreşimlerinin input sayılmaması için merkez çevresindeki tolerans.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inputevent",
        "pressed-just-pressed",
        "focus",
        "pause"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "debug-vs-release-build",
      "name": "Debug vs Release Build",
      "aliases": [],
      "definition": "Debug build geliştirme ve hata ayıklama bilgilerine odaklanır; release build dağıtım/performans için daha uygun ayarlarla hazırlanır.",
      "short_definition": "Debug build geliştirme ve hata ayıklama bilgilerine odaklanır; release build dağıtım/performans için daha uygun ayarlarla hazırlanır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "export debug, export release.",
      "memory_hook": "Oyuncuya debug build göndermek her zaman doğru değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "release",
        "merge",
        "dot-gitignore",
        "export-preset",
        "ci-cd"
      ],
      "previous_core_term_id": "dot-gitignore",
      "next_core_term_id": "export-preset"
    },
    {
      "id": "debugger-breakpoint",
      "name": "Debugger / Breakpoint",
      "aliases": [
        "Debugger",
        "Breakpoint"
      ],
      "definition": "Debugger çalışan programın durumunu incelemene yarar. Breakpoint kodu belirli satırda durdurup değişkenleri adım adım görmeni sağlar.",
      "short_definition": "Debugger çalışan programın durumunu incelemene yarar. Breakpoint kodu belirli satırda durdurup değişkenleri adım adım görmeni sağlar.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "set breakpoint, step over.",
      "memory_hook": "print() tek araç değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "print",
        "bug",
        "syntax-runtime-logic-error",
        "stack-trace",
        "profiler"
      ],
      "previous_core_term_id": "syntax-runtime-logic-error",
      "next_core_term_id": "stack-trace"
    },
    {
      "id": "dedicated-server",
      "name": "Dedicated Server",
      "aliases": [],
      "definition": "Oyuncu olmayan, sadece server rolü çalışan ayrı süreç/makine.",
      "short_definition": "Oyuncu olmayan, sadece server rolü çalışan ayrı süreç/makine.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "packet-loss",
        "jitter",
        "host",
        "prediction"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "degree-radian",
      "name": "Degree / Radian",
      "aliases": [
        "Degree",
        "Radian"
      ],
      "definition": "Açıyı ifade eden iki birim. Programlama API’lerinde radyan sık kullanılır.",
      "short_definition": "Açıyı ifade eden iki birim. Programlama API’lerinde radyan sık kullanılır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "api",
        "scale",
        "angle",
        "dot-product",
        "cross-product"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "delta",
      "name": "delta",
      "aliases": [],
      "definition": "Son güncelleme adımından beri geçen süreyi saniye cinsinden temsil eden değerdir.",
      "short_definition": "Son güncelleme adımından beri geçen süreyi saniye cinsinden temsil eden değerdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "multiply by delta.",
      "memory_hook": "“Saniyede 200 piksel” gibi zamana bağlı hızları frame bağımsız yapmak için kullanılır.",
      "code_example": {
        "language": "gdscript",
        "code": "position.x += speed * delta"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "_process",
        "_physics_process",
        "input-action-input-map",
        "polling-vs-event-driven-input"
      ],
      "previous_core_term_id": "_physics_process",
      "next_core_term_id": "input-action-input-map"
    },
    {
      "id": "dependency",
      "name": "Dependency",
      "aliases": [],
      "definition": "Bir sistemin çalışmak için ihtiyaç duyduğu başka paket, sınıf veya servis.",
      "short_definition": "Bir sistemin çalışmak için ihtiyaç duyduğu başka paket, sınıf veya servis.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "import",
        "pipeline",
        "open-source",
        "license"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "dependency-injection",
      "name": "Dependency Injection",
      "aliases": [],
      "definition": "Bir nesnenin ihtiyacını kendisi yaratmak yerine dışarıdan alması yaklaşımı.",
      "short_definition": "Bir nesnenin ihtiyacını kendisi yaratmak yerine dışarıdan alması yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "abstraction",
        "interface",
        "composition-over-inheritance",
        "object-pooling"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "deterministic",
      "name": "Deterministic",
      "aliases": [],
      "definition": "Aynı input/başlangıç koşullarında aynı sonucu üretme özelliği.",
      "short_definition": "Aynı input/başlangıç koşullarında aynı sonucu üretme özelliği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "steering",
        "procedural-generation",
        "hit-scan",
        "projectile"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "diff",
      "name": "Diff",
      "aliases": [],
      "definition": "İki sürüm arasındaki değişiklikleri gösteren karşılaştırma.",
      "short_definition": "İki sürüm arasındaki değişiklikleri gösteren karşılaştırma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "pull",
        "clone",
        "conflict",
        "tag"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "difficulty-curve",
      "name": "Difficulty Curve",
      "aliases": [],
      "definition": "Zorluğun oyun boyunca nasıl arttığını/azaldığını ifade eden yapı.",
      "short_definition": "Zorluğun oyun boyunca nasıl arttığını/azaldığını ifade eden yapı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "onboarding",
        "tutorial",
        "progression",
        "fail-state-win-state"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "distance-direction",
      "name": "Distance / Direction",
      "aliases": [
        "Distance",
        "Direction"
      ],
      "definition": "İki nokta arasındaki mesafe ve birinden diğerine yön oyun mantığında çok sık hesaplanır.",
      "short_definition": "İki nokta arasındaki mesafe ve birinden diğerine yön oyun mantığında çok sık hesaplanır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "distance_to, direction_to.",
      "memory_hook": "AI takip, saldırı menzili, hedefleme gibi sistemlerin temeli.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "transform",
        "interpolation-lerp"
      ],
      "previous_core_term_id": "interpolation-lerp",
      "next_core_term_id": "collision"
    },
    {
      "id": "dot-product",
      "name": "Dot Product",
      "aliases": [],
      "definition": "İki vector’ün yön benzerliğini ölçmede kullanılan işlem; görüş konisi vb. ileri konularda çıkar.",
      "short_definition": "İki vector’ün yön benzerliğini ölçmede kullanılan işlem; görüş konisi vb. ileri konularda çıkar.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "angle",
        "degree-radian",
        "cross-product",
        "clamp"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "dpi",
      "name": "DPI",
      "aliases": [],
      "definition": "Fiziksel ekran yoğunluğuyla ilişkili ölçü; özellikle mobil ve yüksek yoğunluklu ekranlarda UI ölçekleme konuşmalarında çıkar.",
      "short_definition": "Fiziksel ekran yoğunluğuyla ilişkili ölçü; özellikle mobil ve yüksek yoğunluklu ekranlarda UI ölçekleme konuşmalarında çıkar.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "localization",
        "internationalization",
        "safe-area",
        "tooltip"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "draw-call",
      "name": "Draw Call",
      "aliases": [],
      "definition": "CPU’nun GPU’ya “şu geometriyi/öğeyi çiz” şeklinde gönderdiği render komutlarının genel terimidir.",
      "short_definition": "CPU’nun GPU’ya “şu geometriyi/öğeyi çiz” şeklinde gönderdiği render komutlarının genel terimidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "reduce draw calls, batching.",
      "memory_hook": "Çok sayıda draw call performans darboğazı olabilir; ölçmeden optimize etme.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "animationplayer",
        "tween"
      ],
      "previous_core_term_id": "tween",
      "next_core_term_id": "ui-gui"
    },
    {
      "id": "draw-order",
      "name": "Draw Order",
      "aliases": [],
      "definition": "2D/3D öğelerin hangi sırada çizildiği.",
      "short_definition": "2D/3D öğelerin hangi sırada çizildiği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "dynamic-vs-static-typing",
      "name": "Dynamic vs Static Typing",
      "aliases": [],
      "definition": "Dynamic kullanımda tip çalışma anında belirlenebilir. Static typing’de değişken/parametre/return tipi açıkça belirtilir. GDScript ikisini de destekler.",
      "short_definition": "Dynamic kullanımda tip çalışma anında belirlenebilir. Static typing’de değişken/parametre/return tipi açıkça belirtilir. GDScript ikisini de destekler.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "typed GDScript, type hint.",
      "memory_hook": "Yeni başlarken tip belirtmek hata yakalamayı ve autocomplete’i kolaylaştırır.",
      "code_example": {
        "language": "gdscript",
        "code": "var speed: float = 220.0\nfunc damage(amount: int) -> void:\n    health -= amount"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "constant",
        "data-type",
        "function-method",
        "parameter-vs-argument"
      ],
      "previous_core_term_id": "data-type",
      "next_core_term_id": "function-method"
    },
    {
      "id": "easing",
      "name": "Easing",
      "aliases": [],
      "definition": "Animasyon hızının başta/ortada/sonda nasıl değişeceğini tanımlayan eğri/karakter.",
      "short_definition": "Animasyon hızının başta/ortada/sonda nasıl değişeceğini tanımlayan eğri/karakter.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "light",
        "keyframe",
        "animationtree",
        "blend"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "editor",
      "name": "Editor",
      "aliases": [],
      "definition": "Motorun görsel çalışma alanıdır. Sahne düzenler, node ekler, Inspector’dan değer değiştirir, script açar ve oyunu çalıştırırsın.",
      "short_definition": "Motorun görsel çalışma alanıdır. Sahne düzenler, node ekler, Inspector’dan değer değiştirir, script açar ve oyunu çalıştırırsın.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "Godot Editor, Unity Editor.",
      "memory_hook": "Engine arka plandaki sistem; editor ise onunla çalıştığın arayüzdür.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inspector",
        "node",
        "game-engine",
        "project",
        "asset"
      ],
      "previous_core_term_id": "game-engine",
      "next_core_term_id": "project"
    },
    {
      "id": "editor-tool-script",
      "name": "Editor Tool Script",
      "aliases": [],
      "definition": "Godot editor içinde çalışarak özel araç üretmeye yarayan script yaklaşımı.",
      "short_definition": "Godot editor içinde çalışarak özel araç üretmeye yarayan script yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "editor"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "encapsulation",
      "name": "Encapsulation",
      "aliases": [],
      "definition": "Bir sistemin iç detaylarını saklayıp dışarıya kontrollü bir arayüz sunma fikridir.",
      "short_definition": "Bir sistemin iç detaylarını saklayıp dışarıya kontrollü bir arayüz sunma fikridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "private implementation, public API.",
      "memory_hook": "Başka scriptler her değişkenini kurcalamak zorunda kalmamalı.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "coupling",
        "cohesion",
        "signal-event-driven-architecture"
      ],
      "previous_core_term_id": "cohesion",
      "next_core_term_id": "signal-event-driven-architecture"
    },
    {
      "id": "enum",
      "name": "Enum",
      "aliases": [],
      "definition": "İsimlendirilmiş sabit seçenek kümesi: IDLE, RUNNING, DEAD.",
      "short_definition": "İsimlendirilmiş sabit seçenek kümesi: IDLE, RUNNING, DEAD.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "expression",
        "statement",
        "null",
        "casting"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "event",
      "name": "Event",
      "aliases": [],
      "definition": "Bir şeyin gerçekleştiğini temsil eden bildirim/veri; Godot’ta signal ile sık ilişkilidir.",
      "short_definition": "Bir şeyin gerçekleştiğini temsil eden bildirim/veri; Godot’ta signal ile sık ilişkilidir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "signal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "event-bus",
      "name": "Event Bus",
      "aliases": [],
      "definition": "Birçok sistemin ortak olay kanalı üzerinden haberleşmesi yaklaşımı.",
      "short_definition": "Birçok sistemin ortak olay kanalı üzerinden haberleşmesi yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "manager",
        "singleton",
        "abstraction",
        "interface"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "export-preset",
      "name": "Export Preset",
      "aliases": [],
      "definition": "Godot’ta hedef platform ve export seçeneklerini tanımlayan kayıtlı yapılandırmadır.",
      "short_definition": "Godot’ta hedef platform ve export seçeneklerini tanımlayan kayıtlı yapılandırmadır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "Windows Desktop preset.",
      "memory_hook": "Her platform için farklı preset olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "platform",
        "dot-gitignore",
        "debug-vs-release-build",
        "ci-cd"
      ],
      "previous_core_term_id": "debug-vs-release-build",
      "next_core_term_id": "ci-cd"
    },
    {
      "id": "expression",
      "name": "Expression",
      "aliases": [],
      "definition": "Bir değere hesaplanan kod parçası: damage * 2 + bonus.",
      "short_definition": "Bir değere hesaplanan kod parçası: damage * 2 + bonus.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "damage",
        "variant",
        "operator",
        "statement",
        "enum"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "extends",
      "name": "extends",
      "aliases": [],
      "definition": "Bir scriptin hangi Godot sınıfından veya custom class’tan türediğini belirtir.",
      "short_definition": "Bir scriptin hangi Godot sınıfından veya custom class’tan türediğini belirtir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "at-export",
        "at-onready",
        "class_name",
        "inheritance"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "factory",
      "name": "Factory",
      "aliases": [],
      "definition": "Nesne oluşturma kararlarını tek yerde toplayan tasarım yaklaşımı.",
      "short_definition": "Nesne oluşturma kararlarını tek yerde toplayan tasarım yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "composition-over-inheritance",
        "object-pooling",
        "module"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "fail-state-win-state",
      "name": "Fail State / Win State",
      "aliases": [
        "Fail State",
        "Win State"
      ],
      "definition": "Kaybetme ve kazanma koşulları.",
      "short_definition": "Kaybetme ve kazanma koşulları.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "difficulty-curve",
        "progression",
        "ux",
        "ui"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "feature",
      "name": "Feature",
      "aliases": [],
      "definition": "Oyundaki belirli işlev/özellik.",
      "short_definition": "Oyundaki belirli işlev/özellik.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "milestone",
        "roadmap"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "feedback-affordance",
      "name": "Feedback / Affordance",
      "aliases": [
        "Feedback",
        "Affordance"
      ],
      "definition": "Feedback oyuncunun eylemine sistem cevabıdır. Affordance bir objenin ne yapılabilir olduğunu görünüş/işaretlerle sezdirme fikridir.",
      "short_definition": "Feedback oyuncunun eylemine sistem cevabıdır. Affordance bir objenin ne yapılabilir olduğunu görünüş/işaretlerle sezdirme fikridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "visual feedback, button affordance.",
      "memory_hook": "Oyuncu “ne oldu?” veya “ne yapabilirim?” diye kalmamalı.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "balancing",
        "game-feel-juice"
      ],
      "previous_core_term_id": "game-feel-juice",
      "next_core_term_id": null
    },
    {
      "id": "filtering",
      "name": "Filtering",
      "aliases": [],
      "definition": "Texture büyütülür/küçültülürken piksellerin nasıl örnekleneceği.",
      "short_definition": "Texture büyütülür/küçültülürken piksellerin nasıl örnekleneceği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "layer",
        "pixel-art",
        "mipmaps",
        "particle"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "finite-state-machine",
      "name": "Finite State Machine (FSM)",
      "aliases": [
        "FSM",
        "Finite State Machine"
      ],
      "definition": "Bir sistemi sınırlı state’ler ve aralarındaki geçişlerle modelleyen yaklaşımdır.",
      "short_definition": "Bir sistemi sınırlı state’ler ve aralarındaki geçişlerle modelleyen yaklaşımdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "state machine, transition.",
      "memory_hook": "AI ve karakter davranışlarında çok sık duyarsın.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "state",
        "save-load",
        "coupling",
        "cohesion"
      ],
      "previous_core_term_id": "state",
      "next_core_term_id": "coupling"
    },
    {
      "id": "fixed-timestep",
      "name": "Fixed Timestep",
      "aliases": [],
      "definition": "Özellikle fizik için sabit aralıklarla güncelleme yaklaşımı.",
      "short_definition": "Özellikle fizik için sabit aralıklarla güncelleme yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "timestep",
        "physics-tick",
        "vsync"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "float",
      "name": "float",
      "aliases": [],
      "definition": "Ondalıklı sayı: 3.5, 0.016.",
      "short_definition": "Ondalıklı sayı: 3.5, 0.016.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "int",
        "bool",
        "string"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "focus",
      "name": "Focus",
      "aliases": [],
      "definition": "UI’da hangi Control’un klavye/gamepad inputunu alacağını belirleyen durum.",
      "short_definition": "UI’da hangi Control’un klavye/gamepad inputunu alacağını belirleyen durum.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "control",
        "pressed-just-pressed",
        "dead-zone",
        "pause",
        "time-scale"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "focus-navigation",
      "name": "Focus Navigation",
      "aliases": [],
      "definition": "Klavye/gamepad ile UI elemanları arasında odak geçişi.",
      "short_definition": "Klavye/gamepad ile UI elemanları arasında odak geçişi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stylebox",
        "minimum-size",
        "localization",
        "internationalization"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "force",
      "name": "Force",
      "aliases": [],
      "definition": "Bir rigid body’nin hareketini zaman içinde değiştiren kuvvet.",
      "short_definition": "Bir rigid body’nin hareketini zaman içinde değiştiren kuvvet.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "gravity",
        "impulse",
        "friction"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "fov",
      "name": "FOV",
      "aliases": [],
      "definition": "3D kameranın görüş açısı (field of view).",
      "short_definition": "3D kameranın görüş açısı (field of view).",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "animationtree",
        "blend"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "fps-monitor",
      "name": "FPS Monitor",
      "aliases": [],
      "definition": "Frame rate’i izleme metriği.",
      "short_definition": "Frame rate’i izleme metriği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "reproduce",
        "minimal-reproduction",
        "frame-time",
        "culling"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "frame-fps",
      "name": "Frame / FPS",
      "aliases": [
        "Frame",
        "FPS"
      ],
      "definition": "Frame ekrana üretilen bir görüntü karesidir. FPS saniyedeki frame sayısıdır.",
      "short_definition": "Frame ekrana üretilen bir görüntü karesidir. FPS saniyedeki frame sayısıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "60 FPS, frame rate.",
      "memory_hook": "FPS görüntü sıklığıdır; oyun mantığını doğrudan FPS’ye bağlama.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "game-loop",
        "_process",
        "_physics_process"
      ],
      "previous_core_term_id": "game-loop",
      "next_core_term_id": "_process"
    },
    {
      "id": "frame-independent",
      "name": "Frame Independent",
      "aliases": [],
      "definition": "Davranışın FPS değişse bile yaklaşık aynı gerçek zaman hızında ilerlemesi.",
      "short_definition": "Davranışın FPS değişse bile yaklaşık aynı gerçek zaman hızında ilerlemesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "frame-time",
      "name": "Frame Time",
      "aliases": [],
      "definition": "Bir frame üretmek için geçen süre; ms cinsinden bakmak performansı anlamayı kolaylaştırır.",
      "short_definition": "Bir frame üretmek için geçen süre; ms cinsinden bakmak performansı anlamayı kolaylaştırır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "minimal-reproduction",
        "fps-monitor",
        "culling",
        "lod"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "friction",
      "name": "Friction",
      "aliases": [],
      "definition": "Temas eden yüzeylerin kaymaya karşı direnci.",
      "short_definition": "Temas eden yüzeylerin kaymaya karşı direnci.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "force",
        "impulse",
        "bounce-restitution",
        "normal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "function-method",
      "name": "Function / Method",
      "aliases": [
        "Function",
        "Method"
      ],
      "definition": "Belirli işi yapan tekrar kullanılabilir kod bloğudur. Bir nesne/sınıf bağlamındaki fonksiyona genellikle method denir.",
      "short_definition": "Belirli işi yapan tekrar kullanılabilir kod bloğudur. Bir nesne/sınıf bağlamındaki fonksiyona genellikle method denir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "call a function, override a method.",
      "memory_hook": "İyi fonksiyonun görevi nettir.",
      "code_example": {
        "language": "gdscript",
        "code": "func heal(amount: int) -> void:\n    health += amount"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "data-type",
        "dynamic-vs-static-typing",
        "parameter-vs-argument",
        "return-value"
      ],
      "previous_core_term_id": "dynamic-vs-static-typing",
      "next_core_term_id": "parameter-vs-argument"
    },
    {
      "id": "game-engine",
      "name": "Game Engine (Oyun Motoru)",
      "aliases": [
        "Oyun Motoru",
        "Game Engine"
      ],
      "definition": "Grafik, input, fizik, ses, sahne yönetimi ve platforma çıktı alma gibi temel işleri hazır sunan geliştirme ortamıdır. Godot, Unity ve Unreal birer oyun motorudur.",
      "short_definition": "Grafik, input, fizik, ses, sahne yönetimi ve platforma çıktı alma gibi temel işleri hazır sunan geliştirme ortamıdır. Godot, Unity ve Unreal birer oyun motorudur.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "“Hangi engine’i kullanıyorsun?”, “engine API”.",
      "memory_hook": "Motor oyunun kendisi değildir; oyunu üretmek için kullandığın araç takımıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "editor",
        "project"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": "editor"
    },
    {
      "id": "game-feel-juice",
      "name": "Game Feel / Juice",
      "aliases": [
        "Game Feel",
        "Juice"
      ],
      "definition": "Inputa verilen görsel, sesli, animasyonlu geri bildirimlerle eylemlerin tatmin edici hissedilmesi. “Juice” daha çok ekstra geri bildirim katmanlarını anlatır.",
      "short_definition": "Inputa verilen görsel, sesli, animasyonlu geri bildirimlerle eylemlerin tatmin edici hissedilmesi. “Juice” daha çok ekstra geri bildirim katmanlarını anlatır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "screen shake, hit stop, juice.",
      "memory_hook": "Aynı mechanic, iyi feedback ile çok daha güçlü hissedebilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "playtest",
        "balancing",
        "feedback-affordance"
      ],
      "previous_core_term_id": "balancing",
      "next_core_term_id": "feedback-affordance"
    },
    {
      "id": "game-loop",
      "name": "Game Loop",
      "aliases": [],
      "definition": "Oyun çalışırken input alma, dünya durumunu güncelleme, fizik ve çizim gibi adımların sürekli tekrarlanmasıdır.",
      "short_definition": "Oyun çalışırken input alma, dünya durumunu güncelleme, fizik ve çizim gibi adımların sürekli tekrarlanmasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "update loop, main loop.",
      "memory_hook": "Oyun tek sefer çalışan program değil, sürekli güncellenen sistemdir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "frame-fps",
        "_process"
      ],
      "previous_core_term_id": "autoload",
      "next_core_term_id": "frame-fps"
    },
    {
      "id": "game-mechanic",
      "name": "Game Mechanic",
      "aliases": [],
      "definition": "Oyuncunun oyunla etkileştiği tekil kural/eylem: zıplama, kart çekme, blok koyma gibi.",
      "short_definition": "Oyuncunun oyunla etkileştiği tekil kural/eylem: zıplama, kart çekme, blok koyma gibi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "core mechanic.",
      "memory_hook": "Mechanic tek hareket; system birden çok mechanic/verinin birlikte çalışması olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "core-loop",
        "game-system"
      ],
      "previous_core_term_id": "signal-event-driven-architecture",
      "next_core_term_id": "core-loop"
    },
    {
      "id": "game-system",
      "name": "Game System",
      "aliases": [],
      "definition": "Birden fazla kural, veri ve davranışın birlikte çalıştığı yapı: inventory, combat, economy, transfer sistemi.",
      "short_definition": "Birden fazla kural, veri ve davranışın birlikte çalıştığı yapı: inventory, combat, economy, transfer sistemi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "system design.",
      "memory_hook": "Kod sınıfından daha büyük tasarım birimidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inventory",
        "game-mechanic",
        "core-loop",
        "spawn-despawn",
        "rng-random-seed"
      ],
      "previous_core_term_id": "core-loop",
      "next_core_term_id": "spawn-despawn"
    },
    {
      "id": "gdextension",
      "name": "GDExtension",
      "aliases": [],
      "definition": "Godot’a native kodla (ör. C++) yüksek performanslı sınıf/özellik ekleme sistemi.",
      "short_definition": "Godot’a native kodla (ör. C++) yüksek performanslı sınıf/özellik ekleme sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "global-state",
      "name": "Global State",
      "aliases": [],
      "definition": "Oyunun birden çok sistemi/sahnesi tarafından paylaşılan genel durum verisi.",
      "short_definition": "Oyunun birden çok sistemi/sahnesi tarafından paylaşılan genel durum verisi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "gravity",
      "name": "Gravity",
      "aliases": [],
      "definition": "Nesneleri belirli yönde hızlandıran yerçekimi etkisi.",
      "short_definition": "Nesneleri belirli yönde hızlandıran yerçekimi etkisi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "force",
        "impulse"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "group",
      "name": "Group",
      "aliases": [],
      "definition": "Node’ları hiyerarşiden bağımsız etiketleyip topluca bulmak/işlemek için kullanılan sistemdir.",
      "short_definition": "Node’ları hiyerarşiden bağımsız etiketleyip topluca bulmak/işlemek için kullanılan sistemdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "enemy group, get_nodes_in_group.",
      "memory_hook": "“Bu node Enemy mi?” gibi kategorik işlemler için kullanışlıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "_ready",
        "queue_free",
        "autoload"
      ],
      "previous_core_term_id": "queue_free",
      "next_core_term_id": "autoload"
    },
    {
      "id": "health-hp",
      "name": "Health / HP",
      "aliases": [
        "Health",
        "HP"
      ],
      "definition": "Can değerini temsil eden kaynak.",
      "short_definition": "Can değerini temsil eden kaynak.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "ability-skill",
        "damage",
        "stamina-mana",
        "aggro"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hit-scan",
      "name": "Hit Scan",
      "aliases": [],
      "definition": "Mermi uçuşunu simüle etmek yerine anlık ray/sorgu ile isabet belirleme yaklaşımı.",
      "short_definition": "Mermi uçuşunu simüle etmek yerine anlık ray/sorgu ile isabet belirleme yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "procedural-generation",
        "deterministic",
        "projectile"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hitbox",
      "name": "Hitbox",
      "aliases": [],
      "definition": "Genellikle saldırının vurduğu alan.",
      "short_definition": "Genellikle saldırının vurduğu alan.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "kinematic",
        "trigger",
        "hurtbox",
        "physics-material"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "host",
      "name": "Host",
      "aliases": [],
      "definition": "Bir multiplayer oturumunu başlatan ve bazen server rolünü de üstlenen peer.",
      "short_definition": "Bir multiplayer oturumunu başlatan ve bazen server rolünü de üstlenen peer.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "peer",
        "jitter",
        "dedicated-server",
        "prediction",
        "interpolation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hot-path",
      "name": "Hot Path",
      "aliases": [],
      "definition": "Programın çok sık çalıştığı veya çok zaman harcadığı kritik kod yolu.",
      "short_definition": "Programın çok sık çalıştığı veya çok zaman harcadığı kritik kod yolu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cache",
        "benchmark"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hot-reload",
      "name": "Hot Reload",
      "aliases": [],
      "definition": "Bazı kod/asset değişikliklerinin uygulamayı tamamen kapatmadan yenilenebilmesi yaklaşımı.",
      "short_definition": "Bazı kod/asset değişikliklerinin uygulamayı tamamen kapatmadan yenilenebilmesi yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "asset"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hotfix",
      "name": "Hotfix",
      "aliases": [],
      "definition": "Üretimde acil kritik sorun için hızlı düzeltme.",
      "short_definition": "Üretimde acil kritik sorun için hızlı düzeltme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "release",
        "patch",
        "backup"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "hud",
      "name": "HUD",
      "aliases": [],
      "definition": "Oyun sırasında sürekli veya sık görülen bilgi arayüzü: can, skor, minimap, ammo vb.",
      "short_definition": "Oyun sırasında sürekli veya sık görülen bilgi arayüzü: can, skor, minimap, ammo vb.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "Heads-Up Display.",
      "memory_hook": "Main menu’den farklı, oyun içi arayüz katmanıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scaling-stretch",
        "theme"
      ],
      "previous_core_term_id": "theme",
      "next_core_term_id": "data-vs-logic"
    },
    {
      "id": "hurtbox",
      "name": "Hurtbox",
      "aliases": [],
      "definition": "Genellikle hasar alabilen hedef alanı.",
      "short_definition": "Genellikle hasar alabilen hedef alanı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "trigger",
        "hitbox",
        "physics-material"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "ide-code-editor",
      "name": "IDE / Code Editor",
      "aliases": [
        "IDE",
        "Code Editor"
      ],
      "definition": "Kod yazdığın araç. Godot script editor, VS Code, Rider gibi.",
      "short_definition": "Kod yazdığın araç. Godot script editor, VS Code, Rider gibi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "editor",
        "tool-tooling",
        "sdk",
        "import",
        "pipeline"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "import",
      "name": "Import",
      "aliases": [],
      "definition": "Dışarıdan gelen asseti motorun kullanacağı biçime hazırlama süreci.",
      "short_definition": "Dışarıdan gelen asseti motorun kullanacağı biçime hazırlama süreci.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "sdk",
        "ide-code-editor",
        "pipeline",
        "dependency"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "impulse",
      "name": "Impulse",
      "aliases": [],
      "definition": "Kısa süreli ani momentum değişimi; “tekme” gibi.",
      "short_definition": "Kısa süreli ani momentum değişimi; “tekme” gibi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "gravity",
        "force",
        "friction",
        "bounce-restitution"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "inheritance",
      "name": "Inheritance",
      "aliases": [],
      "definition": "Bir sınıfın üst sınıftan davranış/özellik alması.",
      "short_definition": "Bir sınıfın üst sınıftan davranış/özellik alması.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "extends",
        "class_name",
        "composition",
        "callable"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "input-action-input-map",
      "name": "Input Action / Input Map",
      "aliases": [
        "Input Action",
        "Input Map"
      ],
      "definition": "Fiziksel tuşları doğrudan kodlamak yerine “move_left”, “jump” gibi eylemler tanımlarsın; bunları Project Settings > Input Map’te cihaz girdilerine bağlarsın.",
      "short_definition": "Fiziksel tuşları doğrudan kodlamak yerine “move_left”, “jump” gibi eylemler tanımlarsın; bunları Project Settings > Input Map’te cihaz girdilerine bağlarsın.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "action pressed, input map.",
      "memory_hook": "Kod “Space” değil “jump” eylemini bilir.",
      "code_example": {
        "language": "gdscript",
        "code": "if Input.is_action_just_pressed(\"jump\"):\n    jump()"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "project",
        "_physics_process",
        "delta",
        "polling-vs-event-driven-input",
        "timer-cooldown"
      ],
      "previous_core_term_id": "delta",
      "next_core_term_id": "polling-vs-event-driven-input"
    },
    {
      "id": "inputevent",
      "name": "InputEvent",
      "aliases": [],
      "definition": "Klavye, mouse, gamepad vb. bir giriş olayını taşıyan Godot veri yapısı.",
      "short_definition": "Klavye, mouse, gamepad vb. bir giriş olayını taşıyan Godot veri yapısı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "physics-tick",
        "vsync",
        "pressed-just-pressed",
        "dead-zone"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "inspector",
      "name": "Inspector",
      "aliases": [],
      "definition": "Godot Editor’da seçili node/resource property’lerini görüntüleyip düzenlediğin panel.",
      "short_definition": "Godot Editor’da seçili node/resource property’lerini görüntüleyip düzenlediğin panel.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "resource",
        "editor",
        "node"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "instance",
      "name": "Instance",
      "aliases": [],
      "definition": "Bir class veya scene şablonundan üretilmiş çalışan nesne.",
      "short_definition": "Bir class veya scene şablonundan üretilmiş çalışan nesne.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "int",
      "name": "int",
      "aliases": [],
      "definition": "Tam sayı: 5, -12, 100.",
      "short_definition": "Tam sayı: 5, -12, 100.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "float",
        "bool"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "interface",
      "name": "Interface",
      "aliases": [],
      "definition": "Bir nesnenin hangi davranışları sağlayacağını tanımlayan sözleşme fikri. GDScript’te klasik interface anahtar kelimesi yoktur; desen olarak uygulanabilir.",
      "short_definition": "Bir nesnenin hangi davranışları sağlayacağını tanımlayan sözleşme fikri. GDScript’te klasik interface anahtar kelimesi yoktur; desen olarak uygulanabilir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "event-bus",
        "abstraction",
        "dependency-injection",
        "composition-over-inheritance"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "internationalization",
      "name": "Internationalization (i18n)",
      "aliases": [
        "i18n",
        "Internationalization"
      ],
      "definition": "Yazılımı farklı dil/bölgelere uygun tasarlama süreci.",
      "short_definition": "Yazılımı farklı dil/bölgelere uygun tasarlama süreci.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "focus-navigation",
        "localization",
        "dpi",
        "safe-area"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "interpolation",
      "name": "Interpolation",
      "aliases": [],
      "definition": "Uzaktan gelen seyrek state’ler arasında yumuşak görsel hareket üretme.",
      "short_definition": "Uzaktan gelen seyrek state’ler arasında yumuşak görsel hareket üretme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "state",
        "host",
        "prediction",
        "rollback"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "interpolation-lerp",
      "name": "Interpolation / Lerp",
      "aliases": [
        "Interpolation",
        "Lerp"
      ],
      "definition": "İki değer arasında yumuşak geçiş üretme yaklaşımıdır. Lerp lineer interpolasyonun yaygın biçimidir.",
      "short_definition": "İki değer arasında yumuşak geçiş üretme yaklaşımıdır. Lerp lineer interpolasyonun yaygın biçimidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "lerp camera, smoothing.",
      "memory_hook": "Bir anda sıçramak yerine hedefe yaklaşmak için kullanılır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "local-vs-global-coordinates",
        "transform",
        "distance-direction"
      ],
      "previous_core_term_id": "transform",
      "next_core_term_id": "distance-direction"
    },
    {
      "id": "interpolation-physics",
      "name": "Interpolation Physics",
      "aliases": [],
      "definition": "Fizik tick’leri arasındaki görsel konumu yumuşatmaya yönelik interpolasyon yaklaşımı.",
      "short_definition": "Fizik tick’leri arasındaki görsel konumu yumuşatmaya yönelik interpolasyon yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "inventory",
      "name": "Inventory",
      "aliases": [],
      "definition": "Item’ların tutulduğu ve yönetildiği sistem.",
      "short_definition": "Item’ların tutulduğu ve yönetildiği sistem.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stat",
        "buff-debuff",
        "quest",
        "ability-skill"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "iteration",
      "name": "Iteration",
      "aliases": [],
      "definition": "Bir şeyi yap, test et, geri bildirim al, düzelt ve tekrar et döngüsüdür.",
      "short_definition": "Bir şeyi yap, test et, geri bildirim al, düzelt ve tekrar et döngüsüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "iterate on combat.",
      "memory_hook": "İlk sürümün final olması beklenmez.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "mvp",
        "scope",
        "playtest",
        "balancing"
      ],
      "previous_core_term_id": "scope",
      "next_core_term_id": "playtest"
    },
    {
      "id": "jitter",
      "name": "Jitter",
      "aliases": [],
      "definition": "Paket gecikmesindeki düzensiz dalgalanma.",
      "short_definition": "Paket gecikmesindeki düzensiz dalgalanma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bandwidth",
        "packet-loss",
        "dedicated-server",
        "host"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "json",
      "name": "JSON",
      "aliases": [],
      "definition": "İnsan tarafından okunabilir yaygın veri değişim metin formatı.",
      "short_definition": "İnsan tarafından okunabilir yaygın veri değişim metin formatı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "config",
        "schema"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "keyframe",
      "name": "Keyframe",
      "aliases": [],
      "definition": "Animasyonda belirli zamanda belirli değeri işaretleyen ana kare.",
      "short_definition": "Animasyonda belirli zamanda belirli değeri işaretleyen ana kare.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "particle",
        "light",
        "easing",
        "animationtree"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "kinematic",
      "name": "Kinematic",
      "aliases": [],
      "definition": "Genel oyun geliştirme dilinde kodla belirlenen hareket yaklaşımı; Godot 4’te karakter türü CharacterBody adını kullanır.",
      "short_definition": "Genel oyun geliştirme dilinde kodla belirlenen hareket yaklaşımı; Godot 4’te karakter türü CharacterBody adını kullanır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "characterbody",
        "bounce-restitution",
        "normal",
        "trigger",
        "hitbox"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "lambda",
      "name": "Lambda",
      "aliases": [],
      "definition": "İsimsiz/yerinde tanımlanan küçük fonksiyon.",
      "short_definition": "İsimsiz/yerinde tanımlanan küçük fonksiyon.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "composition",
        "callable",
        "await"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "latency-ping",
      "name": "Latency / Ping",
      "aliases": [
        "Latency",
        "Ping"
      ],
      "definition": "Verinin ağda gidip gelme gecikmesidir. Ping genellikle round-trip gecikmeyi ms cinsinden ifade eder.",
      "short_definition": "Verinin ağda gidip gelme gecikmesidir. Ping genellikle round-trip gecikmeyi ms cinsinden ifade eder.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "high ping, latency compensation.",
      "memory_hook": "60 FPS hızlı olsa bile ağ gecikmesi ayrı problemdir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "rpc",
        "authority",
        "replication-synchronization"
      ],
      "previous_core_term_id": "authority",
      "next_core_term_id": "replication-synchronization"
    },
    {
      "id": "layer",
      "name": "Layer",
      "aliases": [],
      "definition": "Görsel veya mantıksal öğeleri ayırmak için kullanılan katman kavramı; collision layer ile karıştırma.",
      "short_definition": "Görsel veya mantıksal öğeleri ayırmak için kullanılan katman kavramı; collision layer ile karıştırma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "collision",
        "canvas",
        "z-index",
        "pixel-art",
        "filtering"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "layout",
      "name": "Layout",
      "aliases": [],
      "definition": "UI öğelerinin yerleşim düzeni.",
      "short_definition": "UI öğelerinin yerleşim düzeni.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "responsive-ui",
        "margin-padding",
        "stylebox"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "library-framework-plugin",
      "name": "Library / Framework / Plugin",
      "aliases": [
        "Library",
        "Framework",
        "Plugin"
      ],
      "definition": "Library belirli işlevler sunan kod paketi; framework uygulamayı belli bir yapıda kurdurur; plugin/add-on ise var olan araca özellik ekler.",
      "short_definition": "Library belirli işlevler sunan kod paketi; framework uygulamayı belli bir yapıda kurdurur; plugin/add-on ise var olan araca özellik ekler.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "third-party library, Godot plugin.",
      "memory_hook": "Üçü benzer görünür ama kapsamları farklıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "add-on",
        "asset",
        "api",
        "build-export",
        "runtime"
      ],
      "previous_core_term_id": "api",
      "next_core_term_id": "build-export"
    },
    {
      "id": "license",
      "name": "License",
      "aliases": [],
      "definition": "Bir yazılımın veya assetin hangi koşullarla kullanılacağını belirleyen hukuki izin.",
      "short_definition": "Bir yazılımın veya assetin hangi koşullarla kullanılacağını belirleyen hukuki izin.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "dependency",
        "open-source",
        "repository",
        "platform"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "lifecycle",
      "name": "Lifecycle",
      "aliases": [],
      "definition": "Bir nesnenin oluşturulma, hazır olma, güncellenme ve yok edilme aşamaları.",
      "short_definition": "Bir nesnenin oluşturulma, hazır olma, güncellenme ve yok edilme aşamaları.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "reparent",
        "unique-node",
        "notification",
        "signal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "light",
      "name": "Light",
      "aliases": [],
      "definition": "Sahne aydınlatma kaynağı.",
      "short_definition": "Sahne aydınlatma kaynağı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "mipmaps",
        "particle",
        "keyframe",
        "easing"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "line-of-sight",
      "name": "Line of Sight (LOS)",
      "aliases": [
        "LOS",
        "Line of Sight"
      ],
      "definition": "Bir hedefin arada engel olmadan görülebilmesi.",
      "short_definition": "Bir hedefin arada engel olmadan görülebilmesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stamina-mana",
        "aggro",
        "steering",
        "procedural-generation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "local-vs-global-coordinates",
      "name": "Local vs Global Coordinates",
      "aliases": [],
      "definition": "Local koordinat parent’a göre; global koordinat scene/world referansına göre konumu ifade eder.",
      "short_definition": "Local koordinat parent’a göre; global koordinat scene/world referansına göre konumu ifade eder.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "global_position, local transform.",
      "memory_hook": "Parent hareket edince child’ın global konumu değişebilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "magnitude-length",
        "normalize",
        "transform",
        "interpolation-lerp"
      ],
      "previous_core_term_id": "normalize",
      "next_core_term_id": "transform"
    },
    {
      "id": "localization",
      "name": "Localization (L10n)",
      "aliases": [
        "L10n",
        "Localization"
      ],
      "definition": "Oyunun metin/içeriğini farklı dil ve bölgelere uyarlama.",
      "short_definition": "Oyunun metin/içeriğini farklı dil ve bölgelere uyarlama.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "minimum-size",
        "focus-navigation",
        "internationalization",
        "dpi"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "lod",
      "name": "LOD",
      "aliases": [],
      "definition": "Level of Detail: uzaktaki nesnelerde daha ucuz detay seviyesi kullanma.",
      "short_definition": "Level of Detail: uzaktaki nesnelerde daha ucuz detay seviyesi kullanma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "frame-time",
        "culling",
        "batching",
        "cache"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "log",
      "name": "Log",
      "aliases": [],
      "definition": "Programın çalışma bilgilerini yazdığı kayıt çıktısı.",
      "short_definition": "Programın çalışma bilgilerini yazdığı kayıt çıktısı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "print",
        "warning"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "loop",
      "name": "Loop (Döngü)",
      "aliases": [
        "Döngü",
        "Loop"
      ],
      "definition": "Aynı işlemi bir koleksiyon veya koşul üzerinden tekrarlar. for ve while temel döngülerdir.",
      "short_definition": "Aynı işlemi bir koleksiyon veya koşul üzerinden tekrarlar. for ve while temel döngülerdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02",
        "lesson-11"
      ],
      "category_ids": [
        "programming",
        "audio-networking"
      ],
      "category_names": [
        "Programlama ve GDScript",
        "Audio ve Networking"
      ],
      "where_heard": "iterate, loop through array.",
      "memory_hook": "Sonsuz while döngülerine dikkat et.",
      "code_example": {
        "language": "gdscript",
        "code": "for player in players:\n    print(player.name)"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scope",
        "conditional",
        "array-dictionary",
        "class-object-instance"
      ],
      "previous_core_term_id": "conditional",
      "next_core_term_id": "array-dictionary"
    },
    {
      "id": "magnitude-length",
      "name": "Magnitude / Length",
      "aliases": [
        "Magnitude",
        "Length"
      ],
      "definition": "Bir vector’ün büyüklüğüdür. Örneğin hız vector’ünün length’i gerçek hız miktarını verebilir.",
      "short_definition": "Bir vector’ün büyüklüğüdür. Örneğin hız vector’ünün length’i gerçek hız miktarını verebilir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "vector length, magnitude.",
      "memory_hook": "Yön + büyüklük ayrımını anlamak vectorleri kolaylaştırır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "coordinate-system",
        "vector2-vector3",
        "normalize",
        "local-vs-global-coordinates"
      ],
      "previous_core_term_id": "vector2-vector3",
      "next_core_term_id": "normalize"
    },
    {
      "id": "main-scene",
      "name": "Main Scene",
      "aliases": [],
      "definition": "Proje çalıştırıldığında başlangıç olarak açılan scene.",
      "short_definition": "Proje çalıştırıldığında başlangıç olarak açılan scene.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "root-node",
        "owner",
        "add_child"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "manager",
      "name": "Manager",
      "aliases": [],
      "definition": "Belirli bir sistemin koordinasyonundan sorumlu sınıf/node için yaygın isim; gereğinden fazla manager üretmemeye dikkat.",
      "short_definition": "Belirli bir sistemin koordinasyonundan sorumlu sınıf/node için yaygın isim; gereğinden fazla manager üretmemeye dikkat.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "config",
        "schema",
        "singleton",
        "event-bus"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "margin-padding",
      "name": "Margin / Padding",
      "aliases": [
        "Margin",
        "Padding"
      ],
      "definition": "Öğeler arasındaki veya içerik ile kenar arasındaki boşluk kavramları.",
      "short_definition": "Öğeler arasındaki veya içerik ile kenar arasındaki boşluk kavramları.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "responsive-ui",
        "layout",
        "stylebox",
        "minimum-size"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "material-shader",
      "name": "Material / Shader",
      "aliases": [
        "Material",
        "Shader"
      ],
      "definition": "Material bir yüzeyin nasıl çizileceğine ilişkin ayar/kaynak; shader GPU üzerinde görüntüyü nasıl hesaplayacağını belirleyen programdır.",
      "short_definition": "Material bir yüzeyin nasıl çizileceğine ilişkin ayar/kaynak; shader GPU üzerinde görüntüyü nasıl hesaplayacağını belirleyen programdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "shader code, material property.",
      "memory_hook": "Shader = çizim mantığı; material = o mantığın belirli ayarlarla kullanımı.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "camera",
        "viewport",
        "animationplayer",
        "tween"
      ],
      "previous_core_term_id": "viewport",
      "next_core_term_id": "animationplayer"
    },
    {
      "id": "memory-allocation",
      "name": "Memory / Allocation",
      "aliases": [
        "Memory",
        "Allocation"
      ],
      "definition": "Memory runtime verisinin tutulduğu bellek; allocation yeni veri/nesne için bellek ayırma işlemidir.",
      "short_definition": "Memory runtime verisinin tutulduğu bellek; allocation yeni veri/nesne için bellek ayırma işlemidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "memory usage, allocations.",
      "memory_hook": "Sık oluştur-sil döngüleri bazı durumlarda maliyetli olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "bottleneck",
        "cpu-vs-gpu",
        "premature-optimization"
      ],
      "previous_core_term_id": "cpu-vs-gpu",
      "next_core_term_id": "premature-optimization"
    },
    {
      "id": "merge",
      "name": "Merge",
      "aliases": [],
      "definition": "İki branch’teki değişiklikleri birleştirme işlemidir.",
      "short_definition": "İki branch’teki değişiklikleri birleştirme işlemidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "merge conflict.",
      "memory_hook": "Aynı satırlar değiştiyse conflict çıkabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "conflict",
        "branch",
        "commit",
        "dot-gitignore",
        "debug-vs-release-build"
      ],
      "previous_core_term_id": "branch",
      "next_core_term_id": "dot-gitignore"
    },
    {
      "id": "milestone",
      "name": "Milestone",
      "aliases": [],
      "definition": "Proje boyunca hedeflenen önemli teslim veya aşama.",
      "short_definition": "Proje boyunca hedeflenen önemli teslim veya aşama.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "feature",
        "roadmap",
        "backlog"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "minimal-reproduction",
      "name": "Minimal Reproduction",
      "aliases": [],
      "definition": "Bug’ı gösteren mümkün olan en küçük proje/kod örneği.",
      "short_definition": "Bug’ı gösteren mümkün olan en küçük proje/kod örneği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bug",
        "regression",
        "reproduce",
        "fps-monitor",
        "frame-time"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "minimum-size",
      "name": "Minimum Size",
      "aliases": [],
      "definition": "Bir Control’un küçülemeyeceği tercih edilen alt boyut.",
      "short_definition": "Bir Control’un küçülemeyeceği tercih edilen alt boyut.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "control",
        "margin-padding",
        "stylebox",
        "focus-navigation",
        "localization"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "mipmaps",
      "name": "Mipmaps",
      "aliases": [],
      "definition": "Texture’ın uzak/küçük görünümleri için önceden oluşturulan daha düşük çözünürlüklü seviyeler.",
      "short_definition": "Texture’ın uzak/küçük görünümleri için önceden oluşturulan daha düşük çözünürlüklü seviyeler.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "pixel-art",
        "filtering",
        "particle",
        "light"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "modal",
      "name": "Modal",
      "aliases": [],
      "definition": "Açıkken arka plan etkileşimini kısıtlayan öncelikli pencere/dialog.",
      "short_definition": "Açıkken arka plan etkileşimini kısıtlayan öncelikli pencere/dialog.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "safe-area",
        "tooltip"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "module",
      "name": "Module",
      "aliases": [],
      "definition": "Belirli bir özelliği/sorumluluğu kapsayan bağımsız kod bölümü.",
      "short_definition": "Belirli bir özelliği/sorumluluğu kapsayan bağımsız kod bölümü.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "object-pooling",
        "factory"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "mvp",
      "name": "MVP",
      "aliases": [],
      "definition": "Minimum Viable Product: temel değer önerisini çalışır biçimde sunan minimum kapsamlı ürün sürümüdür.",
      "short_definition": "Minimum Viable Product: temel değer önerisini çalışır biçimde sunan minimum kapsamlı ürün sürümüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "MVP scope.",
      "memory_hook": "Game dev’de terim farklı ekiplerde farklı sertlikte kullanılabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "prototype",
        "vertical-slice",
        "scope",
        "iteration"
      ],
      "previous_core_term_id": "vertical-slice",
      "next_core_term_id": "scope"
    },
    {
      "id": "navigation-navmesh",
      "name": "Navigation / NavMesh",
      "aliases": [
        "Navigation",
        "NavMesh"
      ],
      "definition": "Yürünebilir alanı ve üzerinde rota bulmayı temsil eden sistemdir. 3D’de navmesh terimini sık duyarsın.",
      "short_definition": "Yürünebilir alanı ve üzerinde rota bulmayı temsil eden sistemdir. 3D’de navmesh terimini sık duyarsın.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "navigation agent, navmesh bake.",
      "memory_hook": "Haritanın görseli değil, AI’nın yürüyebileceği temsil.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "weighted-random",
        "pathfinding",
        "behavior-tree"
      ],
      "previous_core_term_id": "pathfinding",
      "next_core_term_id": "behavior-tree"
    },
    {
      "id": "node",
      "name": "Node",
      "aliases": [],
      "definition": "Godot’un temel yapı taşıdır. Sprite göstermek, ses çalmak, fizik gövdesi olmak veya UI elemanı olmak gibi belirli sorumluluklar taşır.",
      "short_definition": "Godot’un temel yapı taşıdır. Sprite göstermek, ses çalmak, fizik gövdesi olmak veya UI elemanı olmak gibi belirli sorumluluklar taşır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "“add a node”, “node type”.",
      "memory_hook": "Godot’ta oyunu küçük node parçalarından kurarsın.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "scenetree"
      ],
      "previous_core_term_id": "class-object-instance",
      "next_core_term_id": "scene"
    },
    {
      "id": "node2d",
      "name": "Node2D",
      "aliases": [],
      "definition": "2D transform özellikleri olan Godot node sınıfı.",
      "short_definition": "2D transform özellikleri olan Godot node sınıfı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "transform",
        "node"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "node3d",
      "name": "Node3D",
      "aliases": [],
      "definition": "3D transform özellikleri olan Godot node sınıfı.",
      "short_definition": "3D transform özellikleri olan Godot node sınıfı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "transform",
        "node"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "nodepath-get_node",
      "name": "NodePath / get_node",
      "aliases": [
        "NodePath",
        "get_node"
      ],
      "definition": "Bir node’a ağaç içindeki yolu üzerinden ulaşma yöntemidir. $HealthBar kısa sözdizimlerinden biridir.",
      "short_definition": "Bir node’a ağaç içindeki yolu üzerinden ulaşma yöntemidir. $HealthBar kısa sözdizimlerinden biridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "node path, get node reference.",
      "memory_hook": "Çok kırılgan uzun yollar yerine temiz scene yapısı ve export referansları tercih edilebilir.",
      "code_example": {
        "language": "gdscript",
        "code": "@onready var bar: ProgressBar = $UI/HealthBar"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "node",
        "scenetree",
        "parent-child",
        "packedscene-instantiate",
        "_ready"
      ],
      "previous_core_term_id": "parent-child",
      "next_core_term_id": "packedscene-instantiate"
    },
    {
      "id": "normal",
      "name": "Normal",
      "aliases": [],
      "definition": "Bir yüzeye dik yön; çarpışma yüzeyinin yönünü anlamada kullanılır.",
      "short_definition": "Bir yüzeye dik yön; çarpışma yüzeyinin yönünü anlamada kullanılır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "friction",
        "bounce-restitution",
        "kinematic",
        "trigger"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "normalize",
      "name": "Normalize",
      "aliases": [],
      "definition": "Vector’ün yönünü koruyup uzunluğunu 1 yapmaktır.",
      "short_definition": "Vector’ün yönünü koruyup uzunluğunu 1 yapmaktır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "normalized direction.",
      "memory_hook": "Diagonal hareketin daha hızlı olmasını engellemekte sık kullanılır.",
      "code_example": {
        "language": "gdscript",
        "code": "direction = direction.normalized()"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "vector2-vector3",
        "magnitude-length",
        "local-vs-global-coordinates",
        "transform"
      ],
      "previous_core_term_id": "magnitude-length",
      "next_core_term_id": "local-vs-global-coordinates"
    },
    {
      "id": "notification",
      "name": "Notification",
      "aliases": [],
      "definition": "Godot Object/Node yaşam döngüsündeki çeşitli olayların düşük seviye bildirim sistemi.",
      "short_definition": "Godot Object/Node yaşam döngüsündeki çeşitli olayların düşük seviye bildirim sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "object",
        "node",
        "unique-node",
        "lifecycle",
        "signal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "null",
      "name": "null",
      "aliases": [],
      "definition": "Geçerli bir nesne/değer referansı olmadığını ifade eder.",
      "short_definition": "Geçerli bir nesne/değer referansı olmadığını ifade eder.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "statement",
        "enum",
        "casting",
        "annotation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "object",
      "name": "Object",
      "aliases": [],
      "definition": "Godot sınıf hiyerarşisinin temel sınıflarından biri ve programlamada çalışan nesne için genel terim.",
      "short_definition": "Godot sınıf hiyerarşisinin temel sınıflarından biri ve programlamada çalışan nesne için genel terim.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "object-pooling",
      "name": "Object Pooling",
      "aliases": [],
      "definition": "Sık oluşturulup silinen nesneleri yeniden kullanmak için havuzda tutma tekniği.",
      "short_definition": "Sık oluşturulup silinen nesneleri yeniden kullanmak için havuzda tutma tekniği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "dependency-injection",
        "composition-over-inheritance",
        "factory",
        "module"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "onboarding",
      "name": "Onboarding",
      "aliases": [],
      "definition": "Oyuncunun oyuna, kontrollere ve sistemlere alışmasını sağlayan ilk deneyim.",
      "short_definition": "Oyuncunun oyuna, kontrollere ve sistemlere alışmasını sağlayan ilk deneyim.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cut",
        "polish",
        "tutorial",
        "difficulty-curve"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "open-source",
      "name": "Open Source",
      "aliases": [],
      "definition": "Kaynak kodu erişilebilir ve lisansı izin verdiği ölçüde incelenebilir/değiştirilebilir yazılım.",
      "short_definition": "Kaynak kodu erişilebilir ve lisansı izin verdiği ölçüde incelenebilir/değiştirilebilir yazılım.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "pipeline",
        "dependency",
        "license",
        "repository"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "operator",
      "name": "Operator",
      "aliases": [],
      "definition": "+, -, *, /, ==, !=, >, && gibi işlem işaretleri.",
      "short_definition": "+, -, *, /, ==, !=, >, && gibi işlem işaretleri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "string",
        "variant",
        "expression",
        "statement"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "origin",
      "name": "Origin",
      "aliases": [],
      "definition": "Koordinat sisteminin başlangıç noktası.",
      "short_definition": "Koordinat sisteminin başlangıç noktası.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "axis",
        "position"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "owner",
      "name": "Owner",
      "aliases": [],
      "definition": "Bir node’un hangi scene kaynağına ait olarak kaydedileceğini etkileyen property.",
      "short_definition": "Bir node’un hangi scene kaynağına ait olarak kaydedileceğini etkileyen property.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "node",
        "root-node",
        "main-scene",
        "add_child",
        "remove_child"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "packedscene-instantiate",
      "name": "PackedScene / instantiate()",
      "aliases": [
        "PackedScene",
        "instantiate",
        "PackedScene / instantiate"
      ],
      "definition": "Kaydedilmiş bir scene kaynağını temsil eder. instantiate() ile runtime’da yeni bir scene örneği üretirsin.",
      "short_definition": "Kaydedilmiş bir scene kaynağını temsil eder. instantiate() ile runtime’da yeni bir scene örneği üretirsin.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "spawn bullet, instantiate enemy.",
      "memory_hook": "“Scene dosyası” kalıp; instantiate edilmiş node ağacı çalışan örnektir.",
      "code_example": {
        "language": "gdscript",
        "code": "var enemy := enemy_scene.instantiate()\nadd_child(enemy)"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "scene",
        "node",
        "parent-child",
        "nodepath-get_node",
        "_ready"
      ],
      "previous_core_term_id": "nodepath-get_node",
      "next_core_term_id": "_ready"
    },
    {
      "id": "packet",
      "name": "Packet",
      "aliases": [],
      "definition": "Ağ üzerinden gönderilen veri birimi.",
      "short_definition": "Ağ üzerinden gönderilen veri birimi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "loop",
        "spatial-audio",
        "bandwidth",
        "packet-loss"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "packet-loss",
      "name": "Packet Loss",
      "aliases": [],
      "definition": "Gönderilen paketlerin bir kısmının hedefe ulaşmaması.",
      "short_definition": "Gönderilen paketlerin bir kısmının hedefe ulaşmaması.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "packet",
        "bandwidth",
        "jitter",
        "dedicated-server"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "parameter-vs-argument",
      "name": "Parameter vs Argument",
      "aliases": [],
      "definition": "Parameter fonksiyon tanımındaki isimdir; argument fonksiyonu çağırırken verdiğin gerçek değerdir.",
      "short_definition": "Parameter fonksiyon tanımındaki isimdir; argument fonksiyonu çağırırken verdiğin gerçek değerdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "pass an argument.",
      "memory_hook": "func heal(amount) içindeki amount parameter; heal(25) içindeki 25 argument.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "dynamic-vs-static-typing",
        "function-method",
        "return-value",
        "scope"
      ],
      "previous_core_term_id": "function-method",
      "next_core_term_id": "return-value"
    },
    {
      "id": "parent-child",
      "name": "Parent / Child",
      "aliases": [
        "Parent",
        "Child"
      ],
      "definition": "SceneTree hiyerarşisindeki üst-alt node ilişkisidir. Child genellikle parent transformundan/hayat döngüsünden etkilenir.",
      "short_definition": "SceneTree hiyerarşisindeki üst-alt node ilişkisidir. Child genellikle parent transformundan/hayat döngüsünden etkilenir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "child node, reparent.",
      "memory_hook": "Hiyerarşi sadece görüntü değil, davranışı da etkileyebilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scenetree",
        "node",
        "scene",
        "nodepath-get_node",
        "packedscene-instantiate"
      ],
      "previous_core_term_id": "scenetree",
      "next_core_term_id": "nodepath-get_node"
    },
    {
      "id": "particle",
      "name": "Particle",
      "aliases": [],
      "definition": "Çok sayıda küçük öğeyle duman, ateş, kıvılcım vb. efekt üretme sistemi.",
      "short_definition": "Çok sayıda küçük öğeyle duman, ateş, kıvılcım vb. efekt üretme sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "filtering",
        "mipmaps",
        "light",
        "keyframe"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "patch",
      "name": "Patch",
      "aliases": [],
      "definition": "Küçük hata düzeltmesi/güncelleme paketi veya sürümü.",
      "short_definition": "Küçük hata düzeltmesi/güncelleme paketi veya sürümü.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "semantic-versioning",
        "release",
        "hotfix",
        "backup"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "pathfinding",
      "name": "Pathfinding",
      "aliases": [],
      "definition": "Bir karakterin başlangıçtan hedefe geçerli yol bulması problemidir.",
      "short_definition": "Bir karakterin başlangıçtan hedefe geçerli yol bulması problemidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "A*, navigation path.",
      "memory_hook": "AI = sadece pathfinding değildir; pathfinding AI’nın araçlarından biridir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "rng-random-seed",
        "weighted-random",
        "navigation-navmesh",
        "behavior-tree"
      ],
      "previous_core_term_id": "weighted-random",
      "next_core_term_id": "navigation-navmesh"
    },
    {
      "id": "pause",
      "name": "Pause",
      "aliases": [],
      "definition": "SceneTree veya node processing davranışının oyun duraklatıldığında değişmesi.",
      "short_definition": "SceneTree veya node processing davranışının oyun duraklatıldığında değişmesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scenetree",
        "node",
        "dead-zone",
        "focus",
        "time-scale"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "peer",
      "name": "Peer",
      "aliases": [],
      "definition": "Ağdaki katılımcı/bağlantı uçlarından her biri için kullanılan genel terimdir.",
      "short_definition": "Ağdaki katılımcı/bağlantı uçlarından her biri için kullanılan genel terimdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "multiplayer peer.",
      "memory_hook": "Client-server modelinde bile peer kelimesi API’de karşına çıkabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "api",
        "sfx-bgm",
        "client-server",
        "rpc",
        "authority"
      ],
      "previous_core_term_id": "client-server",
      "next_core_term_id": "rpc"
    },
    {
      "id": "physics-material",
      "name": "Physics Material",
      "aliases": [],
      "definition": "Friction ve bounce gibi fizik yüzey davranışlarını tanımlayan kaynak.",
      "short_definition": "Friction ve bounce gibi fizik yüzey davranışlarını tanımlayan kaynak.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "friction",
        "hitbox",
        "hurtbox"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "physics-tick",
      "name": "Physics Tick",
      "aliases": [],
      "definition": "Bir fizik güncelleme adımı.",
      "short_definition": "Bir fizik güncelleme adımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "timestep",
        "fixed-timestep",
        "vsync",
        "inputevent"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "pipeline",
      "name": "Pipeline",
      "aliases": [],
      "definition": "Bir içeriğin üretimden oyuna girene kadar geçtiği adımlar zinciri.",
      "short_definition": "Bir içeriğin üretimden oyuna girene kadar geçtiği adımlar zinciri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "ide-code-editor",
        "import",
        "dependency",
        "open-source"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "pixel-art",
      "name": "Pixel Art",
      "aliases": [],
      "definition": "Piksel ölçüsünün bilinçli tasarım unsuru olduğu düşük çözünürlüklü görsel stil.",
      "short_definition": "Piksel ölçüsünün bilinçli tasarım unsuru olduğu düşük çözünürlüklü görsel stil.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "z-index",
        "layer",
        "filtering",
        "mipmaps"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "platform",
      "name": "Platform",
      "aliases": [],
      "definition": "Windows, Linux, Android, iOS, Web, konsol gibi hedef çalışma ortamı.",
      "short_definition": "Windows, Linux, Android, iOS, Web, konsol gibi hedef çalışma ortamı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "license",
        "repository"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "playtest",
      "name": "Playtest",
      "aliases": [],
      "definition": "Gerçek oyuncu davranışını gözlemek için oyunu oynatıp veri/geri bildirim toplama sürecidir.",
      "short_definition": "Gerçek oyuncu davranışını gözlemek için oyunu oynatıp veri/geri bildirim toplama sürecidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "playtest session.",
      "memory_hook": "“Ben oynadım, güzel” playtest değildir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scope",
        "iteration",
        "balancing",
        "game-feel-juice"
      ],
      "previous_core_term_id": "iteration",
      "next_core_term_id": "balancing"
    },
    {
      "id": "polish",
      "name": "Polish",
      "aliases": [],
      "definition": "Temel sistemler çalıştıktan sonra detay, tutarlılık ve his iyileştirmeleri.",
      "short_definition": "Temel sistemler çalıştıktan sonra detay, tutarlılık ve his iyileştirmeleri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scope-creep",
        "cut",
        "onboarding",
        "tutorial"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "polling-vs-event-driven-input",
      "name": "Polling vs Event-driven Input",
      "aliases": [],
      "definition": "Polling o anki input durumunu sürekli sorar; event-driven yaklaşım gelen InputEvent’i olay olarak işler.",
      "short_definition": "Polling o anki input durumunu sürekli sorar; event-driven yaklaşım gelen InputEvent’i olay olarak işler.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "_input(event), Input.is_action_pressed.",
      "memory_hook": "Sürekli hareket polling; tekil UI/tuş olayları event yaklaşımına uygun olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "inputevent",
        "event",
        "delta",
        "input-action-input-map",
        "timer-cooldown"
      ],
      "previous_core_term_id": "input-action-input-map",
      "next_core_term_id": "timer-cooldown"
    },
    {
      "id": "position",
      "name": "Position",
      "aliases": [],
      "definition": "Nesnenin konumu.",
      "short_definition": "Nesnenin konumu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "origin",
        "axis",
        "rotation",
        "scale"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "prediction",
      "name": "Prediction",
      "aliases": [],
      "definition": "Client’ın server cevabı gelmeden kendi hareket sonucunu tahmin ederek gecikmeyi gizleme tekniği.",
      "short_definition": "Client’ın server cevabı gelmeden kendi hareket sonucunu tahmin ederek gecikmeyi gizleme tekniği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "dedicated-server",
        "host",
        "interpolation",
        "rollback"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "premature-optimization",
      "name": "Premature Optimization",
      "aliases": [],
      "definition": "Gerçek darboğazı ölçmeden önce kodu gereksiz karmaşıklaştıracak optimizasyonlara girişmektir.",
      "short_definition": "Gerçek darboğazı ölçmeden önce kodu gereksiz karmaşıklaştıracak optimizasyonlara girişmektir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "don’t optimize prematurely.",
      "memory_hook": "Önce doğru ve anlaşılır çalıştır; sonra profiler.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "profiler",
        "cpu-vs-gpu",
        "memory-allocation"
      ],
      "previous_core_term_id": "memory-allocation",
      "next_core_term_id": "version-control"
    },
    {
      "id": "pressed-just-pressed",
      "name": "Pressed / Just Pressed",
      "aliases": [
        "Pressed",
        "Just Pressed"
      ],
      "definition": "Basılı tutuluyor mu / bu frame’de yeni mi basıldı ayrımı.",
      "short_definition": "Basılı tutuluyor mu / bu frame’de yeni mi basıldı ayrımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "vsync",
        "inputevent",
        "dead-zone",
        "focus"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "print",
      "name": "print()",
      "aliases": [
        "print"
      ],
      "definition": "Basit runtime değerlerini görmek için kullanılan çıktı fonksiyonu.",
      "short_definition": "Basit runtime değerlerini görmek için kullanılan çıktı fonksiyonu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "log",
        "warning",
        "regression"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "procedural-generation",
      "name": "Procedural Generation",
      "aliases": [],
      "definition": "İçeriğin kurallar/algoritmalarla otomatik üretilmesi.",
      "short_definition": "İçeriğin kurallar/algoritmalarla otomatik üretilmesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "line-of-sight",
        "steering",
        "deterministic",
        "hit-scan"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "profiler",
      "name": "Profiler",
      "aliases": [],
      "definition": "CPU zamanı, script fonksiyon süreleri ve performans davranışını ölçmene yardım eden araçtır.",
      "short_definition": "CPU zamanı, script fonksiyon süreleri ve performans davranışını ölçmene yardım eden araçtır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "profile the game.",
      "memory_hook": "Tahminle değil ölçümle optimize et.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "debugger-breakpoint",
        "stack-trace",
        "bottleneck",
        "cpu-vs-gpu"
      ],
      "previous_core_term_id": "stack-trace",
      "next_core_term_id": "bottleneck"
    },
    {
      "id": "progression",
      "name": "Progression",
      "aliases": [],
      "definition": "Oyuncunun zamanla güç, içerik, yetenek veya statü kazanma yapısı.",
      "short_definition": "Oyuncunun zamanla güç, içerik, yetenek veya statü kazanma yapısı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "tutorial",
        "difficulty-curve",
        "fail-state-win-state",
        "ux"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "project",
      "name": "Project",
      "aliases": [],
      "definition": "Bir oyuna ait sahneler, scriptler, assetler ve ayarların tamamıdır. Godot’ta proje kökünde project.godot bulunur.",
      "short_definition": "Bir oyuna ait sahneler, scriptler, assetler ve ayarların tamamıdır. Godot’ta proje kökünde project.godot bulunur.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "Project Settings, project folder.",
      "memory_hook": "Tek bir oyun = bir proje diye düşün.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "game-engine",
        "editor",
        "asset",
        "api"
      ],
      "previous_core_term_id": "editor",
      "next_core_term_id": "asset"
    },
    {
      "id": "projectile",
      "name": "Projectile",
      "aliases": [],
      "definition": "Dünyada hareket eden mermi/ok gibi gerçek oyun nesnesi.",
      "short_definition": "Dünyada hareket eden mermi/ok gibi gerçek oyun nesnesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "deterministic",
        "hit-scan"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "prototype",
      "name": "Prototype",
      "aliases": [],
      "definition": "Bir fikrin çalışıp çalışmadığını hızlı ve ucuz biçimde test eden erken sürümdür.",
      "short_definition": "Bir fikrin çalışıp çalışmadığını hızlı ve ucuz biçimde test eden erken sürümdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "prototype the mechanic.",
      "memory_hook": "Güzel görünmek değil, soruya cevap vermek için yapılır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "vertical-slice",
        "mvp"
      ],
      "previous_core_term_id": "ci-cd",
      "next_core_term_id": "vertical-slice"
    },
    {
      "id": "pull",
      "name": "Pull",
      "aliases": [],
      "definition": "Remote değişikliklerini yerel repoya alma/birleştirme.",
      "short_definition": "Remote değişikliklerini yerel repoya alma/birleştirme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "remote",
        "push",
        "clone",
        "diff"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "push",
      "name": "Push",
      "aliases": [],
      "definition": "Yerel commit’leri remote’a gönderme.",
      "short_definition": "Yerel commit’leri remote’a gönderme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "commit",
        "remote",
        "repository",
        "pull",
        "clone"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "quest",
      "name": "Quest",
      "aliases": [],
      "definition": "Hedefler ve ödüller içeren görev sistemi.",
      "short_definition": "Hedefler ve ödüller içeren görev sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "buff-debuff",
        "inventory",
        "ability-skill",
        "damage"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "queue_free",
      "name": "queue_free()",
      "aliases": [
        "queue_free"
      ],
      "definition": "Bir Node’u güvenli biçimde silinmek üzere kuyruğa alır.",
      "short_definition": "Bir Node’u güvenli biçimde silinmek üzere kuyruğa alır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "despawn, free the node.",
      "memory_hook": "“Öldü” diye görünmez yapmak ile gerçekten node’u kaldırmak farklıdır.",
      "code_example": {
        "language": "gdscript",
        "code": "func die() -> void:\n    queue_free()"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "packedscene-instantiate",
        "_ready",
        "group",
        "autoload"
      ],
      "previous_core_term_id": "_ready",
      "next_core_term_id": "group"
    },
    {
      "id": "raycast-shapecast",
      "name": "RayCast / ShapeCast",
      "aliases": [
        "RayCast",
        "ShapeCast"
      ],
      "definition": "Belirli yön/şekil boyunca çarpışma sorgusu yapar. Görüş, zemin kontrolü, silah isabeti gibi işlerde kullanılır.",
      "short_definition": "Belirli yön/şekil boyunca çarpışma sorgusu yapar. Görüş, zemin kontrolü, silah isabeti gibi işlerde kullanılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "raycast hit, ground check.",
      "memory_hook": "Ray noktasal çizgi; ShapeCast hacimli şekil süpürmesi gibi düşün.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "velocity-acceleration",
        "collision-layer-mask"
      ],
      "previous_core_term_id": "collision-layer-mask",
      "next_core_term_id": "sprite-texture"
    },
    {
      "id": "regression",
      "name": "Regression",
      "aliases": [],
      "definition": "Daha önce çalışan bir özelliğin yeni değişiklikten sonra bozulması.",
      "short_definition": "Daha önce çalışan bir özelliğin yeni değişiklikten sonra bozulması.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "print",
        "warning",
        "reproduce",
        "minimal-reproduction"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "release",
      "name": "Release",
      "aliases": [],
      "definition": "Kullanıcıya dağıtılması amaçlanan belirli ürün sürümü.",
      "short_definition": "Kullanıcıya dağıtılması amaçlanan belirli ürün sürümü.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "tag",
        "semantic-versioning",
        "patch",
        "hotfix"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "remap",
      "name": "Remap",
      "aliases": [],
      "definition": "Bir değer aralığını başka aralığa dönüştürme.",
      "short_definition": "Bir değer aralığını başka aralığa dönüştürme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cross-product",
        "clamp",
        "smoothing"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "remote",
      "name": "Remote",
      "aliases": [],
      "definition": "Repo’nun GitHub/GitLab gibi uzaktaki kopyası.",
      "short_definition": "Repo’nun GitHub/GitLab gibi uzaktaki kopyası.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "repository",
        "push",
        "pull"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "remove_child",
      "name": "remove_child()",
      "aliases": [
        "remove_child"
      ],
      "definition": "Node’u parent’tan ayırır; tek başına silmez.",
      "short_definition": "Node’u parent’tan ayırır; tek başına silmez.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "owner",
        "add_child",
        "reparent",
        "unique-node"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "renderer",
      "name": "Renderer",
      "aliases": [],
      "definition": "Sahneyi ekrandaki piksellere dönüştüren grafik sistemi.",
      "short_definition": "Sahneyi ekrandaki piksellere dönüştüren grafik sistemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "canvas",
        "z-index"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "reparent",
      "name": "reparent()",
      "aliases": [
        "reparent"
      ],
      "definition": "Node’un parent’ını değiştirme işlemi.",
      "short_definition": "Node’un parent’ını değiştirme işlemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "add_child",
        "remove_child",
        "unique-node",
        "lifecycle"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "replication-synchronization",
      "name": "Replication / Synchronization",
      "aliases": [
        "Replication",
        "Synchronization"
      ],
      "definition": "Oyun durumunun ağdaki peer’lar arasında tutarlı biçimde çoğaltılması/senkronize edilmesidir.",
      "short_definition": "Oyun durumunun ağdaki peer’lar arasında tutarlı biçimde çoğaltılması/senkronize edilmesidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "state replication.",
      "memory_hook": "Konum, animasyon, can gibi veriler hangi sıklıkla ve kimden kime gider?",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "peer",
        "authority",
        "latency-ping"
      ],
      "previous_core_term_id": "latency-ping",
      "next_core_term_id": "bug"
    },
    {
      "id": "repository",
      "name": "Repository (Repo)",
      "aliases": [
        "Repo",
        "Repository"
      ],
      "definition": "Proje dosyalarının version control altında tutulduğu depo.",
      "short_definition": "Proje dosyalarının version control altında tutulduğu depo.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01",
        "lesson-13"
      ],
      "category_ids": [
        "ecosystem",
        "git-release"
      ],
      "category_names": [
        "Motor ve Ekosistem",
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "version-control",
        "control",
        "open-source",
        "license",
        "platform",
        "remote"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "reproduce",
      "name": "Reproduce",
      "aliases": [],
      "definition": "Bir bug’ı tekrar aynı koşullarda ortaya çıkarabilmek.",
      "short_definition": "Bir bug’ı tekrar aynı koşullarda ortaya çıkarabilmek.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bug",
        "warning",
        "regression",
        "minimal-reproduction",
        "fps-monitor"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "resolution",
      "name": "Resolution",
      "aliases": [],
      "definition": "Ekranın piksel boyutudur: 1920x1080 gibi.",
      "short_definition": "Ekranın piksel boyutudur: 1920x1080 gibi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "base resolution, window size.",
      "memory_hook": "Resolution ile aspect ratio farklı kavramlardır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "aspect-ratio",
        "container",
        "anchor-offset",
        "scaling-stretch"
      ],
      "previous_core_term_id": "anchor-offset",
      "next_core_term_id": "aspect-ratio"
    },
    {
      "id": "resource",
      "name": "Resource",
      "aliases": [],
      "definition": "Godot’un veri ve asset taşıyan temel nesne türlerinden biridir. Custom Resource ile item, karakter, skill, kart vb. veri şablonları oluşturabilirsin.",
      "short_definition": "Godot’un veri ve asset taşıyan temel nesne türlerinden biridir. Custom Resource ile item, karakter, skill, kart vb. veri şablonları oluşturabilirsin.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "Resource file, .tres, custom resource.",
      "memory_hook": "Scene daha çok node ağacı; Resource daha çok paylaşılabilir veri/asset.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "asset",
        "scene",
        "node",
        "data-vs-logic",
        "serialization",
        "save-load"
      ],
      "previous_core_term_id": "data-vs-logic",
      "next_core_term_id": "serialization"
    },
    {
      "id": "responsive-ui",
      "name": "Responsive UI",
      "aliases": [],
      "definition": "Farklı ekran ve pencere boyutlarına uyum sağlayan arayüz.",
      "short_definition": "Farklı ekran ve pencere boyutlarına uyum sağlayan arayüz.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "layout",
        "margin-padding"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "return-value",
      "name": "Return Value",
      "aliases": [],
      "definition": "Bir fonksiyonun çağırana geri verdiği sonuçtur.",
      "short_definition": "Bir fonksiyonun çağırana geri verdiği sonuçtur.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "return type, return value.",
      "memory_hook": "Fonksiyon yalnızca iş yapmak zorunda değildir; sonuç da üretebilir.",
      "code_example": {
        "language": "gdscript",
        "code": "func get_damage() -> int:\n    return strength * 2"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "function-method",
        "parameter-vs-argument",
        "scope",
        "conditional"
      ],
      "previous_core_term_id": "parameter-vs-argument",
      "next_core_term_id": "scope"
    },
    {
      "id": "rigidbody",
      "name": "RigidBody",
      "aliases": [],
      "definition": "Hareketi fizik motorunun kuvvet, impulse, gravity gibi etkilerle simüle ettiği body türüdür.",
      "short_definition": "Hareketi fizik motorunun kuvvet, impulse, gravity gibi etkilerle simüle ettiği body türüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "rigid body physics.",
      "memory_hook": "Kutu, top, fizik objesi gibi “simülasyona bırakılan” nesneler.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "gravity",
        "impulse",
        "collisionshape2d-3d",
        "characterbody",
        "staticbody",
        "area"
      ],
      "previous_core_term_id": "characterbody",
      "next_core_term_id": "staticbody"
    },
    {
      "id": "rng-random-seed",
      "name": "RNG / Random Seed",
      "aliases": [
        "RNG",
        "Random Seed"
      ],
      "definition": "RNG rastgele sayı üretimini; seed ise aynı rastgele diziyi yeniden üretebilmek için başlangıç değerini ifade eder.",
      "short_definition": "RNG rastgele sayı üretimini; seed ise aynı rastgele diziyi yeniden üretebilmek için başlangıç değerini ifade eder.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "random seed, procedural RNG.",
      "memory_hook": "“Random” sistemlerin test edilebilirliği için seed önemli olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "game-system",
        "spawn-despawn",
        "weighted-random",
        "pathfinding"
      ],
      "previous_core_term_id": "spawn-despawn",
      "next_core_term_id": "weighted-random"
    },
    {
      "id": "roadmap",
      "name": "Roadmap",
      "aliases": [],
      "definition": "Zaman içinde hangi özellik/aşamaların planlandığını gösteren genel yol haritası.",
      "short_definition": "Zaman içinde hangi özellik/aşamaların planlandığını gösteren genel yol haritası.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "feature",
        "milestone",
        "backlog",
        "task"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "rollback",
      "name": "Rollback",
      "aliases": [],
      "definition": "Özellikle hızlı multiplayer oyunlarda geçmiş state’e dönüp yeni inputla tekrar simüle etme yaklaşımı.",
      "short_definition": "Özellikle hızlı multiplayer oyunlarda geçmiş state’e dönüp yeni inputla tekrar simüle etme yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "state",
        "prediction",
        "interpolation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "root-node",
      "name": "Root Node",
      "aliases": [],
      "definition": "Bir scene’in en üst node’u.",
      "short_definition": "Bir scene’in en üst node’u.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "node",
        "main-scene",
        "owner"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "rotation",
      "name": "Rotation",
      "aliases": [],
      "definition": "Nesnenin yönelimi/dönüş açısı.",
      "short_definition": "Nesnenin yönelimi/dönüş açısı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "axis",
        "position",
        "scale",
        "angle"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "rpc",
      "name": "RPC",
      "aliases": [],
      "definition": "Remote Procedure Call: bir taraftan başka ağ peer’ında fonksiyon/işlem çalıştırma mekanizmasıdır.",
      "short_definition": "Remote Procedure Call: bir taraftan başka ağ peer’ında fonksiyon/işlem çalıştırma mekanizmasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "rpc call, @rpc.",
      "memory_hook": "Normal fonksiyon çağrısının ağ üzerinden uzaktaki eşine yönelmiş hali gibi düşün.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "normal",
        "remote",
        "peer",
        "client-server",
        "authority",
        "latency-ping"
      ],
      "previous_core_term_id": "peer",
      "next_core_term_id": "authority"
    },
    {
      "id": "runtime",
      "name": "Runtime",
      "aliases": [],
      "definition": "Oyunun gerçekten çalıştığı zaman dilimi ve çalışma ortamıdır.",
      "short_definition": "Oyunun gerçekten çalıştığı zaman dilimi ve çalışma ortamıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": "runtime error, runtime instance.",
      "memory_hook": "Editor zamanı ile oyun çalışırken olanlar farklı olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "editor",
        "library-framework-plugin",
        "build-export"
      ],
      "previous_core_term_id": "build-export",
      "next_core_term_id": "variable"
    },
    {
      "id": "safe-area",
      "name": "Safe Area",
      "aliases": [],
      "definition": "Çentik, rounded corner vb. nedeniyle UI’nın güvenle yerleşebileceği ekran alanı.",
      "short_definition": "Çentik, rounded corner vb. nedeniyle UI’nın güvenle yerleşebileceği ekran alanı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "internationalization",
        "dpi",
        "tooltip",
        "modal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "save-load",
      "name": "Save / Load",
      "aliases": [
        "Save",
        "Load"
      ],
      "definition": "Oyunun kalıcı durumunu saklama ve daha sonra geri yükleme sistemidir.",
      "short_definition": "Oyunun kalıcı durumunu saklama ve daha sonra geri yükleme sistemidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "save game, load profile.",
      "memory_hook": "Node’un tamamını körlemesine kaydetmek yerine gerekli veriyi seç.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "resource",
        "serialization",
        "state",
        "finite-state-machine"
      ],
      "previous_core_term_id": "serialization",
      "next_core_term_id": "state"
    },
    {
      "id": "scale",
      "name": "Scale",
      "aliases": [],
      "definition": "Nesnenin boyut ölçeği.",
      "short_definition": "Nesnenin boyut ölçeği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "position",
        "rotation",
        "angle",
        "degree-radian"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "scaling-stretch",
      "name": "Scaling / Stretch",
      "aliases": [
        "Scaling",
        "Stretch"
      ],
      "definition": "Oyunun veya UI’nın farklı pencere boyutlarına nasıl ölçekleneceğini belirleyen yaklaşım/ayarlardır.",
      "short_definition": "Oyunun veya UI’nın farklı pencere boyutlarına nasıl ölçekleneceğini belirleyen yaklaşım/ayarlardır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "stretch mode, scaling.",
      "memory_hook": "Responsive davranışı test etmek şarttır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "resolution",
        "aspect-ratio",
        "theme",
        "hud"
      ],
      "previous_core_term_id": "aspect-ratio",
      "next_core_term_id": "theme"
    },
    {
      "id": "scene",
      "name": "Scene",
      "aliases": [],
      "definition": "Bir ağaç halinde organize edilmiş node grubudur ve tekrar kullanılabilir. Kaydedildiğinde .tscn gibi bir scene dosyasına dönüşebilir.",
      "short_definition": "Bir ağaç halinde organize edilmiş node grubudur ve tekrar kullanılabilir. Kaydedildiğinde .tscn gibi bir scene dosyasına dönüşebilir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "player scene, main scene.",
      "memory_hook": "Scene yalnızca “level” değildir; Player, mermi, menü de scene olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "scenetree",
        "parent-child"
      ],
      "previous_core_term_id": "node",
      "next_core_term_id": "scenetree"
    },
    {
      "id": "scene-inheritance",
      "name": "Scene Inheritance",
      "aliases": [],
      "definition": "Bir scene’den türeyerek temel yapıyı paylaşan yeni scene oluşturma yaklaşımı.",
      "short_definition": "Bir scene’den türeyerek temel yapıyı paylaşan yeni scene oluşturma yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "scene-instancing",
      "name": "Scene Instancing",
      "aliases": [],
      "definition": "Bir scene’i başka scene içinde örnek olarak kullanma.",
      "short_definition": "Bir scene’i başka scene içinde örnek olarak kullanma.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "scenetree",
      "name": "SceneTree",
      "aliases": [],
      "definition": "Oyun çalışırken aktif node ağacını yöneten ana yapıdır.",
      "short_definition": "Oyun çalışırken aktif node ağacını yöneten ana yapıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": "get_tree(), scene tree.",
      "memory_hook": "Sahnedeki hiyerarşinin runtime karşılığı.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "node",
        "scene",
        "parent-child",
        "nodepath-get_node"
      ],
      "previous_core_term_id": "scene",
      "next_core_term_id": "parent-child"
    },
    {
      "id": "schema",
      "name": "Schema",
      "aliases": [],
      "definition": "Bir veri yapısında hangi alanların/tiplerin bulunacağını tanımlayan yapı.",
      "short_definition": "Bir veri yapısında hangi alanların/tiplerin bulunacağını tanımlayan yapı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "json",
        "config",
        "manager",
        "singleton"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "scope",
      "name": "Scope (Kapsam)",
      "aliases": [
        "Kapsam",
        "Scope"
      ],
      "definition": "Projede yapılacak işin kapsamı ve sınırlarıdır.",
      "short_definition": "Bir değişkenin kodun hangi bölümünden erişilebilir olduğunu belirler: local, sınıf/script kapsamı vb.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02",
        "lesson-14"
      ],
      "category_ids": [
        "programming",
        "design-production"
      ],
      "category_names": [
        "Programlama ve GDScript",
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "scope creep, cut scope.",
      "memory_hook": "Yeni başlayan projelerinin en büyük risklerinden biri aşırı scope.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "parameter-vs-argument",
        "return-value",
        "conditional",
        "loop",
        "vertical-slice",
        "mvp"
      ],
      "previous_core_term_id": "mvp",
      "next_core_term_id": "iteration"
    },
    {
      "id": "scope-creep",
      "name": "Scope Creep",
      "aliases": [],
      "definition": "Planlanan kapsamın kontrolsüz biçimde büyümesi.",
      "short_definition": "Planlanan kapsamın kontrolsüz biçimde büyümesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "task",
        "bugfix",
        "cut",
        "polish"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "screen-space",
      "name": "Screen Space",
      "aliases": [],
      "definition": "Ekran/viewport koordinat uzayı.",
      "short_definition": "Ekran/viewport koordinat uzayı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "viewport"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "sdk",
      "name": "SDK",
      "aliases": [],
      "definition": "Belirli bir platform veya servis için geliştirici araçları ve API paketleri.",
      "short_definition": "Belirli bir platform veya servis için geliştirici araçları ve API paketleri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "platform",
        "api",
        "tool-tooling",
        "ide-code-editor",
        "import"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "semantic-versioning",
      "name": "Semantic Versioning",
      "aliases": [],
      "definition": "Sürümü major.minor.patch biçiminde ifade eden yaygın yaklaşım: 1.4.2.",
      "short_definition": "Sürümü major.minor.patch biçiminde ifade eden yaygın yaklaşım: 1.4.2.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "patch",
        "conflict",
        "tag",
        "release"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "serialization",
      "name": "Serialization",
      "aliases": [],
      "definition": "Runtime verisini dosyaya yazılabilecek/taşınabilecek biçime dönüştürme ve geri okuma sürecidir.",
      "short_definition": "Runtime verisini dosyaya yazılabilecek/taşınabilecek biçime dönüştürme ve geri okuma sürecidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "serialize save data.",
      "memory_hook": "Save sistemi yalnızca “dosyaya yaz” değil, veriyi temsil etme problemidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "data-vs-logic",
        "resource",
        "save-load",
        "state"
      ],
      "previous_core_term_id": "resource",
      "next_core_term_id": "save-load"
    },
    {
      "id": "sfx-bgm",
      "name": "SFX / BGM",
      "aliases": [
        "SFX",
        "BGM"
      ],
      "definition": "SFX ses efektleri; BGM arka plan müziği için kullanılan yaygın kısaltmalardır.",
      "short_definition": "SFX ses efektleri; BGM arka plan müziği için kullanılan yaygın kısaltmalardır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": "sound effects, background music.",
      "memory_hook": "Audio konuşmalarının temel kısaltmaları.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "audio-bus",
        "client-server",
        "peer"
      ],
      "previous_core_term_id": "audio-bus",
      "next_core_term_id": "client-server"
    },
    {
      "id": "signal",
      "name": "Signal",
      "aliases": [],
      "definition": "Bir Object’in “bir şey oldu” diye dinleyicilere mesaj yayınlama mekanizması.",
      "short_definition": "Bir Object’in “bir şey oldu” diye dinleyicilere mesaj yayınlama mekanizması.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "object",
        "lifecycle",
        "notification"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "signal-event-driven-architecture",
      "name": "Signal / Event-driven Architecture",
      "aliases": [
        "Signal",
        "Event-driven Architecture"
      ],
      "definition": "Bir sistemin diğerinin içini doğrudan bilmek yerine olay yayınlayıp dinleyicilerin tepki vermesi yaklaşımıdır.",
      "short_definition": "Bir sistemin diğerinin içini doğrudan bilmek yerine olay yayınlayıp dinleyicilerin tepki vermesi yaklaşımıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "event bus, signal connection.",
      "memory_hook": "Player “UI güncelle” demek yerine health_changed yayınlayabilir.",
      "code_example": {
        "language": "gdscript",
        "code": "signal health_changed(value: int)\nfunc take_damage(amount: int) -> void:\n    health -= amount\n    health_changed.emit(health)"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cohesion",
        "encapsulation"
      ],
      "previous_core_term_id": "encapsulation",
      "next_core_term_id": "game-mechanic"
    },
    {
      "id": "signal-connection",
      "name": "Signal Connection",
      "aliases": [],
      "definition": "Bir signal yayıldığında hangi Callable’ın çalışacağını bağlama işlemi.",
      "short_definition": "Bir signal yayıldığında hangi Callable’ın çalışacağını bağlama işlemi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "callable",
        "signal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "singleton",
      "name": "Singleton",
      "aliases": [],
      "definition": "Uygulama bağlamında tek erişim noktası/tek örnek olarak tasarlanan nesne paterni; Godot Autoload ile sık ilişkilendirilir ama aynı kavram değildir.",
      "short_definition": "Uygulama bağlamında tek erişim noktası/tek örnek olarak tasarlanan nesne paterni; Godot Autoload ile sık ilişkilendirilir ama aynı kavram değildir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "autoload",
        "schema",
        "manager",
        "event-bus",
        "abstraction"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "smoothing",
      "name": "Smoothing",
      "aliases": [],
      "definition": "Ani değişimleri daha yumuşak hale getirme genel yaklaşımı.",
      "short_definition": "Ani değişimleri daha yumuşak hale getirme genel yaklaşımı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "clamp",
        "remap"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "spatial-audio",
      "name": "Spatial Audio",
      "aliases": [],
      "definition": "Sesin 2D/3D konuma göre yön ve mesafe hissi vermesi.",
      "short_definition": "Sesin 2D/3D konuma göre yön ve mesafe hissi vermesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-11"
      ],
      "category_ids": [
        "audio-networking"
      ],
      "category_names": [
        "Audio ve Networking"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "audio-stream",
        "loop",
        "packet",
        "bandwidth"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "spawn-despawn",
      "name": "Spawn / Despawn",
      "aliases": [
        "Spawn",
        "Despawn"
      ],
      "definition": "Bir oyun nesnesini oluşturup dünyaya eklemek / dünyadan kaldırmak için kullanılan genel terimlerdir.",
      "short_definition": "Bir oyun nesnesini oluşturup dünyaya eklemek / dünyadan kaldırmak için kullanılan genel terimlerdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "enemy spawner.",
      "memory_hook": "Godot’ta spawn çoğu zaman instantiate + add_child; despawn queue_free olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "queue_free",
        "add_child",
        "core-loop",
        "game-system",
        "rng-random-seed",
        "weighted-random"
      ],
      "previous_core_term_id": "game-system",
      "next_core_term_id": "rng-random-seed"
    },
    {
      "id": "sprite-texture",
      "name": "Sprite / Texture",
      "aliases": [
        "Sprite",
        "Texture"
      ],
      "definition": "Texture görüntü verisidir; Sprite2D bu texture’ı 2D dünyada gösteren node türlerinden biridir.",
      "short_definition": "Texture görüntü verisidir; Sprite2D bu texture’ı 2D dünyada gösteren node türlerinden biridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "sprite sheet, texture filter.",
      "memory_hook": "Dosya = texture; sahnedeki gösteren nesne = sprite.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "node",
        "atlas-sprite-sheet",
        "tile-tilemap"
      ],
      "previous_core_term_id": "raycast-shapecast",
      "next_core_term_id": "atlas-sprite-sheet"
    },
    {
      "id": "stack-trace",
      "name": "Stack Trace",
      "aliases": [],
      "definition": "Hata anına gelene kadar hangi fonksiyon çağrılarından geçildiğini gösteren izdir.",
      "short_definition": "Hata anına gelene kadar hangi fonksiyon çağrılarından geçildiğini gösteren izdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "call stack.",
      "memory_hook": "İlk hata mesajıyla birlikte stack trace’i oku.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "syntax-runtime-logic-error",
        "debugger-breakpoint",
        "profiler",
        "bottleneck"
      ],
      "previous_core_term_id": "debugger-breakpoint",
      "next_core_term_id": "profiler"
    },
    {
      "id": "stamina-mana",
      "name": "Stamina / Mana",
      "aliases": [
        "Stamina",
        "Mana"
      ],
      "definition": "Eylemleri sınırlayan tüketilebilir kaynak örnekleri.",
      "short_definition": "Eylemleri sınırlayan tüketilebilir kaynak örnekleri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "damage",
        "health-hp",
        "aggro",
        "line-of-sight"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "stat",
      "name": "Stat",
      "aliases": [],
      "definition": "Oyuncu/nesne sayısal özelliği: speed, attack, stamina.",
      "short_definition": "Oyuncu/nesne sayısal özelliği: speed, attack, stamina.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cooldown",
        "buff-debuff",
        "inventory"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "state",
      "name": "State",
      "aliases": [],
      "definition": "Bir nesnenin belirli andaki durumunu ifade eder: IDLE, RUNNING, ATTACKING, DEAD gibi.",
      "short_definition": "Bir nesnenin belirli andaki durumunu ifade eder: IDLE, RUNNING, ATTACKING, DEAD gibi.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-09"
      ],
      "category_ids": [
        "data-architecture"
      ],
      "category_names": [
        "Data ve Mimari"
      ],
      "where_heard": "player state, game state.",
      "memory_hook": "State hem küçük bir karakter durumu hem oyunun genel durumu olabilir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "serialization",
        "save-load",
        "finite-state-machine",
        "coupling"
      ],
      "previous_core_term_id": "save-load",
      "next_core_term_id": "finite-state-machine"
    },
    {
      "id": "statement",
      "name": "Statement",
      "aliases": [],
      "definition": "Programın yürüttüğü tam talimat satırı/yapısı.",
      "short_definition": "Programın yürüttüğü tam talimat satırı/yapısı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "operator",
        "expression",
        "enum",
        "null"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "staticbody",
      "name": "StaticBody",
      "aliases": [],
      "definition": "Hareket etmeyen çevre çarpışmaları için kullanılan body türüdür.",
      "short_definition": "Hareket etmeyen çevre çarpışmaları için kullanılan body türüdür.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "wall collision, static body.",
      "memory_hook": "Duvar/zemin gibi sabit geometri.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "characterbody",
        "rigidbody",
        "area",
        "velocity-acceleration"
      ],
      "previous_core_term_id": "rigidbody",
      "next_core_term_id": "area"
    },
    {
      "id": "steering",
      "name": "Steering",
      "aliases": [],
      "definition": "AI hareketinde hedefe yönelme, kaçınma, ayrışma gibi sürekli hareket davranışları.",
      "short_definition": "AI hareketinde hedefe yönelme, kaçınma, ayrışma gibi sürekli hareket davranışları.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "aggro",
        "line-of-sight",
        "procedural-generation",
        "deterministic"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "string",
      "name": "String",
      "aliases": [],
      "definition": "Metin verisi.",
      "short_definition": "Metin verisi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "float",
        "bool",
        "variant",
        "operator"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "stylebox",
      "name": "StyleBox",
      "aliases": [],
      "definition": "Godot Theme sisteminde panel/buton arka planı, border ve radius gibi stil kaynağı.",
      "short_definition": "Godot Theme sisteminde panel/buton arka planı, border ve radius gibi stil kaynağı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "theme",
        "layout",
        "margin-padding",
        "minimum-size",
        "focus-navigation"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "syntax-runtime-logic-error",
      "name": "Syntax / Runtime / Logic Error",
      "aliases": [
        "Syntax",
        "Runtime",
        "Logic Error"
      ],
      "definition": "Syntax dil kurallarına uymayan kod; runtime çalışırken oluşan hata; logic error ise kod çalışsa da yanlış sonuç üretmesidir.",
      "short_definition": "Syntax dil kurallarına uymayan kod; runtime çalışırken oluşan hata; logic error ise kod çalışsa da yanlış sonuç üretmesidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": "parser error, runtime exception.",
      "memory_hook": "Hata türünü tanımak çözümü hızlandırır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "runtime",
        "bug",
        "debugger-breakpoint",
        "stack-trace"
      ],
      "previous_core_term_id": "bug",
      "next_core_term_id": "debugger-breakpoint"
    },
    {
      "id": "tag",
      "name": "Tag",
      "aliases": [],
      "definition": "Belirli commit’e sürüm gibi anlamlı sabit etiket verme.",
      "short_definition": "Belirli commit’e sürüm gibi anlamlı sabit etiket verme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "commit",
        "diff",
        "conflict",
        "semantic-versioning",
        "release"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "task",
      "name": "Task",
      "aliases": [],
      "definition": "Yapılabilir ölçekte tek iş maddesi.",
      "short_definition": "Yapılabilir ölçekte tek iş maddesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "roadmap",
        "backlog",
        "bugfix",
        "scope-creep"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "texture-atlas",
      "name": "Texture Atlas",
      "aliases": [],
      "definition": "Birçok küçük texture’ı tek büyük texture’da birleştirme.",
      "short_definition": "Birçok küçük texture’ı tek büyük texture’da birleştirme.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "theme",
      "name": "Theme",
      "aliases": [],
      "definition": "UI öğelerinin font, renk, stylebox, ikon vb. görünüm kurallarını merkezi biçimde tanımlayan sistemdir.",
      "short_definition": "UI öğelerinin font, renk, stylebox, ikon vb. görünüm kurallarını merkezi biçimde tanımlayan sistemdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "Theme resource, theme override.",
      "memory_hook": "Her butonu tek tek biçimlendirmek yerine ortak tema.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "stylebox",
        "aspect-ratio",
        "scaling-stretch",
        "hud"
      ],
      "previous_core_term_id": "scaling-stretch",
      "next_core_term_id": "hud"
    },
    {
      "id": "thread",
      "name": "Thread",
      "aliases": [],
      "definition": "Kod işini işletim sistemi seviyesinde paralel yürütmeye yarayan execution birimi; ileri seviye concurrency konusu.",
      "short_definition": "Kod işini işletim sistemi seviyesinde paralel yürütmeye yarayan execution birimi; ileri seviye concurrency konusu.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "thread-safe",
      "name": "Thread-safe",
      "aliases": [],
      "definition": "Bir kodun birden fazla thread’den eşzamanlı çağrıldığında güvenli davranabilmesi.",
      "short_definition": "Bir kodun birden fazla thread’den eşzamanlı çağrıldığında güvenli davranabilmesi.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "thread"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "tile-tilemap",
      "name": "Tile / TileMap",
      "aliases": [
        "Tile",
        "TileMap"
      ],
      "definition": "Tile tekrar kullanılabilir parça; TileMap bu parçalarla grid tabanlı 2D dünya oluşturmaya yarayan sistemdir.",
      "short_definition": "Tile tekrar kullanılabilir parça; TileMap bu parçalarla grid tabanlı 2D dünya oluşturmaya yarayan sistemdir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "tileset, tilemap layer.",
      "memory_hook": "Her duvarı ayrı Sprite yapmak yerine tile tabanlı üretim.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "sprite-texture",
        "atlas-sprite-sheet",
        "camera",
        "viewport"
      ],
      "previous_core_term_id": "atlas-sprite-sheet",
      "next_core_term_id": "camera"
    },
    {
      "id": "time-scale",
      "name": "Time Scale",
      "aliases": [],
      "definition": "Oyunun zaman akışını hızlandırmak/yavaşlatmak için kullanılan ölçek fikri.",
      "short_definition": "Oyunun zaman akışını hızlandırmak/yavaşlatmak için kullanılan ölçek fikri.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "focus",
        "pause"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "timer-cooldown",
      "name": "Timer / Cooldown",
      "aliases": [
        "Timer",
        "Cooldown"
      ],
      "definition": "Timer belirli süre sonra veya aralıklı olay üretir. Cooldown ise bir aksiyonun tekrar kullanılmadan önce bekleme süresidir.",
      "short_definition": "Timer belirli süre sonra veya aralıklı olay üretir. Cooldown ise bir aksiyonun tekrar kullanılmadan önce bekleme süresidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": "attack cooldown, Timer node.",
      "memory_hook": "Cooldown bir tasarım kavramı; Timer bunu uygulamanın araçlarından biridir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "cooldown",
        "input-action-input-map",
        "polling-vs-event-driven-input"
      ],
      "previous_core_term_id": "polling-vs-event-driven-input",
      "next_core_term_id": "coordinate-system"
    },
    {
      "id": "timestep",
      "name": "Timestep",
      "aliases": [],
      "definition": "Simülasyonun her güncellemede ilerlettiği zaman miktarı.",
      "short_definition": "Simülasyonun her güncellemede ilerlettiği zaman miktarı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "fixed-timestep",
        "physics-tick"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "tool-tooling",
      "name": "Tool / Tooling",
      "aliases": [
        "Tool",
        "Tooling"
      ],
      "definition": "Üretimi kolaylaştıran editör, profiler, importer, özel araç ve otomasyonların genel adı.",
      "short_definition": "Üretimi kolaylaştıran editör, profiler, importer, özel araç ve otomasyonların genel adı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-01"
      ],
      "category_ids": [
        "ecosystem"
      ],
      "category_names": [
        "Motor ve Ekosistem"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "profiler",
        "editor",
        "sdk",
        "ide-code-editor"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "tooltip",
      "name": "Tooltip",
      "aliases": [],
      "definition": "Hover/focus ile gösterilen yardımcı açıklama.",
      "short_definition": "Hover/focus ile gösterilen yardımcı açıklama.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "focus",
        "dpi",
        "safe-area",
        "modal"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "transform",
      "name": "Transform",
      "aliases": [],
      "definition": "Position, rotation ve scale gibi uzaysal dönüşümlerin birlikte temsilidir.",
      "short_definition": "Position, rotation ve scale gibi uzaysal dönüşümlerin birlikte temsilidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "transform, global_transform.",
      "memory_hook": "Nesnenin “dünyada nasıl yerleştiği”nin paketlenmiş hali.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "position",
        "rotation",
        "scale",
        "normalize",
        "local-vs-global-coordinates",
        "interpolation-lerp"
      ],
      "previous_core_term_id": "local-vs-global-coordinates",
      "next_core_term_id": "interpolation-lerp"
    },
    {
      "id": "trigger",
      "name": "Trigger",
      "aliases": [],
      "definition": "Başka collider’ı engellemeden giriş/çıkış olayı üreten bölge için genel terim; Godot’ta Area sık karşılığıdır.",
      "short_definition": "Başka collider’ı engellemeden giriş/çıkış olayı üreten bölge için genel terim; Godot’ta Area sık karşılığıdır.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "area",
        "normal",
        "kinematic",
        "hitbox",
        "hurtbox"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "tutorial",
      "name": "Tutorial",
      "aliases": [],
      "definition": "Oyuncuya mekanik/sistem öğreten bölüm veya yöntem.",
      "short_definition": "Oyuncuya mekanik/sistem öğreten bölüm veya yöntem.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "polish",
        "onboarding",
        "difficulty-curve",
        "progression"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "tween",
      "name": "Tween",
      "aliases": [],
      "definition": "Bir değeri başlangıçtan hedefe belirli süre/easing ile geçirmek için kullanılan hafif animasyon yaklaşımıdır.",
      "short_definition": "Bir değeri başlangıçtan hedefe belirli süre/easing ile geçirmek için kullanılan hafif animasyon yaklaşımıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "tween position, easing.",
      "memory_hook": "Basit UI ve hareket geçişleri için çok pratiktir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "easing",
        "material-shader",
        "animationplayer",
        "draw-call"
      ],
      "previous_core_term_id": "animationplayer",
      "next_core_term_id": "draw-call"
    },
    {
      "id": "ui",
      "name": "UI",
      "aliases": [],
      "definition": "UX’in görsel/etkileşimsel arayüz katmanı; UX ile aynı şey değildir.",
      "short_definition": "UX’in görsel/etkileşimsel arayüz katmanı; UX ile aynı şey değildir.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "fail-state-win-state",
        "ux",
        "accessibility"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "ui-gui",
      "name": "UI / GUI",
      "aliases": [
        "UI",
        "GUI"
      ],
      "definition": "User Interface, oyuncunun bilgi gördüğü ve etkileştiği arayüzdür: buton, panel, menü, HUD vb. GUI çoğu bağlamda grafik arayüz anlamında kullanılır.",
      "short_definition": "User Interface, oyuncunun bilgi gördüğü ve etkileştiği arayüzdür: buton, panel, menü, HUD vb. GUI çoğu bağlamda grafik arayüz anlamında kullanılır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-08"
      ],
      "category_ids": [
        "ui-responsive"
      ],
      "category_names": [
        "UI ve Responsive Tasarım"
      ],
      "where_heard": "UI system, HUD, menu.",
      "memory_hook": "UI sadece “güzel görünüm” değil, etkileşim ve bilgi mimarisidir.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "interface",
        "hud",
        "control",
        "container"
      ],
      "previous_core_term_id": "draw-call",
      "next_core_term_id": "control"
    },
    {
      "id": "unique-node",
      "name": "Unique Node",
      "aliases": [],
      "definition": "Scene içinde %Name benzeri benzersiz ad erişimi için işaretlenen node.",
      "short_definition": "Scene içinde %Name benzeri benzersiz ad erişimi için işaretlenen node.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-03"
      ],
      "category_ids": [
        "godot-scenes"
      ],
      "category_names": [
        "Node, Scene ve SceneTree"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "scene",
        "node",
        "remove_child",
        "reparent",
        "lifecycle",
        "notification"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "ux",
      "name": "UX",
      "aliases": [],
      "definition": "User Experience: kullanıcının sistemi kullanırken yaşadığı bütün deneyim.",
      "short_definition": "User Experience: kullanıcının sistemi kullanırken yaşadığı bütün deneyim.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "progression",
        "fail-state-win-state",
        "ui",
        "accessibility"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "variable",
      "name": "Variable (Değişken)",
      "aliases": [
        "Değişken",
        "Variable"
      ],
      "definition": "Programın çalışma sırasında tuttuğu isimlendirilmiş veridir. Değeri değişebilir.",
      "short_definition": "Programın çalışma sırasında tuttuğu isimlendirilmiş veridir. Değeri değişebilir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": "“speed variable”, “local variable”.",
      "memory_hook": "Değişken = etiketlenmiş veri kutusu.",
      "code_example": {
        "language": "gdscript",
        "code": "var health: int = 100"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "constant",
        "data-type"
      ],
      "previous_core_term_id": "runtime",
      "next_core_term_id": "constant"
    },
    {
      "id": "variant",
      "name": "Variant",
      "aliases": [],
      "definition": "Godot’un pek çok farklı veri tipini taşıyabilen genel değer türü.",
      "short_definition": "Godot’un pek çok farklı veri tipini taşıyabilen genel değer türü.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-02"
      ],
      "category_ids": [
        "programming"
      ],
      "category_names": [
        "Programlama ve GDScript"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "bool",
        "string",
        "operator",
        "expression"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "vector2-vector3",
      "name": "Vector2 / Vector3",
      "aliases": [
        "Vector2",
        "Vector3"
      ],
      "definition": "Yön, konum farkı, hız gibi birden fazla sayıyı birlikte temsil eden temel matematik türleridir.",
      "short_definition": "Yön, konum farkı, hız gibi birden fazla sayıyı birlikte temsil eden temel matematik türleridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": "direction vector, velocity vector.",
      "memory_hook": "Vector sadece “konum” değildir.",
      "code_example": {
        "language": "gdscript",
        "code": "var direction := Vector2(1, 0)\nvar velocity := direction * speed"
      },
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "coordinate-system",
        "magnitude-length",
        "normalize"
      ],
      "previous_core_term_id": "coordinate-system",
      "next_core_term_id": "magnitude-length"
    },
    {
      "id": "velocity-acceleration",
      "name": "Velocity / Acceleration",
      "aliases": [
        "Velocity",
        "Acceleration"
      ],
      "definition": "Velocity hız ve yönü; acceleration velocity’nin zamanla değişimini ifade eder.",
      "short_definition": "Velocity hız ve yönü; acceleration velocity’nin zamanla değişimini ifade eder.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-06"
      ],
      "category_ids": [
        "physics"
      ],
      "category_names": [
        "Physics ve Collision"
      ],
      "where_heard": "velocity vector, acceleration.",
      "memory_hook": "position doğrudan değiştirmek ile velocity tabanlı hareket farklıdır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "position",
        "staticbody",
        "area",
        "collision-layer-mask",
        "raycast-shapecast"
      ],
      "previous_core_term_id": "area",
      "next_core_term_id": "collision-layer-mask"
    },
    {
      "id": "version-control",
      "name": "Version Control",
      "aliases": [],
      "definition": "Dosya değişikliklerinin geçmişini kaydedip karşılaştırma, geri dönme ve ekipçe çalışma sistemidir. Git en yaygın örneklerden biridir.",
      "short_definition": "Dosya değişikliklerinin geçmişini kaydedip karşılaştırma, geri dönme ve ekipçe çalışma sistemidir. Git en yaygın örneklerden biridir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-13"
      ],
      "category_ids": [
        "git-release"
      ],
      "category_names": [
        "Git, Build ve Yayınlama"
      ],
      "where_heard": "source control, VCS.",
      "memory_hook": "“Dün çalışan haline dönmek” için hayat kurtarır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "commit",
        "branch"
      ],
      "previous_core_term_id": "premature-optimization",
      "next_core_term_id": "commit"
    },
    {
      "id": "vertical-slice",
      "name": "Vertical Slice",
      "aliases": [],
      "definition": "Oyunun küçük ama hedef kaliteyi temsil eden uçtan uca tamamlanmış parçasıdır.",
      "short_definition": "Oyunun küçük ama hedef kaliteyi temsil eden uçtan uca tamamlanmış parçasıdır.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-14"
      ],
      "category_ids": [
        "design-production"
      ],
      "category_names": [
        "Oyun Tasarımı ve Üretim"
      ],
      "where_heard": "vertical slice demo.",
      "memory_hook": "Prototype “fikir çalışıyor mu?”, vertical slice “final kaliteye yakın üretim nasıl görünüyor?” sorusuna yaklaşır.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "prototype",
        "mvp",
        "scope"
      ],
      "previous_core_term_id": "prototype",
      "next_core_term_id": "mvp"
    },
    {
      "id": "viewport",
      "name": "Viewport",
      "aliases": [],
      "definition": "Bir sahnenin/görüntünün render edildiği yüzey/alan. Ana pencere de bir viewport mantığı taşır; ayrıca alt viewport’lar yapılabilir.",
      "short_definition": "Bir sahnenin/görüntünün render edildiği yüzey/alan. Ana pencere de bir viewport mantığı taşır; ayrıca alt viewport’lar yapılabilir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": "SubViewport, viewport texture.",
      "memory_hook": "Mini-map, render-to-texture gibi ileri kullanımlarda çıkar.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "tile-tilemap",
        "camera",
        "material-shader",
        "animationplayer"
      ],
      "previous_core_term_id": "camera",
      "next_core_term_id": "material-shader"
    },
    {
      "id": "viewport-size",
      "name": "Viewport Size",
      "aliases": [],
      "definition": "Render alanının genişlik/yüksekliği.",
      "short_definition": "Render alanının genişlik/yüksekliği.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "vsync",
      "name": "VSync",
      "aliases": [],
      "definition": "Frame üretimini ekran yenileme döngüsüyle senkronlamayı amaçlayan seçenek.",
      "short_definition": "Frame üretimini ekran yenileme döngüsüyle senkronlamayı amaçlayan seçenek.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-04"
      ],
      "category_ids": [
        "game-loop-input"
      ],
      "category_names": [
        "Game Loop ve Input"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "fixed-timestep",
        "physics-tick",
        "inputevent",
        "pressed-just-pressed"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "warning",
      "name": "Warning",
      "aliases": [],
      "definition": "Kod çalışabilir ama şüpheli/istenmeyen durum bildiren uyarı.",
      "short_definition": "Kod çalışabilir ama şüpheli/istenmeyen durum bildiren uyarı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-12"
      ],
      "category_ids": [
        "debug-performance"
      ],
      "category_names": [
        "Debugging ve Performance"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "log",
        "print",
        "regression",
        "reproduce"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "weighted-random",
      "name": "Weighted Random",
      "aliases": [],
      "definition": "Seçeneklerin eşit değil belirli ağırlıklarla seçildiği rastgelelik yöntemidir.",
      "short_definition": "Seçeneklerin eşit değil belirli ağırlıklarla seçildiği rastgelelik yöntemidir.",
      "tier": "core",
      "priority": "TEMEL",
      "lesson_ids": [
        "lesson-10"
      ],
      "category_ids": [
        "gameplay-ai"
      ],
      "category_names": [
        "Gameplay ve AI"
      ],
      "where_heard": "loot rarity, weighted chance.",
      "memory_hook": "Legendary %1, common %70 gibi.",
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "spawn-despawn",
        "rng-random-seed",
        "pathfinding",
        "navigation-navmesh"
      ],
      "previous_core_term_id": "rng-random-seed",
      "next_core_term_id": "pathfinding"
    },
    {
      "id": "world-environment",
      "name": "World Environment",
      "aliases": [],
      "definition": "Godot 3D’de environment ayarlarını sahneye uygulayan yapı.",
      "short_definition": "Godot 3D’de environment ayarlarını sahneye uygulayan yapı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "world-space",
      "name": "World Space",
      "aliases": [],
      "definition": "Global/dünya koordinat uzayı.",
      "short_definition": "Global/dünya koordinat uzayı.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-05"
      ],
      "category_ids": [
        "game-math"
      ],
      "category_names": [
        "Koordinatlar ve Oyun Matematiği"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [],
      "previous_core_term_id": null,
      "next_core_term_id": null
    },
    {
      "id": "z-index",
      "name": "Z-index",
      "aliases": [],
      "definition": "2D öğelerin önde/arkada çizim sırasını etkileyen değer.",
      "short_definition": "2D öğelerin önde/arkada çizim sırasını etkileyen değer.",
      "tier": "recognize",
      "priority": "TANI",
      "lesson_ids": [
        "lesson-07"
      ],
      "category_ids": [
        "rendering-animation"
      ],
      "category_names": [
        "Görsel, Kamera ve Animasyon"
      ],
      "where_heard": null,
      "memory_hook": null,
      "code_example": null,
      "source": {
        "document": "Yeni Başlayanlar İçin Terimler El Kitabı - Godot + GDScript",
        "edition": "Godot 4.x / Ağustos 2026"
      },
      "related_term_ids": [
        "renderer",
        "canvas",
        "layer",
        "pixel-art"
      ],
      "previous_core_term_id": null,
      "next_core_term_id": null
    }
  ],
  "lessons": [
    {
      "id": "lesson-01",
      "number": 1,
      "slug": "ecosystem",
      "title": "Motor, proje ve oyun geliştirme ekosistemi",
      "description": "Bir kurs açtığında ilk karşılaşacağın büyük resim terimleri.",
      "goal": "Bu bölüm bittiğinde 8 ana terimi açıklayabilecek ve 10 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "game-engine",
        "editor",
        "project",
        "asset",
        "api",
        "library-framework-plugin",
        "build-export",
        "runtime"
      ],
      "recognize_term_ids": [
        "tool-tooling",
        "sdk",
        "ide-code-editor",
        "import",
        "pipeline",
        "dependency",
        "open-source",
        "license",
        "repository",
        "platform"
      ],
      "estimated_minutes": 50,
      "quiz_id": "quiz-01"
    },
    {
      "id": "lesson-02",
      "number": 2,
      "slug": "programming",
      "title": "Programlama ve GDScript temelleri",
      "description": "Kod konuşmalarında en sık geçen dil terimleri.",
      "goal": "Bu bölüm bittiğinde 12 ana terimi açıklayabilecek ve 21 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "variable",
        "constant",
        "data-type",
        "dynamic-vs-static-typing",
        "function-method",
        "parameter-vs-argument",
        "return-value",
        "scope",
        "conditional",
        "loop",
        "array-dictionary",
        "class-object-instance"
      ],
      "recognize_term_ids": [
        "int",
        "float",
        "bool",
        "string",
        "variant",
        "operator",
        "expression",
        "statement",
        "enum",
        "null",
        "casting",
        "annotation",
        "at-export",
        "at-onready",
        "extends",
        "class_name",
        "inheritance",
        "composition",
        "callable",
        "lambda",
        "await"
      ],
      "estimated_minutes": 81,
      "quiz_id": "quiz-02"
    },
    {
      "id": "lesson-03",
      "number": 3,
      "slug": "godot-scenes",
      "title": "Godot’un kalbi: Node, Scene ve SceneTree",
      "description": "Godot kurslarında sürekli duyacağın yapısal kavramlar.",
      "goal": "Bu bölüm bittiğinde 10 ana terimi açıklayabilecek ve 10 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "node",
        "scene",
        "scenetree",
        "parent-child",
        "nodepath-get_node",
        "packedscene-instantiate",
        "_ready",
        "queue_free",
        "group",
        "autoload"
      ],
      "recognize_term_ids": [
        "root-node",
        "main-scene",
        "owner",
        "add_child",
        "remove_child",
        "reparent",
        "unique-node",
        "lifecycle",
        "notification",
        "signal"
      ],
      "estimated_minutes": 60,
      "quiz_id": "quiz-03"
    },
    {
      "id": "lesson-04",
      "number": 4,
      "slug": "game-loop-input",
      "title": "Game loop, frame, delta ve input",
      "description": "“Neden delta ile çarpıyoruz?” sorusunun oturduğu bölüm.",
      "goal": "Bu bölüm bittiğinde 8 ana terimi açıklayabilecek ve 10 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "game-loop",
        "frame-fps",
        "_process",
        "_physics_process",
        "delta",
        "input-action-input-map",
        "polling-vs-event-driven-input",
        "timer-cooldown"
      ],
      "recognize_term_ids": [
        "timestep",
        "fixed-timestep",
        "physics-tick",
        "vsync",
        "inputevent",
        "pressed-just-pressed",
        "dead-zone",
        "focus",
        "pause",
        "time-scale"
      ],
      "estimated_minutes": 50,
      "quiz_id": "quiz-04"
    },
    {
      "id": "lesson-05",
      "number": 5,
      "slug": "game-math",
      "title": "Koordinatlar, Vector ve oyun matematiği",
      "description": "Oyun geliştirmenin “matematik korkutmayan” temel sözlüğü.",
      "goal": "Bu bölüm bittiğinde 8 ana terimi açıklayabilecek ve 12 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "coordinate-system",
        "vector2-vector3",
        "magnitude-length",
        "normalize",
        "local-vs-global-coordinates",
        "transform",
        "interpolation-lerp",
        "distance-direction"
      ],
      "recognize_term_ids": [
        "origin",
        "axis",
        "position",
        "rotation",
        "scale",
        "angle",
        "degree-radian",
        "dot-product",
        "cross-product",
        "clamp",
        "remap",
        "smoothing"
      ],
      "estimated_minutes": 52,
      "quiz_id": "quiz-05"
    },
    {
      "id": "lesson-06",
      "number": 6,
      "slug": "physics",
      "title": "Physics, collision ve hareket",
      "description": "CharacterBody2D gördüğünde ne ailesine ait olduğunu bil.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 11 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "collision",
        "collisionshape2d-3d",
        "characterbody",
        "rigidbody",
        "staticbody",
        "area",
        "velocity-acceleration",
        "collision-layer-mask",
        "raycast-shapecast"
      ],
      "recognize_term_ids": [
        "gravity",
        "force",
        "impulse",
        "friction",
        "bounce-restitution",
        "normal",
        "kinematic",
        "trigger",
        "hitbox",
        "hurtbox",
        "physics-material"
      ],
      "estimated_minutes": 56,
      "quiz_id": "quiz-06"
    },
    {
      "id": "lesson-07",
      "number": 7,
      "slug": "rendering-animation",
      "title": "Görsel, 2D/3D, kamera ve animasyon",
      "description": "Renderer konuşmalarında duyacağın kelimeler.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 14 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "sprite-texture",
        "atlas-sprite-sheet",
        "tile-tilemap",
        "camera",
        "viewport",
        "material-shader",
        "animationplayer",
        "tween",
        "draw-call"
      ],
      "recognize_term_ids": [
        "renderer",
        "canvas",
        "z-index",
        "layer",
        "pixel-art",
        "filtering",
        "mipmaps",
        "particle",
        "light",
        "keyframe",
        "easing",
        "animationtree",
        "blend",
        "fov"
      ],
      "estimated_minutes": 59,
      "quiz_id": "quiz-07"
    },
    {
      "id": "lesson-08",
      "number": 8,
      "slug": "ui-responsive",
      "title": "UI, resolution ve responsive tasarım",
      "description": "Menü ve simülasyon oyunlarında özellikle kritik.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 12 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "ui-gui",
        "control",
        "container",
        "anchor-offset",
        "resolution",
        "aspect-ratio",
        "scaling-stretch",
        "theme",
        "hud"
      ],
      "recognize_term_ids": [
        "responsive-ui",
        "layout",
        "margin-padding",
        "stylebox",
        "minimum-size",
        "focus-navigation",
        "localization",
        "internationalization",
        "dpi",
        "safe-area",
        "tooltip",
        "modal"
      ],
      "estimated_minutes": 57,
      "quiz_id": "quiz-08"
    },
    {
      "id": "lesson-09",
      "number": 9,
      "slug": "data-architecture",
      "title": "Data, Resource, save/load ve mimari",
      "description": "Küçük projeyi büyük projeden ayıran düşünme biçimleri.",
      "goal": "Bu bölüm bittiğinde 10 ana terimi açıklayabilecek ve 13 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "data-vs-logic",
        "resource",
        "serialization",
        "save-load",
        "state",
        "finite-state-machine",
        "coupling",
        "cohesion",
        "encapsulation",
        "signal-event-driven-architecture"
      ],
      "recognize_term_ids": [
        "json",
        "config",
        "schema",
        "manager",
        "singleton",
        "event-bus",
        "abstraction",
        "interface",
        "dependency-injection",
        "composition-over-inheritance",
        "object-pooling",
        "factory",
        "module"
      ],
      "estimated_minutes": 63,
      "quiz_id": "quiz-09"
    },
    {
      "id": "lesson-10",
      "number": 10,
      "slug": "gameplay-ai",
      "title": "Gameplay, AI ve sistem tasarımı terimleri",
      "description": "Bir oyun geliştirici sohbetinde çok sık geçen davranış kelimeleri.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 16 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "game-mechanic",
        "core-loop",
        "game-system",
        "spawn-despawn",
        "rng-random-seed",
        "weighted-random",
        "pathfinding",
        "navigation-navmesh",
        "behavior-tree"
      ],
      "recognize_term_ids": [
        "cooldown",
        "stat",
        "buff-debuff",
        "inventory",
        "quest",
        "ability-skill",
        "damage",
        "health-hp",
        "stamina-mana",
        "aggro",
        "line-of-sight",
        "steering",
        "procedural-generation",
        "deterministic",
        "hit-scan",
        "projectile"
      ],
      "estimated_minutes": 61,
      "quiz_id": "quiz-10"
    },
    {
      "id": "lesson-11",
      "number": 11,
      "slug": "audio-networking",
      "title": "Audio, networking ve multiplayer sözlüğü",
      "description": "Şimdilik derinlemesine değil; duyunca ne olduğunu bilmen yeterli.",
      "goal": "Bu bölüm bittiğinde 8 ana terimi açıklayabilecek ve 13 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "audio-bus",
        "sfx-bgm",
        "client-server",
        "peer",
        "rpc",
        "authority",
        "latency-ping",
        "replication-synchronization"
      ],
      "recognize_term_ids": [
        "db",
        "audio-stream",
        "loop",
        "spatial-audio",
        "packet",
        "bandwidth",
        "packet-loss",
        "jitter",
        "dedicated-server",
        "host",
        "prediction",
        "interpolation",
        "rollback"
      ],
      "estimated_minutes": 53,
      "quiz_id": "quiz-11"
    },
    {
      "id": "lesson-12",
      "number": 12,
      "slug": "debug-performance",
      "title": "Debugging, performance ve üretim araçları",
      "description": "“Kod çalışmıyor”dan “neden çalışmadığını biliyorum” seviyesine.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 14 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "bug",
        "syntax-runtime-logic-error",
        "debugger-breakpoint",
        "stack-trace",
        "profiler",
        "bottleneck",
        "cpu-vs-gpu",
        "memory-allocation",
        "premature-optimization"
      ],
      "recognize_term_ids": [
        "log",
        "print",
        "warning",
        "regression",
        "reproduce",
        "minimal-reproduction",
        "fps-monitor",
        "frame-time",
        "culling",
        "lod",
        "batching",
        "cache",
        "benchmark",
        "hot-path"
      ],
      "estimated_minutes": 59,
      "quiz_id": "quiz-12"
    },
    {
      "id": "lesson-13",
      "number": 13,
      "slug": "git-release",
      "title": "Git, proje düzeni, build ve yayınlama",
      "description": "Tek başına çalışsan bile erken öğrenmen avantaj sağlar.",
      "goal": "Bu bölüm bittiğinde 8 ana terimi açıklayabilecek ve 13 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "version-control",
        "commit",
        "branch",
        "merge",
        "dot-gitignore",
        "debug-vs-release-build",
        "export-preset",
        "ci-cd"
      ],
      "recognize_term_ids": [
        "repository",
        "remote",
        "push",
        "pull",
        "clone",
        "diff",
        "conflict",
        "tag",
        "semantic-versioning",
        "release",
        "patch",
        "hotfix",
        "backup"
      ],
      "estimated_minutes": 53,
      "quiz_id": "quiz-13"
    },
    {
      "id": "lesson-14",
      "number": 14,
      "slug": "design-production",
      "title": "Oyun tasarımı ve proje üretim dili",
      "description": "Kod bilmek kadar “ne üretiyoruz?” dilini de tanımak gerekir.",
      "goal": "Bu bölüm bittiğinde 9 ana terimi açıklayabilecek ve 17 ek terimi duyduğunda tanıyabileceksin.",
      "core_term_ids": [
        "prototype",
        "vertical-slice",
        "mvp",
        "scope",
        "iteration",
        "playtest",
        "balancing",
        "game-feel-juice",
        "feedback-affordance"
      ],
      "recognize_term_ids": [
        "feature",
        "milestone",
        "roadmap",
        "backlog",
        "task",
        "bugfix",
        "scope-creep",
        "cut",
        "polish",
        "onboarding",
        "tutorial",
        "difficulty-curve",
        "progression",
        "fail-state-win-state",
        "ux",
        "ui",
        "accessibility"
      ],
      "estimated_minutes": 62,
      "quiz_id": "quiz-14"
    }
  ],
  "quizzes": [
    {
      "id": "quiz-01",
      "lesson_id": "lesson-01",
      "questions": [
        {
          "id": "q-01-1",
          "type": "open_recall",
          "question": "Engine ile editor arasındaki fark nedir?",
          "answer": "Engine temel çalışma sistemlerini sağlar; editor bu sistemlerle proje oluşturduğun görsel araçtır.",
          "lesson_id": "lesson-01",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-01-2",
          "type": "open_recall",
          "question": "API kelimesini kendi cümlenle nasıl açıklarsın?",
          "answer": "Bir sistemin koddan kullanılabilen yüzeyi/kuralları: sınıflar, metodlar, propertyler ve çağrı biçimleri.",
          "lesson_id": "lesson-01",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-01-3",
          "type": "open_recall",
          "question": "Export neden “Save” ile aynı şey değildir?",
          "answer": "Save proje kaynaklarını kaydeder; export oyuncuya dağıtılabilecek hedef platform çıktısı üretir.",
          "lesson_id": "lesson-01",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-02",
      "lesson_id": "lesson-02",
      "questions": [
        {
          "id": "q-02-1",
          "type": "open_recall",
          "question": "Parameter ve argument farkını örnekle açıkla.",
          "answer": "Parameter fonksiyon tanımındaki isim; argument çağrıdaki gerçek değerdir.",
          "lesson_id": "lesson-02",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-02-2",
          "type": "open_recall",
          "question": "Array ile Dictionary arasında temel fark nedir?",
          "answer": "Array sıralı/indexli koleksiyon; Dictionary key-value eşleşmesidir.",
          "lesson_id": "lesson-02",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-02-3",
          "type": "open_recall",
          "question": "Static typing sana başlangıçta hangi iki faydayı sağlar?",
          "answer": "Hataları daha erken yakalamaya ve editor autocomplete/önerilerini iyileştirmeye yardım eder.",
          "lesson_id": "lesson-02",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-03",
      "lesson_id": "lesson-03",
      "questions": [
        {
          "id": "q-03-1",
          "type": "open_recall",
          "question": "Scene yalnızca level anlamına mı gelir?",
          "answer": "Hayır. Player, UI paneli, mermi, düşman, menü gibi tekrar kullanılabilir node ağaçları da scene olabilir.",
          "lesson_id": "lesson-03",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-03-2",
          "type": "open_recall",
          "question": "instantiate() ne yapar?",
          "answer": "PackedScene kaynağından runtime’da yeni bir node ağacı/scene instance oluşturur.",
          "lesson_id": "lesson-03",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-03-3",
          "type": "open_recall",
          "question": "Autoload için iyi bir kullanım örneği ver.",
          "answer": "Sahneler arası kalıcı global servisler: GameState, AudioManager, save service gibi.",
          "lesson_id": "lesson-03",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-04",
      "lesson_id": "lesson-04",
      "questions": [
        {
          "id": "q-04-1",
          "type": "open_recall",
          "question": "delta neyi temsil eder?",
          "answer": "Son güncelleme adımından bu yana geçen zamanı, genellikle saniye cinsinden.",
          "lesson_id": "lesson-04",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-04-2",
          "type": "open_recall",
          "question": "Neden Input Map kullanmak iyi fikirdir?",
          "answer": "Kodun fiziksel tuşa değil anlamsal action’a bağlanmasını sağlar; remap ve gamepad desteğini kolaylaştırır.",
          "lesson_id": "lesson-04",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-04-3",
          "type": "open_recall",
          "question": "_process ve _physics_process için basit kullanım ayrımı yap.",
          "answer": "Görsel/frame işleri _process; fizik/movement hesapları çoğunlukla _physics_process.",
          "lesson_id": "lesson-04",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-05",
      "lesson_id": "lesson-05",
      "questions": [
        {
          "id": "q-05-1",
          "type": "open_recall",
          "question": "Normalize edilmiş vector’ün length’i yaklaşık kaçtır?",
          "answer": "Sıfır olmayan vector için 1.",
          "lesson_id": "lesson-05",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-05-2",
          "type": "open_recall",
          "question": "Local position ile global position farkı nedir?",
          "answer": "Local parent referansına, global dünya/scene referansına göredir.",
          "lesson_id": "lesson-05",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-05-3",
          "type": "open_recall",
          "question": "Lerp nerede işe yarar?",
          "answer": "Kamera takibi, UI değer geçişi, hareket/rotation smoothing gibi iki değer arasında yumuşak geçiş gereken yerlerde.",
          "lesson_id": "lesson-05",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-06",
      "lesson_id": "lesson-06",
      "questions": [
        {
          "id": "q-06-1",
          "type": "open_recall",
          "question": "Area ile StaticBody arasındaki temel fark nedir?",
          "answer": "Area algılama/trigger için; StaticBody fiziksel sabit engel/çarpışma gövdesi için kullanılır.",
          "lesson_id": "lesson-06",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-06-2",
          "type": "open_recall",
          "question": "Layer ve mask’i tek cümlede ayır.",
          "answer": "Layer nesnenin ait olduğu kategori; mask hangi kategorileri kontrol edeceğini söyler.",
          "lesson_id": "lesson-06",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-06-3",
          "type": "open_recall",
          "question": "RayCast için iki kullanım örneği ver.",
          "answer": "Zemin kontrolü, görüş hattı, hitscan silah, duvar algılama vb.",
          "lesson_id": "lesson-06",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-07",
      "lesson_id": "lesson-07",
      "questions": [
        {
          "id": "q-07-1",
          "type": "open_recall",
          "question": "Texture ile Sprite arasındaki fark nedir?",
          "answer": "Texture görüntü verisi; Sprite bunu sahnede gösteren nesne/node.",
          "lesson_id": "lesson-07",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-07-2",
          "type": "open_recall",
          "question": "Shader ve material arasındaki ilişkiyi açıkla.",
          "answer": "Shader çizim algoritması/mantığı; material bu shader’ı ve parametrelerini belirli yüzeyde kullanan kaynak.",
          "lesson_id": "lesson-07",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-07-3",
          "type": "open_recall",
          "question": "Tween ne zaman AnimationPlayer’dan daha pratik olabilir?",
          "answer": "Tek/az sayıda değeri kısa süreli easing ile programatik geçirmek gerektiğinde.",
          "lesson_id": "lesson-07",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-08",
      "lesson_id": "lesson-08",
      "questions": [
        {
          "id": "q-08-1",
          "type": "open_recall",
          "question": "Resolution ile aspect ratio farkını açıkla.",
          "answer": "Resolution piksel boyutu; aspect ratio genişlik/yükseklik oranı.",
          "lesson_id": "lesson-08",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-08-2",
          "type": "open_recall",
          "question": "Container kullanmanın ana avantajı nedir?",
          "answer": "Child UI öğelerinin yerleşim ve boyutunu otomatik yöneterek responsive düzeni kolaylaştırır.",
          "lesson_id": "lesson-08",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-08-3",
          "type": "open_recall",
          "question": "Theme neden büyük UI projelerinde önemlidir?",
          "answer": "Ortak görsel kuralları merkezileştirir ve tutarlı/değiştirilebilir tasarım sağlar.",
          "lesson_id": "lesson-08",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-09",
      "lesson_id": "lesson-09",
      "questions": [
        {
          "id": "q-09-1",
          "type": "open_recall",
          "question": "Resource ile Scene için basit ayrım yap.",
          "answer": "Resource paylaşılabilir veri/asset; Scene node ağacı ve davranışsal/uzamsal yapı için uygundur.",
          "lesson_id": "lesson-09",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-09-2",
          "type": "open_recall",
          "question": "Coupling neden önemlidir?",
          "answer": "Sistemler aşırı bağlıysa birindeki değişiklik diğerlerini kolayca kırar; düşük coupling değişimi/testi kolaylaştırır.",
          "lesson_id": "lesson-09",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-09-3",
          "type": "open_recall",
          "question": "State machine hangi probleme çözüm getirir?",
          "answer": "Bir nesnenin farklı durumlarını ve aralarındaki geçiş kurallarını açık biçimde yönetmeye.",
          "lesson_id": "lesson-09",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-10",
      "lesson_id": "lesson-10",
      "questions": [
        {
          "id": "q-10-1",
          "type": "open_recall",
          "question": "Core loop ile mechanic farkı nedir?",
          "answer": "Mechanic tekil kural/eylem; core loop oyuncunun tekrar tekrar yaptığı birden çok adımlı ana döngü.",
          "lesson_id": "lesson-10",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-10-2",
          "type": "open_recall",
          "question": "RNG seed neden faydalıdır?",
          "answer": "Aynı rastgele diziyi tekrar üreterek test, replay veya deterministik senaryoları kolaylaştırabilir.",
          "lesson_id": "lesson-10",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-10-3",
          "type": "open_recall",
          "question": "Pathfinding AI’nın tamamı mıdır?",
          "answer": "Hayır; sadece hedefe rota bulma problemidir. Karar verme ayrı bir AI davranış problemidir.",
          "lesson_id": "lesson-10",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-11",
      "lesson_id": "lesson-11",
      "questions": [
        {
          "id": "q-11-1",
          "type": "open_recall",
          "question": "RPC neyin kısaltmasıdır ve ne işe yarar?",
          "answer": "Remote Procedure Call; ağ üzerinden başka peer’da bir işlemi/fonksiyonu tetikleme mekanizmasıdır.",
          "lesson_id": "lesson-11",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-11-2",
          "type": "open_recall",
          "question": "Latency ile FPS aynı problem midir?",
          "answer": "Hayır. FPS yerel render/güncelleme hızı; latency ağ gecikmesidir.",
          "lesson_id": "lesson-11",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-11-3",
          "type": "open_recall",
          "question": "Authority neden önemlidir?",
          "answer": "Bir oyun durumunda hangi tarafın doğru/kontrol sahibi olduğunu belirleyerek tutarlılık ve güvenliği yönetir.",
          "lesson_id": "lesson-11",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-12",
      "lesson_id": "lesson-12",
      "questions": [
        {
          "id": "q-12-1",
          "type": "open_recall",
          "question": "Logic error neden syntax error’dan farklıdır?",
          "answer": "Kod geçerli şekilde çalışır ama tasarlanan sonucun dışında davranır.",
          "lesson_id": "lesson-12",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-12-2",
          "type": "open_recall",
          "question": "Profiler kullanmanın ana amacı nedir?",
          "answer": "Gerçek performans maliyetini ve bottleneck’i ölçmek.",
          "lesson_id": "lesson-12",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-12-3",
          "type": "open_recall",
          "question": "Stack trace sana ne anlatır?",
          "answer": "Hata noktasına hangi fonksiyon çağrı zinciriyle gelindiğini.",
          "lesson_id": "lesson-12",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-13",
      "lesson_id": "lesson-13",
      "questions": [
        {
          "id": "q-13-1",
          "type": "open_recall",
          "question": "Commit nedir?",
          "answer": "Belirli bir değişiklik grubunun version control geçmişindeki kayıt noktasıdır.",
          "lesson_id": "lesson-13",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-13-2",
          "type": "open_recall",
          "question": "Version control ile backup aynı şey midir?",
          "answer": "Hayır. Version control değişiklik geçmişi ve işbirliği sağlar; backup veri kaybına karşı ayrı kopyadır.",
          "lesson_id": "lesson-13",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-13-3",
          "type": "open_recall",
          "question": "Debug ve release build arasında genel fark nedir?",
          "answer": "Debug geliştirme/hata ayıklama odaklı; release dağıtım ve optimize edilmiş çalışma odaklıdır.",
          "lesson_id": "lesson-13",
          "source": "pdf-mini-control"
        }
      ]
    },
    {
      "id": "quiz-14",
      "lesson_id": "lesson-14",
      "questions": [
        {
          "id": "q-14-1",
          "type": "open_recall",
          "question": "Prototype ile vertical slice arasındaki fark nedir?",
          "answer": "Prototype fikri hızlı test eder; vertical slice küçük ama hedef üretim kalitesini uçtan uca temsil etmeye çalışır.",
          "lesson_id": "lesson-14",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-14-2",
          "type": "open_recall",
          "question": "Scope creep ne demektir?",
          "answer": "Planlanan iş kapsamının kontrolsüz biçimde büyümesi.",
          "lesson_id": "lesson-14",
          "source": "pdf-mini-control"
        },
        {
          "id": "q-14-3",
          "type": "open_recall",
          "question": "UI ve UX aynı şey midir?",
          "answer": "Hayır. UI arayüz; UX kullanıcının ürünle yaşadığı genel deneyimdir.",
          "lesson_id": "lesson-14",
          "source": "pdf-mini-control"
        }
      ]
    }
  ],
  "learning_paths": {
    "paths": [
      {
        "id": "first-50",
        "title": "İlk 50 Terim",
        "description": "PDF’deki başlangıç kontrol listesi. Önce bu terimleri aktif olarak tanıyıp açıklayabil.",
        "term_ids": [
          "game-engine",
          "editor",
          "project",
          "asset",
          "api",
          "build-export",
          "runtime",
          "variable",
          "data-type",
          "function-method",
          "parameter-vs-argument",
          "return-value",
          "conditional",
          "loop",
          "array-dictionary",
          "class-object-instance",
          "node",
          "scene",
          "scenetree",
          "parent-child",
          "packedscene-instantiate",
          "_ready",
          "signal",
          "autoload",
          "game-loop",
          "frame-fps",
          "_process",
          "_physics_process",
          "delta",
          "input-action-input-map",
          "vector2-vector3",
          "normalize",
          "local-vs-global-coordinates",
          "transform",
          "collision",
          "collisionshape2d-3d",
          "characterbody",
          "area",
          "collision-layer-mask",
          "raycast-shapecast",
          "sprite-texture",
          "camera",
          "animationplayer",
          "control",
          "container",
          "anchor-offset",
          "resource",
          "serialization",
          "state",
          "finite-state-machine"
        ]
      },
      {
        "id": "core-course",
        "title": "14 Derslik Temel Yol",
        "description": "PDF’de TEMEL olarak işaretlenen kavramların ders sırasındaki akışı.",
        "lesson_ids": [
          "lesson-01",
          "lesson-02",
          "lesson-03",
          "lesson-04",
          "lesson-05",
          "lesson-06",
          "lesson-07",
          "lesson-08",
          "lesson-09",
          "lesson-10",
          "lesson-11",
          "lesson-12",
          "lesson-13",
          "lesson-14"
        ],
        "term_ids": [
          "game-engine",
          "editor",
          "project",
          "asset",
          "api",
          "library-framework-plugin",
          "build-export",
          "runtime",
          "variable",
          "constant",
          "data-type",
          "dynamic-vs-static-typing",
          "function-method",
          "parameter-vs-argument",
          "return-value",
          "scope",
          "conditional",
          "loop",
          "array-dictionary",
          "class-object-instance",
          "node",
          "scene",
          "scenetree",
          "parent-child",
          "nodepath-get_node",
          "packedscene-instantiate",
          "_ready",
          "queue_free",
          "group",
          "autoload",
          "game-loop",
          "frame-fps",
          "_process",
          "_physics_process",
          "delta",
          "input-action-input-map",
          "polling-vs-event-driven-input",
          "timer-cooldown",
          "coordinate-system",
          "vector2-vector3",
          "magnitude-length",
          "normalize",
          "local-vs-global-coordinates",
          "transform",
          "interpolation-lerp",
          "distance-direction",
          "collision",
          "collisionshape2d-3d",
          "characterbody",
          "rigidbody",
          "staticbody",
          "area",
          "velocity-acceleration",
          "collision-layer-mask",
          "raycast-shapecast",
          "sprite-texture",
          "atlas-sprite-sheet",
          "tile-tilemap",
          "camera",
          "viewport",
          "material-shader",
          "animationplayer",
          "tween",
          "draw-call",
          "ui-gui",
          "control",
          "container",
          "anchor-offset",
          "resolution",
          "aspect-ratio",
          "scaling-stretch",
          "theme",
          "hud",
          "data-vs-logic",
          "resource",
          "serialization",
          "save-load",
          "state",
          "finite-state-machine",
          "coupling",
          "cohesion",
          "encapsulation",
          "signal-event-driven-architecture",
          "game-mechanic",
          "core-loop",
          "game-system",
          "spawn-despawn",
          "rng-random-seed",
          "weighted-random",
          "pathfinding",
          "navigation-navmesh",
          "behavior-tree",
          "audio-bus",
          "sfx-bgm",
          "client-server",
          "peer",
          "rpc",
          "authority",
          "latency-ping",
          "replication-synchronization",
          "bug",
          "syntax-runtime-logic-error",
          "debugger-breakpoint",
          "stack-trace",
          "profiler",
          "bottleneck",
          "cpu-vs-gpu",
          "memory-allocation",
          "premature-optimization",
          "version-control",
          "commit",
          "branch",
          "merge",
          "dot-gitignore",
          "debug-vs-release-build",
          "export-preset",
          "ci-cd",
          "prototype",
          "vertical-slice",
          "mvp",
          "scope",
          "iteration",
          "playtest",
          "balancing",
          "game-feel-juice",
          "feedback-affordance"
        ]
      },
      {
        "id": "full-glossary",
        "title": "Tam Sözlük",
        "description": "PDF’deki alfabetik büyük sözlükte bulunan bütün terimler.",
        "term_ids": [
          "dot-gitignore",
          "at-export",
          "at-onready",
          "_physics_process",
          "_process",
          "_ready",
          "aabb",
          "ability-skill",
          "abstraction",
          "accessibility",
          "add-on",
          "add_child",
          "aggro",
          "alpha",
          "anchor-offset",
          "angle",
          "animationplayer",
          "animationtree",
          "annotation",
          "anti-aliasing",
          "api",
          "area",
          "array-dictionary",
          "aspect-ratio",
          "asset",
          "asset-pipeline",
          "atlas-sprite-sheet",
          "audio-bus",
          "audio-stream",
          "authority",
          "autoload",
          "await",
          "axis",
          "backlog",
          "backup",
          "bake",
          "balancing",
          "bandwidth",
          "batching",
          "behavior-tree",
          "benchmark",
          "blend",
          "blend-tree",
          "bool",
          "bottleneck",
          "bounce-restitution",
          "bounding-box",
          "branch",
          "buff-debuff",
          "bug",
          "bugfix",
          "build-export",
          "cache",
          "callable",
          "camera",
          "canvas",
          "canvaslayer",
          "casting",
          "characterbody",
          "ci-cd",
          "clamp",
          "class-object-instance",
          "class_name",
          "client-server",
          "clone",
          "cohesion",
          "collision",
          "collision-layer-mask",
          "collisionshape2d-3d",
          "commit",
          "component",
          "composition",
          "composition-over-inheritance",
          "conditional",
          "config",
          "conflict",
          "constant",
          "container",
          "control",
          "cooldown",
          "coordinate-system",
          "core-loop",
          "coroutine",
          "coupling",
          "cpu-vs-gpu",
          "cross-product",
          "culling",
          "cut",
          "damage",
          "data-type",
          "data-vs-logic",
          "db",
          "dead-zone",
          "debug-vs-release-build",
          "debugger-breakpoint",
          "dedicated-server",
          "degree-radian",
          "delta",
          "dependency",
          "dependency-injection",
          "deterministic",
          "diff",
          "difficulty-curve",
          "distance-direction",
          "dot-product",
          "dpi",
          "draw-call",
          "draw-order",
          "dynamic-vs-static-typing",
          "easing",
          "editor",
          "editor-tool-script",
          "encapsulation",
          "enum",
          "event",
          "event-bus",
          "export-preset",
          "expression",
          "extends",
          "factory",
          "fail-state-win-state",
          "feature",
          "feedback-affordance",
          "filtering",
          "finite-state-machine",
          "fixed-timestep",
          "float",
          "focus",
          "focus-navigation",
          "force",
          "fov",
          "fps-monitor",
          "frame-fps",
          "frame-independent",
          "frame-time",
          "friction",
          "function-method",
          "game-engine",
          "game-feel-juice",
          "game-loop",
          "game-mechanic",
          "game-system",
          "gdextension",
          "global-state",
          "gravity",
          "group",
          "health-hp",
          "hit-scan",
          "hitbox",
          "host",
          "hot-path",
          "hot-reload",
          "hotfix",
          "hud",
          "hurtbox",
          "ide-code-editor",
          "import",
          "impulse",
          "inheritance",
          "input-action-input-map",
          "inputevent",
          "inspector",
          "instance",
          "int",
          "interface",
          "internationalization",
          "interpolation",
          "interpolation-lerp",
          "interpolation-physics",
          "inventory",
          "iteration",
          "jitter",
          "json",
          "keyframe",
          "kinematic",
          "lambda",
          "latency-ping",
          "layer",
          "layout",
          "library-framework-plugin",
          "license",
          "lifecycle",
          "light",
          "line-of-sight",
          "local-vs-global-coordinates",
          "localization",
          "lod",
          "log",
          "loop",
          "magnitude-length",
          "main-scene",
          "manager",
          "margin-padding",
          "material-shader",
          "memory-allocation",
          "merge",
          "milestone",
          "minimal-reproduction",
          "minimum-size",
          "mipmaps",
          "modal",
          "module",
          "mvp",
          "navigation-navmesh",
          "node",
          "node2d",
          "node3d",
          "nodepath-get_node",
          "normal",
          "normalize",
          "notification",
          "null",
          "object",
          "object-pooling",
          "onboarding",
          "open-source",
          "operator",
          "origin",
          "owner",
          "packedscene-instantiate",
          "packet",
          "packet-loss",
          "parameter-vs-argument",
          "parent-child",
          "particle",
          "patch",
          "pathfinding",
          "pause",
          "peer",
          "physics-material",
          "physics-tick",
          "pipeline",
          "pixel-art",
          "platform",
          "playtest",
          "polish",
          "polling-vs-event-driven-input",
          "position",
          "prediction",
          "premature-optimization",
          "pressed-just-pressed",
          "print",
          "procedural-generation",
          "profiler",
          "progression",
          "project",
          "projectile",
          "prototype",
          "pull",
          "push",
          "quest",
          "queue_free",
          "raycast-shapecast",
          "regression",
          "release",
          "remap",
          "remote",
          "remove_child",
          "renderer",
          "reparent",
          "replication-synchronization",
          "repository",
          "reproduce",
          "resolution",
          "resource",
          "responsive-ui",
          "return-value",
          "rigidbody",
          "rng-random-seed",
          "roadmap",
          "rollback",
          "root-node",
          "rotation",
          "rpc",
          "runtime",
          "safe-area",
          "save-load",
          "scale",
          "scaling-stretch",
          "scene",
          "scene-inheritance",
          "scene-instancing",
          "scenetree",
          "schema",
          "scope",
          "scope-creep",
          "screen-space",
          "sdk",
          "semantic-versioning",
          "serialization",
          "sfx-bgm",
          "signal",
          "signal-event-driven-architecture",
          "signal-connection",
          "singleton",
          "smoothing",
          "spatial-audio",
          "spawn-despawn",
          "sprite-texture",
          "stack-trace",
          "stamina-mana",
          "stat",
          "state",
          "statement",
          "staticbody",
          "steering",
          "string",
          "stylebox",
          "syntax-runtime-logic-error",
          "tag",
          "task",
          "texture-atlas",
          "theme",
          "thread",
          "thread-safe",
          "tile-tilemap",
          "time-scale",
          "timer-cooldown",
          "timestep",
          "tool-tooling",
          "tooltip",
          "transform",
          "trigger",
          "tutorial",
          "tween",
          "ui",
          "ui-gui",
          "unique-node",
          "ux",
          "variable",
          "variant",
          "vector2-vector3",
          "velocity-acceleration",
          "version-control",
          "vertical-slice",
          "viewport",
          "viewport-size",
          "vsync",
          "warning",
          "weighted-random",
          "world-environment",
          "world-space",
          "z-index"
        ]
      }
    ]
  }
};