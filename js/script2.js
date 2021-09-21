// Constants and Variables

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';
let superheroData;
const superheroes = [];


///DOM elements






//FUNCTIONS
// superheros - array of super heros
// return array of 52 cards containing 13 superheros
function buildDeck(superheros) {
    let cards = [];
    // TODO: 
    return cards;
}


// 
// return array of superheros
// function arrayOfSuperheroes(id) {
//     
//     superheroes.push()

// const superheroesCards = superheroData.map(function(superhero){
// return `<main id = "card">
// <p id = "icon"></p>>
//   <p id="image"></p>
//   <p id = "name"><span id = "rank"></span></p>
//   <p id="year"></p>
//   <p id = "powerstats">Powerstats</p>
//   <p id="rated"></p>
// </main>`

// })
// $("main").html(superheroesCards);
//}

// set up a function to get a single superhero
function createSuperhero(idx, id) {
    $.ajax(`${BASE_URL}/id/${id}.json`).then(function (data) {
        console.log("data1", data);
        superheroes.push(data);
        data.rank = idx;
        render();

    }, function (error) {
        console.log("data2", error);
    });

}

createSuperhero(1, 251);
createSuperhero(2, 248);
createSuperhero(3, 69);
createSuperhero(4, 579);
createSuperhero(5, 346);
createSuperhero(6, 106);
createSuperhero(7, 107);
createSuperhero(8, 49);
createSuperhero(9, 418);
createSuperhero(10, 714);
createSuperhero(11, 20);
createSuperhero(12, 659);
createSuperhero(13, 1);

// setting up the game: create card deck using super api 


//takes a superhero Api and returns a card






//1 create a card for each superhero with three propeties from that object;
//push those card to the card deck array

function render() {
    const htmlCards = superheroes.map(function (superhero) {
        console.log("powerstats",superhero.powerstats);
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

    //we need to generate html for each object inside launch data 

    // set html content to the html we generate
    $("main").html(htmlCards);

}