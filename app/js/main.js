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
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
})();

(() => {
  const isSwiper = document.querySelector(".about-us-swiper");
  if (isSwiper) {
    const swiper = new Swiper(".about-us-swiper", {
      loop: true,
      spaceBetween: 40,
      speed: 700,
      grabCursor: true,
      pagination: {
        el: ".about-us-swiper-pagination",
      },
    });
  }
})();


const openPopUp = document.querySelector('.service-description__btn');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    scrollController.disabledScroll();
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    scrollController.enableScroll();
})
const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;   //щоб при відкритті попап нас не кидало наверх сторінки
        document.body.style = `
        overflow: hidden;
        position: fixed;
        top: -${scrollController.scrollPosition}px;
        left: 0;            //для того що правильно рацював на айфонах//
        height: 100vh;
        width: 100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;  //щоб при відкритті контент не пригав//
        `;
        document.documentElement.style.scrollBehavior = 'unset'; //щоб при закритті не працював скрол смуз
    },

    enableScroll() {
        document.body.style = '';
        window.scroll({top: scrollController.scrollPosition}) //щоб при закритті попап нас не кидало наверх сторінки
        document.documentElement.style.scrollBehavior = ''; //щоб при закритті не працював скрол смуз

    },
}




// const formPopup = new Popup({
//   id: "my-popup",
//   title: "We would like to help you",
//   content: `
//     <form >
//         <input type="text" name="name" placeholder="Name" class="first-input">
//         <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
//         <h3>How to answer you?</h3>
//         <input type="tel" name="phone number" placeholder="Phone Number" class="third-input">
//         <input type="email" name="email" placeholder="Email" class="fourth-input">
//         <button type="submit">Send message</button>
//     </form>`,
// });

// const randomBtn = document.querySelector(".service-description__btn");
// if (randomBtn) {
//   randomBtn.addEventListener("click", () => {
//     formPopup.show();
//   });
// }
