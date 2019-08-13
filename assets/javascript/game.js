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

for (var i = 0; i < 4; i++) {
    var crystalRandom = [
        Math.round(Math.random() * 12),
        Math.round(Math.random() * 12),
        Math.round(Math.random() * 12),
        Math.round(Math.random() * 12)
    ];
    console.log(crystalRandom);

    //console.log(Array);
}

//console.log(cR2);
//cR2 = append[crystalRandom];

//$("#stone").attr("class", "value");
//$("#valuestone").append(`crystalRandom`);

$(".valuestone0").html(`crystalValue : ` + crystalRandom[0]);
$(".valuestone1").html(`crystalValue : ` + crystalRandom[1]);
$(".valuestone2").html(`crystalValue : ` + crystalRandom[2]);
$(".valuestone3").html(`crystalValue : ` + crystalRandom[3]);
//var stone = $("<div>");
//stone.attr({ class = "stone, value : crystalRandom" });

//$(".stones").append(stone);

//$("#valuestone1").html(`Value of stone1 : ` + crystalRandom);
//$("#valuestone2").html(`Value of stone2 : ` + crystalRandom);
//$("#valuestone3").html(`Value of stone3 : ` + crystalRandom);
//$("#valuestone4").html(`Value of stone4 : ` + crystalRandom);