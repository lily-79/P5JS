function setup() {
  createCanvas(windowWidth, windowHeight);
}

let x = 50;

function draw() {
  background(0);
  ellipse(x, 200, 100, 50);
  x++;

  if (x > width+50)
    x = -50;
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
