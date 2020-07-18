var circleX = 50;
var circleY = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(130, 200, 100);

  // ellipse
  fill(150, 75, 80);
  ellipse(circleX, circleY, 80, 80);

  circleX += 1;
  circleY += 1;

}
