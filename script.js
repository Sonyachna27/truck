var gallerySwiper = new Swiper(".mySwiper-gallery", {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: true,
  navigation: {
      nextEl: '.gallery-swiper-button-next',
      prevEl: '.gallery-swiper-button-prev',
  },
  pagination: {
      el: '.gallery-swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 40
      },
      640: {
          slidesPerView: 1,
          spaceBetween: 40
      },
      1023: {
          slidesPerView: 2,
          spaceBetween: 40
      }
  }
});

var blogSwiper = new Swiper(".mySwiper-blog", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 40,
  direction: 'horizontal',
  loop: true,
  navigation: {
      nextEl: '.blog-swiper-button-next',
      prevEl: '.blog-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-blog', // Зазначте окремий елемент для пагінації другого слайдера
    type: 'bullets',
    clickable: true,
},
slidesPerGroup: 2,
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 40
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 40
      },
      1023: {
          slidesPerView: 2,
          spaceBetween: 40
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 40
      }
  }
});

const menuBtn = document.querySelector('.menuBtns');
  const menuLinks = document.querySelectorAll('nav');
  
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  menuLinks.forEach((item) => item.addEventListener('click' , () => document.querySelector('html').classList.toggle('open')));
  
//   const closePop = document.querySelector('.close');
//   const openPop = document.querySelector('.quote');

//   openPop.addEventListener('click', () => document.querySelector('html').classList.add('pop'));
//   closePop.addEventListener('click', () => document.querySelector('html').classList.toggle('pop'));