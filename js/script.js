// $(function(){

//     // Constants and Variables
//     const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
//     const API_KEY = '10106826895658327';
//     let superheroData;
    
//     // Cached Element References
//     const $icon = $('#icon'); // selecting the element for the movie title
//     const $image = $('#image');
//     const $name = $('#name');
//     const powerstats = $("#powerstats");
//     const $form = $('form'); // step 1 is always select the dom element first
//     const $input = $('input[type="text"]');
    
//     // step attach an event listener
    
//     // Event Listeners
//     // event handler functions are passed an object containing data representing the event
//     $form.on('submit', handleGetData)
    
    
//     // Functions
    
//     function handleGetData(event) {
//         // Set up a request to our api using Javascript
//         event.preventDefault(); 
//         // this method is used to turn off the default page refresh behavior
//         const id = $input.val();
//         $input.val("");
//         // $.ajax() returns a Promise object that is used to resolve the request
//         // We call .then to register our success callback and our failure callback
//         // one of the functions will be called based on the failure or success of our request
//         // if successful the success callback will receive an object representing the resulting data
//         $.ajax(`${BASE_URL}${API_KEY}/${id}`).then(function (data) {
//             // the success callback
//             // instead visualizing our data in the console here
//             // we will add the data as text to the three elements
//            superheroData = data; // data comes from our success callback once the data comes 
//             render();
//             // $('main').append(`<img src="${data.Poster}" />`);
//         }, function (error) {
//             // the failure callback
//             console.log(error);
//         });
//     }
    
    
//     function render() {
//         $title.text(superheroData.name);
//         $year.text(superheroData.powerstats);
//         $rated.text(superheroData.image);
//     }
    
        
//     });