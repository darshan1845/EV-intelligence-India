/* =========================================================
   CHARGING STATION PREDICTION - JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const form = document.querySelector("form");

    const vehicleInputs = [
        document.getElementById("two_wheeler"),
        document.getElementById("three_wheeler"),
        document.getElementById("four_wheeler"),
        document.getElementById("goods_vehicles"),
        document.getElementById("public_service"),
        document.getElementById("special_category"),
        document.getElementById("construction"),
        document.getElementById("other")
    ];

    const grandTotal = document.getElementById("grand_total");

    const submitButton =
        document.querySelector('button[type="submit"]');


    /* =====================================================
       CALCULATE GRAND TOTAL
       ===================================================== */

    function calculateGrandTotal() {

        let total = 0;

        vehicleInputs.forEach(function (input) {

            if (input) {
                const value = Number(input.value) || 0;

                if (value >= 0) {
                    total += value;
                }
            }

        });

        if (grandTotal) {
            grandTotal.value = total;
        }
    }


    /* =====================================================
       VEHICLE INPUT EVENTS
       ===================================================== */

    vehicleInputs.forEach(function (input) {

        if (!input) return;

        input.addEventListener("input", function () {

            // Prevent negative values
            if (Number(input.value) < 0) {
                input.value = 0;
            }

            calculateGrandTotal();

            // Remove validation error
            input.classList.remove("invalid");
        });

    });


    /* =====================================================
       INITIAL CALCULATION
       ===================================================== */

    calculateGrandTotal();


    /* =====================================================
       FORM VALIDATION
       ===================================================== */

    if (form) {

        form.addEventListener("submit", function (event) {

            let isValid = true;

            const requiredFields =
                form.querySelectorAll("[required]");

            requiredFields.forEach(function (field) {

                field.classList.remove("invalid");

                if (!field.value.trim()) {

                    field.classList.add("invalid");

                    isValid = false;
                }

            });


            /* ---------------------------------------------
               CHECK NUMERIC VALUES
               --------------------------------------------- */

            const numberInputs =
                form.querySelectorAll('input[type="number"]');

            numberInputs.forEach(function (input) {

                const value = Number(input.value);

                if (value < 0 || isNaN(value)) {

                    input.classList.add("invalid");

                    isValid = false;
                }

            });


            /* ---------------------------------------------
               STOP SUBMISSION IF INVALID
               --------------------------------------------- */

            if (!isValid) {

                event.preventDefault();

                const firstInvalid =
                    form.querySelector(".invalid");

                if (firstInvalid) {
                    firstInvalid.focus();
                }

                return;
            }


            /* ---------------------------------------------
               UPDATE TOTAL BEFORE SUBMIT
               --------------------------------------------- */

            calculateGrandTotal();


            /* ---------------------------------------------
               LOADING EFFECT
               --------------------------------------------- */

            if (submitButton) {

                submitButton.classList.add("loading");

                submitButton.innerHTML =
                    "Predicting Charging Requirement...";
            }

        });

    }


    /* =====================================================
       REMOVE ERROR WHEN USER CORRECTS INPUT
       ===================================================== */

    const allInputs =
        document.querySelectorAll("input, select");

    allInputs.forEach(function (input) {

        input.addEventListener("input", function () {
            input.classList.remove("invalid");
        });

        input.addEventListener("change", function () {
            input.classList.remove("invalid");
        });

    });


    /* =====================================================
       SMOOTH SECTION REVEAL
       ===================================================== */

    const sections =
        document.querySelectorAll("form h2");

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
            threshold: 0.15
        }
    );


    sections.forEach(function (section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(10px)";
        section.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        observer.observe(section);

    });


    console.log(
        "Charging Station Prediction page loaded successfully."
    );

});