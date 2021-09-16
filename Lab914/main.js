window.addEventListener("load", init);

let balls = [];
let attractor;
let repulser;
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    loadBalls(25);
    animate();

}
function loadBalls(n){
  for(let i=0; i<n; i++){
    let clr = "blue";
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(1,1);
    vel.setMagnitude(6)
    let acc = new JSVector(0,0);
    vel.setDirection(Math.random()*2*Math.PI);
    let rad = 20
    balls.push(new Ball(loc,vel,acc,rad,clr));
  }
    let clr1 = "green";
    let clr2 = "black";
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    let vel = new JSVector(Math.random()*5, Math.random()*5);
    let acc = new JSVector(1,1);
    let rad = 20;
    attractor = new Ball(loc,vel,acc,rad,clr1);
    repulser = new Ball(loc,vel,acc,rad,clr2);
}
function runBalls(){
for(let i=0; i < balls.length; i++){
  balls[i].run();
  attractor.run();
  repulser.run();
}
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    runBalls();
    attractRepel();
    requestAnimationFrame(animate);
}
function attractRepel(){
  for(let i=0; i<balls.length; i++){
    if(attractor.loc.sub(balls[i])<150){
      balls[i].acc *= 2;
      balls[i].setDirection(attractor.getDirection());
    }else if(attractor.loc.sub(balls[i])<250){
      balls[i].acc *= 2;
      balls[i].setDirection(attractor.getDirection()*180);
    }
  }
}
//function animate(){
//    context.clearRect(0,0,canvas.width,canvas.height);
//    runBalls();
//    for(let i=0; i<balls.length; i++){
//      let vec = new JSVector();
//      if(vec.subGetNew(balls[i].loc , attractor.loc).getMagnitude()<150){
//        balls[i].acc *= 2;
//        balls[i].setDirection(attractor.getDirection());
//      }else if(vec.subGetNew(balls[i].loc , attractor.loc).getMagnitude()<200){
//        balls[i].acc *= 2;
//        balls[i].setDirection(attractor.getDirection()*180);
//      }
//    }
//    requestAnimationFrame(animate);
//}
