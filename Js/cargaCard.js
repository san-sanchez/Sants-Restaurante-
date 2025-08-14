let $grid = document.getElementById("grid");
let $btn = document.getElementById("more");

let platos = [];
const limit = 4;
let inicio = 0;
function cargarPlatos(card){
    const $fragment = document.createDocumentFragment();
    
    card.forEach(el => {
        const element = document.createElement("div");
        element.classList.add("contain_menu");
        element.innerHTML =`<div class="contain_imgMenu">
                                <img class="imgMenu" src="${el.img}" alt="">
                            </div>
                            <p>${el.nombre}</p>
                            <p>${el.descricion}</p>`;
        $fragment.appendChild(element);
    });
    $grid.appendChild($fragment);
}

fetch("../json/menu.json")
    .then(res =>{
        if(!res.ok){
            console.error("Omar algo anda mal");
        }
        return res.json();
    })
    .then(data=>{
        platos = data;
    })

$btn.addEventListener("click",()=>{
    if (inicio >= platos.length) {
        $btn.style.display = "none"; 
    }
    let nuevo = platos.slice(inicio,inicio + limit);
    cargarPlatos(nuevo);
    inicio +=limit;
    
})