const grid = document.querySelector(".grid");
const popup = document.querySelector(".popup");
const scoreDisplay = document.querySelector(".scoreDisplay");
const left = document.querySelector(".left");
const bottom = document.querySelector(".bottom");
const right = document.querySelector(".right");
const up = document.querySelector(".top");
const width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click", replay);
});

function createBoard() {
    popup.style.display = "none";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}

function startGame() {
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcome, intervalTime);
}

function randomApple(squares) {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake"));
    squares[appleIndex].classList.add("apple");
}

function control(e) {
    if (e.keycode === 39){
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
    let squares = document.querySelectorAll(".grid div");
    let newHead = currentSnake[0] + direction;
    if (newHead < 0 || newHead > squares.length - 1 || squares[newHead].classList.contains("snake")) {
        clearInterval(interval);
        popup.style.display = "flex";
        return;
    }
    if (squares[newHead].classList.contains("apple")) {
        squares[newHead].classList.remove("apple");
        squares[newHead].classList.add("snake");
        currentSnake.unshift(newHead);
        score++;
        scoreDisplay.textContent = score;
        randomApple(squares);
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moveOutcome, intervalTime);
    } else {
        squares[currentSnake[currentSnake.length - 1]].classList.remove("snake");
        currentSnake.pop();
        squares[newHead].classList.add("snake");
        currentSnake.unshift(newHead);
    }
}

function replay() {
    grid.innerHTML = "";
    createBoard();
    startGame();
    popup.style.display = "none";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        up.click();
    } else if (e.key === "ArrowDown") {
        bottom.click();
    } else if (e.key === "ArrowLeft") {
        left.click();
    } else if (e.key === "ArrowRight") {
        right.click();
    }
});
