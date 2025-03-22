var video
var img;
var videoStarted = false;

function setup() {
    createCanvas (windowWidth, windowHeight);
    
    video = createVideo("VIDEO.mp4", videoLoaded);
    video.size(360, 730);
    video.hide();

    img = createImg("arrow.jpg")
    img.position(500, 500);
    img.size(50, 50);
}

function videoLoaded() {
    video.volume(0);
}
 
function draw() {
    background(0);


  if (videoStarted) {
    image(video, 0, 0);
  }

  fill(255);
  textSize(20);
  if(!videoStarted) {
    text("start", 10, height - 20);
    }
}

function mousePressed() {
    if (!videoStarted) {
        video.loop();
        videoStarted = true;
    }
}