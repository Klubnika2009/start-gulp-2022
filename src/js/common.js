import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Scrollbar,
  Autoplay,
  FreeMode,
} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Ahoj JS');

  const iconMenu = document.querySelector('.hamburger');

  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('active');
  });

  const homeSlider = new Swiper('.home-slider', {
    modules: [Navigation, Pagination, EffectFade, Scrollbar, Autoplay, FreeMode],
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    observer: true,
    watchOverflow: true,
    observeParents: true,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
