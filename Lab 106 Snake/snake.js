
function Snake(loc, vel, rad, clr, num){

  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.num = num;

  this.length = Math.floor(Math.random() * 15+6);
  this.segments = [];
  for(let i = 0; i < this.length; i++){

    let num = i;
    this.segments.push(new Segment(this.loc, this.vel, this.clr, this.rad,num));

  }
}

Snake.prototype.run = function(){
  this.segments[0].run();
  for(let i = 1; i < this.length; i++){
    this.segments[i].follow(this.segments[i-1]);
  }
}
