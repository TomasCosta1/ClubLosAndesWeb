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
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    main.style.display = 'none';
    footer.style.display = 'none'
  })

  btnBurgerMenuClose.addEventListener('click', function(){
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    main.style.display = 'inline'
    footer.style.display = 'inline'
  })