
let images =["../img/historia/images.jfif","../img/historia/familia.jpg","../img/historia/local.jpg","../img/historia/actual.jpg"];

let index=0;


window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-A");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },1000);
})
window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-B");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },2500);
})
window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-C");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },3000);
})
window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-D");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },1000);
})
window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-E");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },2000);
})

window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto-F");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },3000);
})