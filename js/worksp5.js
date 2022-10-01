function setup() {
    let canvas;
    canvas = createCanvas(windowWidth/2, windowHeight/2, WEBGL);
    canvas.parent('animation');
    angleMode(RADIANS);
}


function draw() {
    background(34);
    rotateX(-20);
    rotateY(45);

    rotateY(frameCount * 0.03);
    rotateX(frameCount * 0.03);

    var radius = 100;
    var s = 0;
    var t = 0;
    var lastx = 0;
    var lasty = 0;
    var lastz = 0;

    while (t < 180) {
        s += 18;
        t += 1;
        var radianS = radians(s);
        var radianT = radians(t);

        var thisx = 0 + (radius * cos(radianS) * sin(radianT));
        var thisy = 0 + (radius * sin(radianS) * sin(radianT));
        var thisz = 0 + (radius * cos(radianT));

        if (lastx != 0) {
            stroke(218, 165, 32);
            line(thisx, thisy, thisz, lastx, lasty, lastz);
        }
        lastx = thisx;
        lasty = thisy;
        lastz = thisz;
    }
}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2, WEBGL)
  };