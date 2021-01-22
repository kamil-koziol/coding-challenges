var col = {
  r: 0,
  g: 0,
  b: 0
};

var backCol = {
  r: 0,
  g: 0,
  b: 0
};
function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
}

function draw() {

  //ellipse

  fill(col.r, col.g, col.b);
  noStroke();
  ellipse(mouseX, mouseY, 30, 30);

}

function mousePressed() {
  backCol.r = random(0, 255);
  backCol.g = random(0, 255);
  backCol.b = random(0, 255);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  background(backCol.r, backCol.g, backCol.b);
}
