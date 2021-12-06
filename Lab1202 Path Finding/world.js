
function World(){

  this.world = {
    height: 1000,
    width: 1500,
    top: -500,
    left: -700
  }

  this.scaleWidth = canvasMini.width/this.world.width;
  this.scaleHeight = canvasMini.height/this.world.height;
  this.canvasLoc = new JSVector();

  this.Cols = 50;
  this.Rows = 50;

  this.boxWidth = this.world.width/this.Cols;
  this.boxHeight = this.world.height/this.Rows;
  this.boxs = [];
//Giving Boxs location
  for(let r = 0; r < this.Rows; r++){
    this.boxs[r] = [];
    for(let c = 0; c < this.Cols; c++){
      if(Math.random()*10 < 3){
      this.boxs[r][c] = new Box(this.boxWidth, this.boxHeight, r, c, this, true);
    }else{
      this.boxs[r][c] = new Box(this.boxWidth, this.boxHeight, r, c, this, false);
    }
    }
  }
}
World.prototype.draw = function(){
  context.save();
  context.translate(this.canvasLoc.x*(-1), this.canvasLoc.y*(-1));

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

//Drawing Boxs
  for(let r = 0; r < this.Rows; r++){
    for(let c = 0; c < this.Cols; c++){
      this.boxs[r][c].run();
    }
  }

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
  //

  contextMini.restore();
  function occupied(){

  }
}
