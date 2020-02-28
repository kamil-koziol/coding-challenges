var snake;
var food;

var cols;
var rows;

var scl = 40;

function setup() {
  createCanvas(800, 800);
  frameRate(24);
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
  switch(keyCode) {
    case UP_ARROW:
      snake.xspeed = 0;
      snake.yspeed = -1;
      break;
    case DOWN_ARROW:
      snake.xspeed = 0;
      snake.yspeed = 1;
      break;
    case RIGHT_ARROW:
      snake.xspeed = 1;
      snake.yspeed = 0;
      break;
    case LEFT_ARROW:
      snake.xspeed = -1;
      snake.yspeed = 0;
      break;
    case SHIFT:
      snake.addTail();
      break;
  }
}