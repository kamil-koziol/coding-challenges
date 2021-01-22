function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    stroke(255);
    strokeWeight(4);

    for(var x = 0; x <= width ; x+=50){
        for(var y = 0; y<=height; y+=50){
            fill(map(x,0,600,0,255),0,map(y,0,400,0,255))
            ellipse(x,y,25,25)
        }
    }
}