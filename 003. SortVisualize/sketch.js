var arr = [];
var minimal;
var maximal;

function setup() {
  createCanvas(800, 800);
  for(var i=0; i<50; i++) {
    arr.push(floor(random(1,11)));
  }

  minimal = Math.min.apply(Math, arr);
  maximal = Math.max.apply(Math, arr);
  drawArray();
  bubbleSort(arr, 1);
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(arr, refreshRate) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -i -1; j++) {
      if(arr[j] > arr[j+1]) {
        // swap
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;

        // purplish rect
        fill(100,0,255);
        var sx = map(j, 0, arr.length-1, 0, width-width/arr.length);
        var sy = map(arr[j+1], minimal, maximal, height/10,height-5);
        rect(sx, height, width/arr.length, -sy);
        await sleep(refreshRate);
        background(0);
        drawArray();
      }
    }
  }
}

function drawArray() {
  for(var i=0; i<arr.length; i++) {
    fill(255);
    var sx = map(i, 0, arr.length-1, 0, width-width/arr.length);
    var sy = map(arr[i], minimal, maximal, height/10,height-5);
    rect(sx, height, width/arr.length, -sy);
  }
}

// 10,5,4,3,2
// 5,10,4,3,2
// 5,4,10,3,2
// 5,4,3,10,2
// 5,4,3,2,10
// ....