// ---------------- HAMBURGER MENU ----------------
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger");
    const dropDown = document.getElementById("dropDown");

    if (hamburgerIcon && dropDown) {
        hamburgerIcon.addEventListener("click", () => {
            dropDown.classList.toggle("open");
        });
    }
});

