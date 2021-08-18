
//OBJECT LITERAL
var ball = {
  radius:3,
  diam:function(){
    return 2*this.radius;
  }
}
//BALL FACTORY
var b1 = ballFactory(25);
function ballFactory(rad){
  var ball = {
  radius:rad,
  getDiameter:function(){
    return 2*rad;
  }
}
return ball;
}
//CONSTRUCTOR FUNCTION
//With seperate method
var b2 = new Ball(33);
function Ball(rad){
  this.radius = rad;
}
  Ball.prototype.getDiameter = function(){
    return this.radius*2;
  }
}
//CLASSICAL SYNTAX
class BallTwo(){
  constructor(rad){
    this.rad = rad;
  }
  getDiameter(){
    return this.rad*2;
  }
}
var ball3 = new BallTwo(56);
