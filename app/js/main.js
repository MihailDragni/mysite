document.addEventListener("DOMContentLoaded", () => {
  // const isParent = (parent, child) => {
  //   let currentParent = child.parentElement;
  //   let isParent = false;
  //   while (currentParent) {
  //     isParent = parent === currentParent;
  //     if (isParent) {
  //       currentParent = null;
  //     } else {
  //       currentParent = currentParent.parentElement;
  //     }
  //   }
  //   return isParent;
  // };

  // //--Анимация при скроле---

  // const animItems = document.querySelectorAll("._anim-items");
  // if (animItems.length > 0) {
  //   window.addEventListener("scroll", animOnScroll);
  //   function animOnScroll() {
  //     for (let index = 0; index < animItems.length; index++) {
  //       const animItem = animItems[index];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset = offset(animItem).top;
  //       const animStart = 4;

  //       let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //       if (animItemHeight > window.innerHeight) {
  //         animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //       }

  //       if (
  //         pageYOffset > animItemOffset - animItemPoint &&
  //         pageYOffset < animItemOffset + animItemHeight
  //       ) {
  //         animItem.classList.add("_active");
  //       } else {
  //         if (!animItem.classList.contains("_anim-no-hide")) {
  //           animItem.classList.remove("_active");
  //         }
  //       }
  //     }
  //   }
  //   function offset(el) {
  //     const rect = el.getBoundingClientRect(),
  //       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  //       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  //   }

  //   setTimeout(() => {
  //     animOnScroll();
  //   }, 300);
  // }

  // //--мобильное меню--

  // const burger = document.querySelector(".burger");
  // const mobileMenu = document.querySelector(".mobile-menu");
  // const bodyLock = document.body;

  // burger.addEventListener("click", (e) => {
  //   let burgerTarget = e.target === burger;
  //   if (burgerTarget || isParent(burger, e.target)) {
  //     mobileMenu.classList.toggle("mobile-menu--active");
  //     if (mobileMenu.classList.contains("mobile-menu--active")) {
  //       burger.classList.add("burger--active");
  //       bodyLock.classList.add("lock");
  //     } else {
  //       burger.classList.remove("burger--active");
  //       bodyLock.classList.remove("lock");
  //     }
  //   }
  // });

  // document.addEventListener("click", function (e) {
  //   if (e.target !== burger && e.target !== mobileMenu) {
  //     burger.classList.remove("burger--active");
  //     mobileMenu.classList.remove("mobile-menu--active");
  //     bodyLock.classList.remove("lock");
  //   }
  // });
});

