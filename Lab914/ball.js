
function Ball(loc,vel,acc,rad,clr){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.acc = acc;
  this.clr = clr;
}


Ball.prototype.draw = function(){
  let ctx = context;
  ctx.beginPath()
  ctx.fillStyle = this.clr;
  ctx.arc(this.loc.x,this.loc.y, this.rad, 0, 2 * Math.PI )
  ctx.fill();
}

Ball.prototype.update = function(){
  this.vel += this.acc;
  this.loc += this.vel;
}

//Ball.prototype.checkEdges = function(){
//  for(let i=0; i<balls.length; i++){
//    if(this.loc.x > canvas.width){this.vel = this.vel*-1}
//    if(this.loc.x < 0){this.vel = this.vel*-1}
//    if(this.loc.y > canvas.height){this.vel = this.vel*-1}
//    if(this.loc.y < 0){this.vel = this.vel*-1}
//  }
//}

Ball.prototype.run = function(){
  this.draw();
  this.update();
//  this.checkEdges();
}
