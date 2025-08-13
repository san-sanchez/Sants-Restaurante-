let $izq = document.querySelector(".item-flex-a");
let $der = document.querySelector(".item-flex-c");

let $local = document.getElementById("local");
let $horario = document.getElementById("horario");
let $ubicacion = document.getElementById("ubicacion");
let $img = document.getElementById("img")

let indice = 0;
let locales = [];

function cargarLocal(index){
    const local =locales[index];
    
    $img.src = local.img;
    $local.textContent = local.ciudad;
    $horario.textContent = local.horario
    $ubicacion.textContent = local.ubicacion;
}

fetch("../json/locales.json")
    .then(res =>{
        if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
    })
    .then(data => {
        locales = data;
        cargarLocal(indice);
    });
    //.catch(err=>{console.error("error en fetch",err)});


$izq.addEventListener("click",()=>{
    indice = (indice - 1 + locales.length) % locales.length; // Retrocede y vuelve al final
    cargarLocal(indice);
})

$der.addEventListener("click",()=>{
    indice = (indice + 1) % locales.length; // Avanza y vuelve al inicio
    cargarLocal(indice);
})
