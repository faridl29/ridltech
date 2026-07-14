const PORTFOLIO_DATA = {
  profile: {
    name: "Miftah Faridl",
    role: "Mobile & Web Developer",
    hero_title: "Hi, I'm Miftah Faridl",
    hero_subtitle: "I build enterprise-grade mobile systems that governments and corporations rely on daily.",
    typewriter: ["Flutter", "Kotlin/Java", "React JS", "Laravel/CI", "Ruby on Rails"],
    location: "Cimahi, West Java",
    email: "m.faridl441@gmail.com",
    linkedin: "https://linkedin.com/in/miftah-faridl",
    phone: "+6289654711175",
    photo: "assets/images/profile2.jpg",
    cv_link: "assets/files/cv_miftah_faridl_alanshari_mobile_developer.pdf"
  },
  about: {
    title: "About Me",
    description: "I started coding at 16, building Android apps during vocational school. Since then, I've shipped 20+ production systems — from government platforms used by thousands of civil servants at BKPM and OJK, to banking tools at BNI and BPD Bali, to an international health consultation backend in Singapore. I care deeply about architecture that outlasts the sprint it was built in.",
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "20+", label: "Projects Completed" },
      { number: "10+", label: "Technologies" }
    ],
    philosophy: {
      title: "Engineering Standard",
      description: "I focus on building sustainable systems rather than just features. I prioritize technical excellence and architectural integrity to ensure products are performant, secure, and ready for scale.",
      features: [
        "User-Centric & Data-Driven Design",
        "Clean, Maintainable & Scalable Code",
        "Strategic Solutions for Complex Problems"
      ]
    }
  },
  skills_categories: [
    {
      title: "Programming Languages",
      items: [
        { name: "Dart", icon: "bi-code-slash" },
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
        { name: "Laravel", icon: "bi-code" },
        { name: "CodeIgniter", icon: "bi-code-slash" },
        { name: "React js", icon: "bi-layers" },
        { name: "Next js", icon: "bi-lightning-charge" },
        { name: "Node js", icon: "bi-node-plus" },
        { name: "Ruby on Rails", icon: "bi-gem" }
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
      title: "MKI Hub",
      category: "Mobile",
      thumb: "assets/images/poster_mki_hub.png",
      description: "A flagship enterprise workforce ecosystem for Mediatama Kreasi Informatika. Built with a modular monorepo architecture, it provides an all-in-one solution for HR management including AI-driven face recognition attendance, Sick Leave, WFH, Leave management, Business Trips (Perjadin), and real-time presence tracking.",
      tech: ["Flutter", "Melos", "Riverpod", "GoRouter", "Face Recognition", "Dio", "Clean Architecture"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      challenge: "Developing a unified attendance ecosystem that works reliably across diverse devices, requiring high-accuracy face recognition and geofenced presence verification without excessive battery consumption.",
      solution: "Adopted a monorepo setup using Melos for modular development. Designed an offline-first cache with SQLite, utilized background location geofencing, and implemented local-first face verification before syncing data via REST APIs.",
      impact: "Reduced attendance fraud by 98% and improved data synchronization speed by 40%."
    },
    {
      featured: true,
      title: "Noor Ramadhan",
      category: "Mobile",
      thumb: "assets/images/poster_noor_ramadhan.png",
      description: "An all-in-one Islamic worship companion application designed for local and global Muslim communities. Features a modular reactive architecture, geocoded real-time prayer schedule alarms, dynamic Hijri calendar fasting trackers, and advanced Al-Quran recitations paired with Gemini AI voice analysis.",
      tech: ["Flutter", "Dart", "Firebase AI", "Gemini", "ValueNotifier", "SQLite", "Speech-to-Text", "Local Notifications"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      challenge: "Integrating background location service calculations and real-time audio analysis with high-accuracy speech recognition while preserving low resource utilization and offline reliability.",
      solution: "Engineered a decoupled, layer-based state management structure using ValueNotifiers and custom caches. Integrated Google Gemini endpoints for chat assistance and configured background location services to refresh schedule coordinates smoothly.",
      impact: "Developed a responsive, cross-platform app supporting multiple locales (English, Indonesian, Arabic) maintaining a solid 60 FPS performance on budget devices."
    },
    {
      featured: true,
      title: "E-Office BKPM",
      category: "Mobile",
      thumb: "assets/images/poster_eoffice_bkpm.png",
      description: "Enterprise-grade government internal platform for BKPM (Investment Coordinating Board). Modules include Attendance, Leave, HR, and Finance with secure SSO (Keycloak/Azure AD), dynamic dashboards, and document workflow integration.",
      tech: ["Flutter", "BLoC", "Keycloak", "AzureAD", "REST API", "Minio", "PDF Viewer", "Firebase"],
      links: { demo: "#", github: "#" },
      role: "Senior Flutter Developer",
      challenge: "Handling complex, secure government SSO authorization flows (Keycloak & Azure AD) while maintaining a seamless and fast mobile experience for thousands of concurrent users.",
      solution: "Engineered a robust OAuth2 integration flow using Flutter BLoC. Implemented secure token refresh mechanisms, optimized state-restoration, and structured a secure local storage layer for user permissions.",
      impact: "Successfully deployed to 3,000+ government employees with zero authentication leaks or downtime."
    },
    {
      featured: true,
      title: "Komplekita",
      category: "Mobile",
      thumb: "assets/images/poster_komplekita.png",
      description: "A comprehensive residential and community management platform. It features a Realtime Panic Button (Socket.IO + FlutterMap), Smart QR Access for residents and guests, Complaint Management with multimedia support, Carpool tracking, and integrated PPOB payment services.",
      tech: ["Flutter", "BLoC", "Socket.IO", "FlutterMap", "Firebase", "REST API", "Multimedia", "QR Scanner"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      challenge: "Achieving instantaneous data transmission for the real-time panic button alert and dynamic map-tracking features under unpredictable mobile network conditions.",
      solution: "Built a persistent WebSocket connection layer using Socket.IO with fallback reconnection policies. Integrated FlutterMap with optimized tile caching and localized geo-coordinate buffering.",
      impact: "Reduced panic-response dispatch time from minutes to under 3 seconds on average."
    },
    {
      featured: true,
      title: "Sipena — OJK Archive App",
      category: "Mobile",
      thumb: "assets/images/poster_sipena_ojk.png",
      description: "Internal app for managing official documents at OJK. Features: Outbox, theme switching, push notifications (FCM), and an intuitive dashboard.",
      tech: ["Flutter", "GetX", "FCM"],
      links: { demo: "#", github: "#" },
      role: "Mobile Developer",
      challenge: "Ensuring secure, high-speed document retrieval and push notification delivery for sensitive government communication logs.",
      solution: "Utilized GetX for lightweight, clean state management. Designed a secure local cache and optimized Firebase Cloud Messaging payloads to handle real-time background push updates.",
      impact: "Improved document lookup speed by 35% and achieved 100% push notification delivery success."
    },
    {
      title: "Eoffice Portal (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      thumb: "assets/images/poster_eoffice_portal.png",
      description: "Start page management with NLP speech-to-text. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL", "NLP"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      challenge: "Creating an accessible, voice-driven start portal for government workers to query documents and systems using speech in Indonesian.",
      solution: "Developed the frontend in React JS, integrating Web Speech APIs with a custom natural language parsing middleware. Built a fast REST API backend in Lumen utilizing PostgreSQL full-text search indexes.",
      impact: "Offered a hands-free navigation option that increased system accessibility by 50% for administration teams."
    },
    {
      title: "Eoffice DMS (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      thumb: "assets/images/poster_dms.png",
      description: "Employee document management system. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      challenge: "Building a document management system with heavy search capability and secure file sharing for BKPM.",
      solution: "Configured PostgreSQL search queries and optimized file upload paths using MinIO backend storage. Managed state in React with custom context handlers.",
      impact: "Increased document searching speed by 50% and simplified access control for departmental audits."
    },
    {
      title: "SIGTK (Kementerian Sekretariat Negara)",
      category: "Web",
      thumb: "assets/images/poster_sigtk.png",
      description: "Gelar Tanda Kehormatan management. Frontend: HTML/CSS; Backend: CodeIgniter 4; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 4", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Backend Developer",
      challenge: "Transitioning a legacy award management system to CodeIgniter 4 while preserving data integrity for hundreds of historical records.",
      solution: "Designed custom data migration scripts and implemented a clean MVC architecture with role-based access controllers in CI4.",
      impact: "Migrated over 10,000 award files with zero data loss and automated approval workflows."
    },
    {
      title: "Eoffice Pendukung (Bank SulutGo)",
      category: "Web",
      thumb: "assets/images/poster_pendukung.png",
      description: "Office loan supporting application. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      challenge: "Developing a robust internal portal for processing office loans with high validation accuracy.",
      solution: "Created validation filters in PHP and built responsive form grids in Bootstrap. Designed database triggers in MySQL to prevent race conditions during request submissions.",
      impact: "Reduced loan approval cycle time from 5 days to 24 hours."
    },
    {
      title: "Eoffice Inventory (Bank SulutGo)",
      category: "Web",
      thumb: "assets/images/poster_inventory.png",
      description: "Inventory data management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Fullstack Developer",
      challenge: "Building a real-time stock-tracking system that reconciles distributed physical assets.",
      solution: "Designed database structures with soft deletes and inventory logging tables. Handled transactions safely in PHP CodeIgniter.",
      impact: "Attained 100% accuracy in stock auditing reports across main offices."
    },
    {
      title: "Kearsipan (BNI / Bank Nasional Indonesia)",
      category: "Web",
      thumb: "assets/images/poster_kearsipan.png",
      description: "Head office archive management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Web Developer",
      challenge: "Organizing millions of scanned records into a searchable digital hierarchy for fast retrieval.",
      solution: "Optimized indexing strategies in MySQL and implemented a lightweight search autocomplete interface using AJAX.",
      impact: "Archivists found documents 60% faster, improving overall staff output."
    },
    {
      title: "Digiproc (BPD Bali)",
      category: "Web",
      thumb: "assets/images/digiproc.png",
      description: "Digital procurement system. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" },
      role: "Web Developer",
      challenge: "Building a secure bidding interface that conforms to banking compliance standards.",
      solution: "Implemented secure CSRF token validations, parameterized queries, and strict input validation layers on all forms.",
      impact: "Passed bank security assessments and supported billions of rupiah in automated procurements."
    },
    {
      featured: true,
      title: "WhatsDoc (International Pte. Ltd)",
      category: "Backend",
      thumb: "assets/images/poster_whatsdoc.png",
      description: "Health consultation platform backend. Stack: Ruby on Rails + PostgreSQL.",
      tech: ["Ruby on Rails", "PostgreSQL"],
      links: { demo: "#", github: "#" },
      role: "Ruby on Rails Developer",
      challenge: "Building a highly reliable and HIPAA-compliant doctor-patient scheduling and consultation backend API.",
      solution: "Engineered scalable REST APIs using Ruby on Rails. Modeled database schemas with PostgreSQL, optimizing indexing for booking queries, and secured endpoints using JWT authorization and database-level encryption.",
      impact: "Maintained a high-performance backend serving thousands of daily telemedicine consultations across Singapore."
    },
    {
      title: "WFM (Work Force Management)",
      category: "Mobile",
      thumb: "assets/images/wfm.png",
      description: "Field operations tool: realtime location tracking, Google Maps (custom markers, polylines, geofencing, distance calc), offline caching.",
      tech: ["Flutter", "Maps", "Realtime", "Offline"],
      links: { demo: "#", github: "#" },
      role: "Lead Mobile Developer",
      challenge: "Tracking remote workforces in areas with extremely poor cellular connectivity, causing tracking data loss.",
      solution: "Implemented an offline tracker utilizing Hive storage to log location coordinates offline. Integrated background tracking services with optimized GPS poll frequencies and an automatic queue sync engine when online.",
      impact: "Saved 100% of location logs during offline periods, keeping operational maps fully updated."
    },
    {
      title: "KlikGazz",
      category: "Mobile",
      thumb: "assets/images/klikgazz.png",
      description: "Gas delivery service app (Customer in Kotlin, Driver in Java). Maps place picker & geocoding, Xendit QRIS payments, FCM notifications, MVP architecture.",
      tech: ["Kotlin", "Java", "Maps", "Xendit", "FCM", "MVP"],
      links: { demo: "#", github: "#" },
      role: "Native Android Developer",
      challenge: "Maintaining parity between dual applications (Java and Kotlin) while integrating secure Xendit payment gateways and accurate geocoding.",
      solution: "Designed the architecture using the MVP pattern to decouple logic from the UI. Used Google Play services for location and custom RxJava observers to handle the payment polling states.",
      impact: "Successfully integrated automated payment receipts, accelerating driver response times by 30%."
    },
    {
      title: "ABDNT (AR Education)",
      category: "Mobile",
      thumb: "assets/images/abdnt.png",
      description: "Native Android app (Kotlin, MVVM) with Sceneform SDK for AR to visualize 3D models in real environments.",
      tech: ["Kotlin", "MVVM", "AR", "Sceneform"],
      links: { demo: "#", github: "#" },
      role: "Android Developer",
      challenge: "Rendering detailed 3D assets on low-end mobile devices without overheating or app crashes.",
      solution: "Optimized 3D models for rendering in Sceneform SDK. Used Kotlin coroutines for asynchronous asset preloading and structured lifecycle handlers inside the MVVM architecture.",
      impact: "Achieved a stable 60 FPS performance on 85% of target budget Android devices."
    },
    {
      title: "Cakep (Cari Kerja Pariwisata)",
      category: "Mobile",
      thumb: "assets/images/cakep.png",
      description: "Mobile + API Developer. App in Kotlin; API using CodeIgniter 3.",
      tech: ["Kotlin", "CodeIgniter 3", "API"],
      links: { demo: "#", github: "#" },
      role: "Mobile & API Developer",
      challenge: "Building a responsive tourism job portal mobile client and coordinating REST APIs simultaneously.",
      solution: "Coded a native Android app in Kotlin with Retrofit client, while crafting efficient PHP backend routes using CodeIgniter 3.",
      impact: "Provided a zero-latency sync flow between job listings and applicant profile updates."
    },
    {
      title: "Meeting Room Booking (Internship)",
      category: "Mobile",
      thumb: "assets/images/meeting_room.png",
      description: "Android user app + web admin to book meeting rooms; part of internship workload along with invoicing/shipment utilities.",
      tech: ["Android", "Web Admin"],
      links: { demo: "#", github: "#" },
      role: "Intern Android Developer",
      challenge: "Building a booking scheduler that prevents double-booking rooms with a real-time reservation grid.",
      solution: "Created an Android app with a custom calendar scheduler interface and a PHP-based web admin panel for central booking approvals.",
      impact: "Eliminated meeting room booking conflicts entirely during the internship program."
    }
  ],
  experience: [
    {
      company: "PT. Mediatama Kreasi Informatika",
      role: "Senior Mobile Developer",
      period: "01/2022 - Present",
      description: "Developing scalable mobile applications for enterprise and government systems, focusing on secure authentication, real-time features, and maintainable architecture.",
      highlights: [
        "Developed cross-platform mobile applications using Flutter, successfully delivering 5+ enterprise & government-scale systems (OJK, BKPM, Ministry of Investment).",
        "Designed and configured a highly scalable modular monorepo structure (using Melos), reducing redundant code and cutting new feature development cycles by 25%.",
        "Implemented secure authentication protocols (Keycloak Single Sign-On, Azure AD OAuth2) ensuring zero security leaks across 3,000+ active users.",
        "Integrated offline-first geofencing tracking models, achieving 100% data consistency for remote workforce tracking under unstable network conditions."
      ]
    },
    {
      company: "PT Sampulkreativ Technology",
      role: "Ruby on Rails Developer",
      period: "06/2020 - 12/2021",
      description: "Developed and maintained scalable backend systems and RESTful APIs for custom software solutions.",
      highlights: [
        "Built scalable backend systems using Ruby on Rails.",
        "Designed and implemented RESTful APIs with JWT authentication.",
        "Collaborated in Agile/Scrum teams to deliver features iteratively.",
        "Resolved critical bugs and improved application performance."
      ]
    },
    {
      company: "PT. Aplikanusa Lintasarta",
      role: "Internship Student",
      period: "06/2019 - 12/2019",
      description: "Developed internal tools and mobile applications to support logistics and office workflows.",
      highlights: [
        "Developed Android-based meeting room booking application.",
        "Implemented scheduling and booking management features.",
        "Created tools to support logistics workflows and invoice processing."
      ]
    }
  ],
  education: [
    {
      school: "Universitas Terbuka",
      degree: "Bachelor of Information Systems",
      period: "06/2023 - Present",
      status: "In Progress"
    },
    {
      school: "SMK Negeri 1 Cimahi",
      degree: "High School Diploma (4-Year Program)",
      period: "06/2016 - 06/2020",
      status: "Graduated"
    }
  ]
};
