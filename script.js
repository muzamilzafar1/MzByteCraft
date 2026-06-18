document.addEventListener('DOMContentLoaded', function () {

  // Typing animation — only runs where #typing-animation exists and Typed.js is loaded
  const typingTarget = document.getElementById('typing-animation');
  if (typingTarget && typeof Typed !== 'undefined') {
    new Typed('#typing-animation', {
      strings: ["Web Developer", "WordPress Developer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });
  }

  // Sidebar active-link logic on scroll
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.sidebar-left ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').includes(current)) {
        a.classList.add('active');
      }
    });
  });

  // Scroll-reveal animation for the services section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  const servicesSection = document.querySelector('.services-section');
  if (servicesSection) {
    observer.observe(servicesSection);
  }

  // Resume tabs
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // Animated skill bars
  document.querySelectorAll(".skill-bar div").forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    setTimeout(() => {
      bar.style.width = percent + "%";
    }, 500);
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    showSlide(currentIndex);
  }
  window.changeSlide = changeSlide; // exposed globally for the onclick="changeSlide(...)" buttons

  if (testimonials.length > 0) {
    setInterval(() => changeSlide(1), 5000);
  }

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const parent = question.parentElement;
      parent.classList.toggle("active");

      const answer = question.nextElementSibling;
      answer.style.maxHeight = parent.classList.contains("active")
        ? answer.scrollHeight + "px"
        : null;
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // WhatsApp chat widget
  const waPhone = "923440447474";
  const waToggle = document.getElementById('waToggle');
  const waPopup = document.getElementById('waPopup');
  const waClose = document.getElementById('waClose');
  const waCta = document.getElementById('waCta');

  function openWhatsApp(message) {
    window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`, '_blank');
  }

  if (waToggle && waPopup) {
    waToggle.addEventListener('click', () => {
      waPopup.classList.toggle('active');
    });

    if (waClose) {
      waClose.addEventListener('click', () => waPopup.classList.remove('active'));
    }

    document.querySelectorAll('.wa-chip').forEach(chip => {
      chip.addEventListener('click', () => openWhatsApp(chip.dataset.msg));
    });

    if (waCta) {
      waCta.addEventListener('click', () => openWhatsApp("Hi, I'd like a free consultation."));
    }
  }

});

// Certificate image modal — called via inline onclick, so kept global
function openModal(imgElement) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
