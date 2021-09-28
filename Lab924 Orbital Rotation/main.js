window.addEventListener("load", init);

let movers = [];
let orbiters = [];

function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    loadMovers(5);
    animate();

}
function loadMovers(n){
  for(let i=0; i < n; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(1,1);
    let id = i;
    vel.setMagnitude(6)
    vel.setDirection(Math.random()*2*Math.PI);
    movers.push(new Mover(loc,vel,id));
  }
}
function run(){
  for(let i=0; i < movers.length; i++){
    movers[i].run();
  }
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    run();
    requestAnimationFrame(animate);
}
