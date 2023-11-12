const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasStyles = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const mousePosition = {
  x: null,
  y: null,
};

const createCircle = () => {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mousePosition.x, mousePosition.y, 50, 0, Math.PI * 2);
  ctx.fill();
};

const mouseEvent = e => {
  mousePosition.x = e.x;
  mousePosition.y = e.y;
  createCircle();
};

window.addEventListener("resize", canvasStyles);
canvas.addEventListener("click", mouseEvent);
canvas.addEventListener("mousemove", mouseEvent);


