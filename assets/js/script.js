document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("contentContainer");
    const button = document.getElementById("checkbox");
    const newParagraphContainer = document.getElementById(
        "newParagraphContainer"
    );

    let counter = 1;

    window.counter = function () {
        counter++;
    };

    window.addParagraph = function () {
        let a = 0;

        if (counter === 1) {
            const newParagraph = document.createElement("p");

            newParagraph.textContent = "This is a new paragraph.";
            newParagraphContainer.appendChild(newParagraph);
        } else {
            const anotherParagraph = document.createElement("p");

            anotherParagraph.textContent = "This is another paragraph.";
            newParagraphContainer.appendChild(anotherParagraph);
        }
    };

    window.buttonOnClickFunction = function () {
        contentContainer.classList.toggle("changeBgColor");
    };

    button.addEventListener("change", function () {
        if (this.checked) {
            contentContainer.classList.add("changeBgColor");
        } else {
            contentContainer.classList.remove("changeBgColor");
        }
    });
});
