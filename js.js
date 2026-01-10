// ===== Initialize AOS =====
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
}

// ===== Mobile Menu Functionality =====
class MobileMenu {
  constructor() {
    this.menuBtn = document.getElementById('menu-btn');
    this.closeBtn = document.getElementById('close-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.mobileDivisionBtn = document.getElementById('mobile-division-btn');
    this.mobileDivisionMenu = document.getElementById('mobile-division-menu');
    
    this.init();
  }

  init() {
    if (!this.mobileMenu) {
      console.error('Mobile menu element not found!');
      return;
    }

    // Menu toggle
    if (this.menuBtn) {
      this.menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openMenu();
      });
    }

    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeMenu();
      });
    }

    // Division dropdown
    if (this.mobileDivisionBtn && this.mobileDivisionMenu) {
      this.mobileDivisionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleDivisionMenu();
      });
    }

    // Close menu when clicking outside (only on mobile)
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 768 && 
          !this.mobileMenu.classList.contains('hidden') && 
          !this.mobileMenu.contains(e.target) && 
          e.target !== this.menuBtn) {
        this.closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.mobileMenu.classList.contains('hidden')) {
        this.closeMenu();
      }
    });
  }

  openMenu() {
    console.log('Opening mobile menu');
    this.mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add a small delay to ensure the class is applied before any transitions
    setTimeout(() => {
      this.mobileMenu.style.opacity = '1';
      this.mobileMenu.style.transform = 'translateX(0)';
    }, 10);
  }

  closeMenu() {
    console.log('Closing mobile menu');
    this.mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Close division menu as well
    if (this.mobileDivisionMenu) {
      this.mobileDivisionMenu.classList.add('hidden');
    }
  }

  toggleDivisionMenu() {
    if (this.mobileDivisionMenu) {
      this.mobileDivisionMenu.classList.toggle('hidden');
    }
  }
}

// ===== Video Shrink Effect =====
class VideoShrink {
  constructor() {
    this.videoWrapper = document.getElementById('video-wrapper');
    if (!this.videoWrapper) return;
    
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      this.videoWrapper.classList.toggle('video-shrink', scrollPosition > 100);
    });
  }
}

// ===== Counter Animation =====
class CounterAnimation {
  constructor() {
    this.counters = document.querySelectorAll('[data-target]');
    this.speed = 50;
    
    if (this.counters.length > 0) {
      this.init();
    }
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => {
      observer.observe(counter);
    });
  }

  animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace('+', '').trim();
    
    const updateCount = () => {
      const currentCount = +counter.innerText.replace('+', '').trim();
      const inc = Math.ceil(target / this.speed);
      
      if (currentCount < target) {
        counter.innerText = Math.min(currentCount + inc, target) + '+';
        setTimeout(updateCount, 20);
      }
    };

    updateCount();
  }
}

// ===== Initialize Everything =====
if (document.readyState === 'complete') {
  new MobileMenu();
}

// Make sure the mobile menu works even if DOM is already loaded
if (document.readyState === 'complete') {
  console.log('Document already ready, initializing mobile menu...');
  new MobileMenu();
}
if (!window.mobileMenuInitialized) {
  document.addEventListener('DOMContentLoaded', function() {
    new MobileMenu();
    new VideoShrink();
    new CounterAnimation();
    window.mobileMenuInitialized = true;
  });
}

// ===== Toggle Sections (Accordion for Divisions) =====
function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  const button = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);
  const icon = button?.querySelector('svg');

  if (!section) return;

  // Close all other sections
  document.querySelectorAll('.space-y-20 > div > div[id]').forEach(div => {
    if (div.id !== sectionId) {
      div.classList.remove('max-h-[1000px]', 'opacity-100');
      div.classList.add('max-h-0', 'opacity-0');
      const otherIcon = div.parentElement.querySelector('svg');
      otherIcon?.classList.remove('rotate-180');
    }
  });

  // Toggle the clicked section
  const isOpen = section.classList.contains('max-h-[1000px]');
  if (isOpen) {
    section.classList.remove('max-h-[1000px]', 'opacity-100');
    section.classList.add('max-h-0', 'opacity-0');
    icon?.classList.remove('rotate-180');
  } else {
    section.classList.remove('max-h-0', 'opacity-0');
    section.classList.add('max-h-[1000px]', 'opacity-100');
    icon?.classList.add('rotate-180');
  }
}

// Make it global so HTML onclick can access it
window.toggleSection = toggleSection;

// ===== Desktop Language Dropdown (Improved) =====
(() => {
  const btn = document.getElementById('desktop-language-btn');
  const menu = document.getElementById('desktop-language-menu');

  if (!btn || !menu) return;

  const arrow = btn.querySelector('svg:last-child');

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
    arrow?.classList.toggle('rotate-180');
  });

  // Close when clicking outside
  document.addEventListener('click', () => {
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      arrow?.classList.remove('rotate-180');
    }
  });

  // Close with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      arrow?.classList.remove('rotate-180');
    }
  });
})();



// ===== Mobile Language Dropdown (FIXED) =====
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("mobile-language-btn");
  const langMenu = document.getElementById("mobile-language-menu");

  if (!langBtn || !langMenu) return;

  // Open/Close dropdown
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();     // IMPORTANT FIX
    langMenu.classList.toggle("hidden");
  });

  // Handle selecting language
  langMenu.querySelectorAll("button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();   // IMPORTANT FIX
      
      const selectedLang = btn.getAttribute("data-lang");

      // Update the button label
      langBtn.querySelector("span").textContent =
        `Language (${selectedLang.toUpperCase()})`;

      // Close dropdown
      langMenu.classList.add("hidden");

      // Call your translation system
      if (typeof changeLanguage === "function") {
        changeLanguage(selectedLang);  // THIS WAS NOT FIRING BEFORE
      }
    });
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    langMenu.classList.add("hidden");
  });
});




