var a=[];
var sub=0;
function submit(){
  let id=document.getElementById("f");
  a.push(id[0].value);
  a.push(id[1].value);
  document.querySelector("button").classList.add("hidden");
  document.querySelector("form").classList.add("hidden");
  sub=1;
}

var ticTacToe=[
  ["","",""],
  ["","",""],
  ["","",""]
];
var winCombination=[
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],
  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],
  [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]]
]
var currPlayer="X";
var count=0;
function makeMove(element,i,j){
  if(sub===1){
  element.innerHTML=currPlayer;
  ticTacToe[i][j]=currPlayer;
  count++;
  document.querySelectorAll("td")[j+i*3].setAttribute("onclick","");
  document.querySelector("form").classList.remove("hidden");
}

  if(isWinner()){
    let winPlayer=document.getElementById("win");
    winPlayer.innerHTML=currPlayer==="X"?a[0]+" Wins 🚩":a[1]+" Wins 🚩";
    for(var l=0;l<document.querySelectorAll("td").length;l++){
      document.querySelectorAll("td")[l].setAttribute("onclick","");
    }
    document.getElementById("n").classList.remove("hidden");
  }
  if(count===9){
    let winPlayer=document.getElementById("win");
    winPlayer.innerHTML="Draw 😔";
    document.getElementById("n").classList.remove("hidden");
  }
  currPlayer=currPlayer==="X"?"0":"X";

}
function isWinner(){
  for(let i=0;i<8;i++){
    var check=0;
    for(let j=0;j<3;j++){
      if(ticTacToe[winCombination[i][j][0]][winCombination[i][j][1]]!=currPlayer){
        check=1;
        break;
      }
    }
    if(check==0){
      return true;
    }
  }
  return false;
}
function reset(){
  location.reload();
}
