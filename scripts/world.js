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

const weekDag = () => {
    const dayNumb = date.getDay()
    console.log(dayNumb);
    let dag;
    switch(dayNumb) {
        case 0:
            dag = "zondag";
            break;
        case 1:
            dag = "maandag";
            break;
        case 2:
            dag = "dinsdag";
            break;
        case 3:
            dag = "woensdag";
            break;
        case 4:
            dag ="dondedag";
            break;
        case 5:
            dag = "vrijdag";
            break;
        case 6:
            dag = "zaterdag";
            break;
    };
    console.log(dag);
    return dag;
};

const maandJaar = () => {
    let maand;
    switch(month) {
        case 1:
            maand = "januari";
            break;
        case 2:
            maand = "februari";
            break;
        case 3:
            maand = "maart";
            break;
        case 4:
            maand = "april";
            break;
        case 5:
            maand = "mei";
            break;
        case 6:
            maand = "juni";
            break;
        case 7:
            maand = "juli";
            break;
        case 8:
            maand = "augustus";
            break;
        case 9:
            maand = "september";
            break;
        case 10:
            maand = "oktober";
            break;
        case 11:
            maand = "november";
            break;
        case 12:
            maand = "december";
            break;
    };
    console.log(maand);
    return maand;
};

const addDatumWeetjeToDOM = async function() {
    emptyResults();
    const dagVanDeWeek = weekDag();
    const maandVanHetJaar = maandJaar();
    const weetje = await getDatumWeetje();
    result.classList.add("datumweetje");
    const newPDate = document.createElement('p');
    newPDate.classList.add("datum");
    newPDate.innerText = ("het is vandaag " + dagVanDeWeek + " " + day + " " + maandVanHetJaar + " " + year);
    result.appendChild(newPDate);
    const newDivWeetje = document.createElement('div');
    newDivWeetje.innerText = weetje;
    result.appendChild(newDivWeetje);     
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
    result.innerText = ("De " + soort + " " + city.data[0].name.toUpperCase() + ", gelegen in de provincie " + city.data[0].region + " in " + city.data[0].country + " op het " + halfrond + " Halfrond heeft " +  new Intl.NumberFormat().format(city.data[0].population) + " inwoners.") 
};

const cityButton = document.getElementById("tien");
cityButton.addEventListener("click", addCityToDOM);
