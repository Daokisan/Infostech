const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})



$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000, //2000ms = 2s;
    responsiveClass:true,
    margin:10,
    autoplayHoverPause: true,
    responsive: {
        1200: {
          items:3,
           
        },
        768: {
            items:2
          },
    
          576: {
            items:1
          },

          480: {
            items:1
          },
      }

      
      
    });  
