window.addEventListener("load", init);

var canvas, context,
ball1 = {};
function init(){
    ball1 = {};
    ball2 = {};
    ball3 = {};
    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");
    ball1.x = ball1.y = 170;
    ball2.x = ball2.y = 675;
    ball3.x = ball3.y = 90;

    ball1.dx = ball1.dy = 5;
    ball2.dx = ball2.dy = 3;
    ball3.dx = ball3.dy = 8;

    ball1.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }
    ball2.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }
    ball3.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }

    ball1.checkEdges = function(){
      if(this.x > canvas.width){this.dx = -this.dx}
      if(this.y > canvas.width){this.dy = -this.dy}
      if(this.x < 0){this.dx = -this.dx}
      if(this.y < 0){this.dy = -this.dy}
    }
    ball2.checkEdges = function(){
      if(this.x > canvas.width){this.dx = -this.dx}
      if(this.y > canvas.width){this.dy = -this.dy}
      if(this.x < 0){this.dx = -this.dx}
      if(this.y < 0){this.dy = -this.dy}
    }
    ball3.checkEdges = function(){
      if(this.x > canvas.width){this.dx = -this.dx}
      if(this.y > canvas.width){this.dy = -this.dy}
      if(this.x < 0){this.dx = -this.dx}
      if(this.y < 0){this.dy = -this.dy}
    }

    ball1.draw = function(){
      let radius = 35;
      context.beginPath();
      context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";
      context.fillStyle = "red";
      context.fill();
      context.stroke();
    }
    ball2.draw = function(){
      let radius = 15;
      context.beginPath();
      context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";
      context.fillStyle = "red";
      context.fill();
      context.stroke();
    }
    ball3.draw = function(){
      let radius = 15;
      context.beginPath();
      context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";
      context.fillStyle = "red";
      context.fill();
      context.stroke();
    }

    animate();
}


function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    ball1.draw();
    ball2.draw();
    ball3.draw();
    ball1.update();
    ball2.update();
    ball3.update();
    ball1.checkEdges();
    ball2.checkEdges();
    ball3.checkEdges();
    requestAnimationFrame(animate); // next cycle
}
