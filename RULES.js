// Khai báo thuộc tính life
let life = 3;
//Khai báo thuộc tính end_game
let END_GAME = false;
//Khai báo thuộc tính Lever
let LEVER = 1;

// RESET / Winner / Loser EVENT
let gameOver = document.getElementById("gameOver")
let win = document.getElementById("win")
let lose = document.getElementById("lose")
let rs = document.getElementById("restart")
rs.addEventListener("click",function (){
    location.reload();
})
function Winner(){
    gameOver.style.display = "block";
    win.style.display = "block";
}
function Loser(){
    gameOver.style.display = "block";
    lose.style.display = "block";
}
// GAME OVER - LEVER UP
function GameOver(){
    if(life <= 0 ){
        Loser();
        END_GAME = true;
    }
}
function LevelUp(){
    let checkLeverUp = true;
    for(let i = 0; i < brick.row; i++){
        for(let j = 0; j < brick.column; j++){
            checkLeverUp = checkLeverUp && ! bricks[i][j].status;
        }
    }
    if(checkLeverUp){
        brick.row++;
        brick.column++;
        ball.speed+=1;
        brick.offsetLeft -=10;
        // brick.column++;
        ball.resetBall();
        ball.speed+=1;
        LEVER++;
    }
}
