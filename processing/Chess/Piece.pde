class Piece {
  public int value;
  public PVector position;
  public void move() {};
  public void draw() {};
  public boolean isValidMove() { return true; };
}

class King extends Piece {
  
  PImage img;
  
  public int value = 0;
  public PVector position;
  
  public King(int x, int y) {
    position = new PVector(x, y);
    img = loadImage("pieces/white/king.png");
  }
  
  public void move() {};
  public void draw() {
    image(img, 15 + position.x * width/8, 15 + position.y * height/8, width/8 - 30, height/8 - 30); 
  };
  public boolean isValidMove() { return true; };
}
