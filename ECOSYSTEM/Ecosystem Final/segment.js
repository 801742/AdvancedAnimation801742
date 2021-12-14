
function Segment(loc, vel, clr, rad, num){
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.rad = rad;
  this.num = num;
  this.acc = new JSVector(0,0);
}


Segment.prototype.draw = function(){
  context.save();
  context.strokeStyle = this.clr;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = this.clr;
  context.fill();
  context.restore();


  contextMini.save();
  contextMini.scale(world.scaleWidth, world.scaleHeight);
  contextMini.translate(world.world.width/2, world.world.height/2);
  contextMini.strokeStyle = this.clr;
  contextMini.beginPath();
  contextMini.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
  contextMini.stroke();
  contextMini.fillStyle = this.clr;
  contextMini.fill();
  contextMini.restore();

}

Segment.prototype.follow = function(segAhead){

  let dist = JSVector.subGetNew(segAhead.loc,this.loc);
  dist.setMagnitude(25);
  this.loc = JSVector.subGetNew(segAhead.loc, dist);
  this.draw();

  }

Segment.prototype.update = function(){
  if(this.num == 0){
    let currentV = this.vel.getMagnitude();
    this.vel.add(this.acc);
    this.vel.setMagnitude(currentV);
    this.loc.add(this.vel);
  }
}

 Segment.prototype.checkEdges = function(){
   if(this.num == 0){
     if(this.loc.x > 1500) this.vel.x = -this.vel.x;
     if(this.loc.y > 1000) this.vel.y = -this.vel.y;
     if(this.loc.x < -1500) this.vel.x = -this.vel.x;
     if(this.loc.y < -1000) this.vel.y = -this.vel.y;
   }
}

Segment.prototype.run = function(){
  this.update();
  this.checkEdges();
  this.repulsion();
}
Segment.prototype.repulsion = function(){
  let nearOrgOne = false;
  for(let i=0; i < orgOnes.length; i++){
    let d = JSVector.subGetNew(this.loc, orgOnes[i].loc).getMagnitude();
    if(d < 120){
      this.acc = JSVector.subGetNew(this.loc, orgOnes[i].loc).setMagnitude(0.5);
      nearOrgOne = true;
    }
  }
  if(!nearOrgOne){
    this.acc = new JSVector(0, 0);
  }
  }
