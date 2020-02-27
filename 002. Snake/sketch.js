var snake;
var food;

var cols;
var rows;

var scl = 40;

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  cols = floor(width/scl);
  rows = floor(height/scl);
  snake = new Snake();
  food = new Food();
}

function draw() {
  background(30);

  snake.update()

  if(snake.isDead()) {
    background(0);
    textSize(32);
    text("KONIEC GRY!", width/2-100, height/2);
    noLoop();
  }

  if(snake.canEat(food.x, food.y)) {
    snake.addTail();
    food.pickLocation();
  }

  food.show();
  snake.show();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.xspeed = 0;
    snake.yspeed = -1;
  }
  else if(keyCode === DOWN_ARROW) {
    snake.xspeed = 0;
    snake.yspeed = 1;
  }
  else if(keyCode === RIGHT_ARROW) {
    snake.yspeed = 0;
    snake.xspeed = 1;
  }
  else if(keyCode === LEFT_ARROW) {
    snake.yspeed = 0;
    snake.xspeed = -1;
  }
}