window.addEventListener('load', function() {
	// Esconder el preloader
	document.querySelector('.preloader').classList.add('hide-preloader');
	// Mostrar el contenido
	document.querySelector('main').classList.add('main-show');
  this.setInterval(quitarPreloader, 2000)
});

const quitarPreloader=()=>{
  document.querySelector('.preloader').style.display = "none"
}

window.addEventListener('scroll', function() {
    var image = document.querySelector(".logoCalaNavScroll");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 120) {
      image.classList.add('slide-in');
    } else {
      image.classList.remove('slide-in');
    }
  });


  // sistema de bloqueo de superposicion en burger menu
  let btnBurgerMenuOpen = document.getElementById('btnBurgerMenuOpen');
  let btnBurgerMenuClose = document.getElementById('btnBurgerMenuClose');

  btnBurgerMenuOpen.addEventListener('click', function(){
    let mainImgs = document.getElementsByClassName('mainImg')
    let secondaryImgs = document.getElementsByClassName('secondaryImg')
    for(i=0; i<mainImgs.length; i++){
      mainImgs[i].style.zIndex = '-1'
    }
    for(i=0; i<secondaryImgs.length; i++){
      secondaryImgs[i].style.zIndex = '-1'
    }
  })

  
  btnBurgerMenuClose.addEventListener('click', function(){
    let mainImgs = document.getElementsByClassName('mainImg')
    let secondaryImgs = document.getElementsByClassName('secondaryImg')
    setTimeout(function(){
      for(i=0; i<mainImgs.length; i++){
        mainImgs[i].style.zIndex = '0'
      }
      for(i=0; i<secondaryImgs.length; i++){
        secondaryImgs[i].style.zIndex = '0'
      }
    }, 500)
  })

// SISTEMA READ MORE
function readMore(event){
  let contenedor = event.target.parentNode
  let textoMostrar = contenedor.querySelector('.containerReadMore')
  textoMostrar.style.display = "block"
  event.target.style.display = 'none'
}

function readLess(event){
  const btnReadMore = (event.target.parentNode).parentNode.querySelector('.btnReadMore')
  let contenedor = (event.target.parentNode).parentNode
  let textoMostrar = contenedor.querySelector('.containerReadMore')
  textoMostrar.style.display = "none"
  event.target.style.display = 'block'
  btnReadMore.style.display = 'block'
}
