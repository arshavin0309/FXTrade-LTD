document.addEventListener('DOMContentLoaded', () => {
    // появление хедера при скролле
    let body = document.querySelector('body');
    let header = document.querySelector('header');

    if (body.classList.contains('fixed-header') === false) {
        window.onscroll = function () {
            if (pageYOffset > 50) {
                header.classList.add('fixed');
                body.style = 'margin-top: 100px'
            } else {
                header.classList.remove('fixed');
                body.style = 'margin: 0'
            }
        }
    } else {
        window.onscroll = function () {
            if (pageYOffset > 50) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
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

    // слайдер
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
    let btns = document.querySelectorAll('.terminal__buttons button')
    let boxes = document.querySelectorAll('.terminal__box')

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

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            for (let n = 0; n < btns.length; n++) {
                btns[n].classList.remove('active')
            }

            btns[i].classList.add('active')

            for (let el = 0; el < boxes.length; el++) {
                boxes[el].classList.remove('active')
                boxes[i].classList.add('active')
            }
        })
    }


    // закрытие всех details при открытии нового details
    const details = document.querySelectorAll("details");

    details.forEach((detail) => {
        detail.addEventListener("toggle", () => {
            if (detail.open) setTargetDetail(detail);
        });
    });

    function setTargetDetail(targetDetail) {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.open = false;
            }
        });
    }

    // окно с предупреждением о куки
    function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)'
            )
        )
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function setCookie(name, value, options = {}) {
        options = {
            path: '/',
            ...options,
        }

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString()
        }

        let updatedCookie =
            encodeURIComponent(name) + '=' + encodeURIComponent(value)

        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey
            let optionValue = options[optionKey]
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue
            }
        }

        document.cookie = updatedCookie
    }

    if (!getCookie('cookies')) {
        document.querySelector('.cookies').style = 'display: flex'
    }

    document.querySelector('.cookies .btn').addEventListener('click', () => {
        document.querySelector('.cookies').style = 'display: none'
        setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
    })
})