window.addEventListener('scroll', function() {
    var image = document.querySelector(".logoCalaNavScroll");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition >= 120) {
      image.classList.add('slide-in');
    } else {
      image.classList.remove('slide-in');
    }
  });