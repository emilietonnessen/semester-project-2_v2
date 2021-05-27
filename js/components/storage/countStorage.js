export default function countStorage(){
    const cartIcon = document.querySelector(".cart__icon-quantity");
    const pageTitle = document.querySelector(".cart__total-items");

    if(localStorage["shopping-cart"]){
        const totalItems = JSON.parse(localStorage["shopping-cart"]).length; 
        cartIcon.innerHTML = totalItems;
    }
    
    if(localStorage["shopping-cart"] && pageTitle) {
        const totalItems = JSON.parse(localStorage["shopping-cart"]).length; 
        pageTitle.innerHTML = `(${totalItems})`;
    }
}