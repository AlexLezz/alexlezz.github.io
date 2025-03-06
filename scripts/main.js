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
            nextEl: '.product-button-next',
            prevEl: 'product-button-prev',
        }
    })
})