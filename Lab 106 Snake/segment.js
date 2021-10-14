
function Segment(loc, vel, clr, rad, num){
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.rad = rad;
  this.num = num;
}


Segment.prototype.draw = function(){

  context.strokeStyle = this.clr;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = this.clr;
  context.fill();

}

Segment.prototype.follow = function(segAhead){
  let dist = JSVector.subGetNew(segAhead.loc,this.loc);
  dist.setMagnitude(15);
  this.loc = JSVector.subGetNew(segAhead.loc, dist);
  this.draw();
  }

Segment.prototype.update = function(){
  if(this.num == 0){
    this.loc.add(this.vel);
  }
}

Segment.prototype.checkEdges = function(){
  if(this.num == 0){
    if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
  }
}

Segment.prototype.run = function(){
  this.update();
  this.checkEdges();
}
