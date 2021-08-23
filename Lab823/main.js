window.addEventListener("load", init);

var balls = [];
function init(){

    canvas = document.getElementById("cnv");
    context = canvas.getContext("2d");

    for(let i=0; i < 3; i++){
      var ball = {};
      ball.x = Math.random() * canvas.width;
      ball.y = Math.random() * canvas.height;
      ball.dx = Math.random() * canvas.width;
      ball.dy = Math.random() * canvas.height;
      balls.push(ball);
    }
    draw();
    animate();

}


function animate() {
    context.clearRect(0,0,canvas.width,canvas.height);
    update();
    requestAnimationFrame(animate); // next cycle
}

function update(){
  for(var i=0; i < balls.length; i++){
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;
  }
}
function draw(){
  let radius = 15;
  for(var i=0; i<balls[i].length; i++){
    context.beginPath();
    context.arc(ball[i].x, ball[i].y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
  }
}
