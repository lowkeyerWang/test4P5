let mic; 

function setup() {
  createCanvas(windowWidth , windowHeight);
  xpos = width * 0.5;
  ypos = height * 0.5;
  mic  = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(40);
  const vol = mic.getLevel();
  const radius = map(vol, 0, 0.05, 100, 500);
  noStroke();
  fill(200, 190, 190);
  ellipse(xpos, ypos, radius, radius);
}