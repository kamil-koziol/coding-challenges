var mainCircle = {
  x: 0,
  y: 200,
  diameter: 50
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(218, 160, 221);

  // ellipse
  fill(250, 200, 200);
  ellipse(mainCircle.x, mainCircle.y, mainCircle.diameter, mainCircle.diameter);

  mainCircle.x += 1;
}