const game = document.getElementById('game');
let direction = { x: 1, y: 0 };
let foodPosition = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
let snake = [{ x: 10 * 20, y: 10 * 20 }];

function draw() {
    game.innerHTML = '';
    snake.forEach(part => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.top = part.y + 'px';
        dot.style.left = part.x + 'px';
        game.appendChild(dot);
    });

    const food = document.createElement('div');
    food.classList.add('food');
    food.style.top = foodPosition.y + 'px';
    food.style.left = foodPosition.x + 'px';
    game.appendChild(food);
}

function update() {
    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = {...snake[i] };
    }

    snake[0].x += direction.x * 20;
    snake[0].y += direction.y * 20;

    if (snake[0].x === foodPosition.x && snake[0].y === foodPosition.y) {
        foodPosition = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    } else {
        snake.pop();
    }
}

function gameOver() {
    if (snake[0].x < 0 || snake[0].x > 400 || snake[0].y < 0 || snake[0].y > 400) {
        alert('Game Over!');
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            alert('Game Over!');
            return true;
        }
    }

    return false;
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp' && direction.y!== 1) {
        direction = { x: 0, y: -1 };
    } else if (event.key === 'ArrowDown' && direction.y!== -1) {
        direction = { x: 0, y: 1 };
    } else if (event.key === 'ArrowLeft' && direction.x!== 1) {
        direction = { x: -1, y: 0 };
    } else if (event.key === 'ArrowRight' && direction.x!== -1) {
        direction = { x: 1, y: 0 };
    }
});

setInterval(() => {
    update();
    draw();
    if (gameOver()) {
        clearInterval();
    }
}, 100);
