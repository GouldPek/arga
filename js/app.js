// include('../components/components.js');
// include('vendor/swiper-bundle.min.js');
let promoSwiper = new Swiper(".promo__swiper", {
   navigation: {
      nextEl: ".promo-next",
      prevEl: ".promo-prev",
   },
   autoHeight: false,
   slidesPerView: 3,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   pagination: {
      el: '.promo-pagination',
      type: 'progressbar',
   },
   breakpoints: {
      300: {
         slidesPerView: 1,
      },
      765: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      900: {
         spaceBetween: 30,
         slidesPerView: 3,
      },
      1400: {
         spaceBetween: 50,
      },
   },
});

let crewSwiper = new Swiper(".crew__swiper", {
   navigation: {
      nextEl: ".crew-next",
      prevEl: ".crew-prev",
   },
   autoHeight: false,
   slidesPerView: 2,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   breakpoints: {
      300: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      600: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
      1600: {
         slidesPerView: 4,
      },
   },
   pagination: {
      el: '.crew-pagination',
      type: 'progressbar',
   },

});
let reveiwSwiper = new Swiper(".review__swiper", {
   navigation: {
      nextEl: ".review-next",
      prevEl: ".review-prev",
   },
   autoHeight: false,
   slidesPerView: 3,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   pagination: {
      el: '.review-pagination',
      type: 'progressbar',
   },
   breakpoints: {
      300: {
         slidesPerView: 1,
      },
      765: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },


});

let previewSwiper = new Swiper(".pslider", {
   autoHeight: false,
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: '.pslider-progressbar',
      type: 'progressbar',
   },
   navigation: {
      nextEl: ".pslider__arrow",
   },

});

let innerSwiper = new Swiper(".nslider", {
   autoHeight: false,
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: '.pslider-progressbar',
      type: 'progressbar',
   },
   navigation: {
      nextEl: ".pslider__arrow",
   },
});





document.getElementById('burger').addEventListener('click', function () {
   document.getElementById('sidebar').classList.add('sidebar__active');
});
document.getElementById('sidebar__close').addEventListener('click', function () {
   document.getElementById('sidebar').classList.remove('sidebar__active');
});


document.getElementById('request__price-btn').addEventListener('click', function () {
   document.getElementById('request__price-main').classList.add('request__price-none');
   document.getElementById('request__price-addition').classList.remove('request__price-none');
})
document.getElementById('request__price-close').addEventListener('click', function () {
   document.getElementById('request__price-main').classList.remove('request__price-none');
   document.getElementById('request__price-addition').classList.add('request__price-none');
});



document.getElementById('request__popup-call1').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call2').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call3').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call4').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call5').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call6').addEventListener('click', function () {
   document.getElementById('review__addition').classList.remove('review__addition-none');
   document.getElementById('review__block').classList.add('review__addition-none');
})
document.getElementById('request__popup-call7').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('request__popup-call8').addEventListener('click', function () {
   document.getElementById('request__popup').classList.remove('request__price-none');
})
document.getElementById('review__price-close').addEventListener('click', function () {
   document.getElementById('review__addition').classList.add('review__addition-none');
   document.getElementById('review__block').classList.remove('review__addition-none');
})

document.getElementById('request__price-btn2').addEventListener('click', function () {
   document.getElementById('request__popup').classList.add('request__price-none');
   document.getElementById('popup__addition').classList.remove('popup__addition-none');
})
document.getElementById('popup__addition-close').addEventListener('click', function () {
   document.getElementById('popup__addition').classList.add('popup__addition-none');
})

document.getElementById('request__popup-close').addEventListener('click', function () {
   document.getElementById('request__popup').classList.add('request__price-none');
})





document.getElementById('sidebar__close').addEventListener('click', function () {
   document.getElementById('sidebar').classList.remove('sidebar__active')
})


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}













innerSwiper.controller.control = previewSwiper;
previewSwiper.controller.control = innerSwiper;;


