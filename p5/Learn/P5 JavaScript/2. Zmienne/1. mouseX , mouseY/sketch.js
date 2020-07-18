function setup() {
  createCanvas(600,400);
  //background
  background(250,250,100);
}

function draw() {

  //ellipse
  fill(250,200,200,100);
  noStroke();
  ellipse(mouseX,mouseY,30,30);

}

function mousePressed() {
  background(250,250,100);
}
