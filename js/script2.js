// Constants and Variables

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
let superheroData;
const superheroes = [];
let deckSuperheroes = [];




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
        createDeck()

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