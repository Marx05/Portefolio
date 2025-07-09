// ✅ Thème clair / sombre
const icon = document.querySelector(".toggle-icon");
icon.addEventListener("click", () => {
  document.body.classList.toggle("light");
  icon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ✅ Palette dynamique
const colorButtons = document.querySelectorAll(".color");
colorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = getComputedStyle(btn).backgroundColor;

    // Appliquer la couleur au logo
    const logo = document.querySelector(".logo-text");
    if (logo) logo.style.color = color;

    // Appliquer la couleur aux titres principaux
    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle) sectionTitle.style.color = color;

    // Sous-titre et label email
    const subtitle = document.querySelector(".contact-subtitle");
    if (subtitle) subtitle.style.color = color;

    const emailLabel = document.querySelector(".email-label");
    if (emailLabel) emailLabel.style.color = color;

    // Appliquer la couleur à toutes les icônes
    document.querySelectorAll(".icon").forEach(icon => {
      icon.style.color = color;
    });

    // Appliquer la couleur aux titres de box info
    document.querySelectorAll(".info-box h3").forEach(title => {
      title.style.color = color;
    });

    // Appliquer la couleur au bouton d'envoi
    const sendBtn = document.querySelector(".send-btn");
    if (sendBtn) sendBtn.style.backgroundColor = color;

    // Appliquer la couleur au lien actif du menu
    const activeLink = document.querySelector(".nav-menu .active a");
    if (activeLink) activeLink.style.color = color;
  });
});

// ✅ Afficher / masquer la palette
const pickerIcon = document.querySelector(".picker-icon");
const colorPicker = document.querySelector(".color-picker");

pickerIcon.addEventListener("click", () => {
  colorPicker.classList.toggle("open");
});

// ✅ Menu burger mobile
const burger = document.getElementById("burger");
const navContainer = document.getElementById("nav-container");

burger.addEventListener("click", () => {
  navContainer.classList.toggle("open");
});
