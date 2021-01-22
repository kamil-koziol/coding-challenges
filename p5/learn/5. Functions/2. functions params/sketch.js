function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    lollipop(100,100,100);
    lollipop(30,30,40)
}

function lollipop(x,y,diameter) {
    stroke(150,80,190);
    strokeWeight(3);
    fill(0,200,255);
    rect(x-10,y,20,150);

    noStroke();
    fill(255,0,200);
    ellipse(x,y,diameter,diameter);
}