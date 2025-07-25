// --- DATA PROJECTS (for Portfolio Modal) ---
const projects = [
  {
    id: 1,
    title: "SaaS Dashboard Analitik Tingkat Lanjut",
    description:
      "Platform analitik kompleks yang memungkinkan pengguna memvisualisasikan data interaktif, mengkustomisasi widget, dan mengintegrasikan sumber data real-time. Dibangun dengan fokus pada performa tinggi dan pengalaman pengguna yang responsif. **Teknologi:** React, D3.js, GraphQL, Node.js.",
    image:
      "https://images.unsplash.com/photo-1555066931-43654100427a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    liveDemo: "https://demo.example.com/saas-dashboard",
    github: "https://github.com/anyakusumadev/saas-dashboard",
    category: "react saas",
  },
  {
    id: 2,
    title: "Platform E-commerce dengan Personalization AI",
    description:
      "Toko online modern yang memanfaatkan kecerdasan buatan untuk rekomendasi produk yang dipersonalisasi, pencarian faceted yang cepat, dan alur checkout yang mulus. Dioptimalkan untuk SEO dan kecepatan loading. **Teknologi:** Next.js, Sanity.io (CMS), Stripe (Payments), Redux.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    liveDemo: "https://demo.example.com/ecommerce-ai",
    github: "https://github.com/anyakusumadev/ecommerce-ai",
    category: "react mobile", // Assuming it's also mobile-friendly
  },
  {
    id: 3,
    title: "Aplikasi Mobile Hybrid dengan Pengalaman Native",
    description:
      "Pengembangan aplikasi mobile lintas platform (iOS & Android) yang memberikan performa dan tampilan layaknya aplikasi native, dengan integrasi API kompleks dan notifikasi push. **Teknologi:** React Native, Firebase, Expo.",
    image:
      "https://images.unsplash.com/photo-1580894726038-1c5ac1c68a16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    liveDemo: "https://demo.example.com/mobile-app", // Placeholder
    github: "https://github.com/anyakusumadev/mobile-app",
    category: "vue mobile", // Could be React Native or Vue Native
  },
  {
    id: 4,
    title: "CRM Solusi Kustom",
    description:
      "Sistem Customer Relationship Management (CRM) yang dapat disesuaikan untuk mengelola prospek, klien, dan interaksi penjualan secara efisien. Dilengkapi dengan dasbor analitik dan fitur pelaporan. **Teknologi:** React, Material-UI, Express.js, MongoDB.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    liveDemo: "https://demo.example.com/custom-crm",
    github: "https://github.com/anyakusumadev/custom-crm",
    category: "react saas",
  },
  {
    id: 5,
    title: "Platform Edukasi Interaktif",
    description:
      "Platform e-learning yang menawarkan kursus interaktif, kuis dinamis, materi multimedia, dan pelacakan kemajuan siswa. Desain yang responsif untuk berbagai perangkat. **Teknologi:** Vue.js, Vuex, Firebase Functions, SCSS.",
    image:
      "https://images.unsplash.com/photo-1549692520-cb9e54a5c9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    liveDemo: "https://demo.example.com/edu-platform",
    github: "https://github.com/anyakusumadev/edu-platform",
    category: "vue",
  },
];

// --- PRELOADER ---
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    // Give a small delay for content to load
    preloader.classList.add("hidden");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }, 800);
});

// --- PARTICLES.JS INITIALIZATION (Optional: Customize in particles.json) ---
// If you want more control, create a particles.json file and load it.
// For simplicity, directly configure here.
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#66afe9" }, // Matches primary color
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#66afe9",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 180, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// --- NAVIGATION (Sticky & Scroll Spy) ---
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");

// Sticky Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Add scrolled class after 50px scroll
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll Spy
  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 50; // Adjust for navbar height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll for Nav Links
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offsetTop = targetElement.offsetTop - navbar.offsetHeight; // Adjust for fixed navbar

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// --- SCROLL-IN ANIMATIONS (Intersection Observer) ---
const sectionObserverOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -80px 0px",
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      sectionObserver.unobserve(entry.target);
    }
  });
}, sectionObserverOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// --- TYPING EFFECT (About Me) ---
const typingTextElement = document.querySelector(".typing-text");
const textToType = typingTextElement.dataset.text;
typingTextElement.textContent = "";

const aboutMeSection = document.getElementById("about");
const aboutMeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWriter(typingTextElement, textToType, 0);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

aboutMeObserver.observe(aboutMeSection);

function typeWriter(element, text, i) {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    setTimeout(() => typeWriter(element, text, i + 1), 35); // Typing speed
  } else {
    element.style.borderRight = "none"; // Remove cursor
  }
}

