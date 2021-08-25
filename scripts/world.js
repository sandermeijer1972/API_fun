//KNOP 3 GERECHTEN

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
    const newPI13 = document.createElement('p');
    newPI13.innerText = (dish.meals[0].strMeasure13 + " " + dish.meals[0].strIngredient13);
    newDivList.appendChild(newPI13);
    const newPI14 = document.createElement('p');
    newPI14.innerText = (dish.meals[0].strMeasure14 + " " + dish.meals[0].strIngredient14);
    newDivList.appendChild(newPI14);
    const newPI15 = document.createElement('p');
    newPI15.innerText = (dish.meals[0].strMeasure15 + " " + dish.meals[0].strIngredient15);
    newDivList.appendChild(newPI15);
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


//KNOP 4 DATUM WEETJE

const addDatumWeetjeToDOM = async function() {
    emptyResults();
    const weetje = await getDatumWeetje();
    result.classList.add("datumweetje");
    const newPDate = document.createElement('p');
    newPDate.classList.add("datum");
    newPDate.innerText = ("het is vandaag: " + date);
    result.appendChild(newPDate);
    const newDivWeetje = document.createElement('div');
    newDivWeetje.innerText = weetje;
    result.appendChild(newDivWeetje); 
    const newPUitleg = document.createElement('p');
    newPUitleg.classList.add("uitleg");
    newPUitleg.innerText = "Als hierboven iets staat met 'corsdemo', betekent dat dat er een klein probleempje is. Om dit op te lossen, klik dan op de link hieronder. Er opent dan een nieuwe pagina, waar je kan klikken om toegang te krijgen tot de data. Klik daarna hier op deze pagina opnieuw op knop 4.";
    result.appendChild(newPUitleg);
    const newPLink = document.createElement('p');
    newPLink.classList.add("link");
    const newA = document.createElement('a');
    newA.target = "_blank";
    newA.href = "https://cors-anywhere.herokuapp.com/corsdemo";
    newA.innerText = "===> klik voor toegang tot de data <===";
    newPLink.appendChild(newA);
    result.appendChild(newPLink);          
};

const dateButton = document.getElementById("vier");
dateButton.addEventListener("click", addDatumWeetjeToDOM);


//KNOP 6 NASA FOTO

const addNasaPhotoToDOM = async function() {
    emptyResults();
    const photo = await getNasaPhoto();
    result.classList.add("nasafoto");
    const newH1 = document.createElement('h1');    
    if (photo.media_type == "video") {
        newH1.innerText = "NASA 'video van de dag'";
    } else {
        newH1.innerText = "NASA 'foto van de dag'";
    };
    result.appendChild(newH1);
    const newTitle = document.createElement('h2');
    newTitle.innerText = (photo.title);
    result.appendChild(newTitle);
    if (photo.media_type == "video") {
        const newFrame = document.createElement('iframe');
        newFrame.src = photo.url;          
        result.appendChild(newFrame);
    } else {
        const newImg = document.createElement('img');
        newImg.src = (photo.hdurl);
        result.appendChild(newImg);
    };    
    const newDiv = document.createElement('div');
    newDiv.innerText = (photo.explanation);
    result.appendChild(newDiv);
};

const nasaButton = document.getElementById("zes");
nasaButton.addEventListener("click", addNasaPhotoToDOM);


//KNOP 10 RANDOM STAD OP AARDE

const addCityToDOM = async function() {
    emptyResults();
    const city = await getCity();
    result.classList.add("wereldplaats");
    let soort;
    if (city.data[0].type === "CITY") {
        soort = "stad";
    } else if (city.data[0].type === "ADM2") {
        soort = "gemeente";
    };
    let halfrond;
    if (city.data[0].latitude > 0) {
        halfrond = "Noordelijk";
    } else {
        halfrond = "Zuidelijk";
    };
    result.innerText = ("De " + soort + " " + city.data[0].name.toUpperCase() + ", gelegen in de provincie " + city.data[0].region + " in " + city.data[0].country + " op het " + halfrond + " Halfrond heeft " + city.data[0].population + " inwoners.") 
};

const cityButton = document.getElementById("tien");
cityButton.addEventListener("click", addCityToDOM);
