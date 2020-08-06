var bullet, wall;
var speed, weight,thickness;






function setup() {
  createCanvas(1600,400);
  
  //giving random numbers to speed and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
  //making car sprite
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  
  //making wall sprite
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("maroon");  
  
  
  
  
if(bullet.isTouching(wall)){
  
  //stoping the car
  bullet.velocityX = 0;
  
  //giving the varable DAMAGE
  var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
  
  if(damage > 10){
  bullet.shapeColor = color("red");
  }

  if(damage < 10){
  bullet.shapeColor = color("green");
  }

  

}
  
  drawSprites();
}