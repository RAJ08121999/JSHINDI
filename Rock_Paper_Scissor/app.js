let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const randomChoice = () =>{
    //choose among rock , paper , scissor;
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3); //random function returns a random value in between 0 and 1
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Its a Draw! Play again";
    msg.style.backgroundColor ="#162748";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You Win! Your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    //generate a random choice by the computer;
    const compChoice = randomChoice();
    if(userChoice === compChoice)
    {
        //game draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //computer can choose only scissor or paper to win 
            userWin= compChoice=== "paper"  ? false: true;
        }
        else if(userChoice==="paper"){
            //computer can choose only rock or scissor to win
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //now computer have either rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
