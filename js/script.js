const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


// =========================
// MOBILE MENU
// =========================

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});


// Close menu after clicking a link

navItems.forEach((item) => {

    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// =========================
// PERSONAL INFORMATION
// =========================

document.querySelector("#hero-title").textContent =
    portfolioData.title;

document.querySelector("#hero-name").textContent =
    portfolioData.name;

document.querySelector("#hero-description").textContent =
    portfolioData.description;

document.querySelector("#about-text").textContent =
    portfolioData.about;

document.querySelector(".profile-image").src =
    portfolioData.profileImage;


// =========================
// CONTACT LINKS
// =========================

const emailLink = document.querySelector("#email-link");
const githubLink = document.querySelector("#github-link");
const linkedinLink = document.querySelector("#linkedin-link");
const resumeLink = document.querySelector("#resume-link");

emailLink.href = `mailto:${portfolioData.email}`;
emailLink.textContent = portfolioData.email;

githubLink.href = portfolioData.github;

linkedinLink.href = portfolioData.linkedin;

resumeLink.href = portfolioData.resume;


// =========================
// SKILLS
// =========================

const skillsContainer =
    document.querySelector("#skills-container");

portfolioData.skills.forEach((skill) => {

    const skillElement = document.createElement("div");

    skillElement.classList.add("skill");

    skillElement.textContent = skill;

    skillsContainer.appendChild(skillElement);

});


// =========================
// PROJECTS
// =========================

const projectsContainer =
    document.querySelector("#projects-container");

portfolioData.projects.forEach((project) => {

    const projectCard = document.createElement("article");

    projectCard.classList.add("project-card");

    // Optional project image
    const imageHTML = project.image
        ? `
            <img
                src="${project.image}"
                alt="${project.title}"
                class="project-image"
                loading="lazy"
            >
          `
        : "";

    // Optional buttons
    const githubHTML = project.github
        ? `
            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
            >
                GitHub ↗
            </a>
          `
        : "";

    const liveHTML = project.live
        ? `
            <a
                href="${project.live}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
            >
                Live Demo ↗
            </a>
          `
        : "";

    projectCard.innerHTML = `
        ${imageHTML}

        <div class="project-number">
            ${project.number}
        </div>

        <h3>
            ${project.title}
        </h3>

        <p>
            ${project.description}
        </p>

        <div class="project-tech">
            ${project.technologies}
        </div>

        <div class="project-links">
            ${githubHTML}
            ${liveHTML}
        </div>
    `;

    projectsContainer.appendChild(projectCard);
});


// =========================
// EDUCATION
// =========================

const educationContainer =
    document.querySelector("#education-container");

portfolioData.education.forEach((education) => {

    const educationItem = document.createElement("div");

    educationItem.classList.add("education-item");

    educationItem.innerHTML = `
        <span>
            ${education.period}
        </span>

        <h3>
            ${education.degree}
        </h3>

        <p>
            ${education.institute} · ${education.result}
        </p>
    `;

    educationContainer.appendChild(educationItem);

});


// =========================
// ACHIEVEMENTS
// =========================

const achievementsContainer =
    document.querySelector("#achievements-container");

portfolioData.achievements.forEach((achievement) => {

    const achievementItem =
        document.createElement("div");

    achievementItem.classList.add("achievement-item");

    achievementItem.innerHTML = `
        <span class="achievement-title">
            ${achievement.title}
        </span>

        <span class="achievement-description">
            — ${achievement.description}
        </span>
    `;

    achievementsContainer.appendChild(achievementItem);
});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .education-item"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


// FOOTER
document.querySelector("#footer-text").textContent =
    `© ${new Date().getFullYear()} ${portfolioData.name}. All rights reserved.`;