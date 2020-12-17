float angle = 0;
int d;
int r;

int dotsAmount = 2;
boolean showLines = true;
boolean showCirclingDot = false;
boolean showCircle = true;

void setup(){
  size(500, 500);
  colorMode(HSB);
  d = width - width/10;
  r = d/2;
}

void draw(){
  background(0);
  translate(width/2, height/2);
  noFill();
  
  if(showCircle) {
    stroke(255);
    strokeWeight(1);
    circle(0,0,d);
  }
  
  if(showCirclingDot) {
    stroke(255);
    strokeWeight(8);
    point(r*sin(angle), r*cos(angle));
  }
  
  for(float i=0; i<=PI; i+=PI/dotsAmount) {
    if(showLines) {
      stroke(255);
      strokeWeight(1);
      line(r*cos(i),r*sin(i),cos(i),sin(i)); 
      line(-r*cos(i),-r*sin(i),cos(i),sin(i));
    }
    
    stroke((int)map(i,0,PI,0,255), 255,255);
    strokeWeight(width/50);
    point(r*cos(i)*sin(angle + i), r*sin(i)*sin(angle + i));
  }
  
  angle += 0.02;
}
