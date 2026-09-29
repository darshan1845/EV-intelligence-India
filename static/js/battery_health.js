/* ============================================================
   EV INTELLIGENCE PLATFORM
   BATTERY HEALTH PREDICTION
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

    if (trafficValue) {
        trafficValue.textContent =
            value.toFixed(3);
    }

    if (!trafficCategory) {
        return;
    }

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


if (trafficSlider) {

    trafficSlider.addEventListener(
        "input",
        updateTrafficCategory
    );

    updateTrafficCategory();
}


/* ============================================================
   FORM VALIDATION
   ============================================================ */

const batteryForm =
    document.querySelector("form");


if (batteryForm) {

    batteryForm.addEventListener(
        "submit",
        function(event) {

            const requiredFields =
                batteryForm.querySelectorAll(
                    "input[required], select[required]"
                );

            let valid = true;


            requiredFields.forEach(
                function(field) {

                    if (!field.value.trim()) {

                        valid = false;

                        field.classList.add(
                            "input-error"
                        );

                    }

                    else {

                        field.classList.remove(
                            "input-error"
                        );

                    }

                }
            );


            if (!valid) {

                event.preventDefault();

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            const submitButton =
                batteryForm.querySelector(
                    'input[type="submit"]'
                );


            if (submitButton) {

                submitButton.value =
                    "Predicting...";

                submitButton.disabled =
                    true;
            }

        }
    );
}


/* ============================================================
   REMOVE ERROR WHEN USER STARTS TYPING
   ============================================================ */

const formFields =
    document.querySelectorAll(
        "input, select"
    );


formFields.forEach(
    function(field) {

        field.addEventListener(
            "input",
            function() {

                this.classList.remove(
                    "input-error"
                );

            }
        );

        field.addEventListener(
            "change",
            function() {

                this.classList.remove(
                    "input-error"
                );

            }
        );

    }
);


/* ============================================================
   PAGE LOAD
   ============================================================ */

console.log(
    "Battery Health Prediction Page Loaded"
);