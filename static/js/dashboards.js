
document.addEventListener("DOMContentLoaded", function () {

    const dashboardLinks = document.querySelectorAll(
        "[data-dashboard-link]"
    );

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    let toastTimeout;

    function showToast(message) {
        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimeout);

        toastTimeout = setTimeout(function () {
            toast.classList.remove("show");
        }, 2800);
    }

    dashboardLinks.forEach(function (link, index) {

        link.addEventListener("click", function (event) {

            const dashboardUrl = link.getAttribute("href");

            if (
                !dashboardUrl ||
                dashboardUrl.trim() === "" ||
                dashboardUrl === "#"
            ) {
                event.preventDefault();

                showToast(
                    "Add the URL for Dashboard " +
                    (index + 1) +
                    " in dashboards.html first."
                );

                return;
            }

            // External dashboard links open in a new tab.
            if (
                dashboardUrl.startsWith("https://") ||
                dashboardUrl.startsWith("http://")
            ) {
                event.preventDefault();

                window.open(
                    dashboardUrl,
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });

    });

    // Subtle reveal animation when cards enter the viewport.
    const cards = document.querySelectorAll(".dashboard-card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("card-visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        cards.forEach(function (card) {
            observer.observe(card);
        });

    } else {
        cards.forEach(function (card) {
            card.classList.add("card-visible");
        });
    }

});