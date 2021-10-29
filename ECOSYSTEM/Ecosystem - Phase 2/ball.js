
function Ball(loc, vel, rad, clr, context){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.context = context;
}

Ball.prototype.draw = function(){
  this.context.beginPath();
  this.context.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  this.context.fillStyle = this.clr;
  this.context.fill();
  this.context.closePath();
}

Ball.prototype.update = function(){
  this.loc.add(this.vel);
}

Ball.prototype.checkEdges = function(){
  if(this.loc.x < 0 ||this.loc.x > canvas.width){
    this.vel.x *=-1;
  }
  if(this.loc.y < 0||this.loc.y > canvas.height){
    this.vel.y *=-1;
  }
}

Ball.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
