// get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
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



//EVENTS
////////////////////////////////////
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
buttonToggle.addEventListener('click', togglePlay);

//fast forward
skipButtons.forEach(btn => btn.addEventListener('click', skip));

//ranges
ranges.forEach( range => range.addEventListener('click', handleRange))
ranges.forEach( range => range.addEventListener('mouseover', handleRange))
ranges.forEach( range => range.addEventListener('change', handleRange))

//progress bar
video.addEventListener('timeupdate', handleProgressBar);


