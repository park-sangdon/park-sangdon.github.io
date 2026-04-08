const menuToggle = document.querySelector("[data-menu-toggle]");
const menuCloseTargets = document.querySelectorAll("[data-menu-close]");
const navLinks = document.querySelectorAll(".nav-link");
const yearTargets = document.querySelectorAll("[data-year]");
const revealTargets = document.querySelectorAll("[data-reveal]");

function closeMenu() {
  document.body.classList.remove("menu-open");
}

function openMenu() {
  document.body.classList.add("menu-open");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (document.body.classList.contains("menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });
}

menuCloseTargets.forEach((target) => {
  target.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
navLinks.forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
  if (linkPath === currentPath) {
    link.setAttribute("aria-current", "page");
  }
});

const year = new Date().getFullYear();
yearTargets.forEach((target) => {
  target.textContent = String(year);
});

if (revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  revealTargets.forEach((target) => observer.observe(target));
}
