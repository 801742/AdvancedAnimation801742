
function Boid(loc,vel){
  this.loc = loc;
  this.vel = vel;
  this.clr = "blue";
}


Boid.prototype.draw = function(){
  let ctx = context;
  ctx.beginPath()
  ctx.fillStyle = this.clr;
  ctx.moveTo(this.loc.x-15, this.loc.y-0.5*15);
  ctx.lineTo(this.loc.x+15, this.loc.y);
  ctx.lineTo(this.loc.x-15, this.loc.y+0.5*15);
  ctx.closePath();
  ctx.fill();
}

Boid.prototype.update = function(){
  this.loc.add(this.vel);
}

Boid.prototype.checkEdges = function(){
if(this.loc.x<15){
  this.vel.x = Math.abs(this.vel.x);
}
else if(this.loc.x>canvas.width-15){
  this.vel.x =-1*Math.abs(this.vel.x);
}
if(this.loc.y<15){
  this.vel.y = Math.abs(this.vel.y);
}
else if(this.loc.y>canvas.height-15){
  this.vel.y =-1*Math.abs(this.vel.y);
}
}

Boid.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
