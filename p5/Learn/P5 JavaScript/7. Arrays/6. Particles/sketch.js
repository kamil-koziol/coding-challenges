let bubbles = [];
let numberOfBubbles = 300;

function setup() {
    createCanvas(600, 400);

    // dodawanie 'numberOfBubbles' objektów Bubble
    for (let i = 0; i < numberOfBubbles; i++) {
        let d = random(10, 30);
        let speedX = random(5, 10);
        let speedY = random(5, 10);
        b = new Bubble(0, 0, d, speedX, speedY);
        bubbles.push(b)
    }
}

function draw() {
    background(0);
    for (bubble of bubbles) {
        bubble.show();
        bubble.bounce();
        bubble.move();
        bubble.gravity();
    }
}

class Bubble {
    constructor(x, y, d, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.d = d; // diameter
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = {
            r: 0,
            g: random(150, 255),
            b: 0
        };

    }
    show() {
        noStroke();
        fill(this.color.r, this.color.g, this.color.b)
        ellipse(this.x, this.y, this.d);
    }

    isStaying() {
        return this.speedX < 0.01 && this.speedX > -0.01 && this.speedY < 0.01 && this.speedY > -0.01
    }
    move() {
        if (!this.isStaying()) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.color.b++;
        }
        else {
            this.color.r -= 3;
            this.color.g -= 3;
            this.color.b -= 3;
        }
    }

    randomColor() {
        this.color.r = random(255);
        this.color.g = random(255);
        this.color.b = random(255);
    }

    bounce() {
        if (this.x > width || this.x < 0) {
            //this.randomColor();
            this.speedX *= -1;
        }

        if (this.y > height || this.y < 0) {
            //this.randomColor();
            this.speedY *= -1;
        }
    }
    gravity() {
        let grav = 120;
        this.speedX -= this.speedX / grav;
        this.speedY -= this.speedY / grav;
    }
}
