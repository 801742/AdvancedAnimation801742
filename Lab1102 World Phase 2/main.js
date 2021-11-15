window.addEventListener("load", init);
document.addEventListener('keydown', moveScreen);


var canvas;
var context, contextMini;
var world;

function init(){
  canvas = document.getElementById("cnv");
  canvasMini = document.getElementById("cnv2");
  context = canvas.getContext("2d");
  contextMini = canvasMini.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  contextMini.fillRect(810, 600, canvasMini.width, canvasMini.height);

  world = new World();


  animate();
}
function animate() {

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    contextMini.fillStyle = "white";
    contextMini.fillRect(0, 0, canvasMini.width, canvasMini.height);

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
