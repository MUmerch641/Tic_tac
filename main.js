let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#rst");
let image = document.querySelector(".img");

let winContainer = document.querySelector(".win-container");
let mesg =  document.querySelector("#msg");
let NewBtn =  document.querySelector("#New-btn");

let clicksound = document.querySelector("#clickSound");
let GameoverSound = document.querySelector("#GameoverSound");
let music = document.querySelector("#music");
let oplay= true;
let winopt = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        clicksound.play();
        count++;
        if(oplay){
            box.style.color = "orange";
            box.innerText="O";
            oplay= false;
        }
        else{
            box.style.color = "darkred";
            box.innerText="X";
            oplay=true;
        }
        box.disabled = true;
        checkwinner();
    });
  });

let checkwinner = () => {
    for (const i of winopt) {
        // console.log(i[0],i[1],i[2]);
        // console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);
        let posn1 =boxes[i[0]].innerText;
        let posn2 =boxes[i[1]].innerText;
        let posn3 =boxes[i[2]].innerText;
       console.log(posn1);
       console.log(posn2);
       console.log(posn3);
       if( posn1 !="" && posn2 !="" && posn3 !="" ){
        if(posn1 == posn2 && posn2 == posn3) {
            winner(posn1);
            return;
        }
       }
    }
    if ( count === 9) {
        alldisable();
        mesg.innerText = `Game is Draw!`;
        winContainer.classList.remove("hide");
        image.classList.add("hide");
     }
  }

  let alldisable= () => {
    for (let box of boxes) {
    box.disabled = true;
    }
 }

 const winner  = (win) => {
    GameoverSound.play();
    alldisable();
    mesg.innerText = `Congratulations, ${win}`;
    image.classList.remove("hide");
    winContainer.classList.remove("hide");
 }


 let allEnable= () => {
    for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
    oplay= true;
}
count=0;
 };

 const newGame = () => {
    winContainer.classList.add("hide");
    allEnable();
};

NewBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", allEnable);
