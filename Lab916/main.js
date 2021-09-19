window.addEventListener("load", init);

let boids = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    loadBoids(25);
    animate();

}
function loadBoids(n){
  for(let i=0; i<n; i++){

    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(1,1);
    vel.setMagnitude(6)
    vel.setDirection(Math.random()*2*Math.PI);
    boids.push(new Boid(loc,vel));
  }
}
function runBoids(){
  for(let i=0; i < boids.length; i++){
  boids[i].run();
  }
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    runBoids();
    requestAnimationFrame(animate);
}
