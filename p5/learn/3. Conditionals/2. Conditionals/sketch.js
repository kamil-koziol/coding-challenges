var x = 100;
var y = 50;
var speedX = 3;
var speedY = 3;
var bounces = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);
    noFill();

    if (bounces % 5 == 0) {
        fill(255, 0, 0);
    }
    else if (bounces % 5 == 1) {
        fill(0, 255, 0);
    }
    else if (bounces % 5 == 2) {
        fill(0, 0, 255);
    }
    else if (bounces % 5 == 3) {
        fill(255, 0, 255);
    }
    else if (bounces % 5 == 4) {
        fill(0, 255, 255);
    }

    rect(x, y, 100, 100);

    if (x > width - 100 || x < 0) {
        speedX *= -1;
        bounces += 1;
    }

    if (y > height - 100 || y < 0) {
        speedY *= -1;
        bounces += 1;
    }





    x += speedX;
    y += speedY
}
