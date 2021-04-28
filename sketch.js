var fixedRect,gameobject1,gameobject2, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameobject1 = createSprite(680, 400, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;

  gameobject2 = createSprite(750, 400, 50, 80);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;


  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 // isTouching(movingRect,fixedRect); //arguments

 if (isTouching(movingRect,fixedRect))
 {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 if (isTouching(movingRect,gameobject1))
 {
  movingRect.shapeColor = "yellow";
  gameobject1.shapeColor = "yellow";

 }
 else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
 }




  drawSprites();
}

function isTouching(obj1,obj2)
{

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      
        return true;
}
else {
 
      return false
}
}
  
