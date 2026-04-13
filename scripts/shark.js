const year = document.querySelector("#currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value;

        alert(`Thank you ${name}! We will contact you soon.`);

        localStorage.setItem("username", name);
    });
}

const company = {
    name: "Shark Project",
    founded: 2002,
    employees: 200
};

console.log(`Company: ${company.name}, Employees: ${company.employees}`);

const services = ["Marketing", "A/B Testing", "Reinvest"];

const longServices = services.filter(service => service.length > 8);

console.log("Long services:", longServices);

function checkMessage(message) {
    if (message === "") {
        console.log("No message provided");
    } else {
        console.log("Message received");
    }
}

const messageInput = document.querySelector("#message");

if (messageInput) {
    checkMessage(messageInput.value);
}

const savedName = localStorage.getItem("username");

if (savedName) {
    const welcome = document.createElement("p");
    welcome.textContent = `Welcome back ${savedName}!`;
    document.body.prepend(welcome);
}