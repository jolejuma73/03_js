document.addEventListener('DOMContentLoaded', () => {
    const btnModoOscuro = document.querySelector("#toggle");
    const cambiarTexto = document.querySelector("small");
    
    btnModoOscuro.addEventListener("change" , () =>{
        if(btnModoOscuro.checked){
            document.body.classList.add("dark-mode");
            cambiarTexto.textContent = "Dark Mode: On";
        } else {
            document.body.classList.remove("dark-mode");
            cambiarTexto.textContent = "Dark Mode: Off";
        }
    })
});