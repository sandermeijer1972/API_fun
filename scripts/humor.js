//KNOP 2 GRAP

const addJokeToDOM = async function() {
    emptyResults();
    const joke = await getJoke();
    result.classList.add("grappenmaker");
    result.innerText = joke.joke;       
};

const jokeButton = document.getElementById("twee");
jokeButton.addEventListener("click", addJokeToDOM);


//KNOP 7 DONALD TRUMP TWEET

const addTrumpTweetToDOM = async function() {
    emptyResults();
    const tweet = await getTrumpTweet();
    const tweetDatum = tweet.appeared_at.split("T")[0];
    result.classList.add("trumptweet");
    const newH1 = document.createElement('h1');
    newH1.innerText = "Donald Trump on Twitter";
    result.appendChild(newH1);
    const newDiv = document.createElement('div');
    newDiv.classList.add("tweet");
    const newImg = document.createElement('img');
    newImg.src = "./pictures/trump.jpg";
    newDiv.appendChild(newImg);
    const newDivTweet = document.createElement('div');
    const newPDate = document.createElement('p');
    newPDate.innerText = ("datum: " + tweetDatum.split("-")[2] + " - " + tweetDatum.split("-")[1] + " - " + tweetDatum.split("-")[0]);
    newDivTweet.appendChild(newPDate);
    const newPTweet = document.createElement('p');
    newPTweet.innerText = tweet.value;
    newDivTweet.appendChild(newPTweet);
    newDiv.appendChild(newDivTweet);
    result.appendChild(newDiv);
};

const trumpButton = document.getElementById("zeven");
trumpButton.addEventListener("click", addTrumpTweetToDOM);


//KNOP 9 BELEDIGING

const addInsultToDOM = async function() {
    emptyResults();
    const insult = await getInsult();
    result.classList.add("belediging");
    const newPInsult = document.createElement('p');
    newPInsult.innerText = insult.insult;
    result.appendChild(newPInsult);
};

const insultButton = document.getElementById("negen");
insultButton.addEventListener("click", addInsultToDOM);
