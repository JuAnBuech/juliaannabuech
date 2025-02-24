document.addEventListener("DOMContentLoaded", function () {
    // Störer-Button Funktion
    const stoerer = document.querySelector(".stoerer");
    if (stoerer) {
        stoerer.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    }

    // Lightbox für Portfolio Bilder
    const portfolioItems = document.querySelectorAll(".portfolio-item img");
    portfolioItems.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");
            lightbox.innerHTML = `<img src="${img.src.replace('-thumb', '-full')}" alt="Full Image">`;
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });
});
