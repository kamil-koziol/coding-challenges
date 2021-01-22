var nums = [100, 25, 47, 72];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(255);
    for (let i = 0; i < nums.length; i++) {
        ellipse(map(i, 0, nums.length - 1, 100, width - 100), 200, nums[i]);
        //ellipse(i*100,200,nums[i])
    }
}