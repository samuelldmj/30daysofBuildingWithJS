console.log('hello');

const pressed = [];
const secretCode = 'samuel';

window.addEventListener('keyup', function(e){
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)){
        console.log('Nice one!')
        cornify_add();
    }

    console.log(pressed);
})