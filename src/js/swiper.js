import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Keyboard, Manipulation, Navigation } from 'swiper/modules';

export default function createSwiper({
  swiperContainerClass,
  navigationButtons: { prevEl, nextEl },
  spaceBetween = 30,
  slidesPerView = { mobile: 1, tablet: 1, desktop: 1 },
  ...otherOptions
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    modules: [Navigation, Manipulation, Keyboard],
    direction: 'horizontal',
    speed: 500,
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
    spaceBetween,
    slidesPerView: slidesPerView.mobile,
    breakpoints: {
      768: {
        slidesPerView: slidesPerView.tablet,
        spaceBetween:
          slidesPerView.tablet !== 1 && spaceBetween != 0 ? 16 : spaceBetween,
      },

      1440: {
        slidesPerView: slidesPerView.desktop,
        spaceBetween:
          slidesPerView.tablet !== 1 && spaceBetween != 0 ? 20 : spaceBetween,
      },
    },
    ...otherOptions,
  });
}
