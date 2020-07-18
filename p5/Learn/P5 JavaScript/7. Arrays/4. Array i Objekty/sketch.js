var bubbles = [];
var numberOfBubbles = 30;

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < numberOfBubbles; i++) {
        bubbles[i] = new Bubble(width / 2, height / 2, 24);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
    }
}