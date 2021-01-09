//  Random Number Generator for two players
var randomNumOne = Math.floor((Math.random() * 6) + 1);
var randomNumTwo = Math.floor((Math.random() * 6) + 1);
// Changing attribute of image src file
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumOne + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumTwo + ".png");
// logic for winner
var winner = (randomNumOne > randomNumTwo) ? "🚩 Player one won" : " Player two won 🚩";
if (randomNumOne === randomNumTwo) winner = "Draw";
document.querySelector("h1").textContent = winner;