// --- SKILL PROGRESS BARS ANIMATION ---
const skillsSection = document.getElementById("skills");
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".progress-bar").forEach((bar) => {
          const progress = bar.dataset.progress;
          bar.style.width = progress + "%";
        });
        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillsObserver.observe(skillsSection);

// --- PORTFOLIO FILTERING & MODAL ---
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const portfolioGrid = document.querySelector(".portfolio-grid");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.dataset.category.includes(filter)) {
        item.classList.remove("hidden");
        // Optional: trigger re-layout for smooth transition if needed, though CSS transition should handle it
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// Portfolio Modal Logic
const portfolioModal = document.getElementById("portfolio-modal");
const modalCloseBtn = portfolioModal.querySelector(".modal-close-btn");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalLiveDemo = document.getElementById("modal-live-demo");
const modalGithub = document.getElementById("modal-github");

portfolioGrid.addEventListener("click", (e) => {
  const viewDetailsBtn = e.target.closest(".view-details");
  if (viewDetailsBtn) {
    e.preventDefault();
    const projectId = parseInt(viewDetailsBtn.dataset.projectId);
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      modalTitle.textContent = project.title;
      modalImage.src = project.image;
      modalDescription.textContent = project.description;
      modalLiveDemo.href = project.liveDemo;
      modalGithub.href = project.github;

      portfolioModal.style.display = "flex"; // Use flex to center content
      setTimeout(() => portfolioModal.classList.add("open"), 10); // Trigger animation
      document.body.style.overflow = "hidden"; // Prevent scrolling background
    }
  }
});

modalCloseBtn.addEventListener("click", () => {
  portfolioModal.classList.remove("open");
  setTimeout(() => {
    portfolioModal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300); // Wait for transition
});

window.addEventListener("click", (e) => {
  if (e.target === portfolioModal) {
    portfolioModal.classList.remove("open");
    setTimeout(() => {
      portfolioModal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }
});

// --- TESTIMONIALS CAROUSEL ---
const carouselTrack = document.querySelector(".carousel-track");
const dotsContainer = document.querySelector(".carousel-dots");
const testimonialCards = document.querySelectorAll(".testimonial-card");
let currentCarouselIndex = 0;
let autoAdvanceInterval;

function updateCarousel() {
  const cardWidth =
    testimonialCards[0].offsetWidth +
    parseFloat(getComputedStyle(testimonialCards[0]).marginRight) * 2; // Include margin
  carouselTrack.style.transform = `translateX(-${
    currentCarouselIndex * cardWidth
  }px)`;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentCarouselIndex);
  });
}

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    currentCarouselIndex = parseInt(e.target.dataset.index);
    updateCarousel();
    stopAutoAdvance(); // Stop auto-advance on manual interaction
    startAutoAdvance(); // Restart after a delay (optional)
  }
});

const startAutoAdvance = () => {
  stopAutoAdvance(); // Clear any existing interval
  autoAdvanceInterval = setInterval(() => {
    currentCarouselIndex = (currentCarouselIndex + 1) % testimonialCards.length;
    updateCarousel();
  }, 6000); // Change testimonial every 6 seconds
};

const stopAutoAdvance = () => {
  clearInterval(autoAdvanceInterval);
};

// Pause auto-advance on hover
const testimonialsSection = document.getElementById("testimonials");
testimonialsSection.addEventListener("mouseenter", stopAutoAdvance);
testimonialsSection.addEventListener("mouseleave", startAutoAdvance);

// Initial setup and start auto-advance
window.addEventListener("resize", updateCarousel);
updateCarousel();
startAutoAdvance();

// --- CONTACT FORM VALIDATION (Real-time) ---
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error"); // Dapatkan referensi error message
const emailError = document.getElementById("email-error"); // Dapatkan referensi error message
const messageError = document.getElementById("message-error"); // Dapatkan referensi error message
const formStatus = document.getElementById("my-form-status"); // Dapatkan referensi status pesan

// Durasi pesan status ditampilkan (dalam milidetik)
const MESSAGE_DISPLAY_DURATION = 5000; // 5 detik

const validateField = (
  inputElement,
  errorMessageElement,
  validationFn,
  errorMessage
) => {
  inputElement.addEventListener("input", () => {
    if (validationFn(inputElement.value)) {
      inputElement.classList.remove("invalid");
      errorMessageElement.style.display = "none";
      errorMessageElement.textContent = ""; // Kosongkan pesan error
    } else {
      inputElement.classList.add("invalid");
      errorMessageElement.style.display = "block";
      errorMessageElement.textContent = errorMessage; // Set pesan error
    }
  });
};

