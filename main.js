NoseX = 0;
NoseY = 0;

function preload(){

    clown_nose = loadImage('https://i.postimg.cc/901v5Hhh/unnamed.png');

}

function setup(){

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log('poseNet is Initialized');
    
}

function draw(){

    image(video, 0, 0, 300, 300);
    image(clown_nose, NoseX, NoseY, 40, 40);

}

function take_snapshot(){

    save('MyFilterImage.png');

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x =" + NoseX);
        console.log("nose y =" + NoseY);
        NoseX = NoseX - 20;
        NoseY = NoseY - 10;


    }

}