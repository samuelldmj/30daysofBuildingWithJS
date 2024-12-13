const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d', { willReadFrequently: true });  // Set the willReadFrequently option
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

    // Set the canvas size to match the video dimensions
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        // Draw the current video frame onto the canvas
        ctx.drawImage(video, 0, 0, width, height);

        // Extract pixels from image
        let pixels = ctx.getImageData(0, 0, width, height);

        // Manipulate pixels and put them in the image
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);

        ctx.globalAlpha = 0.8;
        ctx.putImageData(pixels, 0, 0);
    }, 30);
}

function redEffect(pixels) {
    // data coming from pixels object as result of using getImageData method
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // r
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // g
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // b
    }

    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        // Fix: Adjust pixel shifts to ensure indices are within bounds
        if (i - 150 >= 0) pixels.data[i - 150] = pixels.data[i + 0] + 100; // r
        if (i + 550 < pixels.data.length) pixels.data[i + 550] = pixels.data[i + 1] - 50; // g
        if (i - 550 >= 0) pixels.data[i - 550] = pixels.data[i + 2] * 0.5; // b
    }

    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });

    for (let i = 0; i < pixels.data.length; i = i + 4) {
        let red = pixels.data[i + 0];
        let green = pixels.data[i + 1];
        let blue = pixels.data[i + 2];
        let alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // Make the pixel transparent
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

function takePhoto() {
    // Play the snap sound
    snap.currentTime = 0;
    snap.play();

    // Take the content or data out of the canvas element
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'fineBoy');
    link.innerHTML = `<img src="${data}" alt="Fine Boy">`;
    strip.insertBefore(link, strip.firstChild);
}

// 3) Add event listener to call paintToCanvas when the video metadata is loaded
video.addEventListener('loadedmetadata', paintToCanvas);

// Removed the duplicate event listener for 'canplay'

// 0 Start the process of getting the video
getVideo();
