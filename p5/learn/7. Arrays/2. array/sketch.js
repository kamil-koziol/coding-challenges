var names = ['rainbow', 'purple', 'vs', 'eggs'];

var index = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    fill(255);
    text(names[index], 12, 200);
}

function mousePressed() {
    index += 1;
    if (index == names.length) {
        index = 0;
    }
}