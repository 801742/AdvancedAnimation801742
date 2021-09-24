window.addEventListener("load", init);

var ship;
var canvas, context;
var planet;
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(1,1);
    vel.setMagnitude(6)
    vel.setDirection(Math.random()*2*Math.PI);
    let id1 = 1;
    let id2 = 2;
    ship = new Boid(loc,vel,id1);
    planet = new Boid(loc, 0, id2)
    animate();

}

function runBoids(){
    ship.run();
    planet.run();

}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    runBoids();
    requestAnimationFrame(animate);
}
