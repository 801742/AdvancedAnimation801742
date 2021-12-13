
function Ship(loc, vel, rad, clr) {
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.rad = rad;
}

  Ship.prototype.update = function(){
    this.loc.add(this.vel);
  }

  Ship.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height || this.loc.y < 0) this.vel.y =-this.vel.y;
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
    context.stroke();
    context.restore();
  }
