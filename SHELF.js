//Khai báo giá trị giá đỡ
const SHELF_WIDTH = 120;
const SHELF_HEIGHT = 25;
const SHELF_MARGIN_BOTTOM = 40;
// khai báo đối tượng giá đỡ
class SHELF {
    x;
    y;
    width;
    height;
    dx;
    constructor() {
        this.x = cvs.width / 2 - SHELF_WIDTH / 2;
        this.y = cvs.height - SHELF_HEIGHT - SHELF_MARGIN_BOTTOM;
        this.width = SHELF_WIDTH;
        this.height = SHELF_HEIGHT;
        this.dx = 5;
    }

    drawShelf() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = "white"
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
    moveShelf() {
        this.checkBallHitTheShelf()
        if (rightArrow && this.x + this.width < cvs.width) {
            this.x += this.dx;
        } else if (leftArrow && this.x > 0) {
            this.x -= this.dx;
        }
    }

    checkBallHitTheShelf() {
        if (ball.x < this.x + this.width && ball.x > this.x && ball.y < this.y + this.height && ball.y > this.y) {
            let collidePoint = ball.x - (this.x + this.width / 2);
            collidePoint = collidePoint / (this.width / 2);
            let angle = collidePoint * Math.PI / 3;
            ball.dx = ball.speed * Math.sin(angle);
            ball.dy = -ball.speed * Math.cos(angle);
        }
    }
}
//Sự kiện phím với giá đỡ
window.onload = EventKeyboad;
function EventKeyboad() {
    document.addEventListener("keydown", function (event) {
        if (event.keyCode === 37) {
            leftArrow = true;
        } else if (event.keyCode === 39) {
            rightArrow = true;
        }
    })
    document.addEventListener("keyup", function (event) {
        if (event.keyCode === 37) {
            leftArrow = false;
        } else if (event.keyCode === 39) {
            rightArrow = false;
        }
    })
}
