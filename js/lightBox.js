let imagenes = document.querySelectorAll(".imgGaleria");
let imagenesLight = document.querySelector(".agregarImagen");
let contenedorLight = document.querySelector(".imagenLight");

imagenes.forEach( imagen => {
    imagen.addEventListener("click", () =>{
        apareceImagen(imagen.getAttribute("src"))
    })
})


// Llama a que se despliegue la imagen con la ayuda del forEach
let apareceImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
}