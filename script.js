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

  // Scroll progress bar
  const progressEl = document.getElementById('scrollProgress');
  if (progressEl) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressEl.style.width = pct + '%';
  }

  // Scroll-to-top button visibility
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  // Throttled scrollspy calculations (only runs once every 100ms)
  if (!scrollThrottleTimeout) {
    scrollThrottleTimeout = setTimeout(() => {
      updateActiveNav();
      scrollThrottleTimeout = null;
    }, 100);
  }
}, { passive: true });

// Scroll to Top click handler
const scrollTopBtnEl = document.getElementById('scrollTopBtn');
if (scrollTopBtnEl) {
  scrollTopBtnEl.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

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

// Language System
function setLang(lang) {
  localStorage.setItem('lang', lang);
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang.toUpperCase();
  applyI18n();
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) {
      if (val.includes('<')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
  // Also update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });
}

// Init language dropdown
const langToggleBtn = document.getElementById('langToggle');
const langDrop = document.getElementById('langDropdown');
if (langToggleBtn && langDrop) {
  const savedLang = localStorage.getItem('lang') || 'en';
  const label = document.getElementById('langLabel');
  if (label) label.textContent = savedLang.toUpperCase();

  langToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDrop.classList.toggle('show');
  });

  langDrop.querySelectorAll('.lang-option').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = item.getAttribute('data-lang');
      if (lang === getCurrentLang()) {
        langDrop.classList.remove('show');
        return;
      }
      setLang(lang);
      renderPortfolio();
      langDrop.classList.remove('show');
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
  });
}

