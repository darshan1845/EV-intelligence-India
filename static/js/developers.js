document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       DEVELOPER CARD 3D TILT
    ========================================= */

    const cards =
        document.querySelectorAll(".tilt-card");


    cards.forEach(function (card) {


        card.addEventListener("mousemove", function (event) {


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
                ((y - centerY) / centerY) * -2.5;


            const rotateY =
                ((x - centerX) / centerX) * 2.5;


            /* Cursor glow position */

            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );


            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );


            /* 3D card movement */

            card.style.transform = `

                perspective(1000px)

                rotateX(${rotateX}deg)

                rotateY(${rotateY}deg)

                translateY(-6px)

            `;

        });


        card.addEventListener("mouseleave", function () {


            card.style.transform = `

                perspective(1000px)

                rotateX(0deg)

                rotateY(0deg)

                translateY(0)

            `;

        });

    });



    /* =========================================
       WORKFLOW SCROLL ANIMATION
    ========================================= */

    const workflowItems =
        document.querySelectorAll(
            ".workflow-item"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    workflowItems.forEach(function (item, index) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(20px)";

        item.style.transition =
            `opacity 0.5s ease ${index * 0.06}s,
             transform 0.5s ease ${index * 0.06}s,
             border-color 0.25s ease,
             background 0.25s ease,
             box-shadow 0.25s ease`;

        observer.observe(item);

    });



    /* =========================================
       SKILL TAG HOVER
    ========================================= */

    const tags =
        document.querySelectorAll(".tag");


    tags.forEach(function (tag, index) {

        tag.style.transitionDelay =
            (index % 5) * 0.015 + "s";

    });



    /* =========================================
       PROFILE BUTTON RIPPLE
    ========================================= */

    const buttons =
        document.querySelectorAll(
            ".profile-btn"
        );


    buttons.forEach(function (button) {


        button.addEventListener(
            "click",
            function (event) {


                const ripple =
                    document.createElement("span");


                ripple.style.position =
                    "absolute";


                ripple.style.width =
                    "10px";


                ripple.style.height =
                    "10px";


                ripple.style.borderRadius =
                    "50%";


                ripple.style.background =
                    "rgba(0,255,183,0.25)";


                ripple.style.transform =
                    "translate(-50%, -50%)";


                ripple.style.pointerEvents =
                    "none";


                ripple.style.left =
                    event.offsetX + "px";


                ripple.style.top =
                    event.offsetY + "px";


                ripple.style.animation =
                    "rippleEffect 0.6s ease-out";


                button.appendChild(ripple);


                setTimeout(function () {

                    ripple.remove();

                }, 600);

            }
        );

    });



    /* =========================================
       MOUSE PARALLAX
    ========================================= */

    document.addEventListener(
        "mousemove",
        function (event) {


            if (window.innerWidth <= 950) {
                return;
            }


            const x =
                (event.clientX /
                    window.innerWidth - 0.5);


            const y =
                (event.clientY /
                    window.innerHeight - 0.5);


            const hero =
                document.querySelector(".hero");


            if (hero) {

                hero.style.transform =
                    `translate(
                        ${x * 5}px,
                        ${y * 3}px
                    )`;

            }

        }
    );

});