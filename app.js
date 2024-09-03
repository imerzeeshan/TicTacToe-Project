let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let msgBox = document.querySelector(".msg-win");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let turnX = true;
let count = 0;
let pattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];
//function for New game btn
let newGame = () => {
    count = 0;
    turnX = true;
    enableBox();
    msgBox.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerText = "X";
            count++;
            turnX = false;
        }
        else {
            box.innerText = "O";
            count++;
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

//function for disable & Enable boxes after win
let disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
//function for display winner on screen
let showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is Player ${winner}`;
    msgBox.classList.remove("hide");
    disableBox();
}
//show tie
let showTie = () => {
    msg.innerText = "It's a Draw!!!";
    msgBox.classList.remove("hide");
    disableBox();
}

let checkWinner = () => {
    for (let win of pattern) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showWinner(pos1);
                break;
            }
            else if(count == 9){
                showTie();
            }
        }
    }
};






newBtn.addEventListener("click", newGame);
reset.addEventListener("click", newGame);



