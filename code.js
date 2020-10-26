function randomColor()
{
    var randomNumber = Math.floor(Math.random()* 8)+ 1;
    var i=1;
    if(i<=9)
    {
      document.getElementsByClassName("TopDiv").innerHTML= ;
      i++;
    }
}
function randomNumber()
{
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

  var s1 = randomNumber1.toString();
  var s2 = randomNumber2.toString();
  var s3 = randomNumber3.toString();
  var s4 = randomNumber4.toString();
  var s5 = randomNumber5.toString();
  var s6 = randomNumber6.toString();
  var s7 = randomNumber7.toString();
  var s8 = randomNumber8.toString();
  var s9 = randomNumber9.toString();
//Gets Image
  document.getElementById("h1").innerHTML = s1;
  document.getElementById("h2").innerHTML = s2;
  document.getElementById("h3").innerHTML = s3;
  document.getElementById("h4").innerHTML = s4;
  document.getElementById("h5").innerHTML = s5;
  document.getElementById("h6").innerHTML = s6;
  document.getElementById("h7").innerHTML = s7;
  document.getElementById("h8").innerHTML = s8;
  document.getElementById("h9").innerHTML = s9;

}
