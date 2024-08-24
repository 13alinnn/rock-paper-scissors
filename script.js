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
            return;
        }
        else {
            console.log('You win!')
            return;
        }
    }
    if(humanChoice === 'paper') {
        if(computerChoice === 'scissors') {
            console.log('You lose, scissors beat paper!');
            return;
        }
        else {
            console.log('You win');
            return;
        }
    }
    if(humanChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('You lose, rock beats scissors!');
            return;
        }
        else {
            console.log('You win!');
            return;
        }
    }
}