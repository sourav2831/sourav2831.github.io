var playButton=document.getElementById('play');
var restartButton=document.getElementById('restart');
var board=document.getElementById('board');
var cells=document.querySelectorAll(".cell");
var bombArray=[];
var score=0;
var s=0;
function play(){
  playButton.classList.add("hidden");
  board.classList.remove("hidden");
  generateBombArray();
  cells.forEach(cell => {
    cell.addEventListener("contextmenu",contextMenu);
    cell.addEventListener("click",getClicked);
  });
}
function contextMenu(e){
  e.preventDefault();
  let element=e.path[0].getAttribute("id");
  if(document.getElementById(element).innerHTML==="" || document.getElementById(element).innerHTML==="🚩")
  toggleFlag(element);
}
function generateBombArray(){
  let count=0;
  while(count!=9){
    let newNumber=Math.floor(Math.random()*81)+1;
    if(!bombArray.includes(newNumber)){
      bombArray.push(newNumber);
      count++;
    }
  }
}
function getClicked(event){
  if(event.target.innerHTML==="🚩"){
    // do nothing
  }
  else if(!bombArray.includes(parseInt(event.target.getAttribute("id"),10))){
    let bombsNear=0;
    event.target.classList.add("green");
    event.target.classList.add("ban");
    if((parseInt(event.target.getAttribute("id"),10))%9!=0 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)+1)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10))%9!=1 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)-1)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)-9)>=1 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)-9)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)+9)<=81 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)+9)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)+10)<=81 && (parseInt(event.target.getAttribute("id"),10)+9)%9!=0 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)+10)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)+8)<=81 && (parseInt(event.target.getAttribute("id"),10)+9)%9!=1 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)+8)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)-10)>=1 && (parseInt(event.target.getAttribute("id"),10)-9)%9!=1 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)-10)){
      bombsNear++;
    }
    if((parseInt(event.target.getAttribute("id"),10)-8)>=1 && (parseInt(event.target.getAttribute("id"),10)-9)%9!=0 && bombArray.includes(parseInt(event.target.getAttribute("id"),10)-8)){
      bombsNear++;
    }
    if(event.target.innerHTML===""){
      score++;
    }
    event.target.innerHTML=bombsNear;
    if(score===72){
      document.getElementById("winningMessage").innerHTML="CONGRATULATIONS! You won the game";
      document.getElementById("restart").classList.remove("hidden");
      document.querySelector(".board").classList.add("disabled");
    }
    else
    document.getElementById("winningMessage").innerHTML="Your score is "+score;
  }
  else if(bombArray.includes(parseInt(event.target.getAttribute("id"),10))){
    for(let i=0;i<9;i++){
      document.getElementById(bombArray[i]).classList.add("red");
      document.getElementById(bombArray[i]).innerHTML="💣";
    }
    document.getElementById("winningMessage").innerHTML="Your score is "+score;
    document.getElementById("restart").classList.remove("hidden");
    document.querySelector(".board").classList.add("disabled");
  }
}
function toggleFlag(e) {
  if(document.getElementById(e).innerHTML==="🚩"){
    document.getElementById(e).innerHTML="";
  }
  else{
    document.getElementById(e).innerHTML="🚩";
  }
}
function restart(){
  bombArray=[];
  score=0;
  playButton.classList.remove("hidden");
  board.classList.add("hidden");
  cells.forEach(cell => {
    cell.innerHTML="";
    cell.classList.remove("red");
    cell.classList.remove("green");
    cell.classList.remove("ban");
    cell.removeEventListener("contextmenu",contextMenu);
  });
document.querySelector(".board").classList.remove("disabled");
document.getElementById("winningMessage").innerHTML="";
document.getElementById("restart").classList.add("hidden");
}
