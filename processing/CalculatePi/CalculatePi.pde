float points = 0;
float pointsInCircle = 0;

void setup() {
  size(512, 512);
  background(255, 0, 0);
}
void draw() {
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(width/2, height/2, width);
  
  for(int i=0; i<100; i++) {
    float randX = random(1) * width;
    float randY = random(1) * height;
  
    if(dist(randX, randY, width/2, height/2) > width/2) {
      stroke(255,255,255);
    } else {
      stroke(0,0,0);
      pointsInCircle++;
    }
    
    points++;
    
    line(width/2, height/2, randX, randY);
  }
  
  print(pointsInCircle/points*4 + "\n");
}