// Global state for projects
let cachedProjectsList = [];
let currentProjectCount = 6;
let allGlobalProjects = [];
const isWorkPage = window.location.pathname.includes('work');

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
  const footerTextEl = document.getElementById('footerText');
  if (footerTextEl) footerTextEl.textContent = data.profile.name;

  // ═══════════════════════════════════════
  // HERO (homepage only)
  // ═══════════════════════════════════════
  const heroEl = document.getElementById('heroContent');
  if (heroEl) {
    heroEl.innerHTML = `
    <div class="col-lg-7 mb-5 mb-lg-0 order-2 order-lg-1" data-aos="fade-right">
      <p class="hero-label mb-3">${t('hero_label')}</p>
      <h1 class="hero-heading mb-4">${data.profile.name}</h1>
      <p class="hero-subtitle mb-4">${data.profile.hero_subtitle}</p>
      
      <div class="d-flex flex-wrap gap-3 mb-5">
        <a href="#projects" class="btn btn-primary px-4 py-3 rounded-pill fw-medium shadow-sm d-flex align-items-center gap-2"><i class="bi bi-briefcase"></i> ${t('hero_cta_work')}</a>
        <a href="#contact" class="btn btn-outline-primary px-4 py-3 rounded-pill d-flex align-items-center gap-2"><i class="bi bi-envelope"></i> ${t('nav_contact')}</a>
        <a href="${data.profile.cv_link}" target="_blank" class="btn btn-outline-primary px-4 py-3 rounded-pill d-flex align-items-center gap-2"><i class="bi bi-download"></i> ${t('hero_cta_resume')}</a>
      </div>
      
      <div class="hero-social-bar">
        <span class="hero-social-label">${t('hero_channels')}</span>
        <div class="hero-social-divider"></div>
        <div class="d-flex gap-3">
          <a href="${data.profile.github}" target="_blank" class="social-icon text-decoration-none" aria-label="GitHub"><i class="bi bi-github"></i></a>
          <a href="${data.profile.linkedin}" target="_blank" class="social-icon text-decoration-none" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="mailto:${data.profile.email}" class="social-icon text-decoration-none" aria-label="Email"><i class="bi bi-envelope"></i></a>
          <a href="https://wa.me/${data.profile.phone.replace(/[^a-zA-Z0-9]/g, '')}" target="_blank" class="social-icon text-decoration-none" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
        </div>
      </div>
    </div>
    <div class="col-lg-5 order-1 order-lg-2 text-center" data-aos="fade-left" data-aos-delay="100">
      <div class="profile-wrap mx-auto">
        <img src="${data.profile.photo}" alt="${data.profile.name}" class="profile-img">
      </div>
    </div>
  `;
  } // end hero

  // ═══════════════════════════════════════
  // ABOUT (homepage only)
  // ═══════════════════════════════════════
  const aboutEl = document.getElementById('aboutContent');
  if (aboutEl) {
    aboutEl.className = 'row g-4';
    aboutEl.innerHTML = `
    <div class="col-lg-7" data-aos="fade-up">
      <div class="elegant-card h-100 p-4 p-lg-5">
        <h4 class="fw-bold mb-4">${t('section_about')}</h4>
        <p class="text-secondary lh-lg mb-4">${t('about_desc')}</p>
        <div class="d-flex flex-wrap gap-5 pt-2">
          <div class="text-center">
            <div class="stat-counter gradient-text" data-counter="${data.about.stats[0].number}">0</div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing:0.05em;font-size:0.65rem;">${t('stat_years')}</div>
          </div>
          <div class="text-center">
            <div class="stat-counter gradient-text" data-counter="${data.about.stats[1].number}">0</div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing:0.05em;font-size:0.65rem;">${t('stat_projects')}</div>
          </div>
          <div class="text-center">
            <div class="stat-counter gradient-text" data-counter="${data.about.stats[2].number}">0</div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing:0.05em;font-size:0.65rem;">${t('stat_tech')}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5" data-aos="fade-up" data-aos-delay="80">
      <div class="elegant-card h-100 p-4 p-lg-5">
        <h4 class="fw-bold mb-3">${t('philosophy_title')}</h4>
        <p class="text-secondary small mb-4">${t('philosophy_desc')}</p>
        <ul class="list-unstyled fw-medium text-secondary m-0 small d-flex flex-column gap-3">
          <li class="d-flex align-items-start gap-2"><span class="text-accent mt-1">→</span><span class="lh-sm">${t('philosophy_1')}</span></li>
          <li class="d-flex align-items-start gap-2"><span class="text-accent mt-1">→</span><span class="lh-sm">${t('philosophy_2')}</span></li>
          <li class="d-flex align-items-start gap-2"><span class="text-accent mt-1">→</span><span class="lh-sm">${t('philosophy_3')}</span></li>
        </ul>
      </div>
    </div>
  `;
  } // end about

  // ═══════════════════════════════════════
  // SKILLS (homepage only)
  // ═══════════════════════════════════════
  const skillsEl = document.getElementById('skillsContent');
  if (skillsEl) {
    let skillsHtml = '';
    data.skills_categories.forEach((cat, idx) => {
      let tagsHtml = cat.items.map(item => `
      <span class="skill-chip">${item.name}</span>
    `).join('');

      skillsHtml += `
      <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(idx % 3) * 60}">
        <div class="elegant-card h-100 p-4">
          <h6 class="fw-bold text-muted small text-uppercase mb-3" style="letter-spacing: 0.05em; font-size: 0.72rem;">${cat.title}</h6>
          <div class="d-flex flex-wrap gap-2">${tagsHtml}</div>
        </div>
      </div>
    `;
    });
    skillsEl.innerHTML = skillsHtml;
  } // end skills

  // ═══════════════════════════════════════
  // EXPERIENCE & EDUCATION (homepage only)
  // ═══════════════════════════════════════
  const expEl = document.getElementById('experienceContent');
  if (expEl) {
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
    expEl.innerHTML = expHtml;
  }

  const eduEl = document.getElementById('educationContent');
  if (eduEl) {
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
    eduEl.innerHTML = eduHtml;
  } // end education

  // Filter pills — work on both pages
  const categories = ["all", ...new Set(data.projects.map(p => p.category))];
  const filterWrap = document.getElementById('projectFilters');
  if (filterWrap) {
    filterWrap.innerHTML = '';
    filterWrap.style.display = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-pill ${cat === 'all' ? 'active' : ''}`;
      btn.textContent = cat === 'all' ? t('filter_all') : cat;
      btn.dataset.filter = cat;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (cat === 'all') {
          cachedProjectsList = isWorkPage ? data.projects : data.projects.filter(p => p.featured);
        } else {
          cachedProjectsList = data.projects.filter(p => p.category === cat);
        }
        currentProjectCount = 6;
        renderProjectsGrid();
      });
      filterWrap.appendChild(btn);
    });
  }

  if (isWorkPage) {
    cachedProjectsList = data.projects;
    // Load more container
    const loadMoreContainer = document.createElement('div');
    loadMoreContainer.id = "loadMoreContainer";
    loadMoreContainer.className = "col-12 text-center mt-5 mb-2";
    document.getElementById('projectsGrid').parentNode.appendChild(loadMoreContainer);
  } else {
    // Homepage: start with featured projects
    cachedProjectsList = data.projects.filter(p => p.featured);
    currentProjectCount = 6;
  }

  renderProjectsGrid();

  // ═══════════════════════════════════════
  // CONTACT (homepage only)
  // ═══════════════════════════════════════
  const contactEl = document.getElementById('contactContent');
  if (contactEl) {
    contactEl.innerHTML = `
    <div class="col-lg-5 mb-5 mb-lg-0 z-1" data-aos="fade-right">
      <div class="badge-subtitle mb-3" data-i18n="contact_hire">${t('contact_hire')}</div>
      <h2 class="section-title mb-4 lh-base text-main" data-i18n="contact_heading">${t('contact_heading')}</h2>
      <p class="text-secondary mb-5 fs-6 lh-lg" data-i18n="contact_desc">${t('contact_desc')}</p>
      
      <div class="d-flex flex-column gap-4">
        <div class="d-flex align-items-center gap-3">
          <div class="contact-info-icon"><i class="bi bi-envelope"></i></div>
          <div>
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing: 0.06em; font-size: 0.7rem;" data-i18n="contact_email_label">${t('contact_email_label')}</div>
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
            <div class="text-muted small fw-semibold text-uppercase" style="letter-spacing: 0.06em; font-size: 0.7rem;" data-i18n="contact_location_label">${t('contact_location_label')}</div>
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
              <label class="form-label text-main fw-semibold small mb-2" for="contactName" data-i18n="contact_name">${t('contact_name')}</label>
              <input type="text" class="form-control modern-input text-main" id="contactName" placeholder="${t('contact_name_placeholder')}" data-i18n-placeholder="contact_name_placeholder" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label text-main fw-semibold small mb-2" for="contactSubject" data-i18n="contact_subject">${t('contact_subject')}</label>
              <input type="text" class="form-control modern-input text-main" id="contactSubject" placeholder="${t('contact_subject_placeholder')}" data-i18n-placeholder="contact_subject_placeholder" required>
            </div>
          </div>
          <div class="mb-4">
            <label class="form-label text-main fw-semibold small mb-2" for="contactMessage" data-i18n="contact_details">${t('contact_details')}</label>
            <textarea class="form-control modern-input text-main" id="contactMessage" rows="5" placeholder="${t('contact_details_placeholder')}" data-i18n-placeholder="contact_details_placeholder" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100 py-3 rounded-3 fw-medium fs-6 d-flex justify-content-center align-items-center gap-2"><i class="bi bi-whatsapp fs-5"></i> <span data-i18n="contact_send">${t('contact_send')}</span></button>
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
  } // end contact

  // Footer Socials
  const footerSocials = document.getElementById('footerSocials');
  if (footerSocials) {
    footerSocials.innerHTML = `
      <a href="${data.profile.github}" target="_blank" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="GitHub"><i class="bi bi-github"></i></a>
      <a href="mailto:${data.profile.email}" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="Email"><i class="bi bi-envelope"></i></a>
      <a href="${data.profile.linkedin}" target="_blank" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
      <a href="https://wa.me/${data.profile.phone.replace(/[^a-zA-Z0-9]/g, '')}" target="_blank" class="social-icon text-decoration-none" style="width: 38px; height: 38px; font-size: 1rem; border-radius: 10px;" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
    `;
  }

  // Trigger scrollspy after render
  updateActiveNav();
}

