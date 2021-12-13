function Spike(mover, length, angle, rad, color){
  this.rad = rad;
  this.color=color;
  this.loc = new JSVector(length*Math.cos(angle), length*Math.sin(angle));
}
Spike.prototype.draw = function(){
  context.beginPath();
  context.moveTo(this.loc.x-15, this.loc.y-0.5*15);
  context.lineTo(this.loc.x+15, this.loc.y);
  context.lineTo(this.loc.x-15, this.loc.y+0.5*15);
  context.closePath();
  context.fillStyle = this.color;
  context.fill();
  context.beginPath();
  context.moveTo(this.loc.x, this.loc.y);
  context.lineTo(0, 0);
  context.closePath();
  context.strokeStyle = this.color;
  context.lineWidth = 3;
  context.stroke();

}
