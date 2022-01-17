// HONDENFOTO

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


// GRAP

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


// GERECHT

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


// WEETJE VAN DE DAG

const date = new Date();
console.log(date);
const month = (date.getMonth())+1;
const day = date.getDate();

const getDatumWeetje = async function() {
    const apiURL = `http://numbersapi.com/${month}/${day}/date`;
    try {
        const res = await fetch(apiURL);
        const data = await res.text();
        console.log("weetje van de dag: ", data);
        return data;
    } catch(error) {
        console.log("error: " + error);
    }
};


// KATTENFOTO

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


// NASA FOTO

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


// TRUMP TWEET

const getTrumpTweet = async function() {
    const apiURL = `https://tronalddump.io/random/quote`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("Trump-Tweet: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};


// PANDA WEETJE

const getPandaFact = async function() {
    const apiURL = `https://some-random-api.ml/facts/panda`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("panda-feitje: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};


// BELEDIGING

const getInsult = async function() {
    const apiURL = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("belediging: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};


// STAD OP AARDE

const getCity = async function() {
    const randomNumber = Math.floor(Math.random() * 23612 );
    console.log(randomNumber);
    const apiURL = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&offset=${randomNumber}&hateoasMode=off`;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("stad: ", data);
        return data;
    } catch(error) {
        console.log(error);
    }
};
