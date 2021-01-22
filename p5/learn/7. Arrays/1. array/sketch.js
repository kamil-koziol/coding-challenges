var nums = [20, 15, 30, 48];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    ellipse(100, 200, nums[0]);
    ellipse(300, 200, nums[3]);
}