window.addEventListener("load", init);
document.addEventListener('keydown', moveScreen);


var canvas;
var context;
var world;

function init(){
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    world = new World();

    animate();
}
function animate() {

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    world.draw();

    requestAnimationFrame(animate);

}
function moveScreen(){
  if(event.code === 'ArrowUp') {
    if(world.loc.y > 0){
      world.loc.y -= 10;
    }
  }
  else if(event.code === 'ArrowDown'){
    if(world.loc.y < world.height-canvas.height){
      world.loc.y += 10;
    }
  }
  else if(event.code === 'ArrowRight'){
    if(world.loc.x < world.width-canvas.width){
      world.loc.x += 10;
    }
  }
  else if(event.code === 'ArrowLeft'){
    if(world.loc.x > 0){
      world.loc.x -= 10;
    }
  }
}
