let botones = document.querySelectorAll(".btn-expandible");
let textoExpandido = document.querySelectorAll(".p-visible");
let imagen = document.querySelectorAll(".line");

botones.forEach((elemento, clave)=>{
    elemento.addEventListener("click", () => {
        textoExpandido[clave].classList.toggle("abrir_cerrar")
        imagen[clave].classList.toggle("rotate")
    })
});
