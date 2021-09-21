// Constants and Variables

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
let superheroData;
const superheroes = [];
let deckSuperheroes = [];
let computersDeck = [];
let playersDeck = [];




// set up a function to make a ajax call to the server to get the 13 superheroes
function getSuperheroes(idx, id, checkHeroes) {
    $.ajax(`${BASE_URL}/id/${id}.json`).then(function (data) {
        console.log("data1", data);
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
        console.log("powerstats", superhero.powerstats);
        console.log(superhero.work);
        console.log(superhero.rank);

        return `<article>
  <h1 id = "name">Name:${superhero.name}</h1>
  <img id = "image">
  <p id = "powerstats">Biography:${superhero.biography.aliases}</p>
  

  <p id = "work">${superhero.work.occupation}</p>
  <p id = "rank>Rank:${superhero.rank}</p>
  
        </article>`

    });


    $("main").html(htmlCards);

}



//Creating a deck of 52 superheroes

function createDeck() {
    console.log(superheroes);
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);
        console.log(returnedTarget);
        deckSuperheroes.push(returnedTarget);


    })

    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);
        console.log(returnedTarget);
        deckSuperheroes.push(returnedTarget);


    })
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);
        console.log(returnedTarget);
        deckSuperheroes.push(returnedTarget);


    })
    superheroes.forEach(function (superhero) {
        const returnedTarget = Object.assign({}, superhero);
        console.log(returnedTarget);
        deckSuperheroes.push(returnedTarget);


    })

}

//dividing the deck into two decks one for the player and one for the computer

function divideDeck(){
 superheroCard1 = deckSuperheroes.pop();
playersDeck.push(superheroCard1);

superheroCard2 = deckSuperheroes.pop();
playersDeck.push(superheroCard2);

superheroCard3 = deckSuperheroes.pop();
playersDeck.push(superheroCard3);

superheroCard4 = deckSuperheroes.pop();
playersDeck.push(superheroCard4);

superheroCard5 = deckSuperheroes.pop();
playersDeck.push(superheroCard5);

superheroCard6 = deckSuperheroes.pop();
playersDeck.push(superheroCard6);

superheroCard7= deckSuperheroes.pop();
playersDeck.push(superheroCard7);

superheroCard8 = deckSuperheroes.pop();
playersDeck.push(superheroCard8);

superheroCard9 = deckSuperheroes.pop();
playersDeck.push(superheroCard9);

superheroCard10 = deckSuperheroes.pop();
playersDeck.push(superheroCard10);

superheroCard11 = deckSuperheroes.pop();
playersDeck.push(superheroCard11);

superheroCard12 = deckSuperheroes.pop();
playersDeck.push(superheroCard12);

superheroCard13 = deckSuperheroes.pop();
playersDeck.push(superheroCard13);

superheroCard14 = deckSuperheroes.pop();
playersDeck.push(superheroCard14);

superheroCard15 = deckSuperheroes.pop();
playersDeck.push(superheroCard15);
superheroCard1 = deckSuperheroes.pop();
playersDeck.push(superheroCard1);

superheroCard16 = deckSuperheroes.pop();
playersDeck.push(superheroCard16);

superheroCard17 = deckSuperheroes.pop();
playersDeck.push(superheroCard17);

superheroCard18 = deckSuperheroes.pop();
playersDeck.push(superheroCard18);

superheroCard19 = deckSuperheroes.pop();
playersDeck.push(superheroCard19);
superheroCard1 = deckSuperheroes.pop();
playersDeck.push(superheroCard1);

superheroCard20 = deckSuperheroes.pop();
playersDeck.push(superheroCard20);

superheroCard21 = deckSuperheroes.pop();
playersDeck.push(superheroCard21);

superheroCard22 = deckSuperheroes.pop();
playersDeck.push(superheroCard22);

superheroCard23 = deckSuperheroes.pop();
playersDeck.push(superheroCard23);

superheroCard24 = deckSuperheroes.pop();
playersDeck.push(superheroCard24);

superheroCard25 = deckSuperheroes.pop();
computersDeck.push(superheroCard25);

superheroCard26 = deckSuperheroes.pop();
computersDeck.push(superheroCard26);

superheroCard27 = deckSuperheroes.pop();
computersDeck.push(superheroCard27);

superheroCard28 = deckSuperheroes.pop();
computersDeck.push(superheroCard28);

superheroCard29 = deckSuperheroes.pop();
computersDeck.push(superheroCard29);

superheroCard30 = deckSuperheroes.pop();
computersDeck.push(superheroCard30);

superheroCard31= deckSuperheroes.pop();
computersDeck.push(superheroCard31);

superheroCard32 = deckSuperheroes.pop();
computersDeck.push(superheroCard32);

superheroCard33 = deckSuperheroes.pop();
computersDeck.push(superheroCard33);

superheroCard34 = deckSuperheroes.pop();
computersDeck.push(superheroCard34);

superheroCard35 = deckSuperheroes.pop();
computersDeck.push(superheroCard35);

superheroCard36 = deckSuperheroes.pop();
computersDeck.push(superheroCard36);

superheroCard37 = deckSuperheroes.pop();
computersDeck.push(superheroCard37);

superheroCard38 = deckSuperheroes.pop();
computersDeck.push(superheroCard38);

superheroCard39 = deckSuperheroes.pop();
computersDeck.push(superheroCard39);
superheroCard1 = deckSuperheroes.pop();
computersDeck.push(superheroCard1);

superheroCard40 = deckSuperheroes.pop();
computersDeck.push(superheroCard40);

superheroCard41 = deckSuperheroes.pop();
computersDeck.push(superheroCard41);

superheroCard42 = deckSuperheroes.pop();
computersDeck.push(superheroCard42);

superheroCard43 = deckSuperheroes.pop();
computersDeck.push(superheroCard43);

superheroCard44 = deckSuperheroes.pop();
computersDeck.push(superheroCard44);

superheroCard45 = deckSuperheroes.pop();
computersDeck.push(superheroCard45);

superheroCard46 = deckSuperheroes.pop();
computersDeck.push(superheroCard46);

superheroCard47 = deckSuperheroes.pop();
computersDeck.push(superheroCard47);

superheroCard48= deckSuperheroes.pop();
computersDeck.push(superheroCard48);

superheroCard49= deckSuperheroes.pop();
computersDeck.push(superheroCard49);




}






