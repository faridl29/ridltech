// Initialization
document.getElementById('year').textContent = new Date().getFullYear();
AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });

// ═══════════════════════════════════════
// CUSTOM SCROLLSPY — reliable section tracking
// ═══════════════════════════════════════
const navLinks = document.querySelectorAll('#mainNav .custom-link');
const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

function updateActiveNav() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const offset = 150; // offset for fixed nav + buffer

  let currentSection = 'home';

  // Find the section that is currently most prominent in the viewport
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    
    const rect = el.getBoundingClientRect();
    // If the top of the section is above the threshold (offset)
    if (rect.top <= offset) {
      currentSection = id;
    }
  }

  // Bottom of the page check (Contact)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
    currentSection = 'contact';
  }

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Throttled and Combined Scroll Listener to prevent layout thrashing
let scrollThrottleTimeout;
window.addEventListener('scroll', () => {
  // Fast class toggle (no layout reflow)
  if (window.scrollY > 30) {
    document.getElementById('mainNav').classList.add('scrolled');
  } else {
    document.getElementById('mainNav').classList.remove('scrolled');
  }

  // Throttled scrollspy calculations (only runs once every 100ms)
  if (!scrollThrottleTimeout) {
    scrollThrottleTimeout = setTimeout(() => {
      updateActiveNav();
      scrollThrottleTimeout = null;
    }, 100);
  }
}, { passive: true });

// Smooth Navigation — use event delegation so dynamically injected links also work
document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const targetId = anchor.getAttribute('href');
  if (targetId && targetId.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    }
    const nav = document.getElementById('navContent');
    if (nav && nav.classList.contains('show')) new bootstrap.Collapse(nav).hide();
  }
});

// Theme System
const rootHtml = document.documentElement;
function setTheme(theme) {
  rootHtml.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  const icon = document.getElementById("themeIcon");
  if (theme === "dark") {
    icon.className = "bi bi-sun-fill";
    icon.style.color = "#fbbf24";
  } else {
    icon.className = "bi bi-moon-stars-fill";
    icon.style.color = "var(--accent)";
  }
}
setTheme(localStorage.getItem("theme") || "dark");
document.getElementById("themeToggle").addEventListener("click", () => {
  setTheme(rootHtml.getAttribute("data-bs-theme") === "light" ? "dark" : "light");
});

// Global state for projects
let cachedProjectsList = [];
let currentProjectCount = 6;
let allGlobalProjects = [];

