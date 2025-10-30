/* ---------- Core ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* AOS */
AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });

/* Bootstrap Scrollspy */
new bootstrap.ScrollSpy(document.body, { target: "#mainNav", offset: 90 });

/* Smooth scroll + auto-collapse nav on mobile */
document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      const nav = document.getElementById("navContent");
      if (nav && nav.classList.contains("show")) new bootstrap.Collapse(nav).hide();
    }
  });
});

/* Contact form demo */
const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.classList.remove("d-none");
    form.reset();
    setTimeout(() => alertBox.classList.add("d-none"), 4000);
  });
}

/* ---------- Theme Toggle ---------- */
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const rootHtml = document.documentElement;

function setTheme(theme) {
  rootHtml.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  themeIcon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
}
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const current = rootHtml.getAttribute("data-bs-theme") || "light";
    setTheme(current === "light" ? "dark" : "light");
  });
}

/* ---------- Projects Data (Complete with dummy images) ---------- */
const projectsData = [
  {
    title: "E-Office BKPM",
    category: "Mobile",
    thumb: "assets/images/eoffice_bkpm.png",
    description: "Enterprise-grade government internal platform for BKPM (Investment Coordinating Board). Modules include Attendance, Leave, HR, and Finance with secure SSO (Keycloak/Azure AD), dynamic dashboards, and document workflow integration.",
    tech: ["Flutter", "BLoC", "Keycloak", "AzureAD", "REST API", "Minio", "PDF Viewer", "Firebase"],
    tags: ["Mobile", "Flutter", "Enterprise", "SSO", "Government"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Komplekita",
    category: "Mobile",
    thumb: "assets/images/komplekita.png",
    description: "Residential/complex management app. Core features: Panic Button (Socket.IO + FlutterMap) realtime, Resident Permit, Complaint Management, Carpool live driver tracking.",
    tech: ["Flutter","BLoC","GetX","Realtime","Maps","FCM"],
    tags: ["Mobile","Flutter","Realtime","Maps"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Sipena — OJK Archive App",
    category: "Mobile",
    thumb: "assets/images/sipena.png",
    description: "Internal app for managing official documents at OJK. Features: Outbox, theme switching, push notifications (FCM), and an intuitive dashboard.",
    tech: ["Flutter","GetX","FCM"],
    tags: ["Mobile","Flutter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Eoffice Portal (BKPM / Kementerian Investasi & Hilirisasi)",
    category: "Web",
    thumb: "assets/images/eoffice.png",
    description: "Start page management with NLP speech-to-text. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
    tech: ["React","Lumen","PostgreSQL","NLP"],
    tags: ["Web","React"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Eoffice DMS (BKPM / Kementerian Investasi & Hilirisasi)",
    category: "Web",
    thumb: "assets/images/dms.png",
    description: "Employee document management system. Frontend: React JS; Backend: Lumen; DB: PostgreSQL.",
    tech: ["React","Lumen","PostgreSQL"],
    tags: ["Web","React"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "SIGTK (Kementerian Sekretariat Negara)",
    category: "Web",
    thumb: "assets/images/sigtk.png",
    description: "Gelar Tanda Kehormatan management. Frontend: HTML/CSS; Backend: CodeIgniter 4; DB: MySQL.",
    tech: ["HTML/CSS","CodeIgniter 4","MySQL"],
    tags: ["Web","CodeIgniter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Eoffice Pendukung (Bank SulutGo)",
    category: "Web",
    thumb: "assets/images/pendukung.png",
    description: "Office loan supporting application. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
    tech: ["HTML/CSS","CodeIgniter 3","MySQL"],
    tags: ["Web","CodeIgniter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Eoffice Inventory (Bank SulutGo)",
    category: "Web",
    thumb: "assets/images/inventory.png",
    description: "Inventory data management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
    tech: ["HTML/CSS","CodeIgniter 3","MySQL"],
    tags: ["Web","CodeIgniter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Kearsipan (BNI / Bank Nasional Indonesia)",
    category: "Web",
    thumb: "assets/images/kearsipan.png",
    description: "Head office archive management. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
    tech: ["HTML/CSS","CodeIgniter 3","MySQL"],
    tags: ["Web","CodeIgniter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Digiproc (BPD Bali)",
    category: "Web",
    thumb: "assets/images/digiproc.png",
    description: "Digital procurement system. Frontend: HTML/CSS; Backend: CodeIgniter 3; DB: MySQL.",
    tech: ["HTML/CSS","CodeIgniter 3","MySQL"],
    tags: ["Web","CodeIgniter"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "WhatsDoc (International Pte. Ltd)",
    category: "Backend",
    thumb: "assets/images/whatsdoc.png",
    description: "Health consultation platform backend. Stack: Ruby on Rails + PostgreSQL.",
    tech: ["Ruby on Rails","PostgreSQL"],
    tags: ["Backend","Rails"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "WFM (Work Force Management)",
    category: "Mobile",
    thumb: "assets/images/wfm.png",
    description: "Field operations tool: realtime location tracking, Google Maps (custom markers, polylines, geofencing, distance calc), offline caching.",
    tech: ["Flutter","Maps","Realtime","Offline"],
    tags: ["Mobile","Flutter","Maps","Realtime"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "KlikGazz",
    category: "Mobile",
    thumb: "assets/images/klikgazz.png",
    description: "Gas delivery service app (Customer in Kotlin, Driver in Java). Maps place picker & geocoding, Xendit QRIS payments, FCM notifications, MVP architecture.",
    tech: ["Kotlin","Java","Maps","Xendit","FCM","MVP"],
    tags: ["Mobile","Kotlin","Maps"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "ABDNT (AR Education)",
    category: "Mobile",
    thumb: "assets/images/abdnt.png",
    description: "Native Android app (Kotlin, MVVM) with Sceneform SDK for AR to visualize 3D models in real environments.",
    tech: ["Kotlin","MVVM","AR","Sceneform"],
    tags: ["Mobile","Kotlin"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Cakep (Cari Kerja Pariwisata)",
    category: "Mobile",
    thumb: "assets/images/cakep.png",
    description: "Mobile + API Developer. App in Kotlin; API using CodeIgniter 3.",
    tech: ["Kotlin","CodeIgniter 3","API"],
    tags: ["Mobile","Kotlin","Backend"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Meeting Room Booking (Internship)",
    category: "Mobile",
    thumb: "https://placehold.co/800x500/png?text=Meeting+Room+Booking",
    description: "Android user app + web admin to book meeting rooms; part of internship workload along with invoicing/shipment utilities.",
    tech: ["Android","Web Admin"],
    tags: ["Mobile","Android"],
    links: { demo: "#", github: "#" }
  },
];

/* ---------- Render Projects ---------- */
const grid = document.getElementById("projectsGrid");

function makeBadge(label, style = "primary") {
  return `<span class="badge rounded-pill text-bg-${style}-subtle text-${style} border border-${style}-subtle">${label}</span>`;
}
function makeTechBadges(techs = []) {
  return techs
    .map(t => `<span class="badge rounded-pill bg-body-secondary text-body-emphasis me-1 mb-1">${t}</span>`)
    .join("");
}

function projectCard(p, index){
  const catStyle = p.category === "Mobile" ? "primary" : (p.category === "Web" ? "info" : "warning");
  return `
    <div class="col-sm-6 col-lg-4 project-col" data-category="${p.category}">
      <div class="card project-card h-100 glass" data-index="${index}" data-bs-toggle="modal" data-bs-target="#projectModal">
        <img src="${p.thumb}" class="card-img-top project-thumb rounded-top-4" alt="${p.title} preview" />
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-wrap gap-1 mb-2">${makeBadge(p.category, catStyle)}</div>
          <h5 class="card-title mb-2">${p.title}</h5>
          <p class="card-text text-secondary">${p.description}</p>
          <div class="mt-auto">
            <div class="mb-3">${makeTechBadges(p.tech)}</div>
            <div class="d-flex gap-2">
              <a class="btn btn-outline-primary btn-sm ${p.links.demo==="#"?'disabled':''}" href="${p.links.demo}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right me-1"></i>Live</a>
              <a class="btn btn-primary btn-sm ${p.links.github==="#"?'disabled':''}" href="${p.links.github}" target="_blank" rel="noopener"><i class="bi bi-github me-1"></i>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function openProjectModal(project){
  document.getElementById("projectModalLabel").textContent = project.title;
  document.getElementById("projectModalImg").src = project.thumb;
  document.getElementById("projectModalImg").alt = project.title + " preview";
  document.getElementById("projectModalDesc").textContent = project.description;
  document.getElementById("projectModalTech").innerHTML = makeTechBadges(project.tech);

  const demoBtn = document.getElementById("projectModalDemo");
  const githubBtn = document.getElementById("projectModalGithub");

  if(project.links.demo==="#"){ demoBtn.classList.add("disabled"); }
  else { demoBtn.classList.remove("disabled"); demoBtn.href = project.links.demo; }

  if(project.links.github==="#"){ githubBtn.classList.add("disabled"); }
  else { githubBtn.classList.remove("disabled"); githubBtn.href = project.links.github; }
}



function renderProjects(list = projectsData) {
  grid.innerHTML = list.map((p,i) => projectCard(p,i)).join("");

  // Tambahkan listener setelah render
  document.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      const index = card.getAttribute("data-index");
      openProjectModal(projectsData[index]);
    });
  });
}


// function renderProjects(list = projectsData) {
//   grid.innerHTML = list.map(projectCard).join("");
// }
renderProjects();

/* ---------- Category Filter ---------- */
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.filter;
    if(key === "all"){ renderProjects(projectsData); return; }
    const filtered = projectsData.filter(p => p.category === key);
    renderProjects(filtered);
  });
});
