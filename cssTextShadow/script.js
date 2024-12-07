
//1
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

//3 shadow function
function shadow(e){
    // console.log(e);
    //4
    const width = hero.offsetWidth
    const height = hero.offsetHeight

    //5
    let {offsetX : x, offsetY: y} = e;

    //6
    console.log(this, e.target );
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    
}

//2 event
hero.addEventListener('mousemove', shadow);

