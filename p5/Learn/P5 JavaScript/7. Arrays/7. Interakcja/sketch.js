let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20, 60);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}


function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        if (bubbles[i].rollover(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
        } else {
            bubbles[i].changeColor(0);
        }
        bubbles[i].move();
        bubbles[i].show();
    }
}


function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) { // jeśli usuwamy coś z tablicy używa się pętli odwrotnej!
        if (bubbles[i].rollover(mouseX, mouseY)) {
            bubbles.splice(i, 1);
        }
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    changeColor(b) {
        this.brightness = b;
    }
    rollover(px, py) {
        let d = dist(px, py, this.x, this.y);
        return d < this.r;
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}