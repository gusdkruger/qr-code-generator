const form = document.getElementById("qr-form");
form.addEventListener("submit", event => {
    event.preventDefault();

    const text = document.getElementById("input-field").value.trim();
    const button = document.getElementById("button");
    const container = document.getElementById("qr-container");
    const qrCode = document.getElementById("qr-code");
    button.innerText = "Generating..."
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`;

    qrCode.addEventListener("load",() => {
        container.classList.add("fade-in");
        button.innerText = "Generated!";
        setTimeout(() => {
            button.innerText = "Generate";
        }, 3500);
    })
});
