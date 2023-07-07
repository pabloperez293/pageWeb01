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