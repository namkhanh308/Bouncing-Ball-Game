//Khởi tạo đối tượng cavas
const cvs = document.getElementById("myCanvas")
const ctx = cvs.getContext("2d");
ctx.lineWidth = 2.5
// Khởi tạo đối tượng
let shelf = new SHELF();
let ball = new BALL();
//Khởi tạo brick
createBrick();

function draw() {
    shelf.drawShelf();
    ball.drawBall();
    drawBrick();
    drawSCORE_LIFE_LEVER();
}
function update() {
    shelf.moveShelf();
    ball.moveBall();
    GameOver();
    LevelUp();
    changeBackGround();
}
function loop() {
    ctx.drawImage(anh, 0, 0)
    draw();
    update();
    if(!END_GAME && LEVER<4){
        requestAnimationFrame(loop)
    }
    console.log(SCORE);
}
loop();

