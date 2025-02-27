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
})