const isValidName = (name) => name.trim().length >= 3; // Minimal 3 karakter
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidMessage = (message) => message.trim().length >= 10; // Minimal 10 karakter

validateField(nameInput, nameError, isValidName, "Nama minimal 3 karakter.");
validateField(
  emailInput,
  emailError,
  isValidEmail,
  "Format email tidak valid."
);
validateField(
  messageInput,
  messageError,
  isValidMessage,
  "Pesan minimal 10 karakter."
);

// Event Listener Utama untuk Pengiriman Formulir
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Mencegah pengiriman form default

  // Reset status pesan
  formStatus.textContent = "";
  formStatus.style.color = "initial"; // Reset warna teks

  // Lakukan validasi akhir saat submit
  const isNameValid = isValidName(nameInput.value);
  const isEmailValid = isValidEmail(emailInput.value);
  const isMessageValid = isValidMessage(messageInput.value);

  // Tampilkan pesan error jika tidak valid
  if (!isNameValid) {
    nameInput.classList.add("invalid");
    nameError.style.display = "block";
    nameError.textContent = "Nama minimal 3 karakter.";
  } else {
    nameInput.classList.remove("invalid");
    nameError.style.display = "none";
  }

  if (!isEmailValid) {
    emailInput.classList.add("invalid");
    emailError.style.display = "block";
    emailError.textContent = "Format email tidak valid.";
  } else {
    emailInput.classList.remove("invalid");
    emailError.style.display = "none";
  }

  if (!isMessageValid) {
    messageInput.classList.add("invalid");
    messageError.style.display = "block";
    messageError.textContent = "Pesan minimal 10 karakter.";
  } else {
    messageInput.classList.remove("invalid");
    messageError.style.display = "none";
  }

  // Jika semua validasi berhasil, kirim email
  if (isNameValid && isEmailValid && isMessageValid) {
    formStatus.textContent = "Mengirim pesan ...";
    formStatus.style.color = "gray";

    const formData = new FormData(contactForm);
    try {
      const response = await fetch(e.target.action, {
        // Gunakan e.target.action
        method: contactForm.method, // Gunakan contactForm.method
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formStatus.textContent = "Terima kasih atas pesan Anda!";
        formStatus.style.color = "green";
        contactForm.reset(); // Mengosongkan form
        // Opsional: sembunyikan semua pesan error setelah berhasil
        document
          .querySelectorAll(".error-message")
          .forEach((el) => (el.style.display = "none"));

        // --- Tambahan untuk menghilangkan pesan status setelah beberapa detik ---
        setTimeout(() => {
          formStatus.textContent = ""; // Mengosongkan teks
          formStatus.style.color = "initial"; // Mengembalikan warna ke default
        }, MESSAGE_DISPLAY_DURATION);
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          formStatus.textContent = data["errors"]
            .map((error) => error["message"])
            .join(", ");
        } else {
          formStatus.textContent =
            "Ups! Ada masalah saat mengirim formulir Anda.";
        }
        formStatus.style.color = "red";

        // --- Tambahan untuk menghilangkan pesan status setelah beberapa detik ---
        setTimeout(() => {
          formStatus.textContent = "";
          formStatus.style.color = "initial";
        }, MESSAGE_DISPLAY_DURATION);
      }
    } catch (error) {
      console.error("Error:", error);
      formStatus.textContent =
        "Ups! Ada masalah saat mengirim formulir Anda (jaringan/server).";
      formStatus.style.color = "red";

      // --- Tambahan untuk menghilangkan pesan status setelah beberapa detik ---
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.style.color = "initial";
      }, MESSAGE_DISPLAY_DURATION);
    }
  } else {
    formStatus.textContent = "Mohon lengkapi formulir dengan benar.";
    formStatus.style.color = "red";

    // --- Tambahan untuk menghilangkan pesan status setelah beberapa detik ---
    setTimeout(() => {
      formStatus.textContent = "";
      formStatus.style.color = "initial";
    }, MESSAGE_DISPLAY_DURATION);
  }
});

// --- THEME TOGGLE (Dark/Light Mode) ---
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggleBtn.querySelector("i");

// Check theme preference from localStorage on load
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  body.classList.add(storedTheme);
  if (storedTheme === "light-mode") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
} else {
  // Default to dark mode if no preference found
  body.classList.add("dark-mode");
  localStorage.setItem("theme", "dark-mode");
  themeIcon.classList.add("fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// --- BACK-TO-TOP BUTTON ---
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    // Show button after scrolling 400px
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
