const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;
const temp = 8;   
const wind = 10;  
function calculateWindChill(t, w) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)).toFixed(1);
}
let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
    windChill = calculateWindChill(temp, wind);
}
document.getElementById("windChill").textContent = windChill;