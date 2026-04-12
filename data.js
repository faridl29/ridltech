const PORTFOLIO_DATA = {
  profile: {
    name: "Miftah Faridl",
    role: "Mobile & Web Developer",
    hero_title: "Hi, I'm Miftah Faridl",
    hero_subtitle: "I build cross-platform mobile apps and modern web systems that feel fast, reliable, and delightful.",
    typewriter: ["Flutter", "Kotlin/Java", "React JS", "Laravel/CI", "Ruby on Rails"],
    location: "Cimahi, West Java",
    email: "m.faridl441@gmail.com",
    linkedin: "https://linkedin.com/in/miftah-faridl",
    phone: "+6289654711175",
    photo: "assets/images/profile2.jpg",
    cv_link: "assets/files/cv_miftah_faridl_al-anshari_fullstack_developer.pdf"
  },
  about: {
    title: "About Me",
    description: "I am a passionate Mobile & Web Developer who thrives on crafting apps that are not just functional, but also intuitive and visually appealing.",
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "20+", label: "Projects Completed" },
      { number: "10+", label: "Technologies" }
    ],
    what_i_do: {
      title: "What I Do",
      description: "I specialize in creating cross-platform mobile applications and modern web systems that deliver exceptional user experiences. My approach combines clean code practices with intuitive design principles.",
      features: ["Mobile Apps", "Web Systems", "Real-time Apps", "API Integration"]
    },
    philosophy: {
      title: "My Philosophy",
      description: "I believe technology should solve real problems while being accessible and enjoyable to use. Every project is an opportunity to create something meaningful that makes a positive impact.",
      features: [
        "User-first approach in every design decision",
        "Clean, maintainable code that scales",
        "Continuous learning and adaptation"
      ]
    }
  },
  skills_categories: [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: "bi-code-slash" },
        { name: "Kotlin", icon: "bi-code-slash" },
        { name: "PHP", icon: "bi-code-slash" },
        { name: "Ruby", icon: "bi-code-slash" },
        { name: "JavaScript", icon: "bi-code-slash" }
      ]
    },
    {
      title: "Frameworks",
      items: [
        { name: "Flutter", icon: "bi-phone" },
        { name: "React", icon: "bi-layers" },
        { name: "jQuery", icon: "bi-window" },
        { name: "Laravel", icon: "bi-code" },
        { name: "Lumen", icon: "bi-code" },
        { name: "CodeIgniter", icon: "bi-code-slash" },
        { name: "Rails", icon: "bi-gem" }
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
      title: "Architecture",
      items: [
        { name: "MVC / MVVM / BLoC", icon: "bi-diagram-3" }
      ]
    },
    {
      title: "Tools & OS",
      items: [
        { name: "Git / GitHub / GitLab", icon: "bi-git" },
        { name: "Codemagic", icon: "bi-gear" },
        { name: "Linux / MacOS", icon: "bi-ubuntu" }
      ]
    },
    {
      title: "Cloud",
      items: [
        { name: "GCP", icon: "bi-cloud" },
        { name: "Firebase", icon: "bi-cloud" },
        { name: "Google Maps", icon: "bi-map" },
        { name: "REST / JWT", icon: "bi-hdd-network" }
      ]
    },
    {
      title: "Databases",
      items: [
        { name: "SQL / PostgreSQL", icon: "bi-database" },
        { name: "Redis / NoSQL", icon: "bi-database" }
      ]
    },
    {
      title: "Integrations & PM",
      items: [
        { name: "Stripe", icon: "bi-credit-card" },
        { name: "Twilio", icon: "bi-chat-dots" },
        { name: "Scrum", icon: "bi-kanban" },
        { name: "Helpdesk", icon: "bi-headset" }
      ]
    }
  ],
  projects: [
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
      description: "Residential/complex management app. Core features: Panic Button (Socket.IO + FlutterMap) realtime, Resident Permit, Complaint Management, Carpool live driver tracking.",
      tech: ["Flutter", "BLoC", "GetX", "Realtime", "Maps", "FCM"],
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
  ]
};
