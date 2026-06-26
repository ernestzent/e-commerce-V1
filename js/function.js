const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
})

//Sidebar Menu
const menu = header.firstElementChild;
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("show");
})

const sidebarCloseIcon = document.querySelector(".sidebar__icon");

sidebarCloseIcon.addEventListener("click", () => {
    sidebar.classList.remove("show");
})

//Carrito
const cartClose = document.querySelector(".cart__container--close");
const cartCloseIcon = cartClose.firstChild;

cartCloseIcon.addEventListener("click", () => {
    cart.classList.remove("show");
})

//Funcion para agregar productos al carrito
const btnAddToCart = document.querySelectorAll(".product__button");
const cartItemContainer = document.querySelector(".cart");
const cartBadge = document.getElementById("cart-badge");

let cartCount = 0;

btnAddToCart.forEach(button => {
    button.addEventListener("click", (e) => {
        const productCard = e.target.closest(".product__item");
        const productTitle = productCard.querySelector(".product__title").textContent;
        const productPrice = productCard.querySelector(".product__price").textContent;
        const productImgSrc = productCard.querySelector(".product__img").src;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart__item");

        cartItem.innerHTML = `
        <img class="cart__img" src="${productImgSrc}" alt="${productTitle}">
        <p class="cart__description">${productTitle}</p>
        <p class="cart__price">${productPrice}</p>
        <i class="cart__icon delete__btn"><img class="cart__delete" src="img/delete.png" alt="Icono Quitar"></i>
        `;

        cartItemContainer.appendChild(cartItem);

        cartCount++;
        cartBadge.textContent = cartCount;
        showToast(productTitle);
        

        const deleteBtn = cartItem.querySelector(".delete__btn");
        deleteBtn.addEventListener("click", () => {
            cartItem.remove();
            cartCount--;
            cartBadge.textContent = cartCount;
        })
    })
})

//Toast
const toastContainer = document.getElementById("toast-container");

function showToast(productName) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = `¡${productName} se agregó al carrito!`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("hide");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 3000);
}