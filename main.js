'use strict';

// Make navbar transparent when it is on the top
// const navbar = document.querySelector('#navbar');
// const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// 내가 스크롤을 할때마다 내가 등록한 이 arrow fuction을 호출해줘.
// https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY
