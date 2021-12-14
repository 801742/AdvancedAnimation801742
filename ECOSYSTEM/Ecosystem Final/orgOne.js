function OrgOne(loc, vel, rad, clr, id){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.id = id;
  this.acc = new JSVector(0,0);

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
  let currentV = this.vel.getMagnitude();
  this.vel.add(this.acc);
  this.vel.setMagnitude(currentV);
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
  this.repulsion();
}
OrgOne.prototype.repulsion = function(){
  let nearOrgOne = false;
  for(let i=0; i < orgOnes.length; i++){
    let d = JSVector.subGetNew(this.loc, orgOnes[i].loc).getMagnitude();
    if(d < 175 && i!= this.id){
      this.acc = JSVector.subGetNew(this.loc, orgOnes[i].loc).setMagnitude(0.7);
      nearOrgOne = true;
    }
  }
  if(!nearOrgOne){
    this.acc = new JSVector(0, 0);
  }
  }
