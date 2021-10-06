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
    let vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
    let rad = 20;
    let clr = "white";
    orgOnes.push(new OrgOne(loc, vel, rad, clr, context));
  }
  for(let i = 0; i < b; i++){
    let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
    let vel = new JSVector(Math.random()*3-2, Math.random()*3-2);
    let rad = 10;
    let clr = "white";
    balls.push(new Ball(loc, vel, rad, clr, context));

  }

}
function animate(){
context.fillStyle = "black";
context.fillRect(0,0,canvas.width,canvas.height);
for(let i = 0; i < orgOnes.length; i++){
      orgOnes[i].run();
    }
    for(let i = 0; i < balls.length; i++){
      balls[i].run();
    }
    death();
    requestAnimationFrame(animate);
}

function death(){
    for(let i=0;i<orgOnes.length;i++){
      for(let j=0;j<balls.length;j++){
        if(JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).getMagnitude()<200){
          orgOnes[i].acceleration = JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).setMagnitude(0.5);
          if(JSVector.subGetNew(balls[j].loc, orgOnes[i].loc).getMagnitude() < orgOnes[i].rad+balls[j].rad + 60 ){
            balls.splice(i,1);

          }
        }
      }
    }
}
