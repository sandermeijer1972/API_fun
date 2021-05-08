const newJoke = document.getElementById('grap');
const clickButton = document.getElementById('nieuwegrap');

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

clickButton.addEventListener("click", addJokeToDOM);

