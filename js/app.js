
'use strict';

const t1 = {
    score: 0,
    display: document.querySelector('#team1Score'),
    button1: document.querySelector('#team1Button1'),
    button2: document.querySelector('#team1Button2'),
    name: document.querySelector('#team1Name'),
}

const t2 = {
    score: 0,
    display: document.querySelector('#team2Score'),
    button1: document.querySelector('#team2Button1'),
    button2: document.querySelector('#team2Button2'),
    name: document.querySelector('#team2Name'),
}

const targetScoreSelection = document.querySelector('#targetScore');
const resetButton = document.querySelector('#reset');
const scoreBoard = document.querySelector('h2');
let targetScore = 7;
let winByTwoScore;

function updateScore1(player, opponent) {
    scoreBoard.classList.add('has-background-black');
    scoreBoard.classList.remove('has-text-black');
    scoreBoard.classList.add('has-text-white');
    targetScoreSelection.disabled = true; 

    
    player.score++;
    player.display.textContent = player.score;

    if (player.score === (targetScore - 1) && opponent.score === (targetScore -1)) {
        targetScore++;
    };

    if (player.score === targetScore) {
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button1.disabled = true;
        player.button2.disabled = true;
        opponent.button1.disabled = true;
        opponent.button2.disabled = true;
    };
}

function updateScore2(player, opponent) {
    scoreBoard.classList.add('has-background-black');
    scoreBoard.classList.remove('has-text-black');
    scoreBoard.classList.add('has-text-white');
    targetScoreSelection.disabled = true; 

    
    player.score += 2;
    player.display.textContent = player.score;

    if (player.score === (targetScore - 1) && opponent.score === (targetScore -1)) {
        targetScore++;
    };

    if (player.score === targetScore || player.score === targetScore + 1) {
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button1.disabled = true;
        player.button2.disabled = true;
        opponent.button1.disabled = true;
        opponent.button2.disabled = true;
    };
}

t1.name.addEventListener('input', (e) => {
    t1.button1.textContent = `+1 ${e.target.value}`;
    t1.button2.textContent = `+2 ${e.target.value}`;
});

t2.name.addEventListener('input', (e) => {
    t2.button1.textContent = `+1 ${e.target.value}`;
    t2.button2.textContent = `+2 ${e.target.value}`;
})


t1.button1.addEventListener('click', () => {
    updateScore1(t1, t2);
});

t1.button2.addEventListener('click', () => {
    updateScore2(t1, t2);
});

t2.button1.addEventListener('click', () => {
    updateScore1(t2, t1);
});

t2.button2.addEventListener('click', () => {
    updateScore2(t2, t1);
});

targetScoreSelection.addEventListener('change', () => {
    targetScore = parseInt(targetScoreSelection.value);
});

resetButton.addEventListener('click', reset);

function reset() {
    for (const p of [t1, t2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button1.removeAttribute('disabled');
        p.button2.removeAttribute('disabled');
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
    scoreBoard.classList.remove('has-background-black');
    scoreBoard.classList.add('has-text-black');
    targetScoreSelection.removeAttribute('disabled');
    targetScore = parseInt(targetScoreSelection.value);
}

