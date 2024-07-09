document.addEventListener('DOMContentLoaded', () => {
    // появление хедера при скролле
    let body = document.querySelector('body');
    let header = document.querySelector('header');

    window.onscroll = function () {
        if (pageYOffset > 50) {
            header.classList.add('fixed');
            body.style = 'margin-top: 100px'
        } else {
            header.classList.remove('fixed');
            body.style = 'margin: 0'
        }
    }

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

    // табы
    let buttons = document.querySelectorAll('.analyst__buttons button')
    let tables = document.querySelectorAll('.analyst__widget')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            for (let n = 0; n < buttons.length; n++) {
                buttons[n].classList.remove('active')
            }

            buttons[i].classList.add('active')

            for (let el = 0; el < tables.length; el++) {
                tables[el].classList.remove('active')
                tables[i].classList.add('active')
            }
        })
    }
})