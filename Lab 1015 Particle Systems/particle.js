
function Particle(loc, vel, acc){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.lifeSpan = 200;
}


Particle.prototype.draw = function(){

  context.strokeStyle = new Color(0,0,0,this.lifeSpan);
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, 15, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = new Color(0,0,0,this.lifeSpan);
  context.fill();

}
Particle.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height) this.vel.y = -this.vel.y;
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
}


Particle.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifeSpan -= 2;
}

Particle.prototype.run = function(){
  this.update();
  this.draw();
  this.checkEdges();
}
Particle.prototype.isDead = function(){
  if(this.lifespan < 0.0){
    return true;
  }else{
    return false;
  }
}
