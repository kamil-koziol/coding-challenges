let bubble;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble = new Bubble(200, 200, 30);
    bubble2 = new Bubble(100, 100, 50);
}

function draw() {
    background(0);
    bubble.show();
    bubble.move();
    bubble2.show();
    bubble2.move();

}

class Bubble {
    constructor(tempX, tempY, tempR) {
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
    }

    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2); // TO SAMO CO  ellipse(this.x, this.y, this.r * 2, this.r*2)
    }
}