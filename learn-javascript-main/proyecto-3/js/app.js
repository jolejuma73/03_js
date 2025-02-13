//Seleccionar elementos HTML

const navbarToggle =document.querySelector("#navbar-toggle");
const sidebar = document.querySelector(".sidebar");

//Evento de click y función para activar/desactivar el sidebar menubar

	navbarToggle.addEventListener("click", ()=>{
		sidebar.classList.toggle("show-sidebar");
});
