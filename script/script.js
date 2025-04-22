const bourgir = document.querySelector('.burger-icon');
const xbtn = document.querySelector('.xbtn');
const mobileNav = document.querySelector('.mobile-nav');

function openSideBar() {
    mobileNav.style.width = '50vw';
}

function closeSideBar() {
    mobileNav.style.width = '0vw';
}

bourgir.addEventListener('click', openSideBar);
xbtn.addEventListener('click', closeSideBar);