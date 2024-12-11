const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


// 1) Function to set up the video and start playing
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => console.error(`Failed to access the camera: ${err}`));
}

// 2) Function to paint the video frame to the canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    console.log(width, height);

    // Optionally set the canvas size to match the video dimensions
    canvas.width = width;
    canvas.height = height;

    // 4 this will take images or videod every set time and put in the canvas element
    setInterval( () => {
        // Draw the current video frame onto the canvas
        ctx.drawImage(video, 0, 0, width, height);
    }, 30)
}


function takePhoto(){
    //play the snap sound
    snap.currentTime = 0;
    snap.play();

    //take the content or data out of the canvas element
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'fineBoy');
    link.innerHTML = `<img src="${data}" alt="Fine Boy">`;
    strip.insertBefore(link, strip.firstChild);
}

//3) Add event listener to call paintToCanvas when the video metadata is loaded
video.addEventListener('loadedmetadata', paintToCanvas);

//when video start to play, it would emit an event, then paintToCanvas function execute
video.addEventListener('canplay', paintToCanvas);

//0 Start the process of getting the video
getVideo();
