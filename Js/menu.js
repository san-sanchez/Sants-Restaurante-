
let $menu = document.getElementById("menu");
let $nav = document.querySelector(".container_menu");
let $hiden = document.querySelectorAll(".hiden_event");
//MOVER A UN JS DIFERENTE
/*gsap.from(".name",{
    duration:2, 
    opacity:1,
    scale:0.1,
    ease:"power3"
});*/

$menu.addEventListener("click",()=>{
    
    $hiden.forEach(el=> el.classList.toggle("hiden"))
    $nav.classList.toggle("hiden")
    
    gsap.set(".moov_gsap", { x: "0vh", opacity: 1 });
    
    gsap.from(".moov_gsap",{
        duration:0.7,
        ease: "power2.out",
        x:"100vh",
        stagger:0.2,
        overwrite: "auto"
    });
    gsap.from(".container_logo",{
        duration:1,
        ease: "power2.out",
        y:"100vh",
        
    });    
    
});