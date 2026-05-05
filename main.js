/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");

  if (!menuBtn) {
    return;
  }

  menuBtn.classList.toggle("responsive");
}

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (!navHeader) {
    return;
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    return;
  }

  navHeader.style.boxShadow = "none";
  navHeader.style.height = "90px";
  navHeader.style.lineHeight = "90px";
}

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

    if (!navLink) {
      return;
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
      return;
    }

    navLink.classList.remove("active-link");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");
  const downloadLink = document.getElementById("download-link");
  const navLinks = document.querySelectorAll(".nav-link");
  const navMenu = document.getElementById("myNavMenu");

  if (downloadButton && downloadLink) {
    downloadButton.addEventListener("click", () => {
      downloadLink.href = "assets/files/Profile.pdf";
      downloadLink.download = "Sandy-Sayuri-Curriculo.pdf";
      downloadLink.click();
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("responsive")) {
        navMenu.classList.remove("responsive");
      }
    });
  });

  if (typeof Typed !== "undefined" && document.querySelector(".typedText")) {
    new Typed(".typedText", {
      strings: ["Fullstack", "Backend", "Frontend"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });
  }

  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true
    });

    srRight.reveal(".skills-box", { delay: 100 });
  }

  headerShadow();
  scrollActive();
});

window.addEventListener("scroll", headerShadow);
window.addEventListener("scroll", scrollActive);
