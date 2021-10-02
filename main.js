var Sound="";
LWX=0
LWY=0
RWX=0
RWY=0

function setup()
{
    Canvas=createCanvas(300, 300);
    Canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        LWX= results[0].pose.leftWrist.x;
        LWY= results[0].pose.leftWrist.y;
        RWX= results[0].pose.rightWrist.x;
        RWY= results[0].pose.rightWrist.y;
    }
}

function draw()
{
    image( video, 0, 0, 300, 300);
}

function preload()
{
    Sound=loadSound("music.mp3");
}

function play_button()
{
    Sound.play();
    Sound.setVolume(1);
    Sound.rate(1);
}