const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('active');
    }
  });
});
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// Typing delay animation for header message
function typeWriter() {
  const msg = "Hey guys welcome to my portfolio !!!";
  const welcomeEl = document.querySelector('.welcome-msg');
  welcomeEl.textContent = ''; // Clear initial text
  welcomeEl.style.opacity = '1';

  let i = 0;
  function type() {
    if (i < msg.length) {
      welcomeEl.textContent += msg.charAt(i);
      i++;
      setTimeout(type, 100); // 100ms delay per word/char
    }
  }
  type();
}

// Page load pe start kar
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500); // 0.5s pehle start
});
// Add to script.js - name load pe section color change
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  const heroName = document.querySelector('.hero-name');
  
  heroName.addEventListener('animationend', () => {
    hero.classList.add('loaded'); // Pura section blue ho jayega!
  });
});
const hero = document.querySelector('.hero');
const heroName = document.querySelector('.hero-name');

heroName.addEventListener('animationend', () => {
  heroName.classList.add('loaded');
  hero.classList.add('loaded');
});
// About section load effect
const about = document.querySelector('.about');
const aboutTitle = document.querySelector('.about-title');

aboutTitle.addEventListener('animationend', () => {
  about.classList.add('loaded');
});
// About cards slide up on scroll
function animateAboutCards() {
  const cards = document.querySelectorAll('.info-card');
  const trigger = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const delay = card.dataset.delay || 0;
    
    if (cardTop < trigger) {
      setTimeout(() => {
        card.classList.add('animate');
      }, delay * 1000);
    }
  });
}

window.addEventListener('scroll', animateAboutCards);

// About section - Clean & Simple
const aboutSection = document.querySelector('.about');
const aboutCards = document.querySelectorAll('.info-card');

aboutCards.forEach((card, index) => {
  // Har card scroll pe slide up
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 200); // Staggered 200ms
      }
    });
  });
  
  observer.observe(card);
  
  // Background change jab sab cards animate ho jaye
  card.addEventListener('transitionend', () => {
    if (!aboutSection.classList.contains('loaded')) {
      aboutSection.classList.add('loaded');
    }
  });
});

// About section animations - SAFE version
function checkAboutAnimations() {
  const aboutTitle = document.querySelector('.about-title');
  const aboutCards = document.querySelectorAll('.info-card');
  
  // Title slide
  if (aboutTitle && !aboutTitle.classList.contains('animate')) {
    const titleRect = aboutTitle.getBoundingClientRect();
    if (titleRect.top < window.innerHeight * 0.8) {
      aboutTitle.classList.add('animate');
    }
  }
  
  // Cards slide up
  aboutCards.forEach(card => {
    if (!card.classList.contains('animate')) {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.top < window.innerHeight * 0.8) {
        card.classList.add('animate');
      }
    }
  });
}

window.addEventListener('scroll', checkAboutAnimations);
window.addEventListener('load', checkAboutAnimations);






// Projects detailed cards animation
function animateDetailedProjects() {
  const projectCards = document.querySelectorAll('.project-detailed');
  const projectsTitle = document.querySelector('.projects-title');
  const projectsSection = document.querySelector('.projects');
  
  if (projectsTitle && !projectsTitle.classList.contains('animate')) {
    const titleRect = projectsTitle.getBoundingClientRect();
    if (titleRect.top < window.innerHeight * 0.8) {
      projectsTitle.classList.add('animate');
    }
  }
  
  projectCards.forEach(card => {
    if (!card.classList.contains('animate')) {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.top < window.innerHeight * 0.8) {
        card.classList.add('animate');
      }
    }
  });
  
  if (projectCards[1] && projectCards[1].classList.contains('animate')) {
    projectsSection.classList.add('loaded');
  }
}

window.addEventListener('scroll', animateDetailedProjects);



function animateTech() {
  const skillCards = document.querySelectorAll('.skill-card');
  const techTitle = document.querySelector('.tech-title');
  const techSection = document.querySelector('.tech-stack');
  
  // Title slide
  if (techTitle && !techTitle.classList.contains('animate')) {
    const rect = techTitle.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      techTitle.classList.add('animate');
    }
  }
  
  // Cards slide up
  skillCards.forEach(card => {
    if (!card.classList.contains('animate')) {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        card.classList.add('animate');
      }
    }
  });
  
  // Background glow
  if (skillCards[3] && skillCards[3].classList.contains('animate')) {
    techSection.classList.add('loaded');
  }
}

