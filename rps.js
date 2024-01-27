let userScore = 0;
let compScore = 0;
var userWin = true;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("Game was Draw")
};

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);

    //generate comp choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    //condn for draw, win, lose
    if(userChoice === compChoice){
        drawGame();
        msg.innerText = "Game was Draw";
        msg.style.backgroundColor = "navy";
        

    }else{
        
        if(userChoice === "rock" && compChoice === "paper"){
            userWin = false;
            msg.innerText ="you lose,paper beats rock";
            msg.style.backgroundColor = "red";
            compScore ++;
        compScorePara.innerText = compScore;

        }else if(userChoice === "rock" && compChoice === "scissors"){
            userWin = true;
            msg.innerText ="you won,rock beats scissors";
            msg.style.backgroundColor = "green";
            userScore ++;
            userScorePara.innerText = userScore;

        }else if(userChoice === "paper" && compChoice === "rock"){
            userWin = true;
            msg.innerText ="you won,paper beats rock";
            msg.style.backgroundColor = "green";
            userScore ++;
            userScorePara.innerText = userScore;

        }else if(userChoice === "paper" && compChoice === "scissors"){
            userWin = false;
            msg.innerText ="you lose,scissors beats paper";
            msg.style.backgroundColor = "red";
            compScore ++;
        compScorePara.innerText = compScore;

        }else if(userChoice === "scissors" && compChoice === "rock"){
            userWin = false;
            msg.innerText ="you lose,rock beats scissors";
            msg.style.backgroundColor = "red";
            compScore ++;
        compScorePara.innerText = compScore;

        }else if (userChoice === "scissors" && compChoice === "paper") {
            userWin = true;
            msg.innerText ="you won,scissors beats paper";
            msg.style.backgroundColor = "green";
            userScore ++;
            userScorePara.innerText = userScore;
        };
       
};

}

const showWinner = (userWin) =>{
    if(userWin = false){
        compScore ++;
        compScorePara.innerText = compScore;
    }else if (userWin = true){
        userScore ++;
        userScorePara.innerText = userScore;
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

