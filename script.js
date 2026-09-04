function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = '✓ ' + message;
  toast.classList.add('on');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('on');
  }, 2800);
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('.mobile-menu-toggle');

  if (!menu || !button) return;

  const isOpen = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
}

function updateProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = width + '%';
}

function setupStatusDropdown() {
  const switcher = document.querySelector('.status-switcher');
  const trigger = document.querySelector('.status-trigger');

  if (!switcher || !trigger) return;

  trigger.addEventListener('click', () => {
    const isLearning = switcher.classList.toggle('learning');
    const text = document.querySelector('.status-text');
    if (text) text.textContent = isLearning ? 'Currently learning' : 'Open to Work';
    trigger.setAttribute('aria-checked', String(isLearning));
  });
}

function setupSkillsLightSwitch() {
  const switcher = document.getElementById('skills-light-switch');
  const skillsSection = document.getElementById('skills');
  if (!switcher || !skillsSection) return;

  switcher.addEventListener('click', () => {
    const isLit = skillsSection.classList.toggle('skills-lit');
    switcher.setAttribute('aria-checked', String(isLit));
  });
}

function setupSolarSkills() {
  const skillButtons = document.querySelectorAll('.orbit-skill');
  const core = document.querySelector('.solar-core');

  skillButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (target) {
        const skillCard = document.querySelector(target);
        if (!skillCard) return;

        document.querySelectorAll('.skill-card').forEach((card) => {
          card.classList.remove('skill-highlight');
        });
        skillCard.classList.add('skill-highlight');
        skillCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearTimeout(setupSolarSkills.highlightTimeout);
        setupSolarSkills.highlightTimeout = setTimeout(() => {
          skillCard.classList.remove('skill-highlight');
        }, 1800);
      }
    });
  });

  if (core) {
    core.addEventListener('click', () => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function setupNavState() {
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const setActive = () => {
    const offset = window.scrollY + 120;
    let activeId = sections[0]?.id || 'hero';

    sections.forEach((section) => {
      if (offset >= section.offsetTop) activeId = section.id;
    });

    links.forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('active', isActive);
    });
  };

  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
}

function setupCopyLinks() {
  document.querySelectorAll('.copy-target, .social-button[data-copy]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const value = link.dataset.copy || link.textContent.trim();
      if (link.tagName === 'A' && link.href && link.href.startsWith('mailto:')) {
        return;
      }
      event.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(value)
          .then(() => showToast('Copied to clipboard'))
          .catch(() => showToast('Copy unavailable'));
      } else {
        showToast('Copy unavailable');
      }
    });
  });
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('cfn')?.value.trim();
  const email = document.getElementById('cfe')?.value.trim();
  const message = document.getElementById('cfm')?.value.trim();

  if (!name || !email || !message) {
    showToast('Please fill all fields');
    return;
  }

  const subject = encodeURIComponent('Portfolio enquiry from ' + name);
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n\n' +
    'Message:\n' + message
  );

  window.location.href = 'mailto:Keerthivarman780@gmail.com?subject=' + subject + '&body=' + body;
  showToast('Message prepared');

  event.target.reset();
}

function attachEvents() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.remove('open');
      const button = document.querySelector('.mobile-menu-toggle');
      if (button) button.setAttribute('aria-expanded', 'false');
    });
  });

  const form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', handleContactSubmit);

  setupStatusDropdown();
  setupSkillsLightSwitch();
  setupSolarSkills();
  setupCopyLinks();

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('load', () => {
  updateProgress();
  setupNavState();
  attachEvents();
});
