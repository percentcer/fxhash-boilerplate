const TAU = 6.28;

let red, green, blue;
let numDots;

function windowResized() {
  // don't forget to resize the canvas when the window changes
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // set up the fixed attributes of the generator
  red = Math.floor(255 * fxrand());
  green = Math.floor(255 * fxrand());
  blue = Math.floor(255 * fxrand());
  numDots = Math.floor(fxrand() * 10) + 1;

  // assign them to the $fxhashFeatures object
  window.$fxhashFeatures = {
    // with descriptive names
    "Red-ness": red > 240 ? "Crimson" : "Classic Red",
    "Green-ness": green > 240 ? "Verdant" : "Classic Green",
    "Blue-ness": blue > 240 ? "Royal" : "Classic Blue",
    // or just the value
    "Number of Dots": numDots,
  };
}

function draw() {
  background(red, green, blue);

  var h4 = windowHeight / 4;
  var h2 = windowHeight / 2;
  var w2 = windowWidth / 2;
  var timer = frameCount * 0.05;
  
  for (var i = 0; i < numDots; i++) {
    var rotation = i / numDots;
    ellipse(
      w2 + sin(timer + TAU * rotation) * h4, 
      h2 + cos(timer + TAU * rotation) * h4, 
      80, 80);
  }
}
