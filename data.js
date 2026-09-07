const PORTFOLIO_DATA = {
  profile: {
    name: "Miftah Faridl",
    role: "Lead Mobile & Fullstack AI Engineer",
    hero_title: "Hi, I'm Miftah Faridl",
    hero_subtitle: "6+ years delivering production-grade systems across government ministries, banking institutions, and high-scale enterprises.",
    typewriter: ["Flutter", "Kotlin/Java", "React JS", "Laravel/CI", "Ruby on Rails"],
    location: "Cimahi, West Java",
    email: "m.faridl441@gmail.com",
    linkedin: "https://linkedin.com/in/miftah-faridl",
    phone: "+6289654711175",
    photo: "assets/images/profile3.jpg",
    cv_link: "assets/files/cv_miftah_faridl_alanshari_mobile_developer.pdf",
    github: "https://github.com/faridl29"
  },
  about: {
    title: "About Me",
    description: "A software engineer with over 5 years of experience delivering production-grade systems across government, banking, and enterprise sectors. Key deployments include internal platforms for BKPM and OJK serving thousands of civil servants, banking solutions for BNI and BPD Bali, and a telemedicine backend for an international healthcare provider in Singapore. Currently specializing in Flutter with a strong emphasis on scalable architecture and long-term maintainability.",
    stats: [
      { number: "6+", label: "Years Experience" },
      { number: "20+", label: "Projects Delivered" },
      { number: "10+", label: "Technologies" }
    ],
    philosophy: {
      title: "Engineering Principles",
      description: "Every project is approached with a focus on sustainability, clarity, and performance — ensuring systems that remain reliable well beyond their initial release.",
      features: [
        "User experience as a core engineering consideration",
        "Maintainable codebases through clean architecture",
        "Pragmatic solutions grounded in real-world constraints"
      ]
    }
  },
  skills_categories: [
    {
      title: "Programming Languages",
      items: [
        { name: "Dart", icon: "bi-code-slash" },
        { name: "Python", icon: "bi-code-slash" },
        { name: "TypeScript", icon: "bi-code-slash" },
        { name: "Kotlin", icon: "bi-code-slash" },
        { name: "Java", icon: "bi-code-slash" },
        { name: "PHP", icon: "bi-code-slash" },
        { name: "JavaScript", icon: "bi-code-slash" },
        { name: "Ruby", icon: "bi-code-slash" }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { name: "Flutter", icon: "bi-phone" },
        { name: "FastAPI", icon: "bi-lightning-charge" },
        { name: "Next js", icon: "bi-lightning-charge" },
        { name: "React js", icon: "bi-layers" },
        { name: "Laravel", icon: "bi-code" },
        { name: "CodeIgniter", icon: "bi-code-slash" },
        { name: "Node js", icon: "bi-node-plus" },
        { name: "Ruby on Rails", icon: "bi-gem" }
      ]
    },
    {
      title: "Artificial Intelligence",
      items: [
        { name: "LangGraph", icon: "bi-diagram-3" },
        { name: "LangChain", icon: "bi-cpu" },
        { name: "Model Context Protocol (MCP)", icon: "bi-hdd-network" },
        { name: "pgvector & RAG", icon: "bi-database" },
        { name: "Ollama", icon: "bi-robot" }
      ]
    },
    {
      title: "UI / Frontend",
      items: [
        { name: "HTML", icon: "bi-filetype-html" },
        { name: "CSS", icon: "bi-filetype-css" },
        { name: "Bootstrap", icon: "bi-bootstrap" }
      ]
    },
    {
      title: "Design Patterns",
      items: [
        { name: "BloC", icon: "bi-diagram-3" },
        { name: "Cubit", icon: "bi-diagram-3" },
        { name: "MVC", icon: "bi-diagram-3" },
        { name: "MVP", icon: "bi-diagram-3" },
        { name: "MVVM", icon: "bi-diagram-3" },
        { name: "Clean Architecture", icon: "bi-diagram-3" },
        { name: "Repository Pattern", icon: "bi-diagram-3" },
        { name: "Provider", icon: "bi-diagram-3" },
        { name: "GetX", icon: "bi-diagram-3" }
      ]
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: "bi-database" },
        { name: "PostgreSQL", icon: "bi-database" },
        { name: "Redis", icon: "bi-database" },
        { name: "Firebase Realtime Database", icon: "bi-database" }
      ]
    },
    {
      title: "Tools & OS",
      items: [
        { name: "Git / GitHub / GitLab", icon: "bi-git" },
        { name: "CodeMagic", icon: "bi-gear" },
        { name: "Windows / MacOS / Linux", icon: "bi-pc-display" }
      ]
    },
    {
      title: "Integrations",
      items: [
        { name: "GCP", icon: "bi-cloud" },
        { name: "Firebase", icon: "bi-cloud" },
        { name: "Google Maps", icon: "bi-map" },
        { name: "REST API", icon: "bi-hdd-network" },
        { name: "JWT", icon: "bi-shield-lock" },
        { name: "Oauth", icon: "bi-key" },
        { name: "Stripe", icon: "bi-credit-card" },
        { name: "SocketIO", icon: "bi-broadcast" },
        { name: "Twilio", icon: "bi-chat-dots" },
        { name: "Xendit", icon: "bi-wallet2" },
        { name: "AI", icon: "bi-cpu" },
        { name: "minIO", icon: "bi-archive" }
      ]
    }
  ],
  projects: [
    {
      featured: true,
      title: "SATU KND AI Platform",
      category: "Artificial Intelligence",
      company: "Direktorat Jenderal Kekayaan Negara (DJKN) - Kemenkeu RI",
      thumb: "assets/images/poster_djkn_ai_platform.png",
      description: "A flagship enterprise AI ecosystem built to manage state-owned asset portfolios and automate government investment appraisals (PMK 218). Engineered with a decoupled 4-service architecture (Admin Portal, Core API Server, LangGraph Agent Engine, and Model Context Protocol Server), featuring enterprise RAG with pgvector and Langfuse-style trace observability.",
      description_id: "Ekosistem AI enterprise unggulan untuk mengelola portofolio kekayaan negara dan otomasi penilaian investasi pemerintah (PMK 218). Dirancang dengan arsitektur 4-service terpisah (Admin Portal, Core API Server, LangGraph Agent Engine, dan MCP Server), dilengkapi enterprise RAG dengan pgvector serta observabilitas trace ala Langfuse.",
      tech: [
        "Next.js",
        "Python FastAPI",
        "LangGraph",
        "LangChain",
        "Model Context Protocol (MCP)",
        "PostgreSQL (pgvector)",
        "Ollama",
        "TypeScript",
        "Tailwind CSS"
      ],
      links: { demo: "#", github: "#" },
      role: "Lead Fullstack & AI Engineer",
      role_id: "Lead Fullstack & AI Engineer",
      challenge: "Orchestrating autonomous multi-agent workflows and complex legal-financial regulations across distributed state assets, requiring high-precision RAG vector retrieval, seamless tool calling across disparate databases (Oracle/PostgreSQL), and complete trace transparency for governance.",
      challenge_id: "Mengorkestrasi alur kerja multi-agent otonom dan regulasi hukum-keuangan kompleks pada aset negara terdistribusi, membutuhkan temu-kembali vektor RAG berpresisi tinggi, pemanggilan tools mulus lintas database (Oracle/PostgreSQL), serta transparansi trace 100% untuk tata kelola.",
      solution: "Architected a modular 4-tier microservice ecosystem: Next.js frontend bridge, FastAPI DB & document processing engine, LangGraph-powered Agent Engine, and an MCP server for standardized tool execution. Implemented cosine-similarity semantic chunking with pgvector, multi-provider LLM switching (Ollama & Cloud APIs), and real-time trace span monitoring.",
      solution_id: "Merancang arsitektur ekosistem microservice 4-tier: Next.js bridge, FastAPI DB & pengolah dokumen, Agent Engine berbasis LangGraph, dan MCP server untuk standardisasi eksekusi tools. Menerapkan chunking semantik cosine-similarity dengan pgvector, switching multi-provider LLM (Ollama & Cloud API), dan pemantauan span trace real-time.",
      impact: "Accelerated state-asset portfolio appraisal analysis from days to seconds, achieved high-accuracy semantic retrieval across thousands of regulatory documents, and delivered 100% end-to-end audit trace visibility.",
      impact_id: "Mempercepat analisis telaah portofolio aset negara dari hitungan hari menjadi detik, mencapai temu-kembali semantik berakurasi tinggi pada ribuan dokumen regulasi, dan menyajikan 100% visibilitas audit trace end-to-end."
    },
    {
      featured: true,
      title: "MKI Hub",
      category: "Mobile",
      company: "PT. Mediatama Kreasi Informatika",
      thumb: "assets/images/poster_mki_hub.png",
      description: "A flagship enterprise workforce ecosystem for Mediatama Kreasi Informatika. Built with a modular monorepo architecture, it provides an all-in-one solution for HR management including AI-driven face recognition attendance, Sick Leave, WFH, Leave management, Business Trips (Perjadin), and real-time presence tracking.",
      description_id: "Ekosistem ketenagakerjaan enterprise unggulan PT Mediatama Kreasi Informatika. Dibangun dengan arsitektur monorepo modular sebagai solusi terpadu manajemen SDM: presensi deteksi wajah berbasis AI, pengajuan sakit, WFH, cuti, perjalanan dinas (Perjadin), dan pelacakan presensi real-time.",
      tech: ["Flutter", "Melos", "Riverpod", "GoRouter", "Face Recognition", "Dio", "Clean Architecture"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      role_id: "Lead Mobile Developer",
      challenge: "Developing a unified attendance ecosystem that works reliably across diverse devices, requiring high-accuracy face recognition and geofenced presence verification without excessive battery consumption.",
      challenge_id: "Membangun ekosistem presensi terpadu yang andal di berbagai tipe perangkat, membutuhkan pengenalan wajah berakurasi tinggi dan verifikasi lokasi geofence tanpa konsumsi baterai berlebihan.",
      solution: "Adopted a monorepo setup using Melos for modular development. Designed an offline-first cache with SQLite, utilized background location geofencing, and implemented local-first face verification before syncing data via REST APIs.",
      solution_id: "Menerapkan struktur monorepo modular menggunakan Melos. Merancang offline-first cache dengan SQLite, memanfaatkan geofencing background location, dan verifikasi wajah lokal sebelum sinkronisasi via REST API.",
      impact: "Reduced attendance fraud by 98% and improved data synchronization speed by 40%.",
      impact_id: "Menekan kecurangan absensi hingga 98% dan meningkatkan kecepatan sinkronisasi data sebesar 40%."
    },
    {
      featured: true,
      title: "Noor Ramadhan",
      category: "Mobile",
      company: "personal_project",
      thumb: "assets/images/poster_noor_ramadhan.png",
      description: "An all-in-one Islamic worship companion application designed for local and global Muslim communities. Features a modular reactive architecture, geocoded real-time prayer schedule alarms, dynamic Hijri calendar fasting trackers, and advanced Al-Quran recitations paired with Gemini AI voice analysis.",
      description_id: "Aplikasi pendamping ibadah Muslim lengkap untuk komunitas lokal dan global. Menampilkan arsitektur reaktif modular, alarm jadwal salat real-time berbasis geocode, pelacak puasa kalender Hijriah dinamis, dan lantunan Al-Quran dilengkapi analisis suara Gemini AI.",
      tech: ["Flutter", "Dart", "Firebase AI", "Gemini", "ValueNotifier", "SQLite", "Speech-to-Text", "Local Notifications"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      role_id: "Lead Mobile Developer",
      challenge: "Integrating background location service calculations and real-time audio analysis with high-accuracy speech recognition while preserving low resource utilization and offline reliability.",
      challenge_id: "Mengintegrasikan kalkulasi background location service dan analisis audio real-time dengan pengenalan suara akurasi tinggi sambil mempertahankan konsumsi daya rendah dan keandalan offline.",
      solution: "Engineered a decoupled, layer-based state management structure using ValueNotifiers and custom caches. Integrated Google Gemini endpoints for chat assistance and configured background location services to refresh schedule coordinates smoothly.",
      solution_id: "Merancang arsitektur state management bertingkat yang decoupled menggunakan ValueNotifier dan custom cache. Mengintegrasikan Google Gemini API untuk asisten chat dan mengonfigurasi layanan background location untuk pembaruan koordinat secara mulus.",
      impact: "Developed a responsive, cross-platform app supporting multiple locales (English, Indonesian, Arabic) maintaining a solid 60 FPS performance on budget devices.",
      impact_id: "Menghasilkan aplikasi lintas platform yang responsif dengan dukungan multi-bahasa (Inggris, Indonesia, Arab) serta konsisten berjalan di 60 FPS pada perangkat entry-level."
    },
    {
      featured: true,
      title: "E-Office BKPM",
      category: "Mobile",
      company: "BKPM / Kementerian Investasi & Hilirisasi",
      thumb: "assets/images/poster_eoffice_bkpm.png",
      description: "Enterprise-grade government internal platform for BKPM (Investment Coordinating Board). Modules include Attendance, Leave, HR, and Finance with secure SSO (Keycloak/Azure AD), dynamic dashboards, and document workflow integration.",
      description_id: "Platform internal pemerintahan skala enterprise untuk BKPM (Kementerian Investasi & Hilirisasi). Mencakup modul Presensi, Cuti, SDM, dan Keuangan dengan SSO aman (Keycloak/Azure AD), dashboard dinamis, serta integrasi alur dokumen resmi.",
      tech: ["Flutter", "BLoC", "Keycloak", "AzureAD", "REST API", "Minio", "PDF Viewer", "Firebase"],
      links: { demo: "#", github: "#" },
      role: "Senior Flutter Developer",
      role_id: "Senior Flutter Developer",
      challenge: "Handling complex, secure government SSO authorization flows (Keycloak & Azure AD) while maintaining a seamless and fast mobile experience for thousands of concurrent users.",
      challenge_id: "Menangani alur autentikasi SSO pemerintahan yang kompleks dan aman (Keycloak & Azure AD) dengan tetap menjaga performa aplikasi mobile yang cepat untuk ribuan pengguna aktif bersamaan.",
      solution: "Engineered a robust OAuth2 integration flow using Flutter BLoC. Implemented secure token refresh mechanisms, optimized state-restoration, and structured a secure local storage layer for user permissions.",
      solution_id: "Merancang alur integrasi OAuth2 yang tangguh dengan Flutter BLoC. Mengimplementasikan mekanisme refresh token yang aman, pemulihan state yang optimal, dan lapisan penyimpanan lokal yang aman untuk izin akses pengguna.",
      impact: "Successfully deployed to 3,000+ government employees with zero authentication leaks or downtime.",
      impact_id: "Berhasil diterapkan ke 3.000+ pegawai pemerintah tanpa kebocoran autentikasi maupun downtime."
    },
    {
      featured: true,
      title: "Komplekita",
      category: "Mobile",
      company: "PT. Mediatama Kreasi Informatika",
      thumb: "assets/images/poster_komplekita.png",
      description: "A comprehensive residential and community management platform. It features a Realtime Panic Button (Socket.IO + FlutterMap), Smart QR Access for residents and guests, Complaint Management with multimedia support, Carpool tracking, and integrated PPOB payment services.",
      description_id: "Platform komprehensif untuk pengelolaan lingkungan perumahan dan komunitas. Memiliki fitur Tombol Panik Real-time (Socket.IO + FlutterMap), Akses Smart QR untuk penghuni dan tamu, Pengaduan Warga dengan lampiran multimedia, pelacakan Carpool, dan pembayaran PPOB terintegrasi.",
      tech: ["Flutter", "BLoC", "Socket.IO", "FlutterMap", "Firebase", "REST API", "Multimedia", "QR Scanner"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      role_id: "Lead Mobile Developer",
      challenge: "Achieving instantaneous data transmission for the real-time panic button alert and dynamic map-tracking features under unpredictable mobile network conditions.",
      challenge_id: "Mencapai transmisi data instan untuk notifikasi peringatan tombol panik darurat dan pelacakan peta dinamis di bawah kondisi jaringan seluler yang tidak stabil.",
      solution: "Built a persistent WebSocket connection layer using Socket.IO with fallback reconnection policies. Integrated FlutterMap with optimized tile caching and localized geo-coordinate buffering.",
      solution_id: "Membangun lapisan koneksi persisten WebSocket menggunakan Socket.IO dengan kebijakan rekoneksi otomatis. Mengintegrasikan FlutterMap dengan caching tile optimal dan buffering koordinat geografis lokal.",
      impact: "Reduced panic-response dispatch time from minutes to under 3 seconds on average.",
      impact_id: "Mempercepat respon tanggap darurat dari beberapa menit menjadi di bawah 3 detik secara rata-rata."
    },
    {
      featured: true,
      title: "Sipena — OJK Archive App",
      category: "Mobile",
      company: "OJK (Otoritas Jasa Keuangan)",
      thumb: "assets/images/poster_sipena_ojk.png",
      description: "Internal app for managing official documents at OJK. Features: Outbox, theme switching, push notifications (FCM), and an intuitive dashboard.",
      description_id: "Aplikasi internal pengelolaan naskah dinas resmi di Otoritas Jasa Keuangan (OJK). Dilengkapi fitur: Outbox, pergantian tema, notifikasi push real-time (FCM), dan dashboard informatif.",
      tech: ["Flutter", "GetX", "FCM"],
      links: { demo: "#", github: "#" },
      role: "Mobile Developer",
      role_id: "Mobile Developer",
      challenge: "Ensuring secure, high-speed document retrieval and push notification delivery for sensitive government communication logs.",
      challenge_id: "Memastikan temu-kembali dokumen rahasia berjalan cepat dan aman serta pengiriman push notification instan untuk korespondensi resmi pemerintah.",
      solution: "Utilized GetX for lightweight, clean state management. Designed a secure local cache and optimized Firebase Cloud Messaging payloads to handle real-time background push updates.",
      solution_id: "Menggunakan GetX untuk manajemen state yang ringan dan bersih. Merancang cache lokal yang aman dan mengoptimalkan payload Firebase Cloud Messaging untuk background update secara real-time.",
      impact: "Improved document lookup speed by 35% and achieved 100% push notification delivery success.",
      impact_id: "Meningkatkan kecepatan pencarian naskah dinas hingga 35% dengan tingkat keberhasilan pengiriman notifikasi mencapai 100%."
    },
    {
      featured: true,
      title: "Eoffice Portal (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      company: "BKPM / Kementerian Investasi & Hilirisasi",
      thumb: "assets/images/poster_eoffice_portal.png",
      description: "Start page management with NLP speech-to-text. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      description_id: "Manajemen halaman portal pembuka dengan fitur perintah suara NLP speech-to-text. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL", "NLP"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      role_id: "Fullstack Developer",
      challenge: "Creating an accessible, voice-driven start portal for government workers to query documents and systems using speech in Indonesian.",
      challenge_id: "Membangun portal awal berbasis perintah suara agar pegawai pemerintah dapat mencari dokumen dan sistem dengan perintah suara bahasa Indonesia.",
      solution: "Developed the frontend in React JS, integrating Web Speech APIs with a custom natural language parsing middleware. Built a fast REST API backend in Lumen utilizing PostgreSQL full-text search indexes.",
      solution_id: "Mengembangkan antarmuka React JS yang terintegrasi Web Speech API dan middleware pemroses bahasa alami kustom. Membangun backend REST API cepat di Lumen dengan indeks full-text search PostgreSQL.",
      impact: "Offered a hands-free navigation option that increased system accessibility by 50% for administration teams.",
      impact_id: "Memberikan navigasi hands-free yang meningkatkan aksesibilitas sistem hingga 50% bagi tim administrasi."
    },
    {
      title: "Eoffice DMS (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      company: "BKPM / Kementerian Investasi & Hilirisasi",
      thumb: "assets/images/poster_dms.png",
      description: "Employee document management system. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      description_id: "Sistem manajemen arsip dokumen pegawai. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      role_id: "Fullstack Developer",
      challenge: "Building a document management system with heavy search capability and secure file sharing for BKPM.",
      challenge_id: "Membangun sistem arsip digital dengan kapabilitas pencarian tinggi dan berbagi file secara aman di lingkungan BKPM.",
      solution: "Configured PostgreSQL search queries and optimized file upload paths using MinIO backend storage. Managed state in React with custom context handlers.",
      solution_id: "Mengonfigurasi query pencarian PostgreSQL dan mengoptimalkan unggah file menggunakan penyimpanan backend MinIO. Mengelola state React dengan context handler kustom.",
      impact: "Increased document searching speed by 50% and simplified access control for departmental audits.",
      impact_id: "Meningkatkan kecepatan temu-kembali dokumen sebesar 50% dan mempermudah audit kontrol akses antardepartemen."
    },
    {
      title: "SIGTK (Kementerian Sekretariat Negara)",
      category: "Web",
      company: "Kementerian Sekretariat Negara",
      thumb: "assets/images/poster_sigtk.png",
      description: "Gelar Tanda Kehormatan management. Frontend: HTML/CSS; Backend: CodeIgniter 4; DB: MySQL.",
      description_id: "Sistem manajemen usulan Gelar Tanda Kehormatan (GTK). Frontend: HTML/CSS; Backend: CodeIgniter 4; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 4", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Backend Developer",
      role_id: "Backend Developer",
      challenge: "Transitioning a legacy award management system to CodeIgniter 4 while preserving data integrity for hundreds of historical records.",
      challenge_id: "Memperbarui sistem usulan penghargaan lama ke CodeIgniter 4 dengan menjaga integritas ribuan riwayat data penerima penghargaan.",
      solution: "Designed custom data migration scripts and implemented a clean MVC architecture with role-based access controllers in CI4.",
      solution_id: "Merancang skrip migrasi data kustom dan menerapkan arsitektur MVC bersih dengan controller kontrol akses berbasis peran di CI4.",
      impact: "Migrated over 10,000 award files with zero data loss and automated approval workflows.",
      impact_id: "Berhasil memigrasikan lebih dari 10.000 berkas tanda kehormatan tanpa kehilangan data serta mengotomatisasi alur persetujuan."
    },
    {
      title: "Eoffice Pendukung (Bank SulutGo)",
      category: "Web",
      company: "Bank SulutGo",
      thumb: "assets/images/poster_pendukung.png",
      description: "Office loan supporting application. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      description_id: "Aplikasi pendukung operasional pengajuan pinjaman karyawan kantor. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      role_id: "Fullstack Developer",
      challenge: "Developing a robust internal portal for processing office loans with high validation accuracy.",
      challenge_id: "Mengembangkan portal internal yang tangguh untuk pemrosesan pinjaman karyawan dengan validasi akurasi tinggi.",
      solution: "Created validation filters in PHP and built responsive form grids in Bootstrap. Designed database triggers in MySQL to prevent race conditions during request submissions.",
      solution_id: "Membuat filter validasi di PHP dan menyusun grid formulir responsif dengan Bootstrap. Merancang trigger database di MySQL untuk mencegah race condition saat pengajuan.",
      impact: "Reduced loan approval cycle time from 5 days to 24 hours.",
      impact_id: "Mempercepat siklus persetujuan pinjaman dari 5 hari menjadi 24 jam."
    },
    {
      title: "Eoffice Inventory (Bank SulutGo)",
      category: "Web",
      company: "Bank SulutGo",
      thumb: "assets/images/poster_inventory.png",
      description: "Inventory data management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      description_id: "Sistem pengelolaan dan pencatatan aset inventaris kantor. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      role_id: "Fullstack Developer",
      challenge: "Building a real-time stock-tracking system that reconciles distributed physical assets.",
      challenge_id: "Membangun sistem pelacak stok real-time yang merekonsiliasi aset fisik yang tersebar di berbagai kantor cabang.",
      solution: "Designed database structures with soft deletes and inventory logging tables. Handled transactions safely in PHP CodeIgniter.",
      solution_id: "Merancang struktur basis data dengan soft delete dan tabel riwayat inventaris. Menangani transaksi secara aman di PHP CodeIgniter.",
      impact: "Attained 100% accuracy in stock auditing reports across main offices.",
      impact_id: "Mencapai akurasi 100% pada laporan audit stok inventaris di kantor utama."
    },
    {
      title: "Kearsipan (BNI / Bank Nasional Indonesia)",
      category: "Web",
      company: "BNI (Bank Negara Indonesia)",
      thumb: "assets/images/poster_kearsipan.png",
      description: "Head office archive management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      description_id: "Sistem manajemen kearsipan kantor pusat BNI. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Web Developer",
      role_id: "Web Developer",
      challenge: "Organizing millions of scanned records into a searchable digital hierarchy for fast retrieval.",
      challenge_id: "Mengatur jutaan berkas pindaian ke dalam struktur hierarki digital yang mudah dan cepat dicari.",
      solution: "Optimized indexing strategies in MySQL and implemented a lightweight search autocomplete interface using AJAX.",
      solution_id: "Mengoptimalkan strategi pengindeksan di MySQL dan mengimplementasikan antarmuka autocomplete pencarian cepat via AJAX.",
      impact: "Archivists found documents 60% faster, improving overall staff output.",
      impact_id: "Petugas arsip menemukan dokumen 60% lebih cepat, meningkatkan produktivitas operasional staf."
    },
    {
      title: "Digiproc (BPD Bali)",
      category: "Web",
      company: "BPD Bali",
      thumb: "assets/images/poster_digiproc.png",
      description: "Digital procurement system. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      description_id: "Sistem pengadaan barang dan jasa digital (E-Procurement). Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Web Developer",
      role_id: "Web Developer",
      challenge: "Building a secure bidding interface that conforms to banking compliance standards.",
      challenge_id: "Membangun antarmuka lelang/bidding yang aman dan memenuhi standar kepatuhan regulasi perbankan.",
      solution: "Implemented secure CSRF token validations, parameterized queries, and strict input validation layers on all forms.",
      solution_id: "Menerapkan validasi token CSRF yang aman, query berparameter (prepared statements), dan validasi ketat pada setiap form input.",
      impact: "Passed bank security assessments and supported billions of rupiah in automated procurements.",
      impact_id: "Lolos uji audit keamanan perbankan dan sukses memfasilitasi transaksi pengadaan bernilai miliaran rupiah."
    },
    {
      title: "WhatsDoc (International Pte. Ltd)",
      category: "Backend",
      company: "WhatsDoc International Pte. Ltd",
      thumb: "assets/images/poster_whatsdoc.png",
      description: "Health consultation platform backend. Stack: Ruby on Rails + PostgreSQL.",
      description_id: "Backend platform konsultasi dan telemedicine internasional. Tech Stack: Ruby on Rails + PostgreSQL.",
      tech: ["Ruby on Rails", "PostgreSQL"],
      links: { demo: "#", github: "#" },
      role: "Ruby on Rails Developer",
      role_id: "Ruby on Rails Developer",
      challenge: "Building a highly reliable and HIPAA-compliant doctor-patient scheduling and consultation backend API.",
      challenge_id: "Membangun backend API penjadwalan dan konsultasi dokter-pasien yang sangat andal serta memenuhi standar kepatuhan HIPAA.",
      solution: "Engineered scalable REST APIs using Ruby on Rails. Modeled database schemas with PostgreSQL, optimizing indexing for booking queries, and secured endpoints using JWT authorization and database-level encryption.",
      solution_id: "Merancang RESTful API berskala tinggi dengan Ruby on Rails. Merancang skema database PostgreSQL dengan indeks optimal untuk query booking, serta mengamankan endpoint dengan autentikasi JWT dan enkripsi tingkat database.",
      impact: "Maintained a high-performance backend serving thousands of daily telemedicine consultations across Singapore.",
      impact_id: "Menjaga keandalan backend performa tinggi yang melayani ribuan konsultasi telemedicine harian di Singapura."
    },
    {
      title: "WFM (Work Force Management)",
      category: "Mobile",
      company: "PT. Infrastruktur Telekomunikasi Indonesia",
      thumb: "assets/images/poster_wfm.png",
      description: "Field operations tool: realtime location tracking, Google Maps (custom markers, polylines, geofencing, distance calc), offline caching.",
      description_id: "Aplikasi operasional lapangan: pelacakan lokasi real-time, integrasi Google Maps (marker kustom, polyline, geofencing, kalkulasi jarak), serta offline caching.",
      tech: ["Flutter", "Maps", "Realtime", "Offline"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      role_id: "Lead Mobile Developer",
      challenge: "Tracking remote workforces in areas with extremely poor cellular connectivity, causing tracking data loss.",
      challenge_id: "Melacak posisi petugas lapangan di area dengan koneksi seluler minim tanpa kehilangan data pelacakan.",
      solution: "Implemented an offline tracker utilizing Hive storage to log location coordinates offline. Integrated background tracking services with optimized GPS poll frequencies and an automatic queue sync engine when online.",
      solution_id: "Menerapkan offline tracker memanfaatkan penyimpanan Hive untuk merekam riwayat koordinat saat offline. Mengintegrasikan layanan background tracking dengan frekuensi polling hemat daya dan sinkronisasi otomatis saat online.",
      impact: "Saved 100% of location logs during offline periods, keeping operational maps fully updated.",
      impact_id: "Berhasil mempertahankan 100% log posisi saat offline sehingga peta monitoring operasional selalu mutakhir."
    },
    {
      title: "KlikGazz",
      category: "Mobile",
      company: "KlikGazz",
      thumb: "assets/images/poster_klikgazz.png",
      description: "Gas delivery service app (Customer in Kotlin, Driver in Java). Maps place picker & geocoding, Xendit QRIS payments, FCM notifications, MVP architecture.",
      description_id: "Aplikasi layanan pesan antar gas elpiji (Aplikasi Customer di Kotlin, Aplikasi Driver di Java). Fitur: pemilihan lokasi & geocoding Maps, pembayaran QRIS Xendit, notifikasi FCM, dan arsitektur MVP.",
      tech: ["Kotlin", "Java", "Maps", "Xendit", "FCM", "MVP"],
      links: { demo: "#", github: "#" },
      role: "Native Android Developer",
      role_id: "Native Android Developer",
      challenge: "Maintaining parity between dual applications (Java and Kotlin) while integrating secure Xendit payment gateways and accurate geocoding.",
      challenge_id: "Menjaga konsistensi logika antara dua aplikasi terpisah (Java dan Kotlin) sembari mengintegrasikan payment gateway Xendit dan geocoding akurat.",
      solution: "Designed the architecture using the MVP pattern to decouple logic from the UI. Used Google Play services for location and custom RxJava observers to handle the payment polling states.",
      solution_id: "Merancang arsitektur menggunakan pola MVP untuk memisahkan logika dari tampilan UI. Memanfaatkan Google Play Services untuk lokasi dan observer RxJava kustom untuk polling status pembayaran.",
      impact: "Successfully integrated automated payment receipts, accelerating driver response times by 30%.",
      impact_id: "Berhasil mengintegrasikan konfirmasi pembayaran instan otomatis, mempercepat waktu respon driver hingga 30%."
    },
    {
      title: "Cakep (Cari Kerja Pariwisata)",
      category: "Mobile",
      company: "personal_project",
      thumb: "assets/images/poster_cakep.png",
      description: "Mobile + API Developer. App in Kotlin; API using CodeIgniter 3.",
      description_id: "Platform portal lowongan kerja pariwisata. Aplikasi mobile dikembangkan menggunakan Kotlin; API menggunakan CodeIgniter 3.",
      tech: ["Kotlin", "CodeIgniter 3", "API"],
      links: { demo: "#", github: "#" },
      role: "Mobile & API Developer",
      role_id: "Mobile & API Developer",
      challenge: "Building a responsive tourism job portal mobile client and coordinating REST APIs simultaneously.",
      challenge_id: "Membangun aplikasi mobile lowongan kerja pariwisata yang responsif sekaligus mengoordinasikan REST API pendukungnya.",
      solution: "Coded a native Android app in Kotlin with Retrofit client, while crafting efficient PHP backend routes using CodeIgniter 3.",
      solution_id: "Mengembangkan aplikasi native Android di Kotlin menggunakan Retrofit client, serta merancang rute backend PHP yang efisien dengan CodeIgniter 3.",
      impact: "Provided a zero-latency sync flow between job listings and applicant profile updates.",
      impact_id: "Menghadirkan sinkronisasi tanpa latensi antara daftar lowongan dan pembaruan profil pelamar kerja."
    },
    {
      title: "Meeting Room Booking (Internship)",
      category: "Mobile",
      company: "PT. Aplikanusa Lintasarta",
      thumb: "assets/images/meeting_room.png",
      description: "Android user app + web admin to book meeting rooms; part of internship workload along with invoicing/shipment utilities.",
      description_id: "Aplikasi Android pengguna + admin web untuk pemesanan ruang rapat internal; bagian dari program magang beserta modul penagihan/faktur logistik.",
      tech: ["Android", "Web Admin"],
      links: { demo: "#", github: "#" },
      role: "Intern Android Developer",
      role_id: "Intern Android Developer (Magang)",
      challenge: "Building a booking scheduler that prevents double-booking rooms with a real-time reservation grid.",
      challenge_id: "Membangun sistem penjadwalan pemesanan yang mencegah jadwal ganda (bentrok) dengan kalender reservasi real-time.",
      solution: "Created an Android app with a custom calendar scheduler interface and a PHP-based web admin panel for central booking approvals.",
      solution_id: "Membuat aplikasi Android dengan antarmuka kalender reservasi kustom dan panel web admin berbasis PHP untuk persetujuan pusat.",
      impact: "Eliminated meeting room booking conflicts entirely during the internship program.",
      impact_id: "Menghilangkan konflik pemesanan ruang rapat secara total selama program magang berlangsung."
    }
  ],
  experience: [
    {
      company: "PT. Mediatama Kreasi Informatika",
      role: "Senior Mobile Developer",
      role_id: "Senior Mobile Developer",
      period: "01/2022 - Present",
      period_id: "01/2022 - Sekarang",
      description: "Developing scalable mobile applications for enterprise and government systems, focusing on secure authentication, real-time features, and maintainable architecture.",
      description_id: "Mengembangkan aplikasi mobile berskala besar untuk sistem enterprise dan pemerintahan, berfokus pada autentikasi aman, fitur real-time, dan arsitektur yang mudah dipelihara.",
      highlights: [
        "Developed cross-platform mobile applications using Flutter, successfully delivering 5+ enterprise & government-scale systems (OJK, BKPM, Ministry of Investment).",
        "Designed and configured a highly scalable modular monorepo structure (using Melos), reducing redundant code and cutting new feature development cycles by 25%.",
        "Implemented secure authentication protocols (Keycloak Single Sign-On, Azure AD OAuth2) ensuring zero security leaks across 3,000+ active users.",
        "Integrated offline-first geofencing tracking models, achieving 100% data consistency for remote workforce tracking under unstable network conditions."
      ],
      highlights_id: [
        "Mengembangkan aplikasi mobile multiplatform menggunakan Flutter, sukses merilis 5+ sistem skala enterprise & kementerian/pemerintah (OJK, BKPM, Kementerian Investasi).",
        "Merancang dan mengonfigurasi struktur monorepo modular yang skalabel (menggunakan Melos), mengurangi kode redundan dan memangkas siklus pengembangan fitur baru hingga 25%.",
        "Mengimplementasikan protokol autentikasi aman (Keycloak Single Sign-On, Azure AD OAuth2) untuk menjamin zero security leaks pada 3.000+ pengguna aktif.",
        "Mengintegrasikan pelacakan geofencing offline-first, mencapai konsistensi data 100% untuk pemantauan presensi pegawai lapangan dalam kondisi jaringan tidak stabil."
      ]
    },
    {
      company: "PT Sampulkreativ Technology",
      role: "Ruby on Rails Developer",
      role_id: "Ruby on Rails Developer",
      period: "06/2020 - 12/2021",
      period_id: "06/2020 - 12/2021",
      description: "Developed and maintained scalable backend systems and RESTful APIs for custom software solutions.",
      description_id: "Mengembangkan dan memelihara sistem backend berskala tinggi serta RESTful API untuk solusi software kustom.",
      highlights: [
        "Built scalable backend systems using Ruby on Rails.",
        "Designed and implemented RESTful APIs with JWT authentication.",
        "Collaborated in Agile/Scrum teams to deliver features iteratively.",
        "Resolved critical bugs and improved application performance."
      ],
      highlights_id: [
        "Membangun sistem backend skalabel menggunakan Ruby on Rails.",
        "Merancang dan mengimplementasikan RESTful API dengan autentikasi JWT.",
        "Berkolaborasi dalam tim Agile/Scrum untuk merilis fitur secara iteratif.",
        "Menyelesaikan bug kritis dan mengoptimalkan performa aplikasi."
      ]
    },
    {
      company: "PT. Aplikanusa Lintasarta",
      role: "Internship Student",
      role_id: "Siswa Magang (Internship)",
      period: "06/2019 - 12/2019",
      period_id: "06/2019 - 12/2019",
      description: "Developed internal tools and mobile applications to support logistics and office workflows.",
      description_id: "Mengembangkan aplikasi internal dan aplikasi mobile untuk mendukung operasional logistik dan alur kerja perkantoran.",
      highlights: [
        "Developed Android-based meeting room booking application.",
        "Implemented scheduling and booking management features.",
        "Created tools to support logistics workflows and invoice processing."
      ],
      highlights_id: [
        "Mengembangkan aplikasi reservasi ruang rapat internal berbasis Android.",
        "Mengimplementasikan fitur manajemen jadwal dan alur persetujuan pemesanan.",
        "Membangun aplikasi bantu untuk mendukung alur logistik dan pemrosesan invoice."
      ]
    }
  ],
  education: [
    {
      school: "Universitas Terbuka",
      degree: "Bachelor of Information Systems",
      degree_id: "S1 Sistem Informasi",
      period: "06/2023 - Present",
      period_id: "06/2023 - Sekarang",
      status: "In Progress",
      status_id: "Sedang Berjalan"
    },
    {
      school: "SMK Negeri 1 Cimahi",
      degree: "High School Diploma (4-Year Program)",
      degree_id: "SMK Program 4 Tahun",
      period: "06/2016 - 06/2020",
      period_id: "06/2016 - 06/2020",
      status: "Graduated",
      status_id: "Lulus"
    }
  ]
};
