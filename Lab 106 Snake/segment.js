
function (loc, vel, num){

}


Mover.prototype.draw = function(){


}


Mover.prototype.update = function(){

}

Mover.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
}

Mover.prototype.run = function(){
  this.draw();
  this.update();
  this.checkEdges();
}
