var scl = 5;
var cols, rows;
var inc = 0.01

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(2000, 2000);
  cols = floor(width / scl)
  rows = floor(height / scl)
  fr = createP('');

  flowfield = new Array(cols*rows);

  for (var i = 0; i < 10000; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x+y*cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI*4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1)

      flowfield[index] = v;

      // stroke(0, 50);
      // strokeWeight(1)
      // push()
      // translate(x * scl, y * scl)
      // rotate(v.heading())
      // line(0, 0, scl, 0)
      // pop()

      xoff += inc
    }
    yoff += inc
  }

  zoff += 0.004

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield)
    particles[i].update()
    particles[i].edges()
    particles[i].show()
  }

  fr.html(floor(frameRate()))
}