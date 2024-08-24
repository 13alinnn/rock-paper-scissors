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