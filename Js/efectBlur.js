const zonas = document.querySelectorAll('.contain-btn');
    const imagenes = document.querySelectorAll('.contain_img_fest .img');


document.addEventListener('DOMContentLoaded', () => {
    
    zonas.forEach((zona, i) => {
        const imagen = imagenes[i];
        if (!imagen) return;

    zona.addEventListener('mouseenter', () => {
        imagen.style.filter = 'grayscale(100%)';
    });

    zona.addEventListener('mouseleave', () => {
        imagen.style.filter = 'none';
    });
    });
});