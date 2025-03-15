import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', () => {
    const bannerSlider = new Swiper('.banner-slider', {
        navigation: {
            nextEl: '.banner-button-next',
            prevEl: 'banner-button-prev',
        },
        pagination: {
            el: '.banner-pagination',
        },
    })

    const productsSlider = new Swiper('.products-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.product-nav__next',
            prevEl: '.product-nav__prev',
        }
    })

    const recentlySlider = new Swiper('.recently-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.recently-nav__next',
            prevEl: '.recently-nav__prev',
        }
    })

    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.reviews-nav__next',
            prevEl: '.reviews-nav__prev',
        }
    })

    const masterSlider = new Swiper('.master-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.master-nav__next',
            prevEl: '.master-nav__prev',
        }
    })

    const catalogSlider = new Swiper('.catalog-slider', {
        slidesPerView: 6,
        spaceBetween: 67,
        navigation: {
            nextEl: '.master-nav__next',
            prevEl: '.master-nav__prev',
        }
    })

    const promoSlider = new Swiper('.promo-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.promo-nav__next',
            prevEl: '.promo-nav__prev',
        }
    })

    const masterSliderPage = new Swiper('.master-slider-page', {
        slidesPerView: 3,
        spaceBetween: 19,
        navigation: {
            nextEl: '.master-page-nav__next',
            prevEl: '.master-page-nav__prev',
        }
    })

    const productThumbsSlider = new Swiper('.product-slider--thumbs', {
        slidesPerView: 5,
        spaceBetween: 34,
        direction: 'vertical'
    })

    const productSlider = new Swiper('.product-slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.master-nav__next',
            prevEl: '.master-nav__prev',
        },
        thumbs: {
            swiper: productThumbsSlider,
        }
    })

// Кнопки "Любимое"

    const likedBtns = document.querySelectorAll('.liked__btn');

    likedBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('liked__btn--active');
        });
    });

// input c количеством продуктов

    const counterContainer = document.querySelectorAll('.counter-container');

    counterContainer.forEach((counter) => {
        const minusButton = counter.querySelector('.counter--minus');
        const plusButton = counter.querySelector('.counter--plus');
        const inputField = counter.querySelector('.product__input');

// Обработчик для кнопки "-"
        minusButton.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value); // Получаем текущее значение
            if (currentValue > 1) { // Убедимся, что значение не меньше 1
                inputField.value = currentValue - 1; // Уменьшаем значение на 1
            }
        });

// Обработчик для кнопки "+"
        plusButton.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value); // Получаем текущее значение
            inputField.value = currentValue + 1; // Увеличиваем значение на 1
        });
    })
})