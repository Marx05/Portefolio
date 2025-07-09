// ✅ Changement de thème clair/sombre
const icon = document.querySelector(".toggle-icon");
icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    icon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ✅ Changement de couleur principale avec la palette
const colorButtons = document.querySelectorAll(".color");
colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = getComputedStyle(btn).backgroundColor;

        // Appliquer la couleur sélectionnée sur les éléments clés
        document.querySelector(".logo-text").style.color = color;
        document.querySelector(".section-title").style.color = color;

        // Changer la couleur de tous les points de la timeline
        document.querySelectorAll(".timeline-item .dot").forEach(dot => {
            dot.style.backgroundColor = color;
        });

        // Changer la bordure verticale de la timeline
        document.querySelectorAll(".timeline").forEach(tl => {
            tl.style.borderLeftColor = color;
        });

        // Changer les titres des expériences/diplômes
        document.querySelectorAll(".timeline-content h3").forEach(title => {
            title.style.color = color;
        });

        // Activer aussi le lien actif du menu
        const activeLink = document.querySelector(".nav-menu .active a");
        if (activeLink) {
            activeLink.style.color = color;
        }
    });
});

// ✅ Afficher / cacher la palette de couleurs
const colorPicker = document.querySelector(".color-picker");
const pickerIcon = document.querySelector(".picker-icon");

pickerIcon.addEventListener("click", () => {
    colorPicker.classList.toggle("open");
});

// ✅ Menu burger pour mobile
const burger = document.getElementById("burger");
const navContainer = document.getElementById("nav-container");

burger.addEventListener("click", () => {
    navContainer.classList.toggle("open");
});
