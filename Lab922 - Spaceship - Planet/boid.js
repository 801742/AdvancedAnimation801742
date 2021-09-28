
function Boid(loc,vel,id){
  this.loc = loc;
  this.vel = vel;
  this.clr = "blue";
  this.id = id;
  if(this.id == 2) this.clr = "red";
  this.acc = new JSVector(0,0);
  this.rad = 15;
}


Boid.prototype.draw = function(){
  if(this.id = 1){
    context.beginPath();
    context.fillStyle = this.clr;
    context.save();
    context.translate(this.loc.x,this.loc.y);

    context.rotate(this.vel.getDirection());
    
    context.moveTo(this.rad,0);
    context.lineTo(-this.rad,-this.rad/2);
    context.lineTo(-this.rad,this.rad/2);
    context.closePath();

    context.closePath();
    context.stroke();
    context.restore();
  }else{
    context.beginPath()
    context.fillStyle = this.clr;
    context.arc(this.loc.x,this.loc.y, this.rad, 0, 2 * Math.PI )
    context.fill();
  }
}


Boid.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  if(this.id == 1){
    this.acc = JSVector.subGetNew(planet.loc, this.loc);
    this.acc.setMagnitude(0.1);
    this.acc.limit(0.1);
    if(JSVector.subGetNew(planet.loc, this.loc) < 100){
        let loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.width);
        let id2 = 2;
        planet = new Boid(loc, 0, id2);
    }
  }
}

Boid.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
}

Boid.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
