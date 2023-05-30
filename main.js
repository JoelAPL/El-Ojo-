let punto1 = document.querySelector(".punto1");
let punto2 = document.querySelector(".punto2");
let ojo1 = document.querySelector(".ojo1");
let ojo2 = document.querySelector(".ojo2");
let boca = document.querySelector(".boca");

document.onmousemove = (e) => {
  let x = e.clientX * 100 / window.innerWidth + "%";
  let y = e.clientY * 100 / window.innerHeight + "%";

  // Mover los ojos libremente
  punto1.style.left = x;
  punto1.style.top = y;
  punto2.style.left = x;
  punto2.style.top = y;

  // Limitar el rango de movimiento de la boca
  let mouthMaxX = 60;
  let mouthMinX = 40;

  let mouthX = Math.min(Math.max(parseFloat(x), mouthMinX), mouthMaxX);
  boca.style.left = mouthX + "%";
};
