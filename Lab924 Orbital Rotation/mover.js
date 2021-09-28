
function Mover(loc,vel,id){
  this.loc = loc;
  this.vel = vel;
  this.clr = "blue";
  this.rad = 15;
  this.id = id;
  this.angV = 0;
  this.orbiters = [];
  let balls = Math.floor(Math.random()*5)+2;
  for(let i=0; i < balls; i++){
    let ang = i*(360/balls);
    let angV = new JSVector(1,1);
    let mover = this.id;
    orbiters.push(new Orbiter(ang,angV,mover));
  }
}


Mover.prototype.draw = function(){

  context.save();
  context.beginPath();
  context.translate(this.loc.x, this.loc.y);
  this.angV = this.angV+.1;
  context.rotate(this.angV+Math.PI/120);
  //context.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  context.closePath();
  context.fillStyle = this.color;
  context.fill();
  for(let i=0; i < orbiters.length; i++){
    orbiters[i].run();
  }
    context.restore();
}


Mover.prototype.update = function(){
  this.loc.add(this.vel);

}

Mover.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
}

Mover.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
