function Spike(mover, length, angle, rad, color,ctx){
  this.rad = rad;
  this.color=color;
  this.loc = new JSVector(length*Math.cos(angle), length*Math.sin(angle));
  this.context = ctx;
}
Spike.prototype.draw = function(){
  this.context.beginPath();
  this.context.moveTo(this.loc.x-15, this.loc.y-0.5*15);
  this.context.lineTo(this.loc.x+15, this.loc.y);
  this.context.lineTo(this.loc.x-15, this.loc.y+0.5*15);
  this.context.closePath();
  this.context.fillStyle = this.color;
  this.context.fill();
  this.context.beginPath();
  this.context.moveTo(this.loc.x, this.loc.y);
  this.context.lineTo(0, 0);
  this.context.closePath();
  this.context.strokeStyle = this.color;
  this.context.lineWidth = 3;
  this.context.stroke();
}
