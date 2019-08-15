//Let's define the number to guess with a function. We use getRandomInt with a specified interval (19,120)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var total = getRandomInt(19, 120);
console.log(total);


//We display the number using the <p> id. 

$("#valuetotal").html(`Number to guess : ` + total);


//Let's create a var which is also an array to store 4 random numbers between 1 and 12. 

var crystalRandom = [
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 12)
];

console.log(crystalRandom);


//We initilalize 3 variables that we will need in the game. 

let counter = 0;
let Wins = 0;
let Losses = 0;

//This for loop is directly inspired from the simpler crystal game done in class. 

//Now we leveraged this exercise and attributed an image and a random number for each <img> element. 
//Also, to avoid having the same image for each element, we chose to make the changes happened in css. 


for (let i = 0; i < crystalRandom.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // We attribute the same class ".crystal-image" to each element created.

    imageCrystal.addClass("crystal-image");

    //We attribute a single source for now but CSS will allow us to change this limitation. 

    imageCrystal.attr("src", "https://i.ibb.co/2cgG764/crystalx2.jpg");


    // We attribute a new class to each image and it is equal to one of the four random numbers generated at lines 17-20.   
    imageCrystal.attr("data-crystalvalue", crystalRandom[i]);

    // Let's add each image to the page.
    $("#crystals").append(imageCrystal);
}

// As soon as the user clicks on one of the crystals, it runs a function that is going to accumulate point values for crystals 
//and determine if the game is lost or won.

$(".crystal-image").on("click", function() {


    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#totalGuessed").html("New score: " + counter);

    //We set conditions to make sure the game is won or lost. Also we reassign 0 to counter in both cases so that the game starts again. 

    if (counter === total) {
        $("#Wins").html(`Wins : ` + Wins + 1);
        counter = 0;


    } else if (counter >= total) {
        $("#Losses").html(`Losses : ` + Losses + 1);
        counter = 0;



    }

});