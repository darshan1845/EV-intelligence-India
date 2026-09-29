/* ============================================================
   EV INTELLIGENCE PLATFORM
   RANGE ANXIETY - RESULT PAGE
   ============================================================ */


/* ============================================================
   GET PREDICTION RESULT
   ============================================================ */

const headings = document.querySelectorAll("h1");

let predictionText = "";

if (headings.length > 1) {
    predictionText =
        headings[1].textContent.trim();
}


/* ============================================================
   ADD RISK CLASS
   ============================================================ */

if (
    predictionText.includes(
        "High Risk of Range Anxiety"
    )
) {

    document.body.classList.add("risk-high");

}

else if (
    predictionText.includes(
        "Low Risk of Range Anxiety"
    )
) {

    document.body.classList.add("risk-low");

}


/* ============================================================
   BUTTON LOADING EFFECT
   ============================================================ */

const actionLinks =
    document.querySelectorAll("a button");


actionLinks.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const buttonText =
                button.textContent.trim();


            if (
                buttonText === "Predict Again"
            ) {

                button.textContent =
                    "Opening Prediction...";

                button.disabled = true;

            }


            if (
                buttonText === "Back to Home"
            ) {

                button.textContent =
                    "Opening Home...";

                button.disabled = true;

            }

        }
    );

});


/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const sections =
    document.querySelectorAll(
        "h2, h3, p, ul, a"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

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
            threshold: 0.10
        }
    );


sections.forEach(function(section) {

    section.classList.add("result-reveal");

    revealObserver.observe(section);

});


/* ============================================================
   RESULT CONSOLE MESSAGE
   ============================================================ */

console.log(
    "EV Range Anxiety Result Page Loaded"
);

console.log(
    "Prediction:",
    predictionText
);