// Constants and Variables

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
let superheroData;
const superheroes = [];
let deckSuperheroes = [];
let computersDeck = [];
let playersDeck = [];
let playersHand = [];
let computersHand = [];

const startButton = $(".start-button");

//Dom elements
const superheroName = $(".name");
let superheroImg = $(".superhero-image");

const superheroRank = $(".rank");




// set up a function to make a ajax call to the server to get the 13 superheroes
function getSuperheroes(idx, id, checkHeroes) {
    $.ajax(`${BASE_URL}/id/${id}.json`).then(function (data) {
        //console.log("data1", data);
        superheroes.push(data);
        data.rank = idx;
        checkHeroes();
        render();

    }, function (error) {
        console.log("data2", error);
    });

}

function checkHeroes() {
    if (superheroes.length > 12) {
        createDeck();
        //shuffleDeck();
        divideDeck();

    } else {

    }


}

getSuperheroes(1, 251, checkHeroes);
getSuperheroes(2, 248, checkHeroes);
getSuperheroes(3, 69, checkHeroes);
getSuperheroes(4, 579, checkHeroes);
getSuperheroes(5, 346, checkHeroes);
getSuperheroes(6, 106, checkHeroes);
getSuperheroes(7, 107, checkHeroes);
getSuperheroes(8, 49, checkHeroes);
getSuperheroes(9, 418, checkHeroes);
getSuperheroes(10, 714, checkHeroes);
getSuperheroes(11, 20, checkHeroes);
getSuperheroes(12, 659, checkHeroes);
getSuperheroes(13, 1, checkHeroes);






//1 create a card for each superhero with four propeties from that object;
//push those card to the card deck array

function render() {
    const htmlCards = superheroes.map(function (superhero) {
        //superheroImg = superheroImg.src
        return `<article> 
                     
                      <h5 class="card-title"><span>(${superhero.rank}) </span>${superhero.name}</h5>
                      <img class = "superhero-img" src = "${superhero.images.md}"/>
                      <p></p>
                   
               </article>`;
    });

    $("main").html(htmlCards);

}



//Creating a deck of 52 superheroes */}

function createDeck() {
    console.log(superheroes);
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);

        deckSuperheroes.push(returnedTarget);


    })

    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);

        deckSuperheroes.push(returnedTarget);


    })
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);
        deckSuperheroes.push(returnedTarget);


    })
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);

        deckSuperheroes.push(returnedTarget);


    })

}

//Shuffling the deck
// function shuffleDeck(deckSuperheroes){
//     console.log(deckSuperheroes.length);
//     for(var i= deckSuperheroes.length-1;i>0;i--){
//     console.log(deckSuperheroes.length);
//     var random = Math.floor(Math.random()*(i+1));
//     [array[i],array[random]]=[array[random],array[i]]
//     };

//     };

//dividing the deck into two decks one for the player and one for the computer

function divideDeck() {
    for (let i = 0; i < 26; i++) {

        playersDeck.push(deckSuperheroes.pop());

    }

    for (let i = 26; i < 52; i++) {

        computersDeck.push(deckSuperheroes.shift());
    }

}

function playGame() {
    if (playersHand.length > 0 && computersHand.length > 0) {
        if (playersHand[0].rank > computersHand[0].rank) {
            console.log("Player wins");
            // playersDeck.push(playersHand);
            // playersDeck.push(computersHand);
            playersDeck = playersDeck.concat(playersHand.splice(0, playersHand.length));
            playersDeck = playersDeck.concat(computersHand.splice(0, computersHand.length));
    
    
    
    
        } else if (playersHand[0].rank < computersHand[0].rank) {
            console.log("Computer wins");
            // computersDeck.push(computersHand);
            // computersDeck.push(playersHand);
            computersDeck = computersDeck.concat(computersHand.splice(0, computersHand.length));
            computersDeck = computersDeck.concat(playersHand.splice(0, playersHand.length));
    
    
        } else {
            declareWar();
    
    }
    
    
    }
    if (playersHand.length === 0 && computersHand.length === 0) {
        playersHand.unshift(playersDeck.pop());
        computersHand.unshift(computersDeck.pop());

    }

}









function declareWar() {
    for (let i = 0; i < 4; i++) {

        playersHand.unshift(playersDeck.pop());
        computersHand.unshift(computersDeck.pop());
    }

    if (playersHand[0].rank === computersHand[0].rank) {



    } else if (playersHand[0].rank > computersHand[0].rank) {
        playersDeck.push(playersHand);
        playersDeck.push(computersHand);


    } else {
        computersDeck.push(computersHand);
        computersDeck.push(playersHand);


    }


}



//Events
startButton.on("click", playGame);