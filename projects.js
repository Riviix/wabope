        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll("p, h1").forEach((el) => {
                el.innerHTML = el.innerHTML
                    .replace(/:3/g, '<span class="sparkle-text">:3</span>')
                    .replace(/:P/g, '<span class="sparkle-text">:P</span>')
                    .replace(/:D/g, '<span class="sparkle-text">:D</span>')
                    .replace(/c:/g, '<span class="sparkle-text">c:</span>');
            });

            const projectCards = document.querySelectorAll(".project-card");

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            }, {
                threshold: 0.1 
            });

            projectCards.forEach(card => {
                observer.observe(card);
            });
        });