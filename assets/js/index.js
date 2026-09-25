/**
 * Portfolio Interactive Scripts & Component Loader
 * Clean, modern, accessible vanilla JS
 */
(function () {
  "use strict";

  /**
   * Dynamic Component Loader
   * Loads HTML fragments defined by data-include attributes
   */
  async function loadComponents() {
    const includeElements = document.querySelectorAll("[data-include]");
    const loadPromises = Array.from(includeElements).map(async (el) => {
      const filePath = el.getAttribute("data-include");
      if (!filePath) return;

      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to load component: ${filePath} (${response.status})`);
        }
        const html = await response.text();
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        el.replaceWith(template.content);
      } catch (err) {
        console.error(`Component loader error for ${filePath}:`, err);
        if (window.location.protocol === "file:") {
          console.warn(
            "Local file:// protocol detected. Browsers block fetch() calls on file:// URLs due to CORS security rules. Please view the site via a local web server (e.g. http://localhost:8000 or XAMPP Apache)."
          );
        }
      }
    });

    await Promise.all(loadPromises);
  }

  /**
   * Header & Navigation Controller
   */
  function initNavigation() {
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const hasMobileMenu = Boolean(navToggle && mobileMenu);

    if (nav) {
      const syncNavSticky = () => {
        nav.classList.toggle("stuck", window.scrollY > 30);
      };
      window.addEventListener("scroll", syncNavSticky, { passive: true });
      syncNavSticky();
    }

    function closeMobileMenu() {
      if (!hasMobileMenu) return;
      mobileMenu.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("menu-open");
    }

    function openMobileMenu() {
      if (!hasMobileMenu) return;
      mobileMenu.classList.add("open");
      navToggle.classList.add("active");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
      document.body.classList.add("menu-open");
    }

    if (hasMobileMenu) {
      navToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("open");
        isOpen ? closeMobileMenu() : openMobileMenu();
      });

      const desktopBreakpoint = window.matchMedia("(max-width: 720px)");
      desktopBreakpoint.addEventListener("change", (e) => {
        if (!e.matches) closeMobileMenu();
      });
    }

    return closeMobileMenu;
  }

  /**
   * Scroll Reveal Animations
   */
  function initReveal() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const revealElements = document.querySelectorAll(".rv");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 100px 0px" }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("in");
      } else {
        observer.observe(el);
      }
    });
  }

  /**
   * Image Lightbox Modal
   */
  function initLightbox() {
    const lightbox = document.getElementById("clinicProjectLightbox");
    const lightboxImg = lightbox?.querySelector("img");
    const closeBtn = lightbox?.querySelector("[data-close-lightbox]");
    let previousActiveElement = null;

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (previousActiveElement) {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
    }

    document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (!lightbox || !lightboxImg) return;
        previousActiveElement = document.activeElement;
        const imgName = trigger.dataset.lightbox;
        const imgAlt = trigger.dataset.lightboxAlt || "Project preview";

        lightboxImg.src = `assets/images/${imgName}`;
        lightboxImg.alt = imgAlt;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        closeBtn?.focus();
      });
    });

    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    closeBtn?.addEventListener("click", closeLightbox);

    return {
      close: closeLightbox,
      isOpen: () => lightbox?.classList.contains("open") ?? false,
    };
  }

  /**
   * Case Study Modals
   */
  function initCaseStudies() {
    let previousActiveElement = null;
    const getOpenModals = () => document.querySelectorAll(".modal.open");

    function closeModal(modal) {
      if (!modal?.classList.contains("open")) return;
      modal.classList.remove("open");
      if (getOpenModals().length === 0) {
        document.body.classList.remove("modal-open");
      }
      if (previousActiveElement) {
        previousActiveElement.focus();
        previousActiveElement = null;
      }
    }

    document.querySelectorAll("[data-case]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const modalId = trigger.dataset.case;
        const modal = document.getElementById(modalId);
        if (!modal) return;

        previousActiveElement = document.activeElement;
        modal.scrollTop = 0;
        modal.classList.add("open");
        document.body.classList.add("modal-open");
        modal.querySelector(".modal-close")?.focus();
      });
    });

    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modal);
      });
      modal.querySelectorAll("[data-close]").forEach((btn) => {
        btn.addEventListener("click", () => closeModal(modal));
      });
    });

    return () => getOpenModals().forEach(closeModal);
  }

  /**
   * Smooth Anchor Links Scrolling
   */
  function initSmoothLinks(closeMobileMenu) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      closeMobileMenu();

      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start",
        });
      });
    });
  }

  /**
   * Application Bootstrap
   */
  async function init() {
    // 1. First fetch & render all component HTML templates
    await loadComponents();

    // 2. Render dynamic sections from Javascript arrays using forEach loops
    if (typeof window.renderAllSections === "function") {
      window.renderAllSections();
    } else if (typeof window.renderProjects === "function") {
      window.renderProjects();
    }

    // 3. Initialize interactive controllers after DOM insertion
    const closeMobileMenu = initNavigation();
    const lightbox = initLightbox();
    const closeModals = initCaseStudies();

    initReveal();
    initSmoothLinks(closeMobileMenu);

    // Global keyboard listener (Escape key)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        if (lightbox.isOpen()) lightbox.close();
        closeModals();
      }
    });
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
