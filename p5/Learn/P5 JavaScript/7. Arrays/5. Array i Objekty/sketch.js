var bubbles = [];

function setup() {
    createCanvas(600, 400);
}

function mouseDragged() {
    let b = new Bubble(mouseX, mouseY, 24);
    bubbles.push(b);
		if (bubbles.length>25) {
		bubbles.splice(0,1);
	}
}

function draw() {
    background(0);
    for (let bubble of bubbles) {
        bubble.display();
        bubble.move();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.r * 2);
    }
    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
    }
}