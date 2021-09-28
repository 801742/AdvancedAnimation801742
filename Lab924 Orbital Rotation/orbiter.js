
function Orbiter(ang,angV,mover){
  this.ang = ang;
  this.angV = angV;
  this.clr = "red";
  this.mover = mover;
  this.rad = 5;
  this.loc = new JSVector(15*Math.cos(this.ang), 15*Math.sin(this.ang));
}


Orbiter.prototype.draw = function(){

  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  context.fillStyle = this.clr;
  context.fill();
  context.beginPath();
  context.moveTo(this.loc.x, this.loc.y);
  context.lineTo(0, 0);
  context.closePath();
  context.strokeStyle = this.color;
  context.lineWidth = 3;
  context.stroke();
}



Orbiter.prototype.run = function(){
  this.draw();
}
