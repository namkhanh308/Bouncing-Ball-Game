// Khai báo bán kính
const BALL_RADIUS = 10;
let leftArrow = false;
let rightArrow = false;
// Khai báo đối tượng ball
class BALL {
    x;
    y;
    radius;
    speed;
    dx;
    dy;
    constructor() {
        this.x = cvs.width / 2;
        this.y = cvs.height - SHELF_MARGIN_BOTTOM - SHELF_HEIGHT - BALL_RADIUS;
        this.radius = BALL_RADIUS;
        this.speed = 3;
        this.dx = 3;
        this.dy = -3;
    }
    drawBall() {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }

    moveBall() {
        this.checkBallHitTheWall();
        ball.x += ball.dx;
        ball.y += ball.dy;
    }
    checkBallHitTheWall() {
        if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }
        if (ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }
        if (ball.y + ball.radius > cvs.height) {
            life--;
            this.resetBall();
        }
    }
    resetBall() {
        ball.x = cvs.width / 2;
        ball.y = cvs.height - SHELF_MARGIN_BOTTOM - SHELF_HEIGHT - BALL_RADIUS;
        ball.radius = BALL_RADIUS
        ball.dx = 3 * (Math.random() * 2 - 1);
        ball.dy = -3
        shelf.x = cvs.width / 2 - SHELF_WIDTH / 2;
        shelf.y = cvs.height - SHELF_HEIGHT - SHELF_MARGIN_BOTTOM;
        shelf.width = SHELF_WIDTH;
        shelf.height = SHELF_HEIGHT;
        shelf.dx = 5;
        createBrick();
    }
}