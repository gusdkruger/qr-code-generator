const form = document.getElementById("qr-form");
const input = document.getElementById("qr-form__input");
const button = document.getElementById("qr-form__submit");
const container = document.getElementById("qr-container");
const qrCode = document.getElementById("qr-container__img");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if(text) {
        button.innerText = "Generating...";
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;
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