// ═══════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════
function renderPortfolio() {
  if (typeof PORTFOLIO_DATA === 'undefined') {
    document.body.innerHTML = "<div class='container mt-5 text-center text-danger'><h3>ERROR: PORTFOLIO_DATA missing in data.js</h3></div>";
    return;
  }
  const data = PORTFOLIO_DATA;
  allGlobalProjects = data.projects;
  cachedProjectsList = data.projects;
  document.getElementById('footerText').textContent = data.profile.name;

  document.getElementById('heroContent').innerHTML = `
    <div class="col-lg-7 mb-5 mb-lg-0 order-2 order-lg-1" data-aos="fade-right">
      <div class="availability-banner">
        <span class="availability-dot"></span>
        <span>Available for new opportunities</span>
      </div>
      <h1 class="hero-heading mb-4">
        <span class="hero-greeting">Hi, I'm</span>
        <span class="hero-name-gradient">${data.profile.name}</span>
      </h1>
      <p class="hero-subtitle mb-4">${data.profile.hero_subtitle}</p>
      
      <div class="hero-typewriter-row mb-5">
        <span class="hero-typewriter-label">Specialized in</span>
        <span class="typewriter-text fw-bold" id="tw-text"></span>
      </div>
      
      <div class="d-flex flex-wrap gap-3 mb-5">
        <a href="${data.profile.cv_link}" target="_blank" class="btn btn-primary px-4 py-3 rounded-pill fw-medium shadow-sm d-flex align-items-center gap-2"><i class="bi bi-file-earmark-arrow-down"></i> Download Resume</a>
        <a href="#projects" class="btn btn-outline-primary px-4 py-3 rounded-pill d-flex align-items-center gap-2"><i class="bi bi-briefcase"></i> View Projects</a>
        <a href="#contact" class="btn btn-outline-primary px-4 py-3 rounded-pill d-flex align-items-center gap-2"><i class="bi bi-envelope"></i> Contact Me</a>
      </div>
      
      <div class="d-flex gap-3">
        <a href="mailto:${data.profile.email}" class="social-icon text-decoration-none" aria-label="Email"><i class="bi bi-envelope"></i></a>
        <a href="${data.profile.linkedin}" target="_blank" class="social-icon text-decoration-none" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="https://wa.me/${data.profile.phone.replace(/[^a-zA-Z0-9]/g, '')}" target="_blank" class="social-icon text-decoration-none" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
    <div class="col-lg-5 order-1 order-lg-2 text-center" data-aos="fade-left" data-aos-delay="100">
      <div class="profile-wrap mx-auto">
        <img src="${data.profile.photo}" alt="${data.profile.name}" class="profile-img">
        <div class="floating-badge"><i class="bi bi-geo-alt-fill" style="color: var(--accent);"></i> <span>${data.profile.location.split(',')[0]}</span></div>
      </div>
    </div>
  `;



  // Typewriter
  const twEl = document.getElementById('tw-text');
  let typeIdx = 0, charIdx = 0, isDeleting = false;
  function typeEffect() {
    const currentWord = data.profile.typewriter[typeIdx];
    if (isDeleting) charIdx--; else charIdx++;
    twEl.textContent = currentWord.substring(0, charIdx);
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIdx === currentWord.length) { typeSpeed = 1500; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; typeIdx = (typeIdx + 1) % data.profile.typewriter.length; typeSpeed = 500; }
    setTimeout(typeEffect, typeSpeed);
  }
  setTimeout(typeEffect, 500);

  // ═══════════════════════════════════════
  // ABOUT
  // ═══════════════════════════════════════
  let doFeatures = data.about.what_i_do.features.map(f => `
    <div class="col-12 d-flex align-items-center gap-2">
      <i class="bi bi-check-circle-fill text-accent" style="font-size: 0.8rem; flex-shrink:0;"></i>
      <span>${f}</span>
    </div>
  `).join('');
  let philFeatures = data.about.philosophy.features.map(f => `
    <li class="d-flex align-items-start gap-2">
      <i class="bi bi-check-circle-fill text-accent" style="font-size: 0.8rem; flex-shrink:0; margin-top: 2px;"></i>
      <span class="lh-sm">${f}</span>
    </li>
  `).join('');

  document.getElementById('aboutContent').className = 'about-bento-grid';
  document.getElementById('aboutContent').innerHTML = `
    <!-- Bento Card 1: Bio & Summary -->
    <div class="bento-card bento-bio" data-aos="fade-up">
      <div class="elegant-card h-100 p-4">
        <h4 class="fw-bold mb-3 d-flex align-items-center gap-3">
          <div class="brand-icon" style="background: var(--accent);"><i class="bi bi-person-fill"></i></div> About Me
        </h4>
        <p class="text-secondary lh-lg mb-0 small">${data.about.description}</p>
      </div>
    </div>

    <!-- Bento Card 2: Dashboard Stats -->
    <div class="bento-card bento-stats" data-aos="fade-up" data-aos-delay="50">
      <div class="elegant-card h-100 p-4 d-flex flex-column justify-content-between gap-3">
        ${data.about.stats.map((s, sIdx) => `
          <div class="text-center p-2 ${sIdx < data.about.stats.length - 1 ? 'border-bottom border-subtle' : ''}">
            <div class="stat-number">${s.number}</div>
            <div class="text-muted small text-uppercase fw-bold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Bento Card 3: Core Expertise -->
    <div class="bento-card bento-expertise" data-aos="fade-up" data-aos-delay="100">
      <div class="elegant-card h-100 p-4">
        <h4 class="fw-bold mb-3 d-flex align-items-center gap-3">
          <div class="brand-icon" style="background: var(--accent-3);"><i class="bi bi-code-slash"></i></div> ${data.about.what_i_do.title}
        </h4>
        <p class="text-secondary small mb-3">${data.about.what_i_do.description}</p>
        <div class="row g-2 fw-medium text-main small">${doFeatures}</div>
      </div>
    </div>

    <!-- Bento Card 4: Philosophy & Standards -->
    <div class="bento-card bento-philosophy" data-aos="fade-up" data-aos-delay="150">
      <div class="elegant-card h-100 p-4">
        <h4 class="fw-bold mb-3 d-flex align-items-center gap-3">
          <div class="brand-icon" style="background: var(--accent-2);"><i class="bi bi-lightbulb-fill"></i></div> ${data.about.philosophy.title}
        </h4>
        <p class="text-secondary small mb-3">${data.about.philosophy.description}</p>
        <ul class="list-unstyled fw-medium text-secondary m-0 small d-flex flex-column gap-2">${philFeatures}</ul>
      </div>
    </div>
  `;

  // ═══════════════════════════════════════
  // SKILLS — Card grid with category icons & colored accents
  // ═══════════════════════════════════════
  const skillCategoryIcons = {
    'Programming Languages': 'bi-braces-asterisk',
    'Frameworks': 'bi-layers',
    'UI / Frontend': 'bi-palette',
    'Architecture': 'bi-diagram-3',
    'Tools & OS': 'bi-terminal',
    'Cloud': 'bi-cloud-arrow-up',
    'Databases': 'bi-database',
    'Integrations & PM': 'bi-plug'
  };
  const skillCategoryColors = [
    '#6366f1', '#8b5cf6', '#06b6d4', '#10b981',
    '#f59e0b', '#ef4444', '#3b82f6', '#ec4899'
  ];

  let skillsHtml = '';
  data.skills_categories.forEach((cat, idx) => {
    const icon = skillCategoryIcons[cat.title] || 'bi-star';
    const color = skillCategoryColors[idx % skillCategoryColors.length];
    let tagsHtml = cat.items.map(item => {
      const isCore = ['Flutter', 'Dart', 'Kotlin'].includes(item.name);
      return `
        <div class="skill-chip ${isCore ? 'skill-chip-featured' : ''}">
          <i class="bi ${item.icon}"></i>
          <span>${item.name}${isCore ? ' <span class="core-badge">★</span>' : ''}</span>
        </div>
      `;
    }).join('');

    skillsHtml += `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(idx % 3) * 60}">
        <div class="skill-card elegant-card elegant-card-hover h-100 p-4">
          <div class="skill-card-header mb-3">
            <div class="skill-card-icon" style="background: ${color}15; color: ${color}; border-color: ${color}25;">
              <i class="bi ${icon}"></i>
            </div>
            <h5 class="skill-card-title">${cat.title}</h5>
          </div>
          <div class="skill-chips-wrap">${tagsHtml}</div>
        </div>
      </div>
    `;
  });
  document.getElementById('skillsContent').innerHTML = skillsHtml;

  // ═══════════════════════════════════════
  // EXPERIENCE & EDUCATION
  // ═══════════════════════════════════════
  let expHtml = '';
  data.experience.forEach((exp, idx) => {
    expHtml += `
      <div class="exp-item mb-5" data-aos="fade-up" data-aos-delay="${idx * 100}">
        <div class="exp-dot"></div>
        <div class="elegant-card elegant-card-hover p-4 exp-card">
          <div class="exp-header">
            <div class="exp-company-wrap">
              <div class="exp-company-icon">
                <i class="bi bi-building"></i>
              </div>
              <div>
                <h4 class="fw-bold mb-1 fs-5 text-main">${exp.role}</h4>
                <div class="text-accent fw-medium small">${exp.company}</div>
              </div>
            </div>
            <div class="exp-period-badge">${exp.period}</div>
          </div>
          <p class="text-secondary small mb-4 lh-base">${exp.description}</p>
          <ul class="list-unstyled mb-0 exp-highlight-list">
            ${exp.highlights.map(h => `<li><i class="bi bi-check2-circle"></i> ${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  });
  document.getElementById('experienceContent').innerHTML = expHtml;

  let eduHtml = '';
  data.education.forEach((edu, idx) => {
    eduHtml += `
      <div class="edu-card elegant-card p-4" data-aos="fade-up" data-aos-delay="${idx * 150}">
        <div class="d-flex align-items-center gap-3 mb-3">
          <div class="edu-icon"><i class="bi bi-mortarboard-fill"></i></div>
          <div class="edu-status-badge">${edu.status}</div>
        </div>
        <h5 class="fw-bold mb-1 fs-6">${edu.degree}</h5>
        <div class="text-secondary small mb-3">${edu.school}</div>
        <div class="text-accent fw-semibold small">${edu.period}</div>
      </div>
    `;
  });
  document.getElementById('educationContent').innerHTML = eduHtml;

  // ═══════════════════════════════════════
  // PROJECTS FILTER
  // ═══════════════════════════════════════
  const categories = ["all", ...new Set(data.projects.map(p => p.category))];
  const filterWrap = document.getElementById('projectFilters');
  if (filterWrap) filterWrap.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-pill ${cat === 'all' ? 'active' : ''}`;
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.filter = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cachedProjectsList = cat === 'all' ? data.projects : data.projects.filter(p => p.category === cat);
      currentProjectCount = 6;
      renderProjectsGrid();
    });
    if (filterWrap) filterWrap.appendChild(btn);
  });

  // Load more container
  const loadMoreContainer = document.createElement('div');
  loadMoreContainer.id = "loadMoreContainer";
  loadMoreContainer.className = "col-12 text-center mt-5 mb-2";
  document.getElementById('projectsGrid').parentNode.appendChild(loadMoreContainer);

  renderProjectsGrid();

  // ═══════════════════════════════════════
  // CONTACT
  // ═══════════════════════════════════════
  document.getElementById('contactContent').innerHTML = `
    <div class="col-lg-5 mb-5 mb-lg-0 z-1" data-aos="fade-right">
      <div class="badge-subtitle mb-3">Hire Me</div>
      <h2 class="section-title mb-4 lh-base text-main">Let's build something <span class="gradient-text">beautiful</span> together.</h2>
      <p class="text-secondary mb-5 fs-6 lh-lg">I'm currently available for freelance work or full-time roles. If you have a project that you want to get started, think you need my help with something, then get in touch.</p>
      
      <div class="d-flex flex-column gap-4">
        <div class="d-flex align-items-center gap-3">
          <div class="contact-info-icon"><i class="bi bi-envelope"></i></div>
          <div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing: 0.06em; font-size: 0.7rem;">Email Me</div>
            <div class="d-flex align-items-center gap-2">
              <a href="mailto:${data.profile.email}" class="text-main text-decoration-none fw-semibold fs-6">${data.profile.email}</a>
              <button type="button" class="btn btn-sm btn-icon border-0 p-1" id="copyEmailBtn" title="Copy email to clipboard" style="background: transparent; color: var(--accent); transition: transform 0.2s;"><i class="bi bi-copy" id="copyEmailIcon"></i></button>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <div class="contact-info-icon"><i class="bi bi-linkedin"></i></div>
          <div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing: 0.06em; font-size: 0.7rem;">LinkedIn</div>
            <a href="${data.profile.linkedin}" target="_blank" class="text-main text-decoration-none fw-semibold fs-6">linkedin.com/in/miftah-faridl</a>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <div class="contact-info-icon"><i class="bi bi-geo-alt"></i></div>
          <div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing: 0.06em; font-size: 0.7rem;">Location</div>
            <span class="text-main fw-semibold fs-6">${data.profile.location}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-6 offset-lg-1 z-1" data-aos="fade-left">
      <div class="elegant-card p-4 p-md-5">
        <form id="contactForm">
          <div class="row g-3">
            <div class="col-md-6 mb-3">
              <label class="form-label text-main fw-semibold small mb-2" for="contactName">Name</label>
              <input type="text" class="form-control modern-input text-main" id="contactName" placeholder="John Doe" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label text-main fw-semibold small mb-2" for="contactSubject">Subject</label>
              <input type="text" class="form-control modern-input text-main" id="contactSubject" placeholder="App Development" required>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label text-main fw-semibold small mb-2" for="contactMessage">Project Details</label>
            <textarea class="form-control modern-input text-main" id="contactMessage" rows="5" placeholder="Tell me about your idea..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100 py-3 rounded-3 fw-medium fs-6 d-flex justify-content-center align-items-center gap-2"><i class="bi bi-whatsapp fs-5"></i> Send Message via WhatsApp</button>
        </form>
      </div>
    </div>
  `;

  // Attach Copy Email handler
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(data.profile.email).then(() => {
        const icon = document.getElementById('copyEmailIcon');
        icon.className = 'bi bi-check-lg';
        icon.style.color = '#22c55e'; // Green checkmark
        copyBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
          icon.className = 'bi bi-copy';
          icon.style.color = '';
          copyBtn.style.transform = '';
        }, 2000);
      });
    });
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const subject = document.getElementById('contactSubject').value;
    const msg = document.getElementById('contactMessage').value;
    let phone = data.profile.phone.replace(/[^a-zA-Z0-9]/g, '');
    if (phone.startsWith('0')) phone = '62' + phone.substring(1);
    const waText = `Hi Miftah, I am ${name}. Subject: ${subject}. \n${msg}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    this.reset();
  });

  // Footer Socials
  const footerSocials = document.getElementById('footerSocials');
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="mailto:${data.profile.email}" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="Email"><i class="bi bi-envelope"></i></a>
      <a href="${data.profile.linkedin}" target="_blank" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
      <a href="https://wa.me/${data.profile.phone.replace(/[^a-zA-Z0-9]/g, '')}" target="_blank" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
    `;
  }

  // Trigger scrollspy after render
  updateActiveNav();
  initCardGlows();
}

