
function Bird(loc){
  this.loc = loc;
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-2);
  this.clr = "blue";
}


Bird.prototype.draw = function(){

  context.strokeStyle = this.clr;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, 15, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = this.clr;
  context.fill();

}
Bird.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
}


Bird.prototype.update = function(){
  this.loc.add(this.vel);
}

Bird.prototype.run = function(){
  this.update();
  this.draw();
  this.checkEdges();
}
