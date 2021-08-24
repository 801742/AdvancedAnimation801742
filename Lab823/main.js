window.addEventListener("load", init);

var balls = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    for(let i=0; i < 9; i++){
      var ball = {};
      ball.x = 150;
      ball.y = 200;
      ball.dx = 3;
      ball.dy = 3;
      balls.push(ball);
    }
    animate();

}


function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    draw();
    update();
    checkEdges()
    requestAnimationFrame(animate);
}

function update(){
  for(var i=0; i < balls.length; i++){
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
  }
}
function draw(){
  let radius = 15;
  for(var i=0; i < balls.length; i++){
    context.beginPath();
    context.arc(balls[i].x, balls[i].y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
  }
}
function checkEdges(){
  for(let i=0; i < balls.length; i++){
    if(balls[i].x > canvas.width){balls[i].dx = balls[i].dx*-1}
    if(balls[i].x < 0){balls[i].dx = balls[i].dx*-1}
    if(balls[i].y > canvas.height){balls[i].dy = balls[i].dy*-1}
    if(balls[i].y < 0){balls[i].dy = balls[i].dy*-1}
  }
}
