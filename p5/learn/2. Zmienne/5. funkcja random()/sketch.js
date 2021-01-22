var spot = {
    x: 100,
    y: 50,
    size: 24
};

var col = {
    r: 255,
    g: 0,
    b: 0
}
function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
    // random spot values
    spot.x = random(0, width);
    spot.y = random(0, height);
    spot.size = random(10,48);
    // random spot colors
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);

    noStroke();
    fill(col.r, col.g, col.b);
    ellipse(spot.x, spot.y, spot.size, spot.size);
}

function mousePressed() {
    background(0);
}