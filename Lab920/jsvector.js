
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 4,y = 7){
    this.x = x;
    this.y = y;
}


// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
  this.x = mag * Math.cos(this.getDirection());
  this.y = mag * Math.sin(this.getDirection());
  return this;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return Math.sqrt(this.x*this.x+this.y*this.y);
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  let magnitude = this.getMagnitude();
  this.x = magnitude * Math.cos(angle);
  this.y = magnitude * Math.sin(angle);
  return this;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  let direction = Math.atan2(this.y,this.x);
  return direction;
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
 this.x += v2.x;
 this.y += v2.y;
 return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x -= v2.x;
  this.y -= v2.y;
  return this;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x *= scalar;
  this.y *= scalar;
  return this;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x *= 1/scalar;
  this.y *= 1/scalar;
  return this;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  //let magnitude =
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
  if(this.getMagnitude() > lim){
    this.x = lim*cos(angle);
    this.y = lim*sin(angle);
  }
  return this;
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){
  let distance = Math.sqrt(this.distanceSquared(v2));
  return distance;
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){
  let distance = Math.pow(this.x - v2.x,2)+Math.pow(this.y - v2.y);
  return distance;
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {
    let x = this.x, y = this.y;
    let cos = Math.cos(angle);
    let sin = Math.sin(angle);
    this.x = x*cos - y*sin;
    this.y = x*sin + y*cos;
    return this;
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
  let angle = Math.acos((this.x*v2.x + this.y*v2.y)/(this.getMagnitude() + getMagnitude(v2)))
  return angle;
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
  return new JSVector(this.x, this.y);
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {
    let mag = this.getMagnitude();
    let direction = this.getDirection();
    return("x: " + this.x + ", y: " + this.y + ", magnitude: " + mag + ", direction: " + direction + "\n");
}