window.addEventListener('scroll', animateTech);
// Subtle gradient change after 2s
setTimeout(() => {
  if (document.querySelector('.tech-stack')?.classList.contains('loaded')) {
    document.querySelector('.tech-stack').classList.add('subtle-glow');
  }
}, 2000);








// Tech Stack - LATE activation (center me aaye tab)
function handleTechStackScroll() {
  const techSection = document.querySelector('.tech-stack');
  const skillCards = document.querySelectorAll('.skill-card');
  
  // ONLY when section is 50%+ CENTER visible
  const sectionCenter = techSection.getBoundingClientRect();
  const centerTrigger = window.innerHeight * 0.3; // 70% scroll needed
  
  if (sectionCenter.top < centerTrigger && 
      sectionCenter.bottom > window.innerHeight * 0.7 &&
      !techSection.classList.contains('activated')) {
    
    techSection.classList.add('activated'); // One time only
    
    skillCards.forEach((card, index) => {
      // 800ms stagger + 400ms delay
      setTimeout(() => {
        card.classList.add('active');
        
        // Typing 500ms EXTRA delay
        setTimeout(() => {
          const typingText = card.querySelector('.typing-text');
          if (typingText) typingText.classList.add('start-typing');
        }, 500);
      }, index * 800 + 400); // Total 1200ms+ delay
    });
    
    // Background 3s me
    setTimeout(() => {
      techSection.classList.add('loaded');
    }, 3000);
  }
}

window.addEventListener('scroll', handleTechStackScroll);










// Beyond Code - Slow & Elegant
function animateBeyondSection() {
  const beyondSection = document.querySelector('.beyond');
  const interestCards = document.querySelectorAll('.interest-card');
  const beyondTitle = document.querySelector('.beyond-title');
  
  const rect = beyondSection.getBoundingClientRect();
  
  // ONLY center position (50% visible)
  if (rect.top < window.innerHeight * 0.5 && 
      rect.bottom > window.innerHeight * 0.5 &&
      !beyondSection.classList.contains('activated')) {
    
    beyondSection.classList.add('activated');
    
    // Title first (200ms delay)
    setTimeout(() => {
      beyondTitle.classList.add('animate');
    }, 200);
    
    // Cards staggered (800ms total delay)
    interestCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, 800 + index * 200);
    });
    
    // SLOW background 4s me
    setTimeout(() => {
      beyondSection.classList.add('loaded');
    }, 4000);
  }
}

window.addEventListener('scroll', animateBeyondSection);






















// Contact - Vertical cards slide RIGHT
function animateContactVertical() {
  const contactSection = document.querySelector('.contact');
  const contactCards = document.querySelectorAll('.contact-card');
  const contactTitle = document.querySelector('.contact-title');
  
  const rect = contactSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight * 0.5 && 
      !contactSection.classList.contains('activated')) {
    
    contactSection.classList.add('activated');
    
    // Title first
    setTimeout(() => {
      contactTitle.classList.add('animate');
    }, 200);
    
    // Cards slide from LEFT (staggered)
    contactCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate');
      }, 600 + index * 400);
    });
    
    setTimeout(() => {
      contactSection.classList.add('loaded');
    }, 2800);
  }
}

window.addEventListener('scroll', animateContactVertical);

















// Footer animation
function animateFooter() {
  const footer = document.querySelector('.footer');
  
  if (footer && window.scrollY + window.innerHeight > footer.offsetTop - 200) {
    footer.classList.add('loaded');
  }
}

window.addEventListener('scroll', animateFooter);




// Hero animation trigger
function animateHero() {
  const hero = document.querySelector('.hero');
  const infoItems = document.querySelectorAll('.info-item');
  
  if (hero && !hero.classList.contains('loaded')) {
    hero.classList.add('loaded');
    
    setTimeout(() => {
      infoItems.forEach(item => item.classList.add('animate'));
    }, 800);
  }
}

window.addEventListener('load', animateHero);
