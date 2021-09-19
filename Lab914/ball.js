
function Ball(loc,vel,acc,rad,clr){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.acc = acc;
  this.clr = clr;
}


Ball.prototype.draw = function(){
  let ctx = context;
  ctx.beginPath()
  ctx.fillStyle = this.clr;
  ctx.arc(this.loc.x,this.loc.y, this.rad, 0, 2 * Math.PI )
  ctx.fill();
}

Ball.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

Ball.prototype.checkEdges = function(){
if(this.loc.x<this.rad){
  this.vel.x = Math.abs(this.vel.x);
}
else if(this.loc.x>canvas.width-this.rad){
  this.vel.x =-1*Math.abs(this.vel.x);
}
if(this.loc.y<this.rad){
  this.vel.y = Math.abs(this.vel.y);
}
else if(this.loc.y>canvas.height-this.rad){
  this.vel.y =-1*Math.abs(this.vel.y);
}
}

Ball.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
