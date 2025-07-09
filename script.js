// Animation texte
const typedText = document.getElementById("typed-text");
const roles = ["Graphic Designer", "Web Programmer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function typeWriter() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typedText.textContent = currentRole.substring(0, charIndex--);
        speed = 50;
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }
    } else {
        typedText.textContent = currentRole.substring(0, charIndex++);
        speed = 100;
        if (charIndex > currentRole.length) {
            isDeleting = true;
            speed = 1000;
        }
    }
    setTimeout(typeWriter, speed);
}
document.addEventListener("DOMContentLoaded", typeWriter);

// Thème clair/sombre
const icon = document.querySelector(".toggle-icon");
icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    icon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Palette de couleur
const colorButtons = document.querySelectorAll(".color");
colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const color = getComputedStyle(btn).backgroundColor;
        document.querySelector(".about-btn").style.backgroundColor = color;
        document.querySelector(".profile-photo .frame").style.borderColor = color;
        document.querySelector(".intro-text .name").style.color = color;
        document.querySelector(".intro-text .typed-text").style.color = color;
        document.querySelector(".nav-menu .active a").style.color = color;
        document.querySelector(".logo-text").style.color = color;
        document.querySelectorAll(".shapes span").forEach(el => el.style.backgroundColor = color);
    });
});

// Afficher/Masquer palette
const colorPicker = document.querySelector(".color-picker");
const pickerIcon = document.querySelector(".picker-icon");
pickerIcon.addEventListener("click", () => {
    colorPicker.classList.toggle("open");
});

// Menu burger mobile
const burger = document.getElementById("burger");
const navContainer = document.getElementById("nav-container");
burger.addEventListener("click", () => {
    navContainer.classList.toggle("open");
});