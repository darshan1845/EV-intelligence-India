/* ============================================================
   EV INTELLIGENCE - RANGE ANXIETY
   ============================================================ */


/* ============================================================
   TRAFFIC SLIDER
   ============================================================ */

const trafficSlider =
    document.getElementById("traffic_density");

const trafficValue =
    document.getElementById("trafficValue");

const trafficCategory =
    document.getElementById("trafficCategory");


function updateTrafficCategory() {

    if (!trafficSlider) {
        return;
    }

    const value =
        parseFloat(trafficSlider.value);


    /* Display slider value */

    if (trafficValue) {
        trafficValue.textContent =
            value.toFixed(3);
    }


    /* Determine traffic category */

    if (value <= 0.333) {

        trafficCategory.textContent =
            "Traffic Category: Low Traffic";

    }

    else if (value <= 0.666) {

        trafficCategory.textContent =
            "Traffic Category: Medium Traffic";

    }

    else {

        trafficCategory.textContent =
            "Traffic Category: High Traffic";

    }

}


/* Update when slider moves */

if (trafficSlider) {

    trafficSlider.addEventListener(
        "input",
        updateTrafficCategory
    );

    updateTrafficCategory();

}


/* ============================================================
   FORM SUBMISSION
   ============================================================ */

const predictionForm =
    document.querySelector("form");

const predictButton =
    document.querySelector(
        'input[type="submit"]'
    );


if (predictionForm && predictButton) {

    predictionForm.addEventListener(
        "submit",
        function () {

            predictButton.disabled = true;

            predictButton.value =
                "Predicting...";

        }
    );

}


/* ============================================================
   INPUT FOCUS EFFECT
   ============================================================ */

const inputs =
    document.querySelectorAll(
        'input[type="number"], select'
    );


inputs.forEach(function (input) {

    input.addEventListener(
        "focus",
        function () {

            this.parentElement?.classList.add(
                "active-field"
            );

        }
    );


    input.addEventListener(
        "blur",
        function () {

            this.parentElement?.classList.remove(
                "active-field"
            );

        }
    );

});


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}