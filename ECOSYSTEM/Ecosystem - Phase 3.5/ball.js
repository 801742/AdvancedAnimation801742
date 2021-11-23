
function Ball(loc, vel, rad, clr){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
}

Ball.prototype.draw = function(){
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  context.fillStyle = this.clr;
  context.fill();
  context.closePath();

  contextMini.save();
  contextMini.scale(world.scaleWidth, world.scaleHeight);
  contextMini.translate(world.world.width/2, world.world.height/2);
  contextMini.beginPath();
  contextMini.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  contextMini.fillStyle = this.clr;
  contextMini.fill();
  contextMini.closePath();
  contextMini.restore();
}

Ball.prototype.update = function(){
  this.loc.add(this.vel);
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x > 1500) this.vel.x = -this.vel.x;
  if(this.loc.y > 1000) this.vel.y = -this.vel.y;
  if(this.loc.x < -1500) this.vel.x = -this.vel.x;
  if(this.loc.y < -1000) this.vel.y = -this.vel.y;
}

Ball.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
