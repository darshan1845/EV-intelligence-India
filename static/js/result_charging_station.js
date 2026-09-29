/* =========================================================
   CHARGING STATION RESULT PAGE - JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       RESULT ELEMENT
       ===================================================== */

    const resultHeading =
        document.querySelector("body > h2 + h1");


    /* =====================================================
       RESULT ANIMATION
       ===================================================== */

    if (resultHeading) {

        resultHeading.style.opacity = "0";
        resultHeading.style.transform =
            "translateY(20px) scale(0.96)";

        setTimeout(function () {

            resultHeading.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            resultHeading.style.opacity = "1";

            resultHeading.style.transform =
                "translateY(0) scale(1)";

        }, 150);

    }


    /* =====================================================
       BUTTON LOADING EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll("a button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const originalText =
                button.textContent.trim();

            if (originalText === "Predict Again") {

                button.textContent =
                    "Opening Prediction...";

                button.style.opacity = "0.75";

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const elements = document.querySelectorAll(
        "body > p, body > h2, body > a"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(15px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "Charging Station Result page loaded successfully."
    );

});