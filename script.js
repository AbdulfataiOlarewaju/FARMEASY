// const slides = document.querySelectorAll(".slide");
// let index = 0;

// function showSlide(n) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     slides[n].classList.add("active");
// }

// document.getElementById("next").addEventListener("click", () => {
//     index = (index + 1) % slides.length;
//     showSlide(index);
// });

// document.getElementById("prev").addEventListener("click", () => {
//     index = (index - 1 + slides.length) % slides.length;
//     showSlide(index);
// });

// // Auto slide every 6 seconds
// setInterval(() => {
//     index = (index + 1) % slides.length;
//     showSlide(index);
// }, 6000);


// ---------------- HAMBURGER MENU ----------------
const hamburgerIcon = document.getElementById("hamburger");
const dropDown = document.getElementById("dropDown");
const crossIcon = document.getElementById("cross");

hamburgerIcon.addEventListener("click", () => {
    dropDown.classList.toggle("open");
    hamburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
});
crossIcon.addEventListener('click', () => {
    dropDown.classList.toggle("open");  
    crossIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
});
