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
  function toggleSection(id) {
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
     