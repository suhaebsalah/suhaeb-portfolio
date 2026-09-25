/**
 * Dynamic Data & Renderer Module
 * Stores data arrays and dynamically renders HTML sections using Array.prototype.forEach()
 */
(function () {
  "use strict";

  /**
   * 1. Projects Data Array
   */
  const projects = [
    {
      idx: "01",
      title: "Adnan Electric",
      type: "Business Management & Administration System",
      desc: "A <strong>Laravel-based management system</strong> built for a local electrical business to manage projects, workers, payments, expenses, reports, and business data through a private admin dashboard.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "AJAX", "JavaScript"],
      actions: {
        demoUrl: "#contact",
        source: {
          type: "private",
          label: "Source code is private",
          title: "Private repository"
        },
        caseStudyId: "case-adnan"
      },
      shot: {
        url: "adnan-electric / admin",
        lightboxImg: "adnan-electric.webp",
        alt: "Adnan Electric Admin Dashboard Screenshot"
      }
    },
    {
      idx: "02",
      title: "SavePass",
      type: "Password Management System",
      desc: "A <strong>Laravel password management application</strong> designed to let users securely store, organize, and retrieve credentials using encrypted database storage, authentication, email verification, and OTP-based account security.",
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "OTP"],
      actions: {
        demoUrl: "#contact",
        source: {
          type: "public",
          url: "https://github.com/suhaebsalah/SavePass",
          label: "View SavePass source on GitHub"
        },
        caseStudyId: "case-savepass"
      },
      shot: {
        url: "savepass",
        lightboxImg: "savepass.webp",
        alt: "SavePass Password Management Application Screenshot"
      }
    },
    {
      idx: "03",
      title: "Clinic Management",
      type: "Clinic & Appointment Management System",
      desc: "A <strong>multi-role clinic management system</strong> designed to organize patients, doctors, appointments, clinic operations, and medical service workflows through role-based access.",
      tags: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "JavaScript", "AJAX"],
      actions: {
        demoUrl: "#contact",
        source: {
          type: "private",
          label: "Source code is private",
          title: "Private repository"
        },
        caseStudyId: "case-clinic"
      },
      shot: {
        url: "clinic-system",
        lightboxImg: "clinic-management.webp",
        alt: "Clinic Management System Screenshot"
      }
    }
  ];

  /**
   * 2. About Facts Data Array
   */
  const aboutFacts = [
    { label: "Role", value: "Junior Laravel / PHP Developer", isAccent: false },
    { label: "Based in", value: "Kurdistan, Iraq", isAccent: false },
    { label: "Focus", value: "Backend · Laravel · PHP", isAccent: false },
    { label: "Learning", value: "Docker", isAccent: false },
    { label: "Status", value: "Open to junior roles", isAccent: true }
  ];

  /**
   * 3. Tech Stack Data Array
   */
  const stackList = [
    { idx: "01", name: "Laravel", note: "Backend framework for my main projects", level: "Comfortable", levelClass: "comfortable" },
    { idx: "02", name: "PHP", note: "My main backend programming language", level: "Comfortable", levelClass: "comfortable" },
    { idx: "03", name: "MySQL", note: "Database design, relationships, and queries", level: "Comfortable", levelClass: "comfortable" },
    { idx: "04", name: "JavaScript", note: "DOM manipulation, Fetch API, and AJAX", level: "Working", levelClass: "working" },
    { idx: "05", name: "Tailwind CSS", note: "Utility-first styling in recent projects", level: "Working", levelClass: "working" },
    { idx: "06", name: "Bootstrap", note: "UI framework used in earlier projects", level: "Comfortable", levelClass: "comfortable" },
    { idx: "07", name: "Git", note: "Version control and project workflow", level: "Comfortable", levelClass: "comfortable" },
    { idx: "08", name: "Postman", note: "API testing and request workflows", level: "Working", levelClass: "working" }
  ];

  /**
   * 4. Process Steps Data Array
   */
  const processSteps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the problem first. I think about who will use the application, what they need, and how the workflow should work before starting to code."
    },
    {
      num: "02",
      title: "Plan",
      desc: "Break the requirements into features, database tables, relationships, routes, and application logic. I try to keep the structure simple and easy to understand."
    },
    {
      num: "03",
      title: "Build",
      desc: "Build the application step by step with Laravel, PHP, MySQL, Blade, JavaScript, and the tools required for the project. I test each feature as I develop it."
    },
    {
      num: "04",
      title: "Refine",
      desc: "Review the result, fix problems, improve the user experience, clean up the code, and make changes based on what the project actually needs."
    }
  ];

  /**
   * 5. Contact Links Data Array
   */
  const contactLinks = [
    {
      label: "Email",
      type: "link",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=suhaebs988@gmail.com",
      text: "suhaebs988@gmail.com",
      ariaLabel: "Email address",
      icon: `<svg class="clink-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
    },
    {
      label: "GitHub",
      type: "link",
      href: "https://github.com/suhaebsalah",
      text: "github.com/suhaebsalah",
      ariaLabel: "GitHub profile",
      icon: `<svg class="clink-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>`
    },
    {
      label: "LinkedIn",
      type: "link",
      href: "https://www.linkedin.com/in/suhaeb-salah-77814b319/",
      text: "linkedin.com/suhaeb-salah",
      ariaLabel: "LinkedIn profile",
      icon: `<svg class="clink-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0Z"/></svg>`
    },
    {
      label: "Based in",
      type: "text",
      text: "Kurdistan, Iraq"
    }
  ];

  /**
   * Render Projects using forEach loop
   */
  function renderProjects() {
    const container = document.getElementById("projectsContainer") || document.querySelector(".projects");
    if (!container) return;

    let projectsHtml = "";

    projects.forEach((project) => {
      const tagsHtml = project.tags
        .map((tag) => `<span>${tag}</span>`)
        .join("");

      let sourceBtnHtml = "";
      if (project.actions.source.type === "private") {
        sourceBtnHtml = `
            <button class="p-btn source-btn source-private" type="button" title="${project.actions.source.title}" aria-label="${project.actions.source.label}">
              <svg class="icon icon-default" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              <svg class="icon icon-hover" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Source
            </button>`;
      } else {
        sourceBtnHtml = `
            <a href="${project.actions.source.url}" target="_blank" rel="noopener noreferrer" class="p-btn source-btn" aria-label="${project.actions.source.label}">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
              </svg>
              Source
            </a>`;
      }

      projectsHtml += `
      <article class="project rv">
        <div class="project-main">
          <div class="project-head">
            <span class="project-idx">${project.idx}</span>
            <div>
              <h3 class="project-title">${project.title}</h3>
              <div class="project-type">${project.type}</div>
            </div>
          </div>
          <p class="project-desc">${project.desc}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-actions">
            <a href="${project.actions.demoUrl}" class="p-btn primary">Request demo</a>
            ${sourceBtnHtml}
            <button class="p-btn" data-case="${project.actions.caseStudyId}">Case Study -&gt;</button>
          </div>
        </div>
        <div class="project-shot">
          <div class="shot-bar">
            <i></i><i></i><i></i><span class="url">${project.shot.url}</span>
          </div>
          <button class="shot-img-trigger" type="button" data-lightbox="${project.shot.lightboxImg}" data-lightbox-alt="${project.shot.alt}" aria-label="Open ${project.title} project screenshot">
            <img class="shot-img" src="assets/images/${project.shot.lightboxImg}" alt="${project.shot.alt}" />
            <span class="shot-zoom">View larger</span>
          </button>
        </div>
      </article>`;
    });

    container.innerHTML = projectsHtml;
  }

  /**
   * Render About Facts using forEach loop
   */
  function renderAboutFacts() {
    const container = document.getElementById("aboutFactsContainer");
    if (!container) return;

    let factsHtml = "";
    aboutFacts.forEach((fact) => {
      const valClass = fact.isAccent ? "v acc" : "v";
      factsHtml += `
        <div class="fact">
          <span class="k">${fact.label}</span>
          <span class="${valClass}">${fact.value}</span>
        </div>`;
    });

    container.innerHTML = factsHtml;
  }

  /**
   * Render Tech Stack using forEach loop
   */
  function renderStack() {
    const container = document.getElementById("stackContainer");
    if (!container) return;

    let stackHtml = "";
    stackList.forEach((item) => {
      stackHtml += `
      <div class="stack-row">
        <span class="stack-index">${item.idx}</span>
        <span class="name">${item.name}</span>
        <span class="note">${item.note}</span>
        <span class="level ${item.levelClass}">${item.level}</span>
      </div>`;
    });

    container.innerHTML = stackHtml;
  }

  /**
   * Render Process Steps using forEach loop
   */
  function renderProcess() {
    const container = document.getElementById("processContainer");
    if (!container) return;

    let processHtml = "";
    processSteps.forEach((step) => {
      processHtml += `
      <div class="process-row">
        <span class="process-num">${step.num}</span>
        <div class="process-content">
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </div>
      </div>`;
    });

    container.innerHTML = processHtml;
  }

  /**
   * Render Contact Links using forEach loop
   */
  function renderContactLinks() {
    const container = document.getElementById("contactLinksContainer");
    if (!container) return;

    let linksHtml = "";
    contactLinks.forEach((item) => {
      if (item.type === "link") {
        linksHtml += `
      <div class="clink">
        <span class="k">${item.label}</span>
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="v clink-icon-link" aria-label="${item.ariaLabel}">
          ${item.icon}
          ${item.text}
        </a>
      </div>`;
      } else {
        linksHtml += `
      <div class="clink">
        <span class="k">${item.label}</span>
        <span class="v">${item.text}</span>
      </div>`;
      }
    });

    container.innerHTML = linksHtml;
  }

  /**
   * Master renderer function to execute forEach rendering for all sections
   */
  function renderAllSections() {
    renderProjects();
    renderAboutFacts();
    renderStack();
    renderProcess();
    renderContactLinks();
  }

  // Export renderers and data globally for app bootstrap
  window.renderProjects = renderProjects;
  window.renderAboutFacts = renderAboutFacts;
  window.renderStack = renderStack;
  window.renderProcess = renderProcess;
  window.renderContactLinks = renderContactLinks;
  window.renderAllSections = renderAllSections;

  window.portfolioData = {
    projects,
    aboutFacts,
    stackList,
    processSteps,
    contactLinks
  };
})();
