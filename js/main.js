$(document).ready(function(){
    const swiper = new Swiper('.swiper', {

           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },

          scrollbar: {
            el: '.swiper-scrollbar',
          },

             effect: 'flip',
             grabCursor: true,
             pagination: {
              el: '.swiper-pagination',
             },
           speed : 1500,
           autoplay: {
            delay: 2500,
            disableOnInteraction: false,
         },
          












    });
})