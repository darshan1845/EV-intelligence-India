/* =========================================================
   ENERGY CONSUMPTION RESULT PAGE
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PREDICTION RESULT
       ===================================================== */

    const resultValue =
        document.querySelector(
            "main section:first-child h1"
        );


    /* =====================================================
       RESULT ANIMATION
       ===================================================== */

    if (resultValue) {

        resultValue.style.opacity = "0";

        resultValue.style.transform =
            "translateY(20px) scale(0.95)";


        setTimeout(function () {

            resultValue.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            resultValue.style.opacity = "1";

            resultValue.style.transform =
                "translateY(0) scale(1)";

        }, 150);
    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(15px)";

        section.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(section);

    });


    /* =====================================================
       BUTTON LOADING EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            "main > a button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const text =
                    button.textContent.trim();


                if (
                    text ===
                    "Make Another Prediction"
                ) {

                    button.textContent =
                        "Opening Prediction...";

                    button.style.opacity =
                        "0.75";
                }


                if (
                    text ===
                    "Go to Home"
                ) {

                    button.textContent =
                        "Opening Home...";

                    button.style.opacity =
                        "0.75";
                }

            }
        );

    });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "Energy Consumption Result page loaded successfully."
    );

});