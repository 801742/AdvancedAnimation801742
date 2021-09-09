window.addEventListener("load", init);

var balls = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    loadBalls(25);
    animate();

}
function loadBalls(n){
  for(let i=0; i<n; i++){
    let clr = "blue";
    let loc = new Ball(new JSVector(Math.random()*canvas.width, Math.random()*canvas.width));
    let vel = new Ball(new JSVector(Math.random()*5, Math.random()*5));
    balls.push(loc,vel,clr);
  }
}
function runBalls(){
for(let i=0; i < balls.length; i++){
  balls[i].run();
}
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    runBalls();
    requestAnimationFrame(animate);
}
