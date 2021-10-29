
function Flock(loc){
  this.loc = loc;
  this.birds = [];

  let numBirds = Math.random()*50;
  for(let i = 0; i < numBirds; i++){
    let loc = new JSVector(Math.random()*canvas.width,Math.random()*canvas.height);
    this.birds.push(new Bird(loc));
  }
}

Flock.prototype.spawnBirds = function(){
  for(let i = this.birds.length - 1;i >= 0;i--){
    let bird = this.birds[i];
    bird.run();
    }
  }
Flock.prototype.coHesion = function(){
  let dist = 200;
  for(let i=0; i < this.birds.length; i++){
    for(let j=0; j < this.birds.length; j++){
      if(i =! j){
        let newdist = Math.abs(JSVector.subGetNew(this.birds[i].loc,this.birds[j].loc));
        if(newdist < dist){
          newdist.setMagnitude(.1);
          birds[i].add(newdist);
        }
      }
    }
  }
}

Flock.prototype.seperation = function(){
  let dist = 20;
  for(let i=0; i < this.birds.length; i++){
    for(let j=0; j < this.birds.length; j++){
      if(i =! j){
        let newdist = Math.abs(JSVector.subGetNew(this.birds[i].loc,this.birds[j].loc));
        if(newdist < dist){
          newdist.setMagnitude(.1);
          birds[i].add(-1*newdist.loc);
        }
      }
    }
  }
}

Flock.prototype.allignment = function(){
  let dist = 60;
  for(let i=1; i < this.birds.length; i++){
    let newdist = Math.abs(JSVector.subGetNew(this.birds[i].loc,this.birds[0].loc));
    if(newdist < dist){
    birds[i].setDirection(birds[0].getDirection());
    }
  }
}

Flock.prototype.run = function(){
  this.spawnBirds();
  this.coHesion();
  this.seperation();
  this.allignment();
}
