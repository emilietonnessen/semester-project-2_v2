const menuIcon = document.querySelector('.nav__menu-icon');
const productMenuContainer = document.querySelector(".product-menu");
menuIcon.addEventListener("click", toggleMobileMenu);


export default function toggleMobileMenu() {
	menuIcon.classList.toggle("open")
	productMenuContainer.classList.toggle("product-menu--open")
}
 



/* Product Menu */
export function productMenu(item){


    
    const productMenuContainer = document.querySelector(".product-menu__list");

    productMenuContainer.innerHTML = "";

    // Checking ID
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    // Display the Products
    item.forEach( function(product) {
        
        let activeLink = "";

        if(id == product.id){
            activeLink = "product-menu__link--active";
        }
        
        productMenuContainer.innerHTML += `
            <li class="product-menu__item">
                <a href="./edit-product.html?id=${product.id}" class="product-menu__link ${activeLink}">
                    <i class="fal fa-angle-right"></i> 
                    ${product.title}
                </a>
            </li>
        `;
    })
}