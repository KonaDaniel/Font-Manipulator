leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(1190, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded() {
    console.log('PoseNet is ready for duty!');
}

function gotResults(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('white');
    textSize(difference);
    fill("blue");
    text("Daniel", 50, 250);

    document.getElementById("font_size_lbl").innerHTML = "Font Size of text = " + difference + "px";
}