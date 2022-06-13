function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill("red");
    noStroke();
    ellipse(mouseX, mouseY, 60, 60);
  }
}