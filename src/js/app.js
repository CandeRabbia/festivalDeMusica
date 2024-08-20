document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1 ; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;
        //a;adir la funcion mostrat imagen
        imagen.onclick = mostrarFoto;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);

        
    }

}

function mostrarFoto(e){
    const id = parseInt(e.target.dataset.imagenId);

    //genera imagen
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/grande/${id}.jpg`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cerrar imagen con click
    overlay.onclick = function(){
        overlay.remove();
    }

    //boton para cerrar imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //cerrar imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
    }


    overlay.appendChild(cerrarImagen);

    //mostrar en html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}

document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
});

function navegacionFija(){

    const barra = document.querySelector('.header');

    const observer = new IntersectionObserver(function(entries){
       if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
       }
       else {
            barra.classList.add('fijo');
       }
    });

    observer.observe(document.querySelector('.sobre-festival'));
};

function scrollNav(){
    const enlace = document.querySelectorAll('.navegacion-principal a');

    enlace.forEach( function(enlaces){
        enlaces.addEventListener('click', function(e){
            e.preventDefault();
            const seccion= document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}