let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height)
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
}


function draw() {
    background(0);

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].show();
        bubbles[i].move();

        let overlapping = false;
        for (let j = i; j < bubbles.length; j++) {
            if (bubbles[i] !== bubbles[j] && bubbles[i].intersects(bubbles[j])) {
                overlapping = true;
                bubbles[j].changeColor(255);
            }
        }
        if (overlapping) {
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
    }
}


class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    changeColor(b) {
        this.brightness = b;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y)
        return d < this.r + other.r
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}