class Board {
  
  public Piece[][] pieces;
  HashMap<String, PImage> piecesImages;
  
  public Board() {
    pieces = new Piece[8][8];
    setUpBoard();
    loadPiecesImages();
  }
  
  public void draw() {
    for(int i=0; i<8; i++) {
      for(int j=0; j<8; j++) {
        noStroke();
        if((i+j)%2==1) {
          fill(118, 150, 86);
        } else {
          fill(238, 238, 210);
        }
        
        int x = j*width/8;
        int y = i*height/8;
        rect(x, y, width/8, width/8);
      }
    }
    
    drawPieces();
  }
  
  public void loadPiecesImages() {
    HashMap<String, PImage> piecesImages = new HashMap<String, PImage>();
    PImage white_king = loadImage("pieces/white/king.png");
    piecesImages.put("white-king", white_king); 
  }
  
  public void setUpBoard() {
    pieces[0][6] = new King(0, 6);
    pieces[2][4] = new King(2, 4);
   }
  
  public void drawPieces() {
    for(int y=0; y<8; y++) {
      for(int x=0; x<8; x++) {
        if(pieces[y][x] != null) {
          image(piecesImages.get("white-king"), x*width/8, y*height/8);
        }
      }
    }
  }
  
  public void mousePressed() {
    int column = mouseX/(width/8);
    int row = mouseY/(height/8); 
  }
}
