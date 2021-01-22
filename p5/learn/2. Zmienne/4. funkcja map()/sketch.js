var col = 0;
var switchCol = 255;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // background
    // 0 - 600  mouseX - wartości
    // chcemy zmapować do 0 - 255
    // map(var,min,max,mix,max)
    col = map(mouseX, 0, 600, 0, 255);
    background(col);

    // ellipse
    switchCol = map(mouseX, 0, 600, 255, 0)
    fill(switchCol);
    ellipse(mouseX, 200, 64, 64);
}
