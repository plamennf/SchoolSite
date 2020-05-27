var gamesText = document.getElementById("games");
var pongImg = document.getElementById("pongRef");
var snakeImg = document.getElementById("snakeRef");

function PlayAnimation()
{
    gamesText.style.display = "none";
    pongImg.style.display = "none";
    snakeImg.style.display = "none";
    setInterval(ShowText, 1000);
    setInterval(ShowText, 1000);
    setInterval(ShowText, 1000);
}

function ShowText()
{
    gamesText.style.display = "block";
}

function ShowPongImg()
{
    pongImg.style.display = "default";
}

function ShowSnakeImg()
{
    snakeImg.style.display = "default";
}