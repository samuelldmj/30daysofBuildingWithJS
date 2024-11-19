
/*
The HTML <canvas> element is used to draw graphics on a web page.
The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics
*/

//retrieving the canvas element b id (1)
const canvas = document.querySelector('#draw');
// console.dir(canvas);
//the environment you want to draw on (2)
const ctx = canvas.getContext('2d');

// resizing the browswer window (3)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

//when mouse is down  (4)
let isDrawing = false;
//last position
let lastX = 0;
let lastY = 0;

let hue = 0;

function draw(e){
      //execute this function when mouse down.
    if(!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
   
    //make it continue from where it stopped 
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;
    if(hue > 360){
        hue = 0;
    }
}

//(5)
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () =>  isDrawing = false);
canvas.addEventListener('mousedown',(e) => {
    isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;


});
canvas.addEventListener('mouseout',  () => isDrawing = false);