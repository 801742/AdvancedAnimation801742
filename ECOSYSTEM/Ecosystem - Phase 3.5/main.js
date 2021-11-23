window.addEventListener("load", init);
document.addEventListener('keydown', moveScreen);


var canvas;
var context, contextMini;
var world;
let snakes = [];
let orgOnes = [];
let balls = [];
function init(){

  canvas = document.getElementById("cnv");
  canvasMini = document.getElementById("cnv2");
  context = canvas.getContext("2d");
  contextMini = canvasMini.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  contextMini.fillRect(810, 600, canvasMini.width, canvasMini.height);

  world = new World();

  load(40,60,90);
  animate();
}

function animate() {

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    contextMini.fillStyle = "white";
    contextMini.fillRect(0, 0, canvasMini.width, canvasMini.height);

    world.draw();
    run();
    requestAnimationFrame(animate);

}

function load(n,a,b){
  for(let i=0; i < n; i++){

    let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
    let vel = new JSVector(Math.random()*5-3,Math.random()*3-5);
    let rad = 10
    let clr = new Color.generateRandomColor(1,1,1,false);
    let num = i;
    snakes.push(new Snake(loc, vel, rad, clr, num));
  }
  for(let i = 0; i < a ; i++){
    let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);;
    let vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
    let rad = 20;
    let clr = "white";
    orgOnes.push(new OrgOne(loc, vel, rad, clr));
  }
  for(let i = 0; i < b; i++){
    let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
    let vel = new JSVector(Math.random()*3-2, Math.random()*3-2);
    let rad = 10;
    let clr = "black";
    balls.push(new Ball(loc, vel, rad, clr));
  }
}

function run(){
  for(let i=0; i < snakes.length; i++){
    snakes[i].run();
  }
  for(let i = 0; i < orgOnes.length; i++){
    orgOnes[i].run();
  }
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function moveScreen(){
  if(event.code === 'ArrowUp') {
      world.canvasLoc.y -= 10;
  }
  else if(event.code === 'ArrowDown'){
      world.canvasLoc.y += 10;
  }
  else if(event.code === 'ArrowRight'){
      world.canvasLoc.x += 10;
  }
  else if(event.code === 'ArrowLeft'){
      world.canvasLoc.x -= 10;
  }
}
