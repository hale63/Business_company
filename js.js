/*// Mobile menu open/close
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileDivisionBtn = document.getElementById("mobile-division-btn");
const mobileDivisionMenu = document.getElementById("mobile-division-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Toggle divisions submenu on mobile
mobileDivisionBtn.addEventListener("click", () => {
  mobileDivisionMenu.classList.toggle("hidden");
});
const videoContainer = document.getElementById("video-container");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Shrink and lift video as you scroll down
    const scale = Math.max(0.75, 1 - scrollY / 1200);
    const translateY = Math.min(0, -scrollY / 5); // slight upward motion
    videoContainer.style.transform = `translate(-50%, ${translateY}px) scale(${scale})`;
  });*/
    // Mobile menu functionality
  /*  const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDivisionBtn = document.getElementById('mobile-division-btn');
    const mobileDivisionMenu = document.getElementById('mobile-division-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    mobileDivisionBtn.addEventListener('click', () => {
      mobileDivisionMenu.classList.toggle('hidden');
    });

    // Video shrink effect on scroll
    const videoWrapper = document.getElementById('video-wrapper');
    
    window.addEventListener('scroll', () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;
      
      // Define the scroll threshold for the effect
      const threshold = 100;
      
      // Apply the shrink effect when scrolled past the threshold
      if (scrollPosition > threshold) {
        videoWrapper.classList.add('video-shrink');
      } else {
        videoWrapper.classList.remove('video-shrink');
      }
    });

    /**********division part********/
  /*function toggleSection(id) {
    const sections = document.querySelectorAll('[id="auto"], [id="realestate"], [id="transport"], [id="logistics"]');
    sections.forEach(sec => {
      if (sec.id !== id) {
        sec.style.maxHeight = null;
        sec.style.opacity = 0;
      }
    });
    const section = document.getElementById(id);
    if (section.style.maxHeight) {
      section.style.maxHeight = null;
      section.style.opacity = 0;
    } else {
      section.style.maxHeight = section.scrollHeight + "px";
      section.style.opacity = 1;
    }
  }


   AOS.init({
    duration: 1000, // animation duration
    once: true, // animate only once
    offset: 100 // distance before animation starts
  });
     */
       // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Mobile menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileDivisionBtn = document.getElementById('mobile-division-btn');
    const mobileDivisionMenu = document.getElementById('mobile-division-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    mobileDivisionBtn.addEventListener('click', () => {
      mobileDivisionMenu.classList.toggle('hidden');
    });

    // Toggle sections for divisions
    function toggleSection(sectionId) {
      const section = document.getElementById(sectionId);
      const isOpen = section.classList.contains('max-h-0');
      
      // Close all sections first
      document.querySelectorAll('[id="auto"], [id="realestate"], [id="transport"], [id="logistics"]').forEach(el => {
        el.classList.add('max-h-0', 'opacity-0');
        el.classList.remove('max-h-screen', 'opacity-100');
      });
      
      // Rotate all arrows back to default
      document.querySelectorAll('button svg').forEach(svg => {
        svg.style.transform = 'rotate(0deg)';
      });
      
      // If the clicked section was closed, open it
      if (isOpen) {
        section.classList.remove('max-h-0', 'opacity-0');
        section.classList.add('max-h-screen', 'opacity-100');
        
        // Rotate the arrow for the opened section
        event.currentTarget.querySelector('svg').style.transform = 'rotate(180deg)';
      }
    }

    // Video shrink effect on scroll
    window.addEventListener('scroll', () => {
      const videoWrapper = document.getElementById('video-wrapper');
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > 100) {
        videoWrapper.classList.add('video-shrink');
      } else {
        videoWrapper.classList.remove('video-shrink');
      }
    });

    /*AT GALANCE*/
    const counters = document.querySelectorAll('[data-target]');
    const speed = 50; // smaller = faster

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + '+';
        }
      };

      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
      // Toggle sections for divisions with arrow rotation
  function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = event.currentTarget;
    const arrow = button.querySelector('svg');
    const isOpen = section.classList.contains('max-h-0');
    
    // Close all sections first
    document.querySelectorAll('[id="auto"], [id="realestate"], [id="transport"], [id="logistics"]').forEach(el => {
      el.classList.add('max-h-0', 'opacity-0');
      el.classList.remove('max-h-screen', 'opacity-100');
    });
    
    // Reset all arrows
    document.querySelectorAll('button svg').forEach(svg => {
      svg.style.transform = 'rotate(0deg)';
    });
    
    // If the clicked section was closed, open it
    if (isOpen) {
      section.classList.remove('max-h-0', 'opacity-0');
      section.classList.add('max-h-screen', 'opacity-100');
      
      // Rotate the arrow for the opened section
      arrow.style.transform = 'rotate(180deg)';
    }
  }
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('max-h-0');
    section.classList.toggle('opacity-0');
    section.classList.toggle('max-h-[1000px]');
    section.classList.toggle('opacity-100');
  }
  