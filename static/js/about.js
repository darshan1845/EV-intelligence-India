/* =========================================================
   EV INTELLIGENCE — ABOUT PAGE JS
   ========================================================= */


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   MODEL CARD TILT
   ========================================================= */

const modelCards = document.querySelectorAll(".model-card");

modelCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   OBJECTIVE CARD MICRO INTERACTION
   ========================================================= */

const objectiveCards =
    document.querySelectorAll(".objective-card");

objectiveCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 15px 45px rgba(0, 0, 0, 0.22)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


/* =========================================================
   PARALLAX BACKGROUND
   ========================================================= */

const background =
    document.querySelector(".page-background");

window.addEventListener("scroll", () => {

    if (!background) return;

    const scrollY = window.scrollY;

    background.style.transform =
        `scale(1.03) translateY(${scrollY * 0.025}px)`;

});


/* =========================================================
   NAVBAR SHADOW
   ========================================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 15px 55px rgba(0, 0, 0, 0.45)";

    } else {

        navbar.style.boxShadow =
            "0 15px 50px rgba(0, 0, 0, 0.35)";

    }

});