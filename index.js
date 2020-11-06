var randomNumber1=Math.floor(Math.random()* 6) + 1; //number 1 - 6

var randomDiceimage="dice" + randomNumber1 +".png"; // dice image 1 to 6 added

var imageSource = "images/" + randomDiceimage ;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);


var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImagesource2="images/dice" + randomNumber2 +".png";
var randomDiceimage2= document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player 1 Win🎉";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Win🎊";
}
else{
  document.querySelector("h1").innerHTML="there is tie! 😆";
}
