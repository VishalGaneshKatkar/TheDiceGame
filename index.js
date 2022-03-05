
var randomNumber1 = Math.random() * 6;
randomNumber1 =  Math.floor(randomNumber1) + 1 ;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);


var randomNumber2 = Math.random() * 6;
randomNumber2 =  Math.floor(randomNumber2) + 1 ;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);


if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML="👏 Player1 Wins!"
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="👏 Player2 Wins!"
}

else{
  document.querySelector("h1").innerHTML="Draw!"

}
