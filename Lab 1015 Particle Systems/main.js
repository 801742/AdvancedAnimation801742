window.addEventListener("load", init);

particles = [];

function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    animate();

}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    let loc = new JSVector(canvas.width/2, 0);
    let vel = new JSVector(Math.random()*2-1,Math.random()*2-2);
    let acc = new JSVector(0,0.05);
    particles.push(new Particle(loc, vel, acc));

      for(let i=0; i <particles.length; i++){
        particles[i].run();
        if(particles[i].isDead()){
          particles[i].splice(i,1)
        }
      }
    requestAnimationFrame(animate);
}
