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
    let x = Math.random()*canvas.width;
    let y = Math.random()*canvas.height;
    let dx = Math.random()* 10;
    let dy=Math.random()* 10;;
    let diam=25;
    let clr = "blue";
  //  let clr = "rgb(" + (100) + "," + (0) + ","+ (0)+")";
    balls.push(new Ball(x,y,dx,dy,diam,clr));
  }
}
function runBalls(){
for(let i=0; i < balls.length; i++){
  balls[i].run();
  balls[i].render();
}
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    runBalls();
    requestAnimationFrame(animate);
}
