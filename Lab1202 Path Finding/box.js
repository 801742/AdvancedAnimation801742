
function Box(width, height, row, col, instance, occupied){
  this.width = width;
  this.height = height;
  this.row = row;
  this.col = col;
  this.loc = new JSVector(this.col*this.width+instance.world.left, this.row*this.height+instance.world.top);
  this.occupied = occupied;
  this.clr = "white";
}

Box.prototype.draw = function(){
  if(this.occupied == true){
    this.clr = "black";
  }else if(this.row == 0 && this.col == 0){
    this.clr = "yellow";
  }
  context.beginPath();
  context.fillStyle = this.clr;
  context.rect(this.loc.x, this.loc.y, world.boxWidth, world.boxHeight);
  context.fill();
  context.stroke();
}

Box.prototype.run = function(){
  this.draw();
}
