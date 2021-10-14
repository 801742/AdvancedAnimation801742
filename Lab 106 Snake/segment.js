
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
  //let dist = JSVector.subGetNew(segAhead.loc,this.loc);
  //dist.setMagnitude(5);
  //this.loc = JSVector.subGetNew(segAhead.loc, dist);
  }

Segment.prototype.update = function(){
  if(this.num == 0){
    this.loc.add(this.vel);
  }
}

Segment.prototype.run = function(){
  this.update();
  this.follow();
  this.draw();
}
