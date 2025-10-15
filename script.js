document.addEventListener('DOMContentLoaded', function() {
    
   ;

    // Sidebar Active Link Logic
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.sidebar-left ul li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)){
                current = section.getAttribute('id');
            }
        })

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href').includes(current)){
                a.classList.add('active');
            }
        })
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // Typing Animation using Typed.js
    var options = {
        strings: ["Web Developer", "WordPress Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    };
    var typed = new Typed('#typing-animation', options);

    // Sidebar Active Link Logic
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.sidebar-left ul li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 2)){ // Adjusted threshold
                current = section.getAttribute('id');
            }
        })

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href').includes(current)){
                a.classList.add('active');
            }
        })
    });

    // --- Scroll Animation Logic using Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // When the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    // Tell the observer to watch the services section
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
         observer.observe(servicesSection);
    }
    
});

// script.js (You can leave this empty for now, or add more complex interactions later)

document.addEventListener("DOMContentLoaded", () => {
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
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-bar div").forEach(bar => {
    let percent = bar.getAttribute("data-percent");
    setTimeout(() => {
      bar.style.width = percent + "%";
    }, 500);
  });
});
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showSlide(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = testimonials.length - 1;
  if (currentIndex >= testimonials.length) currentIndex = 0;
  showSlide(currentIndex);
}

// Auto Slide
setInterval(() => {
  changeSlide(1);
}, 5000);
// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const parent = question.parentElement;
    parent.classList.toggle("active");

    const answer = question.nextElementSibling;
    if (parent.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
// Open image in modal
function openModal(imgElement) {
  var modal = document.getElementById("imgModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close modal
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
