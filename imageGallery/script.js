

//all panels
const panel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    console.log(e.propertyName);
}

panel.forEach(panel => panel.addEventListener('click', toggleOpen));
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));