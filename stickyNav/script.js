//on body
// const nav = document.querySelector('#main');
// const navTop = nav.offsetTop;

// function stickNav(e) {
//     if (window.scrollY >= navTop) {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         document.body.classList.add('fixed-nav'); 
//     } else {
//         document.body.classList.remove('fixed-nav');
//     }
// }

// window.addEventListener('scroll', stickNav);

//section
const nav = document.querySelector('#main');
const section = document.querySelector('section');
const navTop = nav.offsetTop;

function stickNav(e) {
    console.log(window.pageYOffset, navTop);
    if (window.scrollY >= navTop) {
        section.style.paddingTop = nav.offsetHeight + 'px';
        section.classList.add('fixed-nav');
    } else {
        section.style.paddingTop = 0;
        section.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickNav);