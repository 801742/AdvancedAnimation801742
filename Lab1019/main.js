window.addEventListener("load", init);
document.addEventListener("click", load);

let particleSystems = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    animate();

}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
      for(let i=0; i <particleSystems.length; i++){
        particleSystems[i].run();
      }
    requestAnimationFrame(animate);
}
function load(){
  let loc = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
  particleSystems.push(new ParticleSystem(loc));
}
