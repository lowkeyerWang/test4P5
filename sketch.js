let penState = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    if (penStats == 1) {
      strokeWeight(10);
      stroke(10);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    if (penStats == 2) {
      fill("red");
      noStroke();
      ellipse(mouseX, mouseY, 60, 60);
    }
  }
}

function keyTyped() {
  if (key == 'e') {
    penState = 2;
  }
  if (key == 'r') {
    penState = 1;
  }
}
