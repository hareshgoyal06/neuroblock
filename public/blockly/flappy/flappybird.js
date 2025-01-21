let board;
let boardWidth;
let boardHeight;
let context;

//bird
let birdWidth = 34; // width/height ratio = 408/228 = 17/12
let birdHeight = 24;
let birdX;
let birdY;
let birdImg;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight,
};

//pipes
let pipeArray = [];
let pipeWidth = 64; // width/height ratio = 384/3072 = 1/8
let pipeHeight = 512;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; // pipes moving left speed
let velocityY = 0; // bird jump speed
let gravity = 0.1;

let gameOver = false;
let score = 0;

window.onload = function () {
    board = document.getElementById("board");
    context = board.getContext("2d"); // used for drawing on the board

    resizeGame();

    // Load images
    birdImg = new Image();
    birdImg.src = "./flappybird.png";

    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    // Start the game
    requestAnimationFrame(update);
    setInterval(placePipes, 1500); // every 1.5 seconds
    document.addEventListener("keydown", moveBird);

    // Resize the game when the window is resized
    window.addEventListener("resize", resizeGame);
};

function resizeGame() {
    boardWidth = window.innerWidth;
    boardHeight = window.innerHeight;
    board.width = boardWidth;
    board.height = boardHeight;

    birdX = boardWidth / 8;
    birdY = boardHeight / 2;

    bird.x = birdX;
    bird.y = birdY;
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    // Bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0); // Apply gravity to current bird.y, limit the bird.y to the top of the canvas
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if (bird.y > board.height) {
        gameOver = true;
    }

    // Pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) {
            score += 0.5; // 0.5 because there are 2 pipes! so 0.5*2 = 1, 1 for each set of pipes
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameOver = true;
        }
    }

    // Clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); // Removes first element from the array
    }

    // Score
    context.fillStyle = "White";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    if (gameOver) {
        context.fillText("GAME OVER", 5, 90);
    }
}

function placePipes() {
    if (gameOver) {
        return;
    }

    let randomPipeY = -pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = board.height / 4;

    let topPipe = {
        img: topPipeImg,
        x: boardWidth,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false,
    };
    pipeArray.push(topPipe);

    let bottomPipe = {
        img: bottomPipeImg,
        x: boardWidth,
        y: randomPipeY + pipeHeight + openingSpace,
        width: pipeWidth,
        height: pipeHeight,
        passed: false,
    };
    pipeArray.push(bottomPipe);
}

function moveBird(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        // Jump
        velocityY = -4;

        // Reset game
        if (gameOver) {
            bird.y = birdY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
    return (
        a.x < b.x + b.width && // a's top left corner doesn't reach b's top right corner
        a.x + a.width > b.x && // a's top right corner passes b's top left corner
        a.y < b.y + b.height && // a's top left corner doesn't reach b's bottom left corner
        a.y + a.height > b.y
    ); // a's bottom left corner passes b's top left corner
}