// get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const buttonToggle  = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//FUNCTIONS
////////////////////////////////
function togglePlay(){
// if(video.paused){
//     video.play();
// }else {
//     video.pause();
// }

//alternatively
const method = video.paused ? 'play' : 'pause';
video[method]();
}

function updateButton(){
    const icon = this.paused ? "►" : "❚❚";
    buttonToggle.textContent = icon;
    //video.textContent = icon;
}

function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseInt(this.dataset.skip);
}

function handleRange(){
    // console.log(this.value);
    video[this.name] = this.value;
}

function handleProgressBar(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}



//EVENTS
////////////////////////////////////
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
buttonToggle.addEventListener('click', togglePlay);

//fast forward
skipButtons.forEach(btn => btn.addEventListener('click', skip));

//ranges
ranges.forEach( range => range.addEventListener('click', handleRange));
ranges.forEach( range => range.addEventListener('mouseover', handleRange));
ranges.forEach( range => range.addEventListener('change', handleRange));


//progress bar
video.addEventListener('timeupdate', handleProgressBar);

//progress scrub
let mouseDown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

// Spacebar play/pause toggle
document.addEventListener('keydown', function(e) {
    // console.log(e)
    if (e.key === " " || e.keyCode === 32) {  // Spacebar detection
        e.preventDefault();  // Prevent the default spacebar behavior (scrolling the page)
        togglePlay();  // Toggle play/pause when spacebar is pressed
    }
});
//try to make video go fullscreen