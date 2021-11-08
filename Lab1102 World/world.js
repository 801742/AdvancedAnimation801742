function World(){

  this.world = new JSVector(3000, 1500);
  this.loc = new JSVector((this.world.x-canvas.width)/2, (this.world.y-canvas.height)/2);

}
World.prototype.draw = function(){
  
  context.beginPath();
  context.moveTo(this.world.x/2-this.loc.x, 0-this.loc.y);
  context.lineTo(this.world.x/2-this.loc.x, this.world.y-this.loc.y);
  context.stroke();
  //

  context.moveTo(0-this.loc.x, this.world.y/2-this.loc.y);
  context.lineTo(this.world.x-this.loc.x, this.world.y/2-this.loc.y);
  context.stroke();


  //
  context.moveTo(-1*this.loc.x, -1*this.loc.y);
  context.lineTo(this.world.x-this.loc.x, -1*this.loc.y);
  context.lineTo(this.world.x-this.loc.x, this.world.x-this.loc.y);
  context.lineTo(-1*this.loc.x, this.world.x-this.loc.y);
  context.lineTo(-1*this.loc.x, -1*this.loc.y);
  context.stroke();
  context.closePath();
  //
}
