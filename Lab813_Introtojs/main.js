
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy, x2, y2, dx2, dy2;

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 500;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions
    x2 = y2 = 100;
    dy2 = dx2 = 4;

    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    update();   // update location
    checkEdges();
    draw();     // render
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;
    x2 += dx2;
    y2 += dy2;    // update y coordinate of location with y velocity
}

function checkEdges(){
  if(x > canvas.width || x2 > canvas.width){
    dx = -dx;
    dx2 = -dx2;
  }
  if(y > canvas.height || y2 > canvas.height){
    dy = -dy;
    dy2 = -dy2;
  }
  if(y < 0 || y2 < 0){
    dy = -dy;
    dy2 = -dy2;
  }
  if(x < 0 || x2 < 0){
    dx = -dx;
    dx2 = -dx2;
  }
}

// render a circle
function draw() {
    let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke

    let radius2 = 8; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x2, y2, radius2, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "red";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
