var  ghost ,ghostani ,bckground ,bckgroungani ,doors ,dors ,obstacles ,stacles ,doorGroup ,obstaclesGroup ,invisible ,invisibleGroup;
var   gamestate=1 ,sound 

function preload(){
  ghostani=loadImage("ghost-standing.png")
  bckgroundani=loadImage("tower.png")
  dors=loadImage("door.png")
  stacles=loadImage("climber.png")
  sound=loadSound("spooky.wav")
}

function setup(){
  createCanvas(600,600);
  bckground=createSprite(300 ,300)
  bckground.addImage("bkground",bckgroundani)
  ghost=createSprite(300 ,300)
  ghost.addImage("ghst",ghostani)
  ghost.scale=0.6
  bckground.velocityY=3
  doorGroup=new Group()
  obstaclesGroup=new Group()
  invisibleGroup=new Group()
}

function draw(){
  background(0);
  if (gamestate==1) {
if(bckground.y>600) {
  bckground.y=300
}
if(keyDown("space")) {
  ghost.velocityY=-6
}
ghost.velocityY=ghost.velocityY+0.8
if (keyDown("left")) {
  ghost.x=ghost.x-5
}
if (keyDown("right")) {
  ghost.x=ghost.x+5
}
doos()
if (ghost.isTouching(invisibleGroup)||ghost.y>600) {
  gamestate=0
  ghost.destroy()

}
  if (ghost.isTouching(obstaclesGroup)) {
    ghost.velocityY=0
  }
  drawSprites()
}
if (gamestate===0) {
  fill("red")
  textSize(30)
  text("GAME OVER" ,250 ,300)
  sound.play()
}
}
function doos() {
  if (frameCount%200===0) {
    doors=createSprite(random(150 ,350),-20 ,0 ,0)
    doors.addImage("dors",dors)
    doors.velocityY=2
    doors.lifetime=400
    
    ghost.depth=doors.depth+1
    obstacles=createSprite(doors.x ,doors.y+50 , 0 ,0)
    obstacles.addImage("stacles" ,stacles)
    obstacles.velocityY=2
    obstacles.lifetime=400
    invisible=createSprite(obstacles.x ,obstacles.y+20 ,obstacles.width ,10)
    invisible.velocityY=2
    invisible.visible=false
    invisibleGroup.add(invisible)
    obstaclesGroup.add(obstacles)
    doorGroup.add(doors)
  }

}









