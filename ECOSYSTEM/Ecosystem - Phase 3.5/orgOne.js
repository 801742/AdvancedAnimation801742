function OrgOne(loc, vel, rad, clr){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;

  this.spikes = [];
  this.angV = 0;
  let num = Math.floor(Math.random()*9)+6;
  for(let i=0; i < num; i++){
    let rad = 50
    let clr = "red";
    this.spikes.push(new Spike(this, rad, 2*i*Math.PI/num, this.rad/2, clr));
  }
}
OrgOne.prototype.checkedges = function(){
  if(this.loc.x > 1500) this.vel.x = -this.vel.x;
  if(this.loc.y > 1000) this.vel.y = -this.vel.y;
  if(this.loc.x < -1500) this.vel.x = -this.vel.x;
  if(this.loc.y < -1000) this.vel.y = -this.vel.y;
}
OrgOne.prototype.update = function(){
  this.loc.add(this.vel);
}

OrgOne.prototype.draw = function(){
  this.angV++;
  context.save();
  context.translate(this.loc.x, this.loc.y);
  context.rotate(this.angV * Math.PI/120);
  context.beginPath();
  context.arc(0, 0, this.rad, 0, 2*Math.PI);
  context.fillStyle = this.clr;
  context.fill();

  for(let i=0;i<this.spikes.length;i++){
    this.spikes[i].draw();
  }
  context.restore();
}
OrgOne.prototype.run = function(){
  this.checkedges();
  this.update();
  this.draw();
}
