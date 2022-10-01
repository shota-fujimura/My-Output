function setup() {
    let canvas = createCanvas(windowWidth/2, windowHeight/2, WEBGL);
    canvas.parent('animation');
}

function draw() {
    background(34);
    for(var y =0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
            noFill();
            stroke(255, 255,255);
            rotateX(frameCount * 0.01);
            rotateY(frameCount * 0.01);
            curve(100,0,10,0,180,100,500,50);
            ellipse(20, 60, 5);
            ellipse(100, 80, 7);
            ellipse(180, 100, 9);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth/2, windowHeight/2, WEBGL);
}