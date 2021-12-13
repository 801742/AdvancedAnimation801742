
function Ball(loc, vel, rad, clr){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.particles = [];
}

Ball.prototype.draw = function(){
  this.particles.push(new Particle(this.loc.x,this.loc.y));
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  context.fillStyle = this.clr;
  context.fill();
  context.closePath();

  contextMini.save();
  contextMini.scale(world.scaleWidth, world.scaleHeight);
  contextMini.translate(world.world.width/2, world.world.height/2);
  contextMini.beginPath();
  contextMini.arc(this.loc.x, this.loc.y, this.rad, 0, 2*Math.PI);
  contextMini.fillStyle = this.clr;
  contextMini.fill();
  contextMini.closePath();
  contextMini.restore();
}

Ball.prototype.update = function(){
  this.loc.add(this.vel);
  for(var i = this.particles.length-1;i>=0;i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
  for(let i=0; i < ships.length; i++){
  let d = this.loc.distance(ships[i].loc);
    if(d < 90){//new loc
      this.loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
    }
   }
  }

Ball.prototype.checkEdges = function(){
  if(this.loc.x > 1500) this.vel.x = -this.vel.x;
  if(this.loc.y > 1000) this.vel.y = -this.vel.y;
  if(this.loc.x < -1500) this.vel.x = -this.vel.x;
  if(this.loc.y < -1000) this.vel.y = -this.vel.y;
}

Ball.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
