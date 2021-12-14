
function Ship(loc, vel, rad, clr) {
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.rad = rad;
  this.acc = new JSVector(0, 0);
}

  Ship.prototype.update = function(){
    let currentV = this.vel.getMagnitude();
    this.vel.add(this.acc);
    this.vel.setMagnitude(currentV);
    this.loc.add(this.vel);
  }

  Ship.prototype.checkEdges = function(){
    if(this.loc.x > 1500) this.vel.x = -this.vel.x;
    if(this.loc.y > 1000) this.vel.y = -this.vel.y;
    if(this.loc.x < -1500) this.vel.x = -this.vel.x;
    if(this.loc.y < -1000) this.vel.y = -this.vel.y;
  }

  Ship.prototype.draw = function(){
    context.beginPath();
    context.strokeStyle = this.clr;
    context.save();
    context.translate(this.loc.x,this.loc.y);
    context.rotate(this.vel.getDirection());
    context.moveTo(this.rad,0);
    context.lineTo(-this.rad,-this.rad/2);
    context.lineTo(-this.rad,this.rad/2);
    context.closePath();
    context.closePath();
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
    context.restore();

    contextMini.save();
    contextMini.scale(world.scaleWidth, world.scaleHeight);
    contextMini.translate(world.world.width/2, world.world.height/2);
    contextMini.beginPath();
    contextMini.strokeStyle = this.clr;
    contextMini.translate(this.loc.x,this.loc.y);
    contextMini.rotate(this.vel.getDirection());
    contextMini.moveTo(this.rad,0);
    contextMini.lineTo(-this.rad,-this.rad/2);
    contextMini.lineTo(-this.rad,this.rad/2);
    contextMini.closePath();
    contextMini.closePath();
    context.fillStyle = this.clr;
    context.fill();
    contextMini.stroke();
    contextMini.restore();


  }
  Ship.prototype.run = function(){
    this.update();
    this.draw();
    this.checkEdges();
    this.attraction();
  }
  Ship.prototype.attraction = function(){
    let nearPlanet = false;
    for(i=0; i < balls.length; i++){
      let d = JSVector.subGetNew(this.loc, balls[i].loc).getMagnitude();
      if(d < 200){
        this.acc = JSVector.subGetNew(balls[i].loc, this.loc).setMagnitude(0.5);
        nearPlanet = true;
      }
    }
    if(!nearPlanet){
      this.acc = new JSVector(0, 0);
    }
  }
