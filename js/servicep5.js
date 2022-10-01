function setup() {
  let canvas;
  if (windowWidth <= 768) {
    canvas = createCanvas(windowWidth/2, windowHeight/2, WEBGL);
  } else {
    canvas = createCanvas(windowWidth / 2, windowHeight / 2, WEBGL);
  }
  angleMode(DEGREES)
  canvas.parent('animation');
}

function draw() {
  background(34);
  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 500) {
      noFill();
      strokeWeight(2);
      stroke(186, 85, 211);
      rotateX(frameCount * 0.4);
      rotateY(frameCount * 0.12);
      drawTriangle(30, 80, 80);
    }
  }
}

function drawTriangle(x, y, r) {
  push();
  translate(x, y);
  rotate(-90);

  beginShape();
  for (let i = 0; i < 3; i++) {
    vertex(r * cos(360 * i / 3), r * sin(360 * i / 3));
  };
  endShape(CLOSE);
  pop();
}

function windowResized() {
  if(windowWidth <= 768) {
      resizeCanvas(windowWidth/2, windowHeight/2);
  } else {
      resizeCanvas(windowWidth/2, windowHeight/2);
  };
};