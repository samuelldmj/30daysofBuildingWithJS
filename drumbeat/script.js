"use strict"
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    //selecting the corresponding key elements
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key);

    //added the playing class
    key.classList.add('playing');

    //validating the audio key pressed.
    if(!audio) return;

    //rewind to the start
    audio.currentTime = 0;

    //play
    audio.play();
    console.log(audio);
}

window.addEventListener('keydown', playSound);


function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    // console.log(e);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

