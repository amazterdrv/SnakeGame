var scl = 10;
var food;
function setup(){
  createCanvas(300,300);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation()
{
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(0,cols)),floor(random(0,rows)));
  food.mult(scl);
}

function draw(){
  background(20,40,50);
  fill(20,100,100);
  s.death();
  s.update();
  s.show();
  if(s.eat(food))
  {
    pickLocation();
  }
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
}


function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    s.dir(0,-1);
  }
  else if(keyCode === DOWN_ARROW)
  {
    s.dir(0,1);
  }
  else if(keyCode === RIGHT_ARROW)
  {
    s.dir(1,0);
  }
  else if(keyCode === LEFT_ARROW)
  {
    s.dir(-1,0);
  }
}
