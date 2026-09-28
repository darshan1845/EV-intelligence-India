/* =========================================================
   EV INTELLIGENCE — HOME PAGE
   ========================================================= */


/* =========================================================
   MAIN PLATFORM CARD 3D HOVER
   ========================================================= */

const cards =
    document.querySelectorAll(".platform-card");


cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -1.4;

        const rotateY =
            ((x - centerX) / centerX) * 1.4;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";

    });

});


/* =========================================================
   MINI CARD HOVER
   ========================================================= */

const miniCards =
    document.querySelectorAll(".mini-card");


miniCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -1;

        const rotateY =
            ((x - centerX) / centerX) * 1;


        card.style.transform =
            `perspective(600px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(600px) rotateX(0deg) rotateY(0deg)";

    });

});


/* =========================================================
   BACKGROUND PARALLAX
   ========================================================= */

const background =
    document.querySelector(".page-background");


window.addEventListener("scroll", () => {

    if (!background) {
        return;
    }


    const scroll =
        window.scrollY;


    background.style.transform =
        `scale(1.02)
         translateY(${scroll * 0.015}px)`;

});


/* =========================================================
   NAVBAR SHADOW
   ========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 15px 50px rgba(0, 0, 0, 0.45)";

    } else {

        navbar.style.boxShadow =
            "0 15px 50px rgba(0, 0, 0, 0.32)";

    }

});