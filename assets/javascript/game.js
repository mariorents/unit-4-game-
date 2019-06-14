let randomNum = Math.floor((Math.random() * 100) + 19);

console.log(randomNum);

$("#NumberToGuess").text(randomNum);

let playerScore = 0;

$("#myScore").text(playerScore);

const crystalNumbers  = ["1","2","3","4","5","6","7","8","9","10","11","12"];

for (let i = 0; i < 1; i++) {

    const cryst1 = $("<img>");
    const cryst2 = $("<img>");
    const cryst3 = $("<img>");

    cryst1.attr("src", "C1");
    cryst2.attr("src", "c2.png");
    cryst3.attr("src", "C3.jpg");

    cryst1.attr("data-crystalvalue1", [Math.floor(Math.random()* crystalNumbers.length[i])]);
    cryst2.attr("data-crystalvalue2", [Math.floor(Math.random()* crystalNumbers.length[i])]);
    cryst3.attr("data-crystalvalue3", [Math.floor(Math.random()* crystalNumbers.length[i])]);

    $("#crystal1").append(cryst1);
    $("#crystal2").append(cryst2);
    $("#crystal3").append(cryst3);
};

$("#crystal1").on(click, function() {
    const crystalvalue = ($(this).attr("data-crystal1"));
    crystalvalue = parseInt(crystalvalue);
    playerScore += crystalvalue;
});

$("#crystal2").on(click, function() {
    const crystalvalue = ($(this).attr("data-crystal2"));
    crystalvalue = parseInt(crystalvalue);
    playerScore += crystalvalue;
});

$("#crystal3").on(click, function() {
    const crystalvalue = ($(this).attr("data-crystal3"));
    crystalvalue = parseInt(crystalvalue);
    playerScore += crystalvalue;
});



