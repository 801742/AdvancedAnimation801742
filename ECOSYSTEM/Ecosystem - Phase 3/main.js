window.addEventListener("load", init);
document.addEventListener('keydown', moveScreen);

var canvas, context, world, contextMini;
let orgOnes = [];
let balls = [];
let snakes = [];
function init(){

  canvas = document.getElementById("cnv");
  canvasMini = document.getElementById("cnv2");
  context = canvas.getContext("2d");
  contextMini = canvasMini.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  contextMini.fillRect(810, 600, canvasMini.width, canvasMini.height);

    load(6,9,18);
    animate();
}
function load(o,b,s){

  for(let i = 0; i < o ; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    let vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
    let rad = 20;
    let clr = "white";
    orgOnes.push(new OrgOne(loc, vel, rad, clr, context));
  }
  for(let i = 0; i < b; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    let vel = new JSVector(Math.random()*3-2, Math.random()*3-2);
    let rad = 10;
    let clr = "white";
    balls.push(new Ball(loc, vel, rad, clr, context));
  }
  for(let i = 0; i < s; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(Math.random()*5-3,Math.random()*3-5);
    let rad = 10
    let clr = new Color.generateRandomColor(1,1,1,false);
    let num = i;
    snakes.push(new Snake(loc, vel, rad, clr, num));
  }
}
function animate(){
  // context.fillStyle = "black";
  // context.fillRect(0,0,canvas.width,canvas.height);
  for(let i = 0; i < orgOnes.length; i++){
      orgOnes[i].run();
  }
  for(let i = 0; i < balls.length; i++){
      balls[i].run();
  }
  for(let i = 0; i < snakes.length; i++){
      snakes[i].run();
  }
    //death();
    world.draw();
    requestAnimationFrame(animate);
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

// function death(){
//     for(let i=0;i<orgOnes.length;i++){
//       for(let j=0;j<balls.length;j++){
//         if(JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).getMagnitude()<200){
//           orgOnes[i].acceleration = JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).setMagnitude(0.5);
//           if(JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).getMagnitude() < orgOnes[i].rad+balls[j].rad + 60 ){
//             balls.splice(i,1);
//           }
//         }
//       }
//     }
// }
