const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();