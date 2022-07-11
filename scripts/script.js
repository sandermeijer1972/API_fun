const knoppen = document.getElementById("knoppen");
const uitlegText = document.getElementById("uitleg");
const result = document.getElementById("resultaat");
const body = document.getElementById("body");
const main = document.getElementById("main");

const laatKnoppenZien = function() {
    uitlegText.classList.add("headerweg");
    setTimeout(() => {
        uitlegText.innerHTML = '';
        body.classList.add("dark");
        body.classList.add("startscherm");
    }, 4000);
    setTimeout(() => {
        knoppen.classList.add("knopaan");
    }, 5500);
    setTimeout(() => {
        const newP = document.createElement('p');
        newP.classList.add("uitleg");
        newP.innerText = "Helaas werken niet alle knoppen even goed. Om de grootste fouten op te vangen, klik dan eerst even op onderstaande link. Je komt dan op een andere pagina terecht, waar je even 'request temporary access to the demo server' moet aanvragen. Daarna kan je hierboven in principe elke knop zo vaak aanklikken als je zelf wil.";
        result.appendChild(newP);        
    }, 8000);
    setTimeout(() => {
        const newPLink = document.createElement('p');
        newPLink.classList.add("link");
        const newA = document.createElement('a');
        newA.target = "_blank";
        newA.href = "https://cors-anywhere.herokuapp.com/corsdemo";
        newA.innerText = "===> klik voor toegang tot de data <===";
        newPLink.appendChild(newA);
        result.appendChild(newPLink);         
    }, 8500);
    setTimeout(() => {
        result.classList.add("start");
    }, 9000);
};
const button = document.getElementById("uitleg3");
button.addEventListener("click", laatKnoppenZien);

const emptyResults = () => {
    body.classList.remove("startscherm");
    result.classList.remove("start");
    result.classList.remove("hondenfoto");
    result.classList.remove("grappenmaker");
    result.classList.remove("gerecht");
    result.classList.remove("datumweetje");
    result.classList.remove("kattenfoto");
    result.classList.remove("nasafoto");
    result.classList.remove("trumptweet");
    result.classList.remove("panda");
    result.classList.remove("belediging");
    result.classList.remove("wereldplaats");
    result.innerHTML = '';
};
