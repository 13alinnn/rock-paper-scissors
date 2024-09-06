let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let rock = document.querySelector("#rockbtn");
let paper = document.querySelector("#paperbtn");
let scissors = document.querySelector("#scisbtn");
let menu = document.querySelector(".menu");
let para = document.querySelector("p");
para.textContent = 'Let\'s begin!';
let win = "You won!";
let lose = "You lost!";
let score = '';
rock.addEventListener("click", () => {
	humanChoice = "rock";
	computerChoice = getComputerChoice();
	if (computerChoice === humanChoice) {
		para.textContent = "Tie! " + score;
	} else if (computerChoice === "scissors") {
		won();
	} else lost();
	if (isGameOver()) {
        gameOver();
	}
});

paper.addEventListener("click", () => {
	humanChoice = "paper";
	computerChoice = getComputerChoice();
	if (computerChoice === humanChoice) {
		para.textContent = "Tie! " + score;
	} else if (computerChoice === "rock") {
		won();
	} else lost();
	if (isGameOver()) {
        gameOver();
	}
});

scissors.addEventListener("click", () => {
	humanChoice = "scissors";
	computerChoice = getComputerChoice();
	if (computerChoice === humanChoice) {
		para.textContent = "Tie! " + score;
	} else if (computerChoice === "paper") {
		won();
	} else lost();
	if (isGameOver()) {
        gameOver();
	}
});

menu.addEventListener("click", () => {
    if(humanChoice !== computerChoice && humanScore + computerScore) {
    score = `${humanScore} - ${computerScore}`;
    para.textContent += '\n';
    para.textContent += score;
    }
});
function won() {
	para.textContent = win;
	humanScore += 1;
	console.log(humanScore, computerScore);
}
function lost() {
	para.textContent = lose;
	computerScore += 1;
	console.log(humanScore, computerScore);
}
function isGameOver() {
	if (humanScore >= 5 || computerScore >= 5) return true;
	return false;
}
function gameOver() {
    if (computerScore === 5) alert("You lost! Play again?");
    else alert("You won! Play again?");
    humanScore = 0;
    computerScore = 0;
    para.textContent = 'Let\'s begin!';
    score = '0 - 0';
}
function getComputerChoice() {
	let rnd = Math.random();
	if (rnd < 0.33) return "rock";
	if (rnd >= 0.33 && rnd < 0.66) return "paper";
	return "scissors";
}
