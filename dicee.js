function play(){
  document.getElementById('play').classList.add("hidden");
  var randomNumber1=Math.floor((Math.random())*6)+1;
  var randomNumber2=Math.floor((Math.random())*6)+1;
  document.querySelectorAll(".dice")[0].querySelector("img").setAttribute("src","DiceeImages\\dice"+randomNumber1+".png");
  document.querySelectorAll(".dice")[1].querySelector("img").setAttribute("src","DiceeImages\\dice"+randomNumber2+".png");
  if(randomNumber1===randomNumber2)
  {
  document.querySelector("h1").innerHTML="Draw!";
  }
  else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins🚩";
  }
  else{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
  }
  document.getElementById('restart').classList.remove("hidden");
}
function restart(){
  location.reload();
}
