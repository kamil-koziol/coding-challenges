float angle = 0;
int w = 100;
int cols, rows;
int hue = 0;

void setup() {
  fullScreen();
  cols = width/w;
  rows = height/w;
  background(0);
  colorMode(HSB);
}

void draw() {
  noFill();
  
  float d = w-20;
  float r = d/2;
  
  for(int i=1; i<cols; i++) {
    float x = i*w + w/2;
    float y = w/2;
    stroke(255);
    strokeWeight(1);
    ellipse(x,y, d,d);
    stroke(hue, 255,255);
    float px = r*cos(angle*i);
    float py = r*sin(angle*i);
    strokeWeight(8);
    point(x+px, y+py);
    //strokeWeight(1);
    //line(x+px, 0, x+px, height);
  }
  
  for(int i=1; i<rows; i++) {
    float x = w/2;
    float y = i*w + w/2;
    stroke(255);
    strokeWeight(1);
    ellipse(x,y, d,d);
    float px = r*cos(angle*i);
    float py = r*sin(angle*i);
    stroke(hue, 255,255);
    strokeWeight(8);
    point(x+px, y+py);
    //strokeWeight(1);
    //line(0, y+py, width, y+py);
  }
  
  for(int i=1; i<cols; i++) {
    for(int j=1; j<rows; j++) {
      float x = i*w + w/2;
      float y = j*w + w/2;
      float px = r*cos(angle*i);
      float py = r*sin(angle*j);
      stroke(hue, 255,255);
      strokeWeight(1);
      point(x+px, y+py);
    }
  }
  
  angle+=0.01;
  hue += 1;
  hue %= 255;
}
