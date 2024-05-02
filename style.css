const game = document.getElementById("game");
const score = document.getElementById("score");
const controls = document.getElementById("controls");
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const width = 20;
const height = 20;
const gridSize = width * height;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let scoreCount = 0;
let intervalTime = 100;
let interval = 0;

function createBoard() {
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        game.appendChild(div);
    }
}

function randomApple() {
    do {
        appleIndex = Math.floor(Math.random() * gridSize);
    } while (game.children[appleIndex].classList.contains("snake"));
    game.children[appleIndex].classList.add("apple");
}

function startGame() {
    let squares = document.querySelectorAll("#game div");
    randomApple();
    direction = 1;
    scoreCount = 0;
    score.textContent = `Score: ${scoreCount}`;
    intervalTime = 100;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcome, intervalTime);
}

function control(e) {
    if (e.keycode === 39) {
        direction = 1; // right
    } else if (e.keycode === 38) {
        direction = -width; //if we press the up arrow, the snake will go ten divs up
    } else if (e.keycode === 37) {
        direction = -1; // left, the snake will go left one div
    } else if (e.keycode === 40) {
        direction = +width; // down the snake head will instantly appear 10 divs below from the current div
    }
}

function moveOutcome() {
    let squares = document.querySelectorAll("#game div");
    let newHead = currentSnake[0] + direction;
    if (newHead < 0 || newHead > gridSize - 1 || squares[newHead].classList.contains("snake")) {
        clearInterval(interval);
        return;
    }
    if (squares[newHead].classList.contains("apple")) {
        squares[newHead].classList.remove("apple");
        squares[newHead].classList.add("snake");
        currentSnake.unshift(newHead);
        scoreCount += 10;
        score.textContent = `Score: ${scoreCount}`;
        randomApple();
    } else {
        squares[currentSnake[currentSnake.length - 1]].classList.remove("snake");
        currentSnake.pop();
        squares[newHead].classList.add("snake");
        currentSnake.unshift(newHead);
    }
}

document.addEventListener("keydown", control);
controls.addEventListener("click", (e) => {
    if (e.target.id === "up") {
        direction = -width;
    } else if (e.target.id === "down") {
        direction = +width;
    } else if (e.target.id === "left") {
        direction = -1;
    } else if (e.target.id === "right") {
        direction = 1;
    }
});

createBoard();
startGame();
