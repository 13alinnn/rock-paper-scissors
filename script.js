let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rnd = Math.random();
    if(rnd < .33) return 'rock';
    if(rnd >= .33 && rnd < .66) return 'paper';
    return 'scissors';
}

function getHumanChoice() {
    let ans = prompt('Rock, paper or scissors?', 'Let me think');
    return ans;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice)
        { console.log('Tie');
            return; 
        }
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            console.log('You lose, paper beats rock!');
            computerScore+=1;
            return;
        }
        else {
            console.log('You win!');
            humanScore+=1;
            return;
        }
    }
    if(humanChoice === 'paper') {
        if(computerChoice === 'scissors') {
            console.log('You lose, scissors beat paper!');
            computerScore += 1;
            return;
        }
        else {
            console.log('You win');
            humanScore += 1;
            return;
        }
    }
    if(humanChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('You lose, rock beats scissors!');
            computerScore += 1;
            return;
        }
        else {
            console.log('You win!');
            humanScore += 1;
            return;
        }
    }
}
function playGame() {
    while(humanScore < 5 && computerScore < 5) {
        playRound();
    }
    if(humanScore === 5) alert("You won the game");
    else alert("You lost!");
    humanScore = 0;
    computerScore = 0;
}