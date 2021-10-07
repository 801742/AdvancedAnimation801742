window.addEventListener("load", init);

let segments = [];

function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    loadSegments(5);
    animate();

}
function loadSegments(n){
  for(let i=0; i < n; i++){
    var loc;
    if(i == 0){
      let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
    }else{
      let loc = segments[0]-segments[0].rad*2*i;
    }
    let vel = new JSVector(1,1);
    let num = i;
    let rad = 10
    let clr = "blue";
    segments.push(new Segment(loc,vel, rad, clr, num));
  }
}
function run(){
  for(let i=0; i < segments.length; i++){
    segments[i].run();
  }
}
function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    run();
    requestAnimationFrame(animate);
}

function follow(){
  for(let i=0; i < segments.length; i++){
    if(this.num =! 0){
      this.loc.setDirection(segment[i+1].getDirection());
    }
  }
}
