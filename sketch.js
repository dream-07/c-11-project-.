var pathImg
var runnerImg


function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale =1.2;

  runner=createSprite(200,330);
  runner.addImage(runnerImg);
  runner.scale =0.1

wall1=createSprite(380,200,20,400);

wall2=createSprite(20,200,20,400);


}

function draw() {
  background(0);

  if( keyDown("RIGHT_ARROW")){
    runner.velocityX = 3;
  }

  
  if( keyDown("LEFT_ARROW")){
    runner.velocityX = -3;
  }

  if (path.y > 400){
    path.y =path.height/2;
  }

  if(path.height=2){
    path.velocityY = 4;
  }

  runner.collide(wall1);
  runner.collide(wall2);


  drawSprites();

}
