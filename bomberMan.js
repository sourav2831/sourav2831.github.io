function play(){
  document.querySelectorAll("button")[1].classList.add("hidden");
  document.querySelector("table").classList.remove("hidden");
}
var bomberManBoard=[
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""]
];
var l=0;
while(l!=10){
  let a=Math.floor(Math.random()*9);
  let b=Math.floor(Math.random()*9);
  if(bomberManBoard[a][b]!=="1"){
    bomberManBoard[a][b]="1";
    l++;
  }
}
var count=0;
function makeMove(element,i,j){
    if(bomberManBoard[i][j]==="1"){
      for(var p=0;p<9;p++){
        for(var q=0;q<9;q++){
          if(bomberManBoard[p][q]==="1"){
            document.querySelectorAll("td")[q+p*9].classList.add("red");
            document.querySelectorAll("td")[q+p*9].innerHTML="💣";
          }
          document.querySelectorAll("td")[q+p*9].setAttribute("onclick","");
        }
      }
      document.querySelectorAll('button')[0].classList.remove("hidden");
      document.getElementById("win").innerHTML="<strong>Your Score is </strong>"+"<strong>"+count+"😔"+"</strong>";
    }
    else{
      document.querySelectorAll("td")[j+i*9].classList.add("green");
      count++;
    }
    if(count===71){
      document.getElementById("win").innerHTML="<strong>Congratualtion you won the game 🚩</strong>";
    }
}
function reset(){
location.reload();
}
