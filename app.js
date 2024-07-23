let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const resetbtn = () => {
    turnO = true;
    enablebtn();
    msgContainer.classList.add("hide");
}



let turnO = true;
const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO){
            
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkpattern();
    }); 
    
});

const disablebtn = () => {
    for(let one of boxes){
        one.disabled = true;
    }
}

const enablebtn = () => {
    for(let one of boxes){
        one.disabled = false;
        one.innerText="";
    }
}

const showwinner = ((winner) => {
    msg.innerText= `congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
});

const checkpattern = () => {
    for(let patterns of arr){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val ){
        if(pos1val === pos2val && pos2val === pos3val ){
            // console.log("winner", pos2val);
            showwinner(pos1val);
        }
    }
}
};

reset.addEventListener("click", resetbtn);
newbtn.addEventListener("click", resetbtn);