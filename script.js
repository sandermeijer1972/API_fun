const newJoke = document.getElementById('grap');
const newPhoto = document.getElementById('foto');
const clickJokeButton = document.getElementById('nieuwegrap');
const clickPhotoButton = document.getElementById('nasafoto');
const API_KEY = "8daInjHrDoELTFFexvoAAeAORS7mOdcqeIBQFGX2";

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
    const joke = await getJoke();
    newJoke.innerHTML=(joke.joke);    
};

clickJokeButton.addEventListener("click", addJokeToDOM);

const getPhoto = async function() {
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("foto van de dag: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addPhotoToDOM = async function() {
    const photo = await getPhoto();
    newPhoto.innerHTML = '';
    const newHead = document.createElement('h1');
    newHead.innerText = "NASA foto";
    newPhoto.appendChild(newHead);
    const newTitle = document.createElement('h2');
    newTitle.innerText = (photo.title);
    newPhoto.appendChild(newTitle);
    const newImg = document.createElement('img');
    newImg.src = (photo.hdurl);
    newPhoto.appendChild(newImg);
    const newDiv = document.createElement('div');
    newDiv.innerText = (photo.explanation);
    newPhoto.appendChild(newDiv);
}

clickPhotoButton.addEventListener("click", addPhotoToDOM);



