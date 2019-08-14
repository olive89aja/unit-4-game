//First attempt without a function
//Has to be between 19-120
//const total = Math.round(Math.random() + 19);

//Second attempt with a function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const total = getRandomInt(19, 120);
console.log(total);

$("#valuetotal").html(`Number to guess : ` + total);

//for loop to generate 4 random numbers

//I have to use var in this for loop. I tried to use const and
//it did not work.

//for (var i = 0; i < 4; i++) {
//console.log(crystalRandom);

//console.log(Array);
//}

var crystalRandom = [
    Math.round(Math.random() * 12),
    Math.round(Math.random() * 12),
    Math.round(Math.random() * 12),
    Math.round(Math.random() * 12)
];

console.log(crystalRandom);

//console.log(cR2);
//cR2 = append[crystalRandom];

//$("#stone").attr("class", "value");
//$("#valuestone").append(`crystalRandom`);

//$(".valuestone0").html(`crystalValue : ` + crystalRandom[0]);
//$(".valuestone1").html(`crystalValue : ` + crystalRandom[1]);
//$(".valuestone2").html(`crystalValue : ` + crystalRandom[2]);
//$(".valuestone3").html(`crystalValue : ` + crystalRandom[3]);

let counter = 0;
let Wins = 0;
let Losses = 0;
//this for loop is directly inspired from the simpler crystal game done in class
for (let i = 0; i < crystalRandom.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "https://i.ibb.co/2cgG764/crystalx2.jpg");

    //if (i = 0) {
    //  imageCrystal.attr("src", "https://i.ibb.co/2cgG764/crystalx2.jpg")
    //}

    //if (i = 1) {
    //  imageCrystal.attr("src", "https://i.ibb.co/2cgG764/crystalx2.jpg")
    //}
    //Attempt with an array
    //const sources = ["https://i.ibb.co/Qrch9YB/crystalx.jpg", "https://i.ibb.co/2cgG764/crystalx2.jpg","https://i.ibb.co/q0H13Vj/crystalx3.jpg", "https://i.ibb.co/Pwb6pSH/crystalx4.jpg"]

    //imageCrystal.attr(
    //"src", "sources[0]", "sources[1]", "sources[2]", "sources[3]");

    // Each imageCrystal will be given a src link to the crystal image

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", crystalRandom[i]);

    // Lastly, each crystal image (with all its classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#totalGuessed").html("New score: " + counter);



    if (counter === total) {
        $("#Wins").html(`Wins : ` + Wins + 1);
        counter = 0;
    } else if (counter >= total) {
        $("#Losses").html(`Losses : ` + Losses + 1);
        counter = 0;
    }



});



//need to look at calculator to calculate total after clicking.

//$(".stone").hide();

//$("button").click(function() {
//$(".valuestone0").show();
//$(".valuestone2").show();
//$(".valuestone3").show();
//$(".valuestone3").show(crystalRandom[3]);
//});

//$("button").click(function() {
//  $(".valuestone1").show();
//});

//var stone = $("<div>");
//stone.attr({ class = "stone, value : crystalRandom" });

//$(".stones").append(stone);

//$("#valuestone1").html(`Value of stone1 : ` + crystalRandom);
//$("#valuestone2").html(`Value of stone2 : ` + crystalRandom);
//$("#valuestone3").html(`Value of stone3 : ` + crystalRandom);
//$("#valuestone4").html(`Value of stone4 : ` + crystalRandom);

//var totalUser = value of all crystals clicked.

//$("#valuestone1").click(function() {
//  $(".valuestone0").html(`crystalValue : ` + crystalRandom[0]);
//});

//$("#hide").click(function() {
//});