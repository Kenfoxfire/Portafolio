const spanTextKeyboard = document.getElementById("text-to-write");
const cursorSpan = document.querySelector(".cursor");

const text = "FullStack Web Development";
const typingTime = 150;
const ereaserVelocity = 100;
const waitingTime = 2000; 

let letterIndex = 0;

function typing() {
  if (letterIndex < text.length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    spanTextKeyboard.textContent += text.charAt(letterIndex);
    letterIndex++;
    setTimeout(typing, typingTime);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(eraser, waitingTime);
  }
}

function eraser() {
	if (letterIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    spanTextKeyboard.textContent = text.substring(0, letterIndex-1);
    letterIndex--;
    setTimeout(eraser, ereaserVelocity);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(typing, typingTime + 1100);
  }
}

document.addEventListener("DOMContentLoaded", ()=> { // If document is loaded => execute the function
  if(text.length) setTimeout(typing, waitingTime + 300);
});


  // Activate reveal on scroll
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
  
  // !transparent
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
  
