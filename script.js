const spanTextoTecleado = document.getElementById("texto-escribir");
const cursorSpan = document.querySelector(".cursor");

const texto = "FullStack Web Development";
const tiempoTeclear = 150;
const velocidadBorrar = 100;
const esperaBorrar = 2000; 

let letraIndice = 0;

function teclear() {
  if (letraIndice < texto.length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    spanTextoTecleado.textContent += texto.charAt(letraIndice);
    letraIndice++;
    setTimeout(teclear, tiempoTeclear);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(borrar, esperaBorrar);
  }
}

function borrar() {
	if (letraIndice > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    spanTextoTecleado.textContent = texto.substring(0, letraIndice-1);
    letraIndice--;
    setTimeout(borrar, velocidadBorrar);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(teclear, tiempoTeclear + 1100);
  }
}

document.addEventListener("DOMContentLoaded", ()=> { // Cuando este cargado el Dom, se ejecuta la funcion
  if(texto.length) setTimeout(teclear, esperaBorrar + 300);
});


  // Activar barra en top
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Menu responsive
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a");
  
  menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  
  navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });
  
  // Top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  // Top button funcion
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  // !transparentar
  window.addEventListener("scroll", reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }
  
