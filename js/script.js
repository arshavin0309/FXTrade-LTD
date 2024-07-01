document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('show')
    })

    let menuItems = document.querySelectorAll('header .menu > .menu-item')

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
            document.querySelector('.sub-menu').classList.toggle('show')
        })
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        slidesPerView: 3,
        spaceBetween: 30,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})