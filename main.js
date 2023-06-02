
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asaid = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu );
menuHamIcon.addEventListener('click', toggleMenuHamIcon);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    !asaid.classList.contains('inactive') ? asaid.classList.add('inactive'):'';
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamIcon() {
    !asaid.classList.contains('inactive') ? asaid.classList.add('inactive') : '';
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    !mobileMenu.classList.contains('inactive') ? mobileMenu.classList.add('inactive') : '';
    !desktopMenu.classList.contains('inactive') ? desktopMenu.classList.add('inactive'):'';
    asaid.classList.toggle('inactive');
}

