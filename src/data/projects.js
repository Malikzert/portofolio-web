const BASE = import.meta.env.BASE_URL;
const withBase = (path) =>
  typeof path === 'string' && path.startsWith('/') ? BASE + path.slice(1) : path;

export const projects = [
  {
    title: "Quran Daily",
    slug: "quran-daily",
    description: "UI/UX Design for Daily Quran Reading App.",
    fullDescription: "Quran Daily adalah studi kasus desain aplikasi mobile yang bertujuan meningkatkan konsistensi membaca Al-Quran melalui UI yang tenang dan fitur pelacakan progres.",
    category: "UI/UX Design",
    image: "/img/qd.png",
    techStack: ["Figma", "User Research", "Prototyping"],
    liveLink: null,
    githubLink: null,
    gallery: [
      { src: "/img/qd (1).png", caption: "Home Screen" },
      { src: "/img/qd (2).png", caption: "Reading View" },
      { src: "/img/qd (3).png", caption: "Progress Tracker" },
      { src: "/img/qd (4).png", caption: "Settings" }
    ]
  },
  {
    title: "Eco Runner",
    slug: "ecorunner",
    description: "Game edukasi 2D platformer bertema lingkungan.",
    fullDescription: "Eco Runner adalah game platformer 2D edukatif yang dibangun menggunakan Godot Engine dengan bahasa GDScript. Game ini menggabungkan mekanisme platformer yang menarik dengan pesan edukasi tentang pentingnya menjaga kebersihan lingkungan. Pemain harus melompat, menghindari rintangan, dan mengumpulkan sampah yang tersebar di setiap level untuk mendapatkan skor tinggi.",
    category: "Game Development",
    image: "/img/eco (1).png",
    techStack: ["Godot Engine", "GDScript", "TileMap"],
    liveLink: "https://www.youtube.com/watch?v=OAD9YXr3jrU",
    githubLink: "https://github.com/Malikzert/ProyekPPLGame",
    gallery: [
      { src: "/img/eco (2).png", caption: "Level 1 - Forest" },
      { src: "/img/eco (3).png", caption: "Trash Collection" },
      { src: "/img/eco (4).png", caption: "UI Dashboard" },
      { src: "/img/eco (5).png", caption: "Obstacle Challenge" }
    ]
  },
  {
    title: "Elektroshop Ecommerce",
    slug: "electroshop",
    description: "Platform belanja online untuk elektronik.",
    fullDescription: "Elektroshop Ecommerce adalah platform belanja online modern yang dirancang khusus untuk produk elektronik. Dilengkapi dengan sistem pembayaran digital yang aman, manajemen inventaris real-time, dan dashboard admin untuk memantau performa penjualan.",
    category: "Web Development",
    image: "/img/elek.png",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://www.youtube.com/watch?v=DBatILReSUA&t=1082s",
    githubLink: "https://github.com/Malikzert/ElektroShop",
    gallery: [
      { src: "/img/elek1.png", caption: "Product Catalog" },
      { src: "/img/elek2.png", caption: "Shopping Cart" },
      { src: "/img/elek3.png", caption: "Checkout Page" },
      { src: "/img/elek4.png", caption: "Admin Dashboard" }
    ]
  },
  {
    title: "Ular Tangga 3D",
    slug: "ulartangga",
    description: "Game ular tangga berbasis C++ OpenGL.",
    fullDescription: "Ular Tangga 3D adalah aplikasi desktop yang dibangun menggunakan C++ dengan library OpenGL dan GLUT. Game ini menampilkan grafis 3D native dengan implementasi transformasi geometri, pencahayaan (lighting), dan rendering objek 3D. Pemain dapat melempar dadu secara acak dan menggerakkan pion di papan permainan dengan efek visual yang menarik.",
    category: "Computer Graphics",
    image: "/img/ular.png",
    techStack: ["C++", "OpenGL", "GLUT", "Code::Blocks"],
    liveLink: null,
    githubLink: "https://github.com/Malikzert/Ulartangga-3d",
    isNativeApp: true,
    gallery: [
      { src: "/img/ular1.png", caption: "Front View" },
      { src: "/img/ular2.png", caption: "Dice Animation" },
      { src: "/img/ular3.png", caption: "3D Perspective" }
    ]
  },
  {
    title: "Simple Web Search Engine",
    slug: "searchengine",
    description: "Mesin pencari web dengan efisiensi indexing dan akurasi pencarian.",
    fullDescription: "Pengembangan mesin pencari web sederhana yang berfokus pada efisiensi indexing dan akurasi pencarian kata kunci menggunakan logika pemrosesan teks. Proyek ini mengimplementasikan inverted index, TF-IDF scoring, dan cosine similarity untuk memberikan hasil pencarian yang akurat dan relevan.",
    category: "Web Development",
    image: "/img/se (1).png",
    techStack: ["Python", "JavaScript", "HTML5", "CSS3"],
    liveLink: null,
    githubLink: "https://github.com/Malikzert/Searchengine",
    gallery: [
      { src: "/img/se (1).png", caption: "Main Interface" },
      { src: "/img/se (2).png", caption: "Search Results" },
      { src: "/img/se (3).png", caption: "Indexing Process" },
      { src: "/img/se (4).png", caption: "Query Optimization" },
      { src: "/img/se (5).png", caption: "Indexing Process" },
      { src: "/img/se (6).png", caption: "Query Optimization" }
    ]
  },
  {
    title: "E-Presensi",
    slug: "epresensi",
    description: "Sistem absensi digital berbasis web.",
    fullDescription: "E-Presensi adalah platform manajemen kehadiran digital yang memungkinkan pengguna melakukan absensi secara real-time dengan integrasi validasi data yang akurat.",
    category: "Web App",
    image: "/img/epres.png",
    techStack: ["Laravel", "MySQL", "Geolocation API"],
    liveLink: null,
    githubLink: "https://github.com/Malikzert/e-presensi",
    gallery: [
      { src: "/img/epres (1).png", caption: "Admin Dashboard" },
      { src: "/img/epres (2).png", caption: "Attendance Form" },
      { src: "/img/epres (3).png", caption: "Report View" },
      { src: "/img/epres (4).png", caption: "User Profile" }
    ]
  }
].map((project) => ({
  ...project,
  image: withBase(project.image),
  gallery: project.gallery.map((item) => ({ ...item, src: withBase(item.src) })),
}));
