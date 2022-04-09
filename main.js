option = "empty";
noseX=0;
noseY=0;

function preload() { 
    clown_nose = loadImage('https://i.postimg.cc/WphCgMvm/download-removebg-preview.png');
    curly_black_mustache = loadImage('https://i.postimg.cc/8cXTKDCy/download-removebg-preview-1.png');
    witch_nose = loadImage('https://i.postimg.cc/MTMy9ZtT/download-removebg-preview.png')
    }

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized')
}

function draw(){
    option = document.getElementById("filter-options").value;
    image(video, 0, 0, 300, 300);
    if (option == "cb-mustache") {
    image(curly_black_mustache, noseX -25, noseY -10, 60, 50);
    }
    else if (option == "red-clown-nose") { 
    image(clown_nose, noseX, noseY -10, 20, 20);
    }
    else { 
        image(witch_nose, noseX-25, noseY-25, 50, 50);
        }
}

function take_snapshot() {
    save('myFilterImage.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

