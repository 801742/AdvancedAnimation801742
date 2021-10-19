
function ParticleSystem(loc){
  this.loc = loc;
  this.particles = [];

}

ParticleSystem.prototype.run = function(){
  this.render();
  this.update();
}
ParticleSystem.prototype.render = function(){
  this.particles.push(new Particle(this.loc.x,this.loc.y));
}

ParticleSystem.prototype.update = function(){
  for(var i = this.particles.length-1;i>=0;i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
}
