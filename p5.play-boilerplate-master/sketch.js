var ground;
var player,obstacle;
var car;
var score=0;
var lives = 3; 
var livesText; 
var lifeLostText; 
var car1,car2,car3,playerImage,track;

function preload(){
  track=loadImage("track.jpg");
  car1=loadImage("yellowEnemy.png");
car2=loadImage("redEnemy.png");
car3=loadImage("blackEnemy.png");
playerImage=loadImage("nobita.png");
}


function setup() {
  createCanvas(1300,400);
  ground = createSprite(650,200,2600,300);
  //ground.addImage("ground",track);
  ground.scale=3;
  //ground.shapeColor="brown";
  ground.x=ground.width/2;
  ground.velocityX=-5;
  player=createSprite(100,200,50,50);
  player.velocityX=2
  player.addImage("player",playerImage);
  player.setCollider("rectangle",0,0,300,120);
  player.debug=false;
  player.scale=0.5;
  //camera.position.x=player.x
  //camera.position.y=player.y
  cars=new Group();
}

function draw() {
  background(0);
  //fill(255);
  //textSize(40);
  //text("score:"+score,1100,30);
  score=Math.round(frameCount/4);
  if (ground.x<0){
  ground.x=ground.width/2;
  } 
  if (cars.collide(player)){
  //player.bounceOff(car);
  cars.visible=false;
  player.velocityX=1;
  score=score-1;
  lives=lives-1;
  }

spawnCars();
  drawSprites();
  fill(255);
  textSize(40);
  text("score:"+score,1100,30);
  fill(255);
  textSize(40);
  text("lives:"+lives,900,40);
}
function spawnCars(){
  if(frameCount%150===0) {
car=createSprite(1350,random(100,290),40,20);
car.debug=true;
var r = Math.round(random(1,3));
switch(r){
case 1:car.addImage(car1);car.scale=0.5;
break;
case 2:car.addImage(car2);car.scale=0.5;
break;
case 3:car.addImage(car3);car.scale=0.5;
break;
}
car.velocityX=-3;
cars.add(car);
}
}