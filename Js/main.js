let $contain = document.querySelectorAll(".contain_data");
$contain.forEach((el)=>{
    gsap.from(el,{
    scrollTrigger:
    {
        trigger: el,
        start: "top 200%",   // Cuando el top del .box llega al 80% de la ventana
        end: "bottom 40%",     // Hasta que el top llega al 30%
        scrub: true,
    },
    scale: 0.5,
    duration: 1,
    ease:"power1",
})
})
