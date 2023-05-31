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
  let mouthMinX = 45;
  let mouseX = Math.min(Math.max(parseFloat(x), mouthMinX), mouthMaxX);

  // Cambiar las propiedades de la boca según la posición del cursor
  if (parseFloat(y) < 50) {
    boca.style.borderBottomLeftRadius = "100px";
    boca.style.borderBottomRightRadius = "100px";
    boca.style.borderTopLeftRadius = "0px";
    boca.style.borderTopRightRadius = "0px";

  } else if (parseFloat(y) > 50) {

    boca.style.borderBottomLeftRadius = "0px";
    boca.style.borderBottomRightRadius = "0px";
    boca.style.borderTopLeftRadius = "100px";
    boca.style.borderTopRightRadius = "100px";

  }

  // Mover la boca
  boca.style.left = mouseX + "%";
};
