let hamburguer  = document.querySelector(`.hamburguer`);
let menu  = document.querySelector(`.menuNav`);

// console.log(menu);
// console.log(hamburguer);

// Le damos a hamburguer un evento que cuando presione click realice lo siguiente 
hamburguer.addEventListener(`click`, () =>{
    // cada vez que toquemos la hamb se quita o se coloca el menu
    menu.classList.toggle(`spread`);
})

window.addEventListener(`click`, e =>{
    // console.log(e.target);
    if(menu.classList.contains(`spread`) && e.target != menu && e.target != hamburguer ){
           menu.classList.toggle(`spread`);
    }
})




let imagenes = document.querySelectorAll(".imgGaleria");
let imagenesLight = document.querySelector(".agregarImagen");
let contenedorLight = document.querySelector(".imagenLight");
let hamburguer1  = document.querySelector(`.hamburguer`);

imagenes.forEach( imagen => {
    imagen.addEventListener("click", () =>{
        apareceImagen(imagen.getAttribute("src"))
    })
})
// Cerramos el push que le dimos a la img
contenedorLight.addEventListener("click" , (evt) =>{
    if(evt.target !== imagenesLight){
        contenedorLight.classList.toggle("show");
        imagenesLight.classList.toggle("showImage");

    }
})

// Llama a que se despliegue la imagen con la ayuda del forEach
let apareceImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburguer1.style.opacity = "0";
}