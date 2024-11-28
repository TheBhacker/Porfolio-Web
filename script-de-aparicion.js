document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Deja de observar una vez que se muestra
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% de la sección es visible

    sections.forEach(section => {
        observer.observe(section);
    });
});
