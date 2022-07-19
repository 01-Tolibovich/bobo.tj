// Бургер меню
let btn = document.querySelector('.btn');
let burger_menu = document.querySelector('.burger_menu');
let topArrow = document.querySelector ('.arrow');
let logo = document.querySelector ('.logo');
let topText = document.querySelector ('.top_text');
let body = document.querySelector ('body');

btn.addEventListener ('click', function() {
	burger_menu.classList.toggle ('open');
    btn.classList.toggle ('display_none');
    logo.classList.toggle ('display_none');
    topText.classList.toggle ('visibility');
})

topArrow.addEventListener ('click', function() {
	burger_menu.classList.toggle('open');
    btn.classList.toggle ('display_none');
    logo.classList.toggle ('display_none');
    topText.classList.toggle ('visibility');
})


// Анимация при прокрутке страницы
// const animItems = document.querySelectorAll ('.anim-items');

// if (animItems.length > 0) {
//     window.addEventListener ('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('active');
//             } else {
//                 if (!animItem.classList.contains('anim-no-repeat')) {
//                     animItem.classList.remove('active');
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRest(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//     setTimeout(() => {
//         animOnScroll();
//     }, 300);
// }