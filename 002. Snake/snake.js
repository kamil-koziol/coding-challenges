class Snake {
    constructor() {
        this.body = []
        this.body[0] = createVector(width/2, height/2);
        this.xspeed = 0;
        this.yspeed = 0;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xspeed * scl;
        head.y += this.yspeed * scl;
        this.body.push(head);
    }

    isDead() {
        let head = this.body[this.body.length - 1].copy();

        if(head.x >= width || head.x < 0 || head.y > height-1 || head.y < 0) {
            return true;
        }

        for (let i = 0; i < this.body.length - 1; i++) {
            if(this.body[i].x == head.x && this.body[i].y == head.y) {
                return true;
            }
        }

        return false;
    }

    show() {
        fill(255, 0, 0);
        // noStroke();
        for (var i = 0; i < this.body.length; i++) {
            rect(this.body[i].x, this.body[i].y, scl, scl);
        }
    }

    canEat(x, y) {
        let d = dist(this.body[this.body.length-1].x, this.body[this.body.length-1].y, x, y);
        return d < 1;
    }

    addTail() {
        this.body.push(this.body[this.body.length - 1]);
        // this.body.push(createVector(0,0));
    }

}