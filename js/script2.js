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
// const superheroName = $(".name");
// let superheroImgel = $(".superhero-image");
// const superheroRank = $(".rank");
const playersDeckEl = $(".players-deck");
const playersHandEl = $(".players-hand");
const computersDeckEl = $(".computers-deck");
const computersHandEl = $(".computers-hand");
const playersResultEl = $(".players-result");
const computersResultEl = $(".computers-result");

function renderPlay() {
    let phSuperhero = playersHand[0];
    let chSuperhero = computersHand[0];

    playersResultEl.html(`Total cards ${playersDeck.length}`);
    computersResultEl.html(`Total cards ${computersDeck.length}`);

    playersHandEl.html(`<article> 
        <h5 class="card-title"><span>(${phSuperhero.rank}) </span>${phSuperhero.name}</h5>
        <img class = "superhero-img" src = "${phSuperhero.images.md}"/>
        <p></p>
    </article>`);
    computersHandEl.html(`<article> 
        <h5 class="card-title"><span>(${chSuperhero.rank}) </span>${chSuperhero.name}</h5>
        <img class = "superhero-img" src = "${chSuperhero.images.md}"/>
        <p></p>
    </article>`);
}

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
        deckSuperheroes = deckSuperheroes.sort((a, b) => 0.5 - Math.random());
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
            playersDeck = playersDeck.concat(playersHand.splice(0, playersHand.length));
            playersDeck = playersDeck.concat(computersHand.splice(0, computersHand.length));

        } else if (playersHand[0].rank < computersHand[0].rank) {
            console.log("Computer wins");
            computersDeck = computersDeck.concat(computersHand.splice(0, computersHand.length));
            computersDeck = computersDeck.concat(playersHand.splice(0, playersHand.length));

        } else {
            console.log("Declare war");
            declareWar();
        }

    }

    playersHand.unshift(playersDeck.shift());
    computersHand.unshift(computersDeck.shift());


    renderPlay();
}









function declareWar() {
    for (let i = 0; i < 4; i++) {

        playersHand.unshift(playersDeck.shift());
        computersHand.unshift(computersDeck.shift());
    }

    

    // if (playersHand[0].rank === computersHand[0].rank) {
    //     //TODO: fix 

    // } else if (playersHand[0].rank > computersHand[0].rank) {
    //     playersDeck.push(playersHand);
    //     playersDeck.push(computersHand);


    // } else {
    //     computersDeck.push(computersHand);
    //     computersDeck.push(playersHand);


    // }


}
function changeMargin(){
startButton.css("margin-left", "363px");

}


//Events
startButton.on("click", playGame);