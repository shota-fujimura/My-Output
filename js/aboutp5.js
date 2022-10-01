function setup() {
    let canvas = createCanvas(windowWidth/2, windowHeight/2, WEBGL);
    canvas.parent('animation');
    angleMode(DEGREES);
}

function draw() {
    background(34);
    for(var y =0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
            noFill();
            strokeWeight(2);
            stroke(46, 139, 87);
            rotateX(frameCount * 0.7);
            rotateY(frameCount * 0.82);
            drawDiamond(width/10 ,height/10, 50);
        }
    }
}

function drawDiamond(x, y, r) {
    let R;

    push();
    translate(x,y);

    beginShape();
    for(let i = 0; i < 4; i++){
        if(i % 2 == 0) {
            R = r / 2;
        } else {
            R = r;
        } 
        vertex(R * cos(90*i), R * sin(90*i));
    }
    endShape(CLOSE);

    pop();
}

function resizedCanvas() {
    resizeCanvas(windowWidth/2, windowWidth/2, WEBGL);
}