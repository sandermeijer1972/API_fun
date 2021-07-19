//KNOP 1 HONDENFOTO

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


//KNOP 5 KATTENFOTO'S

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


//KNOP 8 PANDABEER

const addPandaToDOM = async function() {
    emptyResults();
    const pandaFact = await getPandaFact();
    result.classList.add("panda");
    const newH1 = document.createElement('h1');
    newH1.innerText = "de pandabeer";
    result.appendChild(newH1);
    const newDiv = document.createElement('div');
    newDiv.classList.add("pandabeer");
    const newImg1 = document.createElement('img');
    newImg1.src = "./pictures/panda1.gif";
    newDiv.appendChild(newImg1);
    const newP = document.createElement('p');
    newP.innerText = pandaFact.fact;
    newDiv.appendChild(newP);
    const newImg2 = document.createElement('img');
    newImg2.src = "./pictures/panda2.gif";
    newDiv.appendChild(newImg2);
    result.appendChild(newDiv);
};

const pandaButton = document.getElementById("acht");
pandaButton.addEventListener("click", addPandaToDOM);
