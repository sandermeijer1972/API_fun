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
    }, 4000);
    setTimeout(() => {
        knoppen.classList.add("knopaan");
    }, 5500);
};
const button = document.getElementById("uitleg3");
button.addEventListener("click", laatKnoppenZien);

const emptyResults = () => {
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
