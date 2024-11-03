const form = document.getElementById("form");
const input = document.getElementById("form__input");
const button = document.getElementById("form__submit");
const container = document.getElementById("container");
const qrCode = document.getElementById("container__qr-code");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if(text) {
        button.innerText = "Generating...";
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;
    }
    else {
        alert("Input text must not be empty!");
        input.value = "";
    }
});

button.addEventListener("mouseover", () => {
    if(button.innerText == "Generated!") {
        button.innerText = "Generate New!";
    }
});

button.addEventListener("mouseout", () => {
    if(button.innerText == "Generate New!") {
        button.innerText = "Generated!";
    }
});

qrCode.addEventListener("load", () => {
    container.classList.add("fade-in");
    button.innerText = "Generated!";
})
