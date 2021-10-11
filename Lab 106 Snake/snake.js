
function Snake(loc, vel, rad, clr, num){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.num = num;

  //let length = Math.floor(Math.random() * 5+2);
  this.length = 4;
  let segments = [];
  for(let i = 0; i < this.length; i++){
    
    let loc = new JSVector();
    let clr = "blue";
    let rad = 15
    let num = i;
    let length = this.length;
    segments.push(new Segment(loc, clr, rad, num, length));

    for(let i = 0; i < this.length; i++){
      segments[i].run();
    }
  }
}


Snake.prototype.draw = function(){
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
  context.fillStyle = this.clr
  context.fill();
  context.closePath();
}


Snake.prototype.update = function(){
    this.loc.add(this.vel);
}

Snake.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
}

Snake.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
