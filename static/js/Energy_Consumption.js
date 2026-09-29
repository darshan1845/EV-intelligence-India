/* =========================================================
   EV ENERGY CONSUMPTION PREDICTION
   JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const form = document.querySelector("form");

    const trafficSlider =
        document.getElementById("traffic_density");

    const trafficValue =
        document.getElementById("trafficValue");

    const trafficCategory =
        document.getElementById("trafficCategory");

    const submitButton =
        document.querySelector('button[type="submit"]');


    /* =====================================================
       TRAFFIC CATEGORY
       ===================================================== */

    function updateTrafficCategory() {

        if (!trafficSlider) {
            return;
        }

        const value =
            parseFloat(trafficSlider.value);

        /* Display exact slider value */

        if (trafficValue) {

            trafficValue.textContent =
                value.toFixed(3);
        }


        /* Determine traffic category */

        if (value <= 0.333) {

            if (trafficCategory) {
                trafficCategory.textContent =
                    "Traffic Category: Low Traffic";
            }

        }

        else if (value <= 0.666) {

            if (trafficCategory) {
                trafficCategory.textContent =
                    "Traffic Category: Medium Traffic";
            }

        }

        else {

            if (trafficCategory) {
                trafficCategory.textContent =
                    "Traffic Category: High Traffic";
            }
        }


        /* Update slider background */

        const min =
            parseFloat(trafficSlider.min);

        const max =
            parseFloat(trafficSlider.max);

        const percentage =
            ((value - min) / (max - min)) * 100;


        trafficSlider.style.background =
            `linear-gradient(
                to right,
                #3ee8c0 0%,
                #3ee8c0 ${percentage}%,
                rgba(100, 150, 145, 0.25) ${percentage}%,
                rgba(100, 150, 145, 0.25) 100%
            )`;
    }


    /* =====================================================
       TRAFFIC SLIDER EVENT
       ===================================================== */

    if (trafficSlider) {

        trafficSlider.addEventListener(
            "input",
            updateTrafficCategory
        );

        updateTrafficCategory();
    }


    /* =====================================================
       REMOVE VALIDATION ERROR
       ===================================================== */

    const allInputs =
        document.querySelectorAll("input, select");


    allInputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                input.classList.remove("invalid");
            }
        );


        input.addEventListener(
            "change",
            function () {

                input.classList.remove("invalid");
            }
        );

    });


    /* =====================================================
       FORM VALIDATION
       ===================================================== */

    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                let isValid = true;


                /* -----------------------------------------
                   REQUIRED FIELDS
                   ----------------------------------------- */

                const requiredFields =
                    form.querySelectorAll("[required]");


                requiredFields.forEach(
                    function (field) {

                        field.classList.remove("invalid");


                        if (!field.value.trim()) {

                            field.classList.add(
                                "invalid"
                            );

                            isValid = false;
                        }

                    }
                );


                /* -----------------------------------------
                   NUMBER VALIDATION
                   ----------------------------------------- */

                const numberInputs =
                    form.querySelectorAll(
                        'input[type="number"]'
                    );


                numberInputs.forEach(
                    function (input) {

                        const value =
                            Number(input.value);


                        if (isNaN(value)) {

                            input.classList.add(
                                "invalid"
                            );

                            isValid = false;
                        }

                    }
                );


                /* -----------------------------------------
                   BATTERY HEALTH
                   ----------------------------------------- */

                const batteryHealth =
                    document.getElementById(
                        "battery_health_pct"
                    );


                if (batteryHealth) {

                    const value =
                        Number(batteryHealth.value);


                    if (value < 0 || value > 100) {

                        batteryHealth.classList.add(
                            "invalid"
                        );

                        isValid = false;
                    }
                }


                /* -----------------------------------------
                   STOP SUBMISSION
                   ----------------------------------------- */

                if (!isValid) {

                    event.preventDefault();

                    const firstInvalid =
                        form.querySelector(".invalid");


                    if (firstInvalid) {

                        firstInvalid.focus();

                        firstInvalid.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }

                    return;
                }


                /* -----------------------------------------
                   LOADING STATE
                   ----------------------------------------- */

                if (submitButton) {

                    submitButton.classList.add(
                        "loading"
                    );

                    submitButton.textContent =
                        "Predicting Energy Consumption...";
                }

            }
        );
    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const formLabels =
        document.querySelectorAll("form label");


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
                threshold: 0.1
            }
        );


    formLabels.forEach(function (label) {

        label.style.opacity = "0";

        label.style.transform =
            "translateY(8px)";

        label.style.transition =
            "opacity 0.45s ease, transform 0.45s ease";

        observer.observe(label);

    });


    console.log(
        "Energy Consumption Prediction page loaded successfully."
    );

});