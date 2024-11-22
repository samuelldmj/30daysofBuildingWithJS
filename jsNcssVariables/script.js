
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
//i am trying to access the value px from all data attribute from html
const suffix = this.dataset.sizing || '';
// console.log(this.dataset)
// console.log(this.name);
// console.log(suffix);


//set css property
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( input => input.addEventListener('change', handleUpdate));
// inputs.forEach( input => input.addEventListener('mousemove', handleUpdate));