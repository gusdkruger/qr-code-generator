const form = document.getElementById("qr-form");
const button = document.getElementById("qr-form-btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = document.getElementById("qr-input-field").value.trim();
    const container = document.getElementById("qr-container");
    const qrCode = document.getElementById("qr-code");
    button.innerText = "Generating...";
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;

    qrCode.addEventListener("load", () => {
        container.classList.add("fade-in");
        button.innerText = "Generated!";
    })
});

button.addEventListener("mouseover", () => {
    if(button.innerText === "Generated!") {
        button.innerText = "Generate New!";
    }
});
button.addEventListener("mouseout", () => {
    if(button.innerText === "Generate New!") {
        button.innerText = "Generated!";
    }
});
