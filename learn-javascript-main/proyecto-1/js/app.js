//Seleccionar elementos html
const listadoNombres = document.querySelector("#nombres");
const btn = document.querySelector("#btn-obtener");
const resultado = document.querySelector("#resultado");
const modal = document.querySelector(".modal");
const spinner = document.querySelector(".spinner");

//Función que se ejecuta al presionar botón
function obtenerNombre(){
    const textareaValue = listadoNombres.value;
    modal.style.display = "block";
    setTimeout(()=>{
        const nombres = textareaValue.split("\n");
        const randomIndex = Math.floor(Math.random() * nombres.length);
        const nombreAleatorio = nombres[randomIndex];
        resultado.innerHTML = "";
        const resultadoTexto = nombreAleatorio;
        const resultadoElemento = document.createElement("p");
        resultadoElemento.textContent = nombreAleatorio;
        resultado.appendChild(resultadoElemento);
        modal.style.display = "none";
    }, 5000);
}

//Evento de "click" en el botón
btn.addEventListener("click", obtenerNombre);