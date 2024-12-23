const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

console.log(msg);
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    // console.log(voices);
    voiceOPtions = voices.map( voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`).join('');
    voicesDropdown.innerHTML = voiceOPtions;
}


function switchVoice(){
    msg.voice = voices.find( voice => voice.name === this.value)
    toggle()
}

function toggle(startover = true){
    speechSynthesis.cancel();
    if(startover){
        speechSynthesis.speak(msg);
    } 
}

function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', switchVoice);
options.forEach( option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false))