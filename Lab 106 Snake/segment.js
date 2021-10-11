
function Segment(loc, clr, rad, num, length){
  this.loc = loc;
  this.clr = clr;
  this.rad = rad;
  this.num = num;
  this.length = length;
}


Segment.prototype.draw = function(){

  context.strokeStyle = this.clr;
  context.beginPath();
  context.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
  context.stroke();
  context.fillStyle = this.clr;
  context.fill();

}

Segment.prototype.follow = function(){
  if(this.num == 0){
    this.loc = new JSVector(snakes[this.num].loc.x, snakes[this.num].loc.y);

  }else{
    let v2 = JSVector.subGetNew(this.loc, this.segments[this.num-1].loc);
    v2.setMagnitude(length);
    this.loc = JSVector.addGetNew(this.segments[this.num-1].loc, v2);
      }
  }

Segment.prototype.run = function(){
  this.follow();
  this.draw();
}
