let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
console.log(ctx);

canvas.style.background = "blue";



function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);


function drawCircle(x, y) {
  ctx.beginPath();
  const radius = 50;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "green";
  ctx.fill();
}

canvas.addEventListener("touchstart", function(ev) {
  const touch = ev.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  drawCircle(x, y);
});