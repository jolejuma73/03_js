//Seleccionar elementos HTML

const navbarToggle =document.querySelector("#navbar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector("#navigation");

//Evento de click y función para activar/desactivar el sidebar menubar

	navbarToggle.addEventListener("click", ()=>{
		sidebar.classList.toggle("show-sidebar");
});

//Evento de click y función para cerrar el sidebar menubar

closeBtn.addEventListener("click", ()=>{
	sidebar.classList.remove("show-sidebar");
});

//Efecto de scroll en la cabecera del sitio web

const originalColor = getComputedStyle(navigation).backgroundColor;
window.addEventListener("scroll", ()=>{
	navigation.style.backgroundColor = window.scrollY > 0 ? "#bbb8b8" : originalColor;
}); 
