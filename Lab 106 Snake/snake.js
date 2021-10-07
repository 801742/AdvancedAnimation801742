
function Segment(loc, vel, rad, clr, num){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.num = num;
}


Segment.prototype.draw = function(){
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
  context.fillStyle = this.clr
  context.fill();
  context.closePath();
}


Segment.prototype.update = function(){
  if(this.num == 0){
    this.loc.add(this.vel);
  }
}

Segment.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
}

Segment.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
