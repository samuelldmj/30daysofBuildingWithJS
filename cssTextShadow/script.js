
//1
const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

//3 shadow function
function shadow(e) {
    // console.log(e);
    //4
    //These properties give the position of the target element relative to the parent element.
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //7
    const walk = 500;

    //5
    let { offsetX: x, offsetY: y } = e;

    //6
    // console.log(this);
    // console.log(e.target.offsetWidth);
    //(the element that triggered the event is the e.target)
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    //8
    //calculation of horizontal movement
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    //calculation of vertical movement
    const ywalk = Math.round((y / height * walk) - (walk / 2));
    // console.log(xWalk, ywalk);

    text.style.textShadow = `
    ${xWalk}px ${ywalk}px 1px rgba(19, 242, 146, 0.7),
    ${xWalk * -1}px ${ywalk}px 1px rgba(123, 0, 176, 0.5),
    ${xWalk}px ${ywalk * -1}px 1px rgba(123, 41, 47, 0.5),
    ${xWalk * -1}px ${ywalk}px 1px rgba(190, 9, 54, 0.5)
    `;

}

//2 event
hero.addEventListener('mousemove', shadow);

