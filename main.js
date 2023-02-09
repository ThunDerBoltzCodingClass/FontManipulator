difference=0;
right_wrist_x=0;
left_wrist_x=0
function preload(){

}

function setup(){
    canvas= createCanvas(550, 550);
    canvas.position(560, 150);
    video=createCapture(VIDEO);
    video.size(550, 550);
    PoseNet= ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
    }
}

function draw(){
     background('blue');
     document.getElementById("font_size").innerHTML="width and height of text will be "+difference+" px";
     fill('red');
     textSize(difference);
     text("HI!!!", 50, 400);
}