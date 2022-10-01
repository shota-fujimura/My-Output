function setup() {
    let canvas;
    if(windowWidth <= 768) {
        canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    } else {
        canvas = createCanvas(windowWidth/2, windowHeight/2, WEBGL);
    }
    canvas.parent('animation');
}

function draw() {
    background(34);
    for(var y =0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
            noFill();
            stroke(255, 255,255);
            rotateX(frameCount * 0.02);
            rotateY(frameCount * 0.01);
            box(200);
        }
    }
}

function windowResized() {
    if(windowWidth <= 768) {
        resizeCanvas(windowWidth, windowHeight,WEBGL);
    } else {
        resizeCanvas(windowWidth/2, windowHeight/2, WEBGL);
    };
};