var path,Jake;
var pathImg,JakeImg;


function preload(){
  pathImg = loadImage("path.png");
  JakeImg = loadAnimation("Jake1.png,Jake2.png,Jake3.png,Jake4.png,Jake5.png");
  
}

function setup(){
  createCanvas(400,400);
  background("black");
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  Jake = createSprite(130,300,30,30);
  Jake.addAnimation("movingJake",JakeImg);
  Jake.scale=0.25;

}

function draw() {
  background(0);

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
  
}
