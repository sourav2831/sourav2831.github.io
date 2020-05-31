for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
  var press=this.innerHTML;
  makeSound(press);
  createAnimation(press);
});
}
document.addEventListener("keydown",function (alert){
  makeSound(alert.key);
  createAnimation(alert.key);
});
function makeSound(p){
switch (p) {
  case "w":
    let w=new Audio("drumKitSounds\\crash.mp3");
    w.play();
    break;
    case "a":
      let a=new Audio("drumKitSounds\\kick-bass.mp3");
      a.play();
      break;
      case "s":
        let s=new Audio("drumKitSounds\\snare.mp3");
        s.play();
        break;
        case "d":
          let d=new Audio("drumKitSounds\\tom-1.mp3");
          d.play();
          break;
          case "j":
            let j=new Audio("drumKitSounds\\tom-2.mp3");
            j.play();
            break;
            case "k":
              let k=new Audio("drumKitSounds\\tom-3.mp3");
              k.play();
              break;
              case "l":
                let l=new Audio("drumKitSounds\\tom-4.mp3");
                l.play();
                break;

  default:

}
}
function createAnimation(animation){
  var activeTime=document.querySelector("."+animation);
  activeTime.classList.add("pressed");
  setTimeout(function(){
    activeTime.classList.remove("pressed");
  },100);
}
