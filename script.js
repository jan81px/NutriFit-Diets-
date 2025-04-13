function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburgerIcon = document.getElementById("hamburgerIcon");

    navLinks.classList.toggle("show");

    // Optional: toggle between ☰ and ✖
    if (navLinks.classList.contains("show")) {
        hamburgerIcon.textContent = "✖";
    } else {
        hamburgerIcon.textContent = "☰";
    }
}
