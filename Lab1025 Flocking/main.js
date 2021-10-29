window.addEventListener("load", init);

let flocks = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    load(1);
    animate();

}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    run();
    requestAnimationFrame(animate);
}
function load(n){
  for(let i = 0; i < n; i++){
  let loc = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
  flocks.push(new Flock(loc));
  }
}
function run(){
  for(let i=0; i < flocks.length; i++){
    flocks[i].run();
  }
}
