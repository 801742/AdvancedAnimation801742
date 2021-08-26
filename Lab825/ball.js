
function Ball(x,y,dx,dy,diam,clr){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.diam = diam;
  this.clr = clr;
}

Ball.prototype.run = function(){
  this.checkEdges();
  this.update();
  this.render();
  this.checkOverLapping();
}

Ball.prototype.render = function(){
  if(this.checkOverLapping == true){
    this.clr = "red";
  }
  let ctx = context;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath()
  ctx.arc(this.x,this.y, this.diam, 0, 2 * Math.PI )
  ctx.stroke();
  ctx.fill();
}

Ball.prototype.update = function(){
  this.x += this.dx;
  this.y += this.dy;
}

Ball.prototype.checkEdges = function(){
  for(let i=0; i<balls.length; i++){
    if(this.x > canvas.width){this.dx = this.dx*-1}
    if(this.x < 0){this.dx = this.dx*-1}
    if(this.y > canvas.height){this.dy = this.dy*-1}
    if(this.y < 0){this.dy = this.dy*-1}
  }
}

Ball.prototype.checkOverLapping = function(){
  for(let i=0; i<balls.length; i++){
  if(this !==  balls[i]){
    let xDiff = this.x - balls[i].x;
    let yDiff = this.y - balls[i].y;
    let dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
    if(dist < 2*this.rad){
      return true
    }
  }
}
}
