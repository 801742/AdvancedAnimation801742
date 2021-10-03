window.addEventListener("load", init);

var canvas, context;
let orgOnes = [];
let balls = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    load(6,9);
    animate();
}
function load(a,b){

  for(let i = 0; i < a ; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    let vel = new JSVector(Math.random()*8-4, Math.random()*8-4);
    let rad = 20;
    let clr = "black";
    orgOnes.push(new OrgOne(loc, vel, rad, clr, context));
  }
  for(let i = 0; i < b; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    let vel = new JSVector(Math.random()*8-4, Math.random()*8-4);
    let rad = 10;
    let clr = "black";
    balls.push(new Ball(loc, vel, rad, clr, context))
  }

}
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < orgOnes.length; i++){
      orgOnes[i].run();
    }
    for(let i = 0; i < balls.length; i++){
      balls[i].run();
    }

    requestAnimationFrame(animate);
}
