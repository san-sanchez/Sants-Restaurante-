
let images =["../img/historia/images.jfif","../img/historia/familia.jpg","../img/historia/local.jpg","../img/historia/actual.jpg"];

let index=0;

window.addEventListener("DOMContentLoaded",()=>{
    setInterval(()=>{
    const $foto = document.getElementById("modificar-foto");
    index = (index+ 1)%images.length;
    $foto.src=images[index];
    },10000);
})
