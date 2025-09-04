
const $video_1 = document.getElementById("video-1");
const $video_2 = document.getElementById("video-2");
const $video_3 = document.getElementById("video-3");

const $btnVideoIzq = document.getElementById("btn-video-izq");
const $btnVideoDer = document.getElementById("btn-video-der");

let auxSrc;

$btnVideoDer.addEventListener("click",()=>{
    console.log("hola");
    setTimeout(()=>{
        auxSrc = $video_1.src;
        $video_1.src = $video_3.src;
        $video_3.src = $video_2.src;
        $video_2.src = auxSrc;
    },500);
});

$btnVideoIzq.addEventListener("click",()=>{
    console.log("adios");
    auxSrc = $video_3.src;
    $video_3.src = $video_1.src;
    $video_1.src = $video_2.src;
    $video_2.src = auxSrc;
});
