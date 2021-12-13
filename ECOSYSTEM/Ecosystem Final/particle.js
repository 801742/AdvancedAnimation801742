
function Particle(x,y){
  this.loc = new JSVector(x, y); //initialize loc at emitter loc
  this.vel = new JSVector(Math.random()*3-1, Math.random()*3-2);
  //this.acc = new JSVector(0, 0.05);
  this.lifeSpan = 120;
  this.clr = new Color(Math.random()*255,Math.random()*255,Math.random()*255,this.lifeSpan);
}


Particle.prototype.draw = function(){

  context.strokeStyle = this.clr;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, 7, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = this.clr;
  context.fill();

}
Particle.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
}


Particle.prototype.update = function(){
  //this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifeSpan -= 2;
}

Particle.prototype.run = function(){
  this.update();
  this.draw();
  this.checkEdges();
  this.isDead();
}
Particle.prototype.isDead = function(){
  if(this.lifeSpan < 0){
    return true;
  }else{
    return false;
  }
}
