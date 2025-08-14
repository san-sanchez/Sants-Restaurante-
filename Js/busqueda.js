const $buscar = document.getElementById("buscar");
const $section = document.getElementById("section-grid-menu");

let filter;
let menu = [];

function limpiarSection(){
    $section.innerHTML = "";
}
function cargarMenu(card){
    const $fragment = document.createDocumentFragment();
    
    const $grid = document.createElement("div");
    $grid.classList.add("container-menu");
    $section.appendChild($grid);

    card.forEach(el => {
        const element = document.createElement("div");
        element.classList.add("contain_menu");
        element.innerHTML =`<div class="contain_imgMenu">
                                <img class="imgMenu" src="${el.img}" alt="">
                            </div>
                            <p>${el.nombre}</p>
                            <div class="linea-divisoria"></div>
                            <p>${el.descricion}</p>`;
        $fragment.appendChild(element);
    });
    $grid.appendChild($fragment);
}

fetch("../json/menu.json")
    .then(res=>res.json())
    .then(data =>{ menu = data; })

    .catch(err =>{
        console.error("error fetch",err);
    });


$buscar.addEventListener("input",()=>{

    let valor = $buscar.value.toLowerCase();
    const $filtro = menu.filter(item=>
        item.nombre.toLowerCase().includes(valor));
    
    limpiarSection();
    if($filtro.length === 0)
    {
        $section.classList.add("max-size");
        $section.innerHTML ="<p>No se encontraron platos</p>"
        return;
    }
    else
    {
        $section.classList.remove("max-size");
        cargarMenu($filtro);
    }
    
});