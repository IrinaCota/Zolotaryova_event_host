import createSwiper from './swiper.js'; // Імпорт функції createSwiper

// Ініціалізація Swiper
const swiper = createSwiper({
    swiperContainerClass: 'swiper-reviews',
    navigationButtons: {
        prevEl: 'button-prev',
        nextEl: 'button-next',
    },
    slidesPerView: { mobile: 1, tablet: 2, desktop: 3 },
    spaceBetween: 20,
    loop: false,
    slidesPerGroup: 1,
});

// Функція для оновлення стану кнопок навігації
function updateNavigationButtons(swiper) {
    if (swiper.isEnd) {
        swiper.navigation.nextEl.classList.add('disabled');
    } else {
        swiper.navigation.nextEl.classList.remove('disabled');
    }

    if (swiper.isBeginning) {
        swiper.navigation.prevEl.classList.add('disabled');
    } else {
        swiper.navigation.prevEl.classList.remove('disabled');
    }
}

// Додаємо обробники подій для оновлення кнопок навігації
swiper.on('init', () => {
    updateNavigationButtons(swiper); // Оновлюємо кнопки при ініціалізації
});

swiper.on('slideChange', () => {
    updateNavigationButtons(swiper); // Оновлюємо кнопки при зміні слайдів
});

// Ініціалізуємо Swiper
swiper.init();