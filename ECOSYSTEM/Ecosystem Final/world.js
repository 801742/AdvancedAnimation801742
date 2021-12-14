function World(){
  //---------------------------------------------------\\
  canvas = document.getElementById("cnv");
  canvasMini = document.getElementById("cnv2");
  context = canvas.getContext("2d");
  contextMini = canvasMini.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  contextMini.fillRect(810, 600, canvasMini.width, canvasMini.height);
  //---------------------------------------------------\\
  this.world = {
    height: 2000,
    width: 3000,
    top: -1000,
    left: -1500
  }

  this.scaleWidth = canvasMini.width/this.world.width;
  this.scaleHeight = canvasMini.height/this.world.height;

  this.canvasLoc = new JSVector();

    for(let i=0; i < 40; i++){

      let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
      let vel = new JSVector(Math.random()*5-3,Math.random()*3-5);
      let rad = 10
      let clr = new Color.generateRandomColor(1,1,1,false);
      let num = i;
      snakes.push(new Snake(loc, vel, rad, clr, num));
    }
    for(let i = 0; i < 40 ; i++){
      let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);;
      let vel = new JSVector(Math.random()*2-1, Math.random()*2-1);
      let rad = 20;
      let clr = "white";
      orgOnes.push(new OrgOne(loc, vel, rad, clr,i));
    }
    for(let i = 0; i < 20; i++){
      let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
      let vel = new JSVector(Math.random()*3-2, Math.random()*3-2);
      let rad = 30;
      let clr = "black";
      balls.push(new Ball(loc, vel, rad, clr));
    }
    for(var i = 0; i < 800; i++){
      let loc = new JSVector(Math.random()*2000-1000, Math.random()*3000-1500);
      let vel = new JSVector(Math.random()*6-2, Math.random()*6-2);
      let rad = 25;
      let clr = new Color.generateRandomColor(1,1,1,false);
      ships.push(new Ship(loc, vel, rad, clr));
    }
}
World.prototype.draw = function(){


  context.save();
  context.translate(this.canvasLoc.x*(-1), this.canvasLoc.y*(-1));
  for(let i=0; i < snakes.length; i++){
    snakes[i].run();
  }
  for(let i = 0; i < orgOnes.length; i++){
    orgOnes[i].run();
  }
  for(let i = 0; i < balls.length; i++){
    balls[i].run();
  }
  for(let i = 0; i < balls.length; i++){
    ships[i].run();
  }


  context.beginPath();
  context.moveTo(0,this.world.top);
  context.lineTo(0,this.world.top+this.world.height);
  //

  context.moveTo(this.world.left, 0);
  context.lineTo(this.world.left+this.world.width, 0);
  context.strokeStyle = "black";
  context.lineWidth = 10;
  context.stroke();

  context.lineWidth = 3;
  context.strokeStyle = "black";
  context.strokeRect(this.world.left,this.world.top,this.world.width,this.world.height)


  context.restore();

  //MINIMAP CODE
  contextMini.save();
  contextMini.beginPath();
  contextMini.lineWidth = 30;
  contextMini.strokeStyle = "black";
  contextMini.scale(this.scaleWidth, this.scaleHeight);

  //center canvas2 in world
  contextMini.translate(this.world.width/2, this.world.height/2);

  //outline in canvas2
  contextMini.strokeRect(this.canvasLoc.x, this.canvasLoc.y, canvas.width, canvas.height);

  //x and y axes
  contextMini.strokeStyle = "black";
  contextMini.moveTo(0, this.world.top);
  contextMini.lineTo(0, this.world.height);
  contextMini.stroke();
  contextMini.moveTo(this.world.left, 0);
  contextMini.lineTo(this.world.width, 0);
  contextMini.stroke();

  contextMini.restore();

}
