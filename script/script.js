document.addEventListener("DOMContentLoaded", function (event) {

  //variables del Dom

  var btnNav = document.querySelector(".nav-toggle");
  var listNav = document.querySelector("#nav");
  var toggleNav = 0;

  btnNav.addEventListener('click', function(){
    if (toggleNav === 0) {
      btnNav.classList.add('active');
      listNav.classList.add('active');
      toggleNav = 1;
    } else if (toggleNav === 1) {
      btnNav.classList.remove('active');
      listNav.classList.remove('active');
      toggleNav = 0;
    }
  })

  window.addEventListener('scroll', function () {
    let nav = document.querySelector('.content_menu');
    nav.classList.toggle("sticky", window.scrollY > 0);
  })

  //   //Animacion AMS//
  window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado1');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight / 2;

    if (posicion < tamañoDePantalla) {
      animacion.style.animation = 'mover 1s ease-out'
    }
  })

  window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado2');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight / 2;

    if (posicion < tamañoDePantalla) {
      animacion.style.animation = 'mover 1s ease-out'
    }
  })

  window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado3');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight / 2;

    if (posicion < tamañoDePantalla) {
      animacion.style.animation = 'mover 1s ease-out'
    }
  })
  //   //Fin Animacion AMS//

  $(function skrollrInit() {
    //initialize skrollr
    skrollr.init({
      smoothScrolling: false
    });

    // disable skrollr if using handheld device
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      skrollr.init().destroy();
    }
  });

  //execute function
  skrollrInit();

});