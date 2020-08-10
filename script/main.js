var menuBtn = document.querySelector('.botonMenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

var menuDesplegable = document.querySelector('.menuPrincipal');
let principOpen = false;
menuBtn.addEventListener('click', () => {
  if(menuOpen) {
    menuDesplegable.classList.add('open');
    principOpen = true;
  } else {
    menuDesplegable.classList.remove('open');
    principOpen = false;
  }
});