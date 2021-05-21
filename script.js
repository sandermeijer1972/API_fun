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
    }, 3250);
    setTimeout(() => {
        knoppen.classList.add("knopaan");
    }, 4500);
};
const button = document.getElementById("uitleg3");
button.addEventListener("click", laatKnoppenZien);

const emptyResults = () => {
    result.classList.remove("hondenfoto");
    result.classList.remove("grappenmaker");
    result.classList.remove("nasafoto");
    result.innerHTML = '';
};


//KNOP 1 HONDENFOTO

const getDog = async function() {
    const apiURL = `https://dog.ceo/api/breeds/image/random`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("willekeurige hondenfoto: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addDogToDOM = async function() {
    emptyResults();  
    const dog = await getDog();
    result.classList.add("hondenfoto");
    const newH1 = document.createElement('h1');
    newH1.innerText = "Honden Foto";
    result.appendChild(newH1);
    const newPhoto = document.createElement('img');
    newPhoto.src = dog.message;
    result.appendChild(newPhoto);
    const newPRas = document.createElement('p');
    newPRas.innerText = dog.message.split("/")[4];
    result.appendChild(newPRas);    
};

const dogButton = document.getElementById("een");
dogButton.addEventListener("click", addDogToDOM);


//KNOP 2 GRAP

const getJoke = async function() {
    const apiURL = `https://icanhazdadjoke.com/`;
    try {
        const res = await fetch(apiURL, {headers: {Accept: "application/json"}});
        const data = await res.json();
        console.log("willekeurige grap: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addJokeToDOM = async function() {
    emptyResults();
    const joke = await getJoke();
    result.classList.add("grappenmaker");
    result.innerText = joke.joke;       
};

const jokeButton = document.getElementById("twee");
jokeButton.addEventListener("click", addJokeToDOM);


//KNOP 3


//KNOP 6 NASA FOTO

const nasaAPI_KEY = "8daInjHrDoELTFFexvoAAeAORS7mOdcqeIBQFGX2";

const getNasaPhoto = async function() {
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPI_KEY}`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("foto van de dag: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addNasaPhotoToDOM = async function() {
    emptyResults();
    const photo = await getNasaPhoto();
    result.classList.add("nasafoto");
    const newH1 = document.createElement('h1');
    newH1.innerText = "NASA 'foto van de dag'";
    result.appendChild(newH1);
    const newTitle = document.createElement('h2');
    newTitle.innerText = (photo.title);
    result.appendChild(newTitle);
    const newImg = document.createElement('img');
    newImg.src = (photo.hdurl);
    result.appendChild(newImg);
    const newDiv = document.createElement('div');
    newDiv.innerText = (photo.explanation);
    result.appendChild(newDiv);
}

const nasaButton = document.getElementById("zes");
nasaButton.addEventListener("click", addNasaPhotoToDOM);



