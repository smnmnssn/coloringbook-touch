let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
console.log(ctx);

canvas.style.background = "white";



function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);


let currentColor = "black";

document.querySelectorAll(".color-btn").forEach(button => {
  button.addEventListener("click", function() {
    currentColor = this.dataset.color;
  });
});











canvas.addEventListener("touchstart", function(ev) {
  const touch = ev.touches[0]; 
  const x = touch.clientX;
  const y = touch.clientY;

  ctx.beginPath();
  ctx.moveTo(x, y);
  
});



canvas.addEventListener("touchmove", function(ev) {
  const touch = ev.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = 5;
});





