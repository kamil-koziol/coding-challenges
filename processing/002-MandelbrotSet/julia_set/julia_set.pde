float minVal = -2;
float maxVal = 2;

float maxIterations = 85;
float angle = 0;

float cA = 0.285;
float cB = 0.01;

void setup() {
  size(500, 500);
  loadPixels();
  colorMode(HSB, 100);
}

void draw() {
  for(int y=0; y<height; y++) {
    for(int x=0; x<width; x++) {
      int loc = (y*width + x);
      
      float a = map(x, 0, width, minVal, maxVal);
      float b = map(y, 0, height, minVal, maxVal);
      
      
      float n = 0;
      
      while(n < maxIterations) {
        
        float zA = a*a - b*b;
        float zB = 2*a*b;
        
        a = zA + cA;
        b = zB + cB;
    
        
        if(abs(a+b) > 4) {
          break;
        }
        
        n++;
      }
      
      int brightness = (int) map(n, 0, maxIterations, 0, 360);
      pixels[loc] = color(brightness, 255, 255);
    }
  }
  angle += 0.03;
  cA = sin(angle);
  cB = cos(angle);
  
  updatePixels();
}
