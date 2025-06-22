 window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    document.querySelectorAll("p").forEach((p) => {
        p.innerHTML = p.innerHTML
            .replace(/:3/g, '<span class="sparkle-text">:3</span>')
            .replace(/:P/g, '<span class="sparkle-text">:P</span>')
            .replace(/:D/g, '<span class="sparkle-text">:D</span>')
            .replace(/c:/g, '<span class="sparkle-text">c:</span>');
    });

    setTimeout(() => {
        if (loader) {
            loader.classList.add("opacity-0");
            setTimeout(() => loader.remove(), 1000);
        }
    }, 2500); 
});