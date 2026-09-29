/* ============================================================
   EV INTELLIGENCE PLATFORM
   BATTERY HEALTH - RESULT PAGE
   ============================================================ */


/* ============================================================
   GET BATTERY HEALTH VALUE
   ============================================================ */

const resultHeading =
    document.querySelector("main section h1");


let batteryHealth = null;


if (resultHeading) {

    const text =
        resultHeading.textContent
            .replace("%", "")
            .trim();

    batteryHealth =
        parseFloat(text);
}


/* ============================================================
   ADD HEALTH STATUS CLASS
   ============================================================ */

if (batteryHealth !== null && !isNaN(batteryHealth)) {

    if (batteryHealth >= 90) {

        document.body.classList.add(
            "health-excellent"
        );

    }

    else if (batteryHealth >= 75) {

        document.body.classList.add(
            "health-good"
        );

    }

    else if (batteryHealth >= 60) {

        document.body.classList.add(
            "health-moderate"
        );

    }

    else {

        document.body.classList.add(
            "health-low"
        );
    }
}


/* ============================================================
   BUTTON EFFECT
   ============================================================ */

const buttons =
    document.querySelectorAll(
        "main a button"
    );


buttons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const text =
                    button.textContent.trim();


                if (
                    text ===
                    "Make Another Prediction"
                ) {

                    button.textContent =
                        "Opening Prediction...";

                    button.disabled = true;

                }


                else if (
                    text === "Go to Home"
                ) {

                    button.textContent =
                        "Opening Home...";

                    button.disabled = true;

                }

            }
        );

    }
);


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const sections =
    document.querySelectorAll(
        "main section, footer"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                }
            );

        },
        {
            threshold: 0.10
        }
    );


sections.forEach(
    function(section) {

        section.classList.add(
            "result-reveal"
        );

        revealObserver.observe(section);

    }
);


/* ============================================================
   CONSOLE
   ============================================================ */

console.log(
    "Battery Health Result Page Loaded"
);

console.log(
    "Predicted Battery Health:",
    batteryHealth,
    "%"
);