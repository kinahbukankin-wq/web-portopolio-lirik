document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.96)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);
        });
    });
});
