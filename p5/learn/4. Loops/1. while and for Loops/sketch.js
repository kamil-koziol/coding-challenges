function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    strokeWeight(4);
    stroke(255);

    // ellipse(0,200,25,25);
    // ellipse(50,200,25,25);
    // ellipse(100,200,25,25);
    // ellipse(150,200,25,25);
    // ellipse(200,200,25,25);


    
    var x = 0;
    while (x <= width) {
        fill(0, 255, 200)
        ellipse(x, 100, 25, 25);
        x += 50;
    }
    var r;
    var b;
    for (var i = 0; i <= width; i+=50) {
        r = map(i,0,400,0,255);
        b = map(i,0,400,255,0);
        fill(r,0,b)
        ellipse(i,200,25,25);
    }
    for (var i = 0; i <= width; i += 50) {
        fill(255, 0, 100)
        ellipse(i, 300, 25, 25)
    }

}