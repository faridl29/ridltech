const PORTFOLIO_DATA = {
  profile: {
    name: "Miftah Faridl",
    role: "Mobile & Web Developer",
    hero_title: "Hi, I'm Miftah Faridl",
    hero_subtitle: "Results-driven Senior Mobile Developer with 5+ years of experience building scalable, high-performance solutions for enterprise and government systems using Flutter, Java, and Kotlin.",
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
    description: "Results-driven Senior Mobile Developer with 5+ years of experience. Skilled in secure authentication (SSO, OAuth), real-time features, and modular architecture using Clean Architecture and BLoC, with a strong focus on performance, maintainability, and user-centric design.",
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "20+", label: "Projects Completed" },
      { number: "10+", label: "Technologies" }
    ],
    what_i_do: {
      title: "Core Expertise",
      description: "I engineer scalable architectures and seamless user interfaces that drive business growth. From concept to deployment, I ensure every line of code adds measurable beauty and value to the product.",
      features: ["Native & Hybrid Mobile", "Enterprise Web Apps", "High-Concurrency Systems", "Cloud & API Architecture"]
    },
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
      title: "MKI Hub",
      category: "Mobile",
      thumb: "assets/images/mki_hub.png",
      description: "A flagship enterprise workforce ecosystem for Mediatama Kreasi Informatika. Built with a modular monorepo architecture, it provides an all-in-one solution for HR management including AI-driven face recognition attendance, Sick Leave, WFH, Leave management, Business Trips (Perjadin), and real-time presence tracking.",
      tech: ["Flutter", "Melos", "Riverpod", "GoRouter", "Face Recognition", "Dio", "Clean Architecture"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "E-Office BKPM",
      category: "Mobile",
      thumb: "assets/images/eoffice_bkpm.png",
      description: "Enterprise-grade government internal platform for BKPM (Investment Coordinating Board). Modules include Attendance, Leave, HR, and Finance with secure SSO (Keycloak/Azure AD), dynamic dashboards, and document workflow integration.",
      tech: ["Flutter", "BLoC", "Keycloak", "AzureAD", "REST API", "Minio", "PDF Viewer", "Firebase"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Komplekita",
      category: "Mobile",
      thumb: "assets/images/komplekita.png",
      description: "A comprehensive residential and community management platform. It features a Realtime Panic Button (Socket.IO + FlutterMap), Smart QR Access for residents and guests, Complaint Management with multimedia support, Carpool tracking, and integrated PPOB payment services.",
      tech: ["Flutter", "BLoC", "Socket.IO", "FlutterMap", "Firebase", "REST API", "Multimedia", "QR Scanner"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Sipena — OJK Archive App",
      category: "Mobile",
      thumb: "assets/images/sipena.png",
      description: "Internal app for managing official documents at OJK. Features: Outbox, theme switching, push notifications (FCM), and an intuitive dashboard.",
      tech: ["Flutter", "GetX", "FCM"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Eoffice Portal (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      thumb: "assets/images/eoffice.png",
      description: "Start page management with NLP speech-to-text. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL", "NLP"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Eoffice DMS (BKPM / Kementerian Investasi & Hilirisasi)",
      category: "Web",
      thumb: "assets/images/dms.png",
      description: "Employee document management system. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
      tech: ["React", "Lumen", "PostgreSQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "SIGTK (Kementerian Sekretariat Negara)",
      category: "Web",
      thumb: "assets/images/sigtk.png",
      description: "Gelar Tanda Kehormatan management. Frontend: HTML/CSS; Backend: CodeIgniter 4; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 4", "MySQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Eoffice Pendukung (Bank SulutGo)",
      category: "Web",
      thumb: "assets/images/pendukung.png",
      description: "Office loan supporting application. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Eoffice Inventory (Bank SulutGo)",
      category: "Web",
      thumb: "assets/images/inventory.png",
      description: "Inventory data management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Kearsipan (BNI / Bank Nasional Indonesia)",
      category: "Web",
      thumb: "assets/images/kearsipan.png",
      description: "Head office archive management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Digiproc (BPD Bali)",
      category: "Web",
      thumb: "assets/images/digiproc.png",
      description: "Digital procurement system. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
      tech: ["HTML/CSS", "CodeIgniter 3", "MySQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "WhatsDoc (International Pte. Ltd)",
      category: "Backend",
      thumb: "assets/images/whatsdoc.png",
      description: "Health consultation platform backend. Stack: Ruby on Rails + PostgreSQL.",
      tech: ["Ruby on Rails", "PostgreSQL"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "WFM (Work Force Management)",
      category: "Mobile",
      thumb: "assets/images/wfm.png",
      description: "Field operations tool: realtime location tracking, Google Maps (custom markers, polylines, geofencing, distance calc), offline caching.",
      tech: ["Flutter", "Maps", "Realtime", "Offline"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "KlikGazz",
      category: "Mobile",
      thumb: "assets/images/klikgazz.png",
      description: "Gas delivery service app (Customer in Kotlin, Driver in Java). Maps place picker & geocoding, Xendit QRIS payments, FCM notifications, MVP architecture.",
      tech: ["Kotlin", "Java", "Maps", "Xendit", "FCM", "MVP"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "ABDNT (AR Education)",
      category: "Mobile",
      thumb: "assets/images/abdnt.png",
      description: "Native Android app (Kotlin, MVVM) with Sceneform SDK for AR to visualize 3D models in real environments.",
      tech: ["Kotlin", "MVVM", "AR", "Sceneform"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Cakep (Cari Kerja Pariwisata)",
      category: "Mobile",
      thumb: "assets/images/cakep.png",
      description: "Mobile + API Developer. App in Kotlin; API using CodeIgniter 3.",
      tech: ["Kotlin", "CodeIgniter 3", "API"],
      links: { demo: "#", github: "#" }
    },
    {
      title: "Meeting Room Booking (Internship)",
      category: "Mobile",
      thumb: "https://placehold.co/800x500/png?text=Meeting+Room+Booking",
      description: "Android user app + web admin to book meeting rooms; part of internship workload along with invoicing/shipment utilities.",
      tech: ["Android", "Web Admin"],
      links: { demo: "#", github: "#" }
    }
  ],
  experience: [
    {
      company: "PT. Mediatama Kreasi Informatika",
      role: "Senior Mobile Developer",
      period: "01/2022 - Present",
      description: "Developing scalable mobile applications for enterprise and government systems, focusing on secure authentication, real-time features, and maintainable architecture.",
      highlights: [
        "Developed cross-platform mobile applications using Flutter for enterprise and government-scale systems.",
        "Implemented secure SSO authentication using Keycloak, OAuth (Azure AD), and role-based access control.",
        "Designed and applied Clean Architecture with BLoC and repository pattern.",
        "Built real-time features using Socket.IO, including live data synchronization.",
        "Improved application performance through optimized state management and lazy loading."
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
