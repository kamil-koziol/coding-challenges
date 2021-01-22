function setup() {
  createCanvas(500,500); // 500x500 px
}

function draw() {
  background(200,0,100); // r,g,b
  rect(0,0,60,80); // punkt (x,y) , wysokość , szerokość
  rect(100,0,60,80,30); // punkt (x,y) , wysokość , szerokość, krawędzie
  line(0,0,500,500)

  //rectMode(CENTER); // OD PUNKTU ŚRODKA RYSUJE!
  //rect(250,250,60,80,30);

}
