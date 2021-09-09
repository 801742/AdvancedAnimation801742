
function Ball(loc,vel,clr){
  this.loc = loc;
  this.vel = vel;
  this.diam = 25;
  this.clr = clr;
}


Ball.prototype.render = function(){
  let ctx = context;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath()
  ctx.arc(this.loc.x,this.loc.y, this.diam, 0, 2 * Math.PI )
  ctx.stroke();
  ctx.fill();
}

Ball.prototype.update = function(){
  this.loc.x += this.vel;
  this.loc.y += this.vel;

}

Ball.prototype.checkEdges = function(){
  for(let i=0; i<balls.length; i++){
    if(this.loc.x > canvas.width){this.vel = this.vel*-1}
    if(this.loc.x < 0){this.vel = this.vel*-1}
    if(this.loc.y > canvas.height){this.vel = this.vel*-1}
    if(this.loc.y < 0){this.vel = this.vel*-1}
  }
}

Ball.prototype.run = function(){
  this.update();
  this.checkEdges();
  this.render();
}
