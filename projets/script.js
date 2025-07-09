// Thème clair / sombre
const themeToggle = document.querySelector('.toggle-icon');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  });
}

// Bouton paramètres pour afficher les couleurs
const colorPicker = document.querySelector('.color-picker');
const pickerIcon = document.querySelector('.picker-icon');
if (pickerIcon && colorPicker) {
  pickerIcon.addEventListener('click', () => {
    colorPicker.classList.toggle('open');
  });
}

// Palette de couleurs dynamique
const colorButtons = document.querySelectorAll('.color');
colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = getComputedStyle(btn).backgroundColor;

    // Changer la couleur du logo
    const logo = document.querySelector('.logo-text');
    if (logo) logo.style.color = color;

    // Changer la couleur du titre principal
    const sectionTitle = document.querySelector('.projects-section h2');
    if (sectionTitle) sectionTitle.style.color = color;

    // Changer la couleur des boutons GitHub
    document.querySelectorAll('.btn-github').forEach(githubBtn => {
      githubBtn.style.backgroundColor = color;
    });
  });
});

