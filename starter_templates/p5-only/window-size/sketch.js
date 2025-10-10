function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  // min() uses the lower of two values
  ellipse(width / 2, height / 2, min(width / 2, height / 2));
}
