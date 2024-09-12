// JavaScript for Enhanced Parallax Effect
document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    let scrollPosition = window.pageYOffset;
    header.style.backgroundPositionY = -(scrollPosition * 0.5) + "px"; // Adjust speed factor as needed
});
