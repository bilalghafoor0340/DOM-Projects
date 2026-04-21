let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let msgContainer = document.querySelector('.msg-container');
let message = document.querySelector('#message');
let newGameBtn = document.querySelector('#new-btn');

let turnO = true;

let winPatterns = [
    [0,1,2], [3,4,5],
[6,7,8], [0,3,6], [1,4,7],[2,5,8], [0,4,8], [2,4,6],]


const resetGame = () => {
    turnO = true;
    enableBoxes();

}

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false
        } else{
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    })
    
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide")
    message.innerText = `Congratulations!  the winner is ${winner}`;
    disableBoxes();
} 


const checkWinner = () => {
    for (let pattern of winPatterns){
     

                let postval1 = boxes[pattern[0]].innerText
                let postval2 = boxes[pattern[1]].innerText
                let postval3 = boxes[pattern[2]].innerText
              
                if(postval1 != "" && postval2 != "" && postval3 != ""){
                    if(postval1 === postval2 && postval2 === postval3){
                        // console.log("winner")
                        showWinner(postval1);
                    }
                }


    }

}

newGameBtn.addEventListener(("click") , resetGame)
resetBtn.addEventListener(("click") , resetGame)