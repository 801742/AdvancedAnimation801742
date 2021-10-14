window.addEventListener("load", init);

let snakes = [];

function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    load(1);
    animate();

}
function load(n){
  for(let i=0; i < n; i++){

    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(1,1);
    let rad = 10
    let clr = "blue";
    let num = i;
    snakes.push(new Snake(loc, vel, rad, clr, num));
  }
}
function run(){
  for(let i=0; i < snakes.length; i++){
    snakes[i].run();
  }
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    run();
    requestAnimationFrame(animate);
}
