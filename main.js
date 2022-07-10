let punto1 = document.querySelector(".punto1 .punto2");
let ojo1 = document.querySelector(".ojo1");

document.onmousemove = (e)=>{
    let x = e.clientX *100 / window.innerWidth + "%";
    let y = e.clientY *100 / window.innerHeight + "%";
    punto1.style.left = x;
    punto1.style.top = y;
}

let punto2 = document.querySelector(".punto2");
let ojo2 = document.querySelector(".ojo2");

document.onmousemove = (e)=>{
    let x = e.clientX *100 / window.innerWidth + "%";
    let y = e.clientY *100 / window.innerHeight + "%";
    punto2.style.left = x;
    punto2.style.top = y;
}
