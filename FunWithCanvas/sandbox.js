const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX= 0;
let lastY= 0;
let hue = 0;
let direction = true;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'multiply';




function draw(e) {
    if (!isDrawing) return // stop the fn from running when they are not moused.
    console.log(direction, ctx.lineWidth);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    if(ctx.lineWidth < 100){
        ctx.lineWidth += 0.25;
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    hue < 360 ? hue++ : hue = 0;

    if(ctx.lineWidth > 100 || ctx.lineWidth < 1) {
        direction = !direction;
    }

    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

 
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);