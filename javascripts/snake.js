var canvas, ctx;
var score = 0;

window.onload = function() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);

    // render X times per second
    var x = 15;
    setInterval(draw, 1000 / x);
};

// game world
var gridSize = (tileSize = 20); // 20 x 20 = 400
var nextX = (nextY = 0);

// snake
var defaultTailSize = 3;
var tailSize = defaultTailSize;
var snakeTrail = [];
var snakeX = (snakeY = 10);

// apple
var appleX = (appleY = 15);

// draw
function draw() {
    // move snake in next pos
    snakeX += nextX;
    snakeY += nextY;

    // snake over game world?
    if (snakeX < 0) {
        snakeX = gridSize - 1;
    }
    if (snakeX > gridSize - 1) {
        snakeX = 0;
    }

    if (snakeY < 0) {
        snakeY = gridSize - 1;
    }
    if (snakeY > gridSize - 1) {
        snakeY = 0;
    }

    //snake bite apple?
    if (snakeX == appleX && snakeY == appleY) {
        tailSize++;
        score++;

        appleX = Math.floor(Math.random() * gridSize);
        appleY = Math.floor(Math.random() * gridSize);
    }

    //paint background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // paint snake
    ctx.fillStyle = "green";
    for (var i = 0; i < snakeTrail.length; i++) {
        ctx.fillRect(
            snakeTrail[i].x * tileSize,
            snakeTrail[i].y * tileSize,
            tileSize,
            tileSize
        );

        //snake bites it's tail?
        if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
            tailSize = defaultTailSize;
            score = 0;
        }
    }

    // paint apple
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);

    ctx.fillStyle = "white";
    ctx.fillText(score, 200, 50);

    //set snake trail
    snakeTrail.push({ x: snakeX, y: snakeY });
    while (snakeTrail.length > tailSize) {
        snakeTrail.shift();
    }
}

// input
function keyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}