function OrgOne(loc, vel, rad, clr, context){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.context = context;

  this.spikes = [];
  this.angV = 0;
  let num = Math.floor(Math.random()*9)+6;
  for(let i=0; i < num; i++){
    let rad = 50
    let clr = "red";
    this.spikes.push(new Spike(this, rad, 2*i*Math.PI/num, this.rad/2, clr,this.context));
  }
}
OrgOne.prototype.checkedges = function(){
  if(this.loc.x < 0 ||this.loc.x > canvas.width){
    this.vel.x *=-1;
  }
  if(this.loc.y < 0||this.loc.y > canvas.height){
    this.vel.y *=-1;
  }
}
OrgOne.prototype.update = function(){
  this.loc.add(this.vel);
}

OrgOne.prototype.draw = function(){
  this.angV++;
  this.context.save();
  this.context.translate(this.loc.x, this.loc.y);
  this.context.rotate(this.angV * Math.PI/120);
  this.context.beginPath();
  this.context.arc(0, 0, this.rad, 0, 2*Math.PI);
  this.context.fillStyle = this.clr;
  this.context.fill();

  for(let i=0;i<this.spikes.length;i++){
    this.spikes[i].draw();
  }
  this.context.restore();
}
OrgOne.prototype.run = function(){
  this.checkedges();
  this.update();
  this.draw();
}
