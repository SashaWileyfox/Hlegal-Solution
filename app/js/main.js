(() => {
    const burgerOpen = document.querySelector(".header__box-burger");
    const burgerClose = document.querySelector(".header__nav-close");
    const navigationMenu = document.querySelector(".header__nav");

    burgerOpen.addEventListener("click", () => {
        navigationMenu.classList.add("active");
    });
    burgerClose.addEventListener("click", () => {
        navigationMenu.classList.remove("active");
    });
})();

(() => {
    const tabsitem = document.querySelectorAll(".tabs__link-item");
    const tabsBlocks = document.querySelectorAll(".tabs__content-item");

    tabsitem.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabsBlocks.forEach((content) => {
                content.classList.remove("active");
            });
            tabsitem.forEach((content) => {
                content.classList.remove("active");
            });
            tabsitem[index].classList.add("active");
            tabsBlocks[index].classList.add("active");
        });
    });
})();

(() => {
    const isSwiper = document.querySelector(".swiper");
    if (isSwiper) {
        const swiper = new Swiper(".swiper", {
            loop: true,
            spaceBetween: 30,
            speed: 200,
            grabCursor: true,
            slideToClickedSlide: true,
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }
})();

(() => {
    const isSwiper = document.querySelector(".achievements__swiper");
    if (isSwiper) {
        const swiper = new Swiper(".achievements__swiper", {
            loop: true,
            spaceBetween: 60,
            slidesPerView: 1,
            speed: 700,
            grabCursor: true,
            slideToClickedSlide: true,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }

            },
            pagination: {
                el: ".achievements__pagination",
            },
        });
    }
})();


const openPopUp = document.querySelector('.service-description__btn');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

if (openPopUp) {
    openPopUp.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('active');
        scrollController.disabledScroll();
    })
}

if (closePopUp) {
    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
        scrollController.enableScroll();
    })
}


const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;   //щоб при відкритті попап нас не кидало наверх сторінки
        document.body.style = `
        overflow: hidden;
        top: ${scrollController.scrollPosition}px;
        left: 0;            
        height: 100vh;
        width: 100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px; 
        `;
        document.documentElement.style.scrollBehavior = 'unset'; //щоб при закритті не працював скрол смуз
    },

    enableScroll() {
        document.body.style = '';
        window.scroll({top: scrollController.scrollPosition}) //щоб при закритті попап нас не кидало наверх сторінки
        document.documentElement.style.scrollBehavior = ''; //щоб при закритті не працював скрол смуз

    },
}