// ═══════════════════════════════════════
// PROJECTS GRID
// ═══════════════════════════════════════
function renderProjectsGrid(forceRefresh = true) {
  const grid = document.getElementById('projectsGrid');
  const loadMoreBtnContainer = document.getElementById('loadMoreContainer');

  // Only clear grid on initial load or filter change, not on Load More
  if (forceRefresh) {
    grid.innerHTML = '';
  }

  if (cachedProjectsList.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center text-muted py-5 mt-3">No projects found.</div>';
    if (loadMoreBtnContainer) loadMoreBtnContainer.innerHTML = '';
    return;
  }

  // Determine which cards need rendering
  const alreadyRendered = forceRefresh ? 0 : grid.querySelectorAll('.col-md-6').length;
  const toShow = cachedProjectsList.slice(alreadyRendered, currentProjectCount);

  toShow.forEach((p, index) => {
    const glIdx = allGlobalProjects.findIndex(ap => ap.title === p.title);
    const card = document.createElement('div');
    card.className = "col-md-6 col-lg-4";
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', `${(index % 3) * 60}`);

    let techsHtml = p.tech.slice(0, 3).map(tech => `<span class="tech-pill">${tech}</span>`).join('');
    if (p.tech.length > 3) techsHtml += `<span class="tech-pill">+${p.tech.length - 3}</span>`;

    const companyText = t(p.company);
    const isPersonal = p.company === 'personal_project';
    const companyIcon = isPersonal ? 'bi-person' : 'bi-building';

    card.innerHTML = `
      <div class="elegant-card elegant-card-hover project-card h-100" style="cursor: pointer;">
        <div class="img-wrap">
          <span class="img-tag">${p.category}</span>
          <img src="${p.thumb}" alt="${p.title}" loading="lazy">
        </div>
        <div class="p-4 d-flex flex-column flex-grow-1">
          <div class="project-arrow"><i class="bi bi-arrow-up-right"></i></div>
          <h4 class="fw-bold mb-1 fs-5">${p.title}</h4>
          <div class="project-company text-accent small mb-3 fw-medium d-flex align-items-center gap-1">
            <i class="bi ${companyIcon}"></i> <span>${companyText}</span>
          </div>
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
      document.getElementById('projectModalTech').innerHTML = proj.tech.map(tech => `<span class="tech-pill border-subtle px-3 py-2 fs-6 fw-medium">${tech}</span>`).join('');

      // Populate case-study elements
      const roleBadge = document.getElementById('projectModalRole');
      const caseStudyContainer = document.getElementById('projectCaseStudyContainer');
      const challengeEl = document.getElementById('projectModalChallenge');
      const solutionEl = document.getElementById('projectModalSolution');
      const impactEl = document.getElementById('projectModalImpact');

      if (proj.role) {
        const companyText = t(proj.company);
        const separator = proj.company === 'personal_project' ? ' — ' : ' @ ';
        roleBadge.textContent = `${proj.role}${separator}${companyText}`;
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

  // Re-init AOS for newly appended cards
  if (!forceRefresh && typeof AOS !== 'undefined') {
    AOS.refresh();
  }

  // Load More / View All
  if (isWorkPage) {
    if (cachedProjectsList.length > currentProjectCount) {
      loadMoreBtnContainer.innerHTML = `
        <button class="btn btn-outline-secondary rounded-pill px-5 py-2 mt-2 fw-medium d-inline-flex align-items-center gap-2">
          ${t('btn_load_more')} <i class="bi bi-arrow-down"></i>
        </button>
      `;
      loadMoreBtnContainer.querySelector('button').addEventListener('click', () => {
        currentProjectCount += 6;
        renderProjectsGrid(false); // append-only, no refresh
      });
    } else {
      loadMoreBtnContainer.innerHTML = '';
    }
  } else {
    // Homepage: show "View All Work" link
    const viewAllContainer = document.getElementById('viewAllContainer');
    if (viewAllContainer) {
      viewAllContainer.innerHTML = `
        <a href="work.html" class="btn btn-outline-secondary rounded-pill px-5 py-3 fw-medium d-inline-flex align-items-center gap-2">
          ${t('btn_view_all')} <i class="bi bi-arrow-right"></i>
        </a>
      `;
    }
  }
}

// ═══════════════════════════════════════
// ANIMATED COUNTERS
// ═══════════════════════════════════════
function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.getAttribute('data-counter');
        const suffix = raw.replace(/[0-9]/g, '');
        const target = parseInt(raw);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1200;
        const step = Math.max(1, Math.floor(target / (duration / 16)));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + suffix;
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

window.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  applyI18n();
  animateCounters();
});
