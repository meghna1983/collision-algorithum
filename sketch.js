var movingRect,fixedRect;
function setup() {
  createCanvas(400,400);
  movingRect=createSprite(200, 200, 50, 50);
  fixedRect = createSprite(200,300,50,100)
}

function draw() {
  background("black"); 
  movingRect.x=mouseX
  movingRect.y=mouseY
 if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
   movingRect.shapeColor="red"
   fixedRect.shapeColor="red"
 }
 else{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
 }
  drawSprites();
}