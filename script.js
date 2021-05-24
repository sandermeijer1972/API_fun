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
    result.classList.remove("gerecht");
    result.classList.remove("kattenfoto");
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


//KNOP 3 GERECHTEN

const getDish = async function() {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/random.php`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("willekeurig gerecht: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addDishToDOM = async function() {
    emptyResults();
    const dish = await getDish();
    result.classList.add("gerecht");
    const newH1 = document.createElement('h1');
    newH1.innerText = "wat eten we vanavond?";
    result.appendChild(newH1);
    const newH2 = document.createElement('h2');
    newH2.innerText = dish.meals[0].strMeal;
    result.appendChild(newH2);
    const newP = document.createElement('p');
    newP.classList.add("ingredienten");
    const newImg = document.createElement('img');
    newImg.src = dish.meals[0].strMealThumb;    
    newP.appendChild(newImg);
    const newDivList = document.createElement('div');
    const newH3 = document.createElement('h3');
    newH3.innerText = "boodschappenlijst";
    newDivList.appendChild(newH3);
    const newPI1 = document.createElement('p');
    newPI1.innerText = (dish.meals[0].strMeasure1 + " " + dish.meals[0].strIngredient1);
    newDivList.appendChild(newPI1);
    const newPI2 = document.createElement('p');
    newPI2.innerText = (dish.meals[0].strMeasure2 + " " + dish.meals[0].strIngredient2);
    newDivList.appendChild(newPI2);
    const newPI3 = document.createElement('p');
    newPI3.innerText = (dish.meals[0].strMeasure3 + " " + dish.meals[0].strIngredient3);
    newDivList.appendChild(newPI3);
    const newPI4 = document.createElement('p');
    newPI4.innerText = (dish.meals[0].strMeasure4 + " " + dish.meals[0].strIngredient4);
    newDivList.appendChild(newPI4);
    const newPI5 = document.createElement('p');
    newPI5.innerText = (dish.meals[0].strMeasure5 + " " + dish.meals[0].strIngredient5);
    newDivList.appendChild(newPI5);
    const newPI6 = document.createElement('p');
    newPI6.innerText = (dish.meals[0].strMeasure6 + " " + dish.meals[0].strIngredient6);
    newDivList.appendChild(newPI6);
    const newPI7 = document.createElement('p');
    newPI7.innerText = (dish.meals[0].strMeasure7 + " " + dish.meals[0].strIngredient7);
    newDivList.appendChild(newPI7);
    const newPI8 = document.createElement('p');
    newPI8.innerText = (dish.meals[0].strMeasure8 + " " + dish.meals[0].strIngredient8);
    newDivList.appendChild(newPI8);
    const newPI9 = document.createElement('p');
    newPI9.innerText = (dish.meals[0].strMeasure9 + " " + dish.meals[0].strIngredient9);
    newDivList.appendChild(newPI9);
    const newPI10 = document.createElement('p');
    newPI10.innerText = (dish.meals[0].strMeasure10 + " " + dish.meals[0].strIngredient10);
    newDivList.appendChild(newPI10);
    const newPI11 = document.createElement('p');
    newPI11.innerText = (dish.meals[0].strMeasure11 + " " + dish.meals[0].strIngredient11);
    newDivList.appendChild(newPI11);
    const newPI12 = document.createElement('p');
    newPI12.innerText = (dish.meals[0].strMeasure12 + " " + dish.meals[0].strIngredient12);
    newDivList.appendChild(newPI12);
    newP.appendChild(newDivList);
    result.appendChild(newP);
    const newA = document.createElement('a');
    newA.innerText = "klik hier voor de video";
    newA.href = dish.meals[0].strYoutube;
    newA.target = "_blank";
    result.appendChild(newA);
};

const dishButton = document.getElementById("drie");
dishButton.addEventListener("click", addDishToDOM);

//KNOP 5 KATTEN FOTO

const catAPI_KEY = "fac80b6b-50f5-4097-ac11-46bd227ef4a4";

const getCat = async function() {
    const apiURL = `https://api.thecatapi.com/v1/images/search?format=json`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("willekeurige kat: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};

const addCatToDOM = async function() {
    emptyResults();
    const cat1 = await getCat();
    const cat2 = await getCat();
    result.classList.add("kattenfoto");
    const newH1 = document.createElement('h1');
    newH1.innerText = "2 Katten Foto's";
    result.appendChild(newH1);
    const newDiv = document.createElement('div');
    newDiv.classList.add("fotos");
    const newImgCat1 = document.createElement('img');
    newImgCat1.src = (cat1[0].url);
    newDiv.appendChild(newImgCat1);
    const newImgCat2 = document.createElement('img');
    newImgCat2.src = (cat2[0].url);
    newDiv.appendChild(newImgCat2);
    result.appendChild(newDiv);    
}

const catButton = document.getElementById("vijf");
catButton.addEventListener("click", addCatToDOM);



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



