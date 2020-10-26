function randomColor()
{
// Creatr Array of my Images
  var arrayOfImages = new Array();
  arrayOfImages[1] = "1.png";
  arrayOfImages[2] = "2.png";
  arrayOfImages[3] = "3.png";
  arrayOfImages[4] = "4.png";
  arrayOfImages[5] = "5.png";
  arrayOfImages[6] = "6.png";
  arrayOfImages[7] = "7.png";
  arrayOfImages[8] = "8.png";
  arrayOfImages[9] = "9.png";

// Random Choice of number
  var randomNumber1 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber2 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber3 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber4 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber5 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber6 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber7 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber8 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber9 = Math.floor(Math.random()* 8)+ 1;

//Gets Image
  document.getElementById("img1").src = arrayOfImages[randomNumber1];
  document.getElementById("img2").src = arrayOfImages[randomNumber2];
  document.getElementById("img3").src = arrayOfImages[randomNumber3];
  document.getElementById("img4").src = arrayOfImages[randomNumber4];
  document.getElementById("img5").src = arrayOfImages[randomNumber5];
  document.getElementById("img6").src = arrayOfImages[randomNumber6];
  document.getElementById("img7").src = arrayOfImages[randomNumber7];
  document.getElementById("img8").src = arrayOfImages[randomNumber8];
  document.getElementById("img9").src = arrayOfImages[randomNumber9];

  document.getElementById("divText").innerHTML=img1.alt;

}

function randomNumber()
{
  // Creatr Array of my Images
    var arrayOfNumbers = new Array();
    arrayOfNumbers[1] = "1";
    arrayOfNumbers[2] = "2";
    arrayOfNumbers[3] = "3";
    arrayOfNumbers[4] = "4";
    arrayOfNumbers[5] = "5";
    arrayOfNumbers[6] = "6";
    arrayOfNumbers[7] = "7";
    arrayOfNumbers[8] = "8";
    arrayOfNumbers[9] = "9";

  // Random Choice of number
    var randomNumber1 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber2 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber3 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber4 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber5 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber6 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber7 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber8 = Math.floor(Math.random()* 8)+ 1;
    var randomNumber9 = Math.floor(Math.random()* 8)+ 1;

  //Gets


}