// ═══════════════════════════════════════
// PROJECTS GRID
// ═══════════════════════════════════════
function renderProjectsGrid() {
  const grid = document.getElementById('projectsGrid');
  const loadMoreBtnContainer = document.getElementById('loadMoreContainer');
  grid.innerHTML = '';

  if (cachedProjectsList.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center text-muted py-5 mt-3">No projects found.</div>';
    loadMoreBtnContainer.innerHTML = '';
    return;
  }

  const toShow = cachedProjectsList.slice(0, currentProjectCount);

  toShow.forEach((p, index) => {
    const glIdx = allGlobalProjects.findIndex(ap => ap.title === p.title);
    const card = document.createElement('div');
    card.className = "col-md-6 col-lg-4";
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${(index % 3) * 60}`);

    let techsHtml = p.tech.slice(0, 3).map(t => `<span class="tech-pill">${t}</span>`).join('');
    if (p.tech.length > 3) techsHtml += `<span class="tech-pill">+${p.tech.length - 3}</span>`;

    card.innerHTML = `
      <div class="elegant-card elegant-card-hover project-card h-100" style="cursor: pointer;">
        <div class="img-wrap">
          <img src="${p.thumb}" alt="${p.title}" loading="lazy">
        </div>
        <div class="p-4 d-flex flex-column flex-grow-1">
          <div class="project-category mb-2">${p.category}</div>
          <h4 class="fw-bold mb-3 fs-5">${p.title}</h4>
          <p class="text-secondary small mb-4 lh-base" style="display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; text-overflow:ellipsis; overflow:hidden;">${p.description}</p>
          <div class="mt-auto d-flex flex-wrap gap-2">${techsHtml}</div>
        </div>
      </div>
    `;

    card.querySelector('.project-card').addEventListener('click', () => {
      const proj = allGlobalProjects[glIdx];
      document.getElementById('projectModalLabel').textContent = proj.title;
      document.getElementById('projectModalImg').src = proj.thumb;
      document.getElementById('projectModalDesc').textContent = proj.description;
      document.getElementById('projectModalTech').innerHTML = proj.tech.map(t => `<span class="tech-pill border-subtle px-3 py-2 fs-6 fw-medium">${t}</span>`).join('');

      // Populate case-study elements
      const roleBadge = document.getElementById('projectModalRole');
      const caseStudyContainer = document.getElementById('projectCaseStudyContainer');
      const challengeEl = document.getElementById('projectModalChallenge');
      const solutionEl = document.getElementById('projectModalSolution');
      const impactEl = document.getElementById('projectModalImpact');

      if (proj.role) {
        roleBadge.textContent = proj.role;
        roleBadge.style.display = 'inline-block';
        challengeEl.textContent = proj.challenge;
        solutionEl.textContent = proj.solution;
        impactEl.textContent = proj.impact;
        caseStudyContainer.style.display = 'flex';
      } else {
        roleBadge.style.display = 'none';
        caseStudyContainer.style.display = 'none';
      }

      const btnDemo = document.getElementById('projectModalDemo');
      const btnGit = document.getElementById('projectModalGithub');

      if (!proj.links || proj.links.demo === '#') btnDemo.style.display = 'none';
      else { btnDemo.style.display = 'inline-flex'; btnDemo.href = proj.links.demo; }

      if (!proj.links || proj.links.github === '#') btnGit.style.display = 'none';
      else { btnGit.style.display = 'inline-flex'; btnGit.href = proj.links.github; }

      // Private/restricted system badge logic
      const securityBadge = document.getElementById('projectModalSecurityBadge');
      if (securityBadge) {
        if (!proj.links || (proj.links.demo === '#' && proj.links.github === '#')) {
          securityBadge.style.display = 'flex';
        } else {
          securityBadge.style.display = 'none';
        }
      }

      let projModal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
      if (!projModal) projModal = new bootstrap.Modal(document.getElementById('projectModal'));
      projModal.show();
    });

    grid.appendChild(card);
  });

  // Load More
  if (cachedProjectsList.length > currentProjectCount) {
    loadMoreBtnContainer.innerHTML = `
      <button class="btn btn-outline-secondary rounded-pill px-5 py-2 mt-2 fw-medium d-inline-flex align-items-center gap-2">
        Load More Works <i class="bi bi-arrow-down"></i>
      </button>
    `;
    loadMoreBtnContainer.querySelector('button').addEventListener('click', () => {
      currentProjectCount += 6;
      renderProjectsGrid();
    });
  } else {
    loadMoreBtnContainer.innerHTML = '';
  }
  initCardGlows();
}

// Optimized mouse move handler with bounding rect cache to prevent layout thrashing
function initCardGlows() {
  document.querySelectorAll('.elegant-card-hover').forEach(card => {
    if (card.dataset.glowInitialized) return;
    card.dataset.glowInitialized = "true";

    let rect = null;

    // Cache the bounding rect on mouse enter, avoiding repeated client calls on mouse move
    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', e => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      rect = null;
    });
  });
}

window.addEventListener('DOMContentLoaded', renderPortfolio);
