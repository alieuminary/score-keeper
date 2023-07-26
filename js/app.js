
'use strict';

const t1 = {
    score: 0,
    display: document.querySelector('#team1Score'),
    button: document.querySelector('#team1Button'),
    name: document.querySelector('#team1Name'),
}

const t2 = {
    score: 0,
    display: document.querySelector('#team2Score'),
    button: document.querySelector('#team2Button'),
    name: document.querySelector('#team2Name'),
}

const targetScoreSelection = document.querySelector('#targetScore');
const resetButton = document.querySelector('#reset');
const scoreBoard = document.querySelector('h2');
let targetScore = 7;
let winByTwoScore;

function updateScore(player, opponent) {
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
        player.button.disabled = true;
        opponent.button.disabled = true;
    };
}

t1.name.addEventListener('input', (e) => {
    t1.button.textContent = `+1 ${e.target.value}`;
});

t2.name.addEventListener('input', (e) => {
    t2.button.textContent = `+1 ${e.target.value}`;
})

t1.button.addEventListener('click', () => {
    updateScore(t1, t2);
});

t2.button.addEventListener('click', () => {
    updateScore(t2, t1);
});

targetScoreSelection.addEventListener('change', () => {
    targetScore = parseInt(targetScoreSelection.value);
});

resetButton.addEventListener('click', reset);

function reset() {
    for (const p of [t1, t2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.removeAttribute('disabled');
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
    scoreBoard.classList.remove('has-background-black');
    scoreBoard.classList.add('has-text-black');
    targetScoreSelection.removeAttribute('disabled');
    targetScore = parseInt(targetScoreSelection.value);
}

