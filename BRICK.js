//Khai báo thuộc tính score;
let SCORE = 0;
let bricks = [];
let brick = {
    row: 1,
    column: 5,
    width: 50,
    height: 20,
    offsetLeft: 40,
    offsetTop: 20,
    marginTop: 30,
}
// Khai báo đối tượng brick
class BRICK {
    x;
    y;
    status;
    fillcolor;
    constructor(x, y, status, fillcolor) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.fillcolor = fillcolor;
    }
}
// Khởi tạo ban đầu của brick
function createBrick() {
    for (let i = 0; i < brick.row; i++) {
        bricks[i] = [];
        for (let j = 0; j < brick.column; j++) {
            let x = j * (brick.width + brick.offsetLeft) + brick.offsetLeft;
            let y = i * (brick.height + brick.offsetTop) + brick.offsetTop + brick.marginTop;
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            let fillcolor = "#" + randomColor;
            bricks[i][j] = new BRICK(x, y, true, fillcolor)
        }
    }
}
// Vẽ brick
function drawBrick() {
    checkHitToBrick();
    for (let i = 0; i < brick.row; i++) {
        for (let j = 0; j < brick.column; j++) {
            if (bricks[i][j].status) {
                ctx.fillStyle = bricks[i][j].fillcolor;
                ctx.fillRect(bricks[i][j].x, bricks[i][j].y, brick.width, brick.height)
                ctx.strokeStyle = "white";
                ctx.strokeRect(bricks[i][j].x, bricks[i][j].y, brick.width, brick.height);
            }
        }
    }
}

// Check ball đập vào brick
function checkHitToBrick() {
    for (let i = 0; i < brick.row; i++) {
        for (let j = 0; j < brick.column; j++) {
            let b = bricks[i][j];
            if (b.status) {
                if (ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.status = false;
                    SCORE+=10;
                }
            }
        }
    }
}
