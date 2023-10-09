const menu = document.querySelector('.header__toggle');

if (menu) {
  const menuLinks = document.querySelector('.header__list');
  const body = document.querySelector('body');
  menu.addEventListener("click", function(e) {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    document.body.classList.toggle('_lock')
  })
}




const accordionItemHeaders = document.querySelectorAll(".accordion__item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {
  accordionItemHeader.classList.toggle("active");
  const accordionItemBody = accordionItemHeader.nextElementSibling;
  if(accordionItemHeader.classList.contains("active")) {
   accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
  } else {
   accordionItemBody.style.maxHeight = 0;
  }
});
});





const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight /  animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight /  animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}




let mainSlider = new Swiper(".main-section__swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  keyboard: {
      enabled: true,
  },
});






let menuSlider = new Swiper(".menu-main__swiper", {
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  keyboard: {
      enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});





let interiorSwiper = new Swiper(".interior__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  keyboard: {
      enabled: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  pagination: {
    el: ".swiper-pagination",
    type: 'progressbar',
  },
  breakpoints: {
      300: {
          slidesPerView: 1,
      },
      500: {
          slidesPerView: 2,
      },
      1000: {
          slidesPerView: 3,
      },
  },
});