//Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6


var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png-dice6.png


var randomImageSource = "images/" + randomDiceImage;  //images/dice1.png - images/dice6.png


//Now we will use DOM ..we used selectorAll as we need to select both the player 1 image.


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


//Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomDiceImage2 = "dice" + randomNumber2 + ".png";


var randomImageSource2 = "images/" + randomDiceImage2;


//Now we will use DOM ..we used selectorAll as we need to select both the player 1 image.


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins♥️ ";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins♥️ ";
}
else{
    document.querySelector("h1").innerHTML= "Tie!";
}
