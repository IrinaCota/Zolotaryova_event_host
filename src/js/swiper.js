import Swiper from 'swiper'; // Імпорт Swiper та Navigation
import 'swiper/swiper-bundle.css'; // Імпорт стилів Swiper

import { Navigation } from 'swiper/modules';

export default function createSwiper({
    swiperContainerClass,
    navigationButtons: { prevEl, nextEl },
    spaceBetween = 10,
    slidesPerView = { mobile: 1, tablet: 2, desktop: 4 },
    ...otherOptions
}) {
    return new Swiper(`.${swiperContainerClass}`, {
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        modules: [Navigation], // Додаємо модуль навігації
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
                spaceBetween,
            },
            1440: {
                slidesPerView: slidesPerView.desktop,
                spaceBetween,
            },
        },
        ...otherOptions,
    });
}
