function setup() {
  createCanvas(500,500);
}

function draw() {
  background(130); // (130,130,130) Odcienie szarości
  rectMode(CENTER);
  stroke(255,0,0); // Zielona
  strokeWeight(5);
  noFill();
  rect(250,250,150,150);

  noStroke(); // Bez obramówki !
  fill(0,255,0,50);
  rect(150,150,150,150);

}
