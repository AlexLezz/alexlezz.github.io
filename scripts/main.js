import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.addEventListener('DOMContentLoaded', () => {
    const bannerSlider = new Swiper('.banner-slider', {
        navgation: {
            nextEl: '.banner-button-next',
            prevEl: 'banner-button-prev',
        },
        pagination: {
            el: '.banner-pagination',
        },
    })

    const productSlider = new Swiper('.products-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navgation: {
            nextEl: '.product-nav__next',
            prevEl: '.product-nav__prev',
        }
    })

    const recentlySlider = new Swiper('.recently-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navgation: {
            nextEl: '.recently-nav__next',
            prevEl: '.recently-nav__prev',
        }
    })

    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 20,
        navgation: {
            nextEl: '.reviews-nav__next',
            prevEl: '.reviews-nav__prev',
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