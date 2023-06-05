const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asaid = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


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

const productList = [];
productList.push( 
    {name:'Bike', price:120, image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);
 productList.push( 
    {name:'Patin', price:111, image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);
 productList.push( 
    {name:'Motocicle', price:222, image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
);

renderProudcts(productList);


function renderProudcts(arr) {
    for ( product of arr ) {
        const productCard = document.createElement( 'div' );
        productCard.classList.add('product-card');
    
        const image = document.createElement('img');
        image.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ '+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);    
    
        productInfo.appendChild(productInfoDiv);
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        productFigure.appendChild(productFigureImg);
        productInfo.appendChild(productFigure);
    
        cardsContainer.appendChild(productCard);
    }
}


