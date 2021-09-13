//Khai báo backgroud
const anh = new Image();
anh.src = "./anh1.jpg"
// khái báo ảnh lever
const anh_lever = new Image();
anh_lever.src = "./level.png";
// khai báo ảnh score
const anh_score = new Image();
anh_score.src = "./score.png";
// khai báo ảnh life
const anh_life = new Image();
anh_life.src = "./life.png";

function showAnh(text, textX, textY, img, imgX, imgY){
    //vẽ chữ
    ctx.fillStyle = "#FFF";
    ctx.font = "20px Orbitron";
    ctx.fillText(text,textX,textY);
    // vẽ ảnh
    ctx.drawImage(img,imgX,imgY,25,25);
}
function drawSCORE_LIFE_LEVER(){
    showAnh(SCORE,45,25,anh_score,15,5);
    showAnh(life,cvs.width - 25,25,anh_life,cvs.width - 55,5);
    showAnh(LEVER,45,cvs.height-12,anh_lever,12,cvs.height-35);
}
function changeBackGround(){
    if(LEVER ===1){
        anh.src = "./anh1.jpg"
    }
    else if(LEVER ===2){
        anh.src = "./anh.jpg"
    }
    else if(LEVER ===3){
        anh.src = "./anh2.jpg"
    }
    else if(LEVER ===4){
        Winner();
    }
}