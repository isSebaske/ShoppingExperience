let cartCardContainer = document.querySelector("#cartCardContainer");
let displayCartProducts = function(){
    clearStorageAndCart();
    cartCardContainer.innerHTML = "";
    if (cart.length > 0){
        cart.forEach(cartItem => { cartCardContainer.innerHTML += `
            <div class="cartCard">
                <div class="cartCardFlex">
                    <img src="${cartItem.image}" alt="${cartItem.description}">
                    <p class="cartTitle">${cartItem.name}</p>
                    <p class="cartDescription">${cartItem.description}</p>
                    <div class="cartQuantity"><input type="number" value="${cartItem.quantity}" min="1" max="5"></div>
                    <p class="cartPrice">&dollar; ${cartItem.price}</p>
                </div>
                <p class="textAlignRight removeMargins"><a class="removeLink" href="#" id="${cartItem.id}">Remove</a></p>
            </div>`;
           removeFromCart();} 
        );
        
    } else {
        cartCardContainer.innerHTML = '<p id="emptyCart">The cart is empty</p>';
    }
};
displayCartProducts();

let subtotal,
    shipping,
    tax,
    tota;


let calculateOrderSummary = function(){
    subtotal = 0,
    shipping = 0,
    tax = 0,
    tota = 0;
    clearStorageAndCart();
    cart.forEach(cartitem => {
        subtotal += cartitem.price;
        shipping++;
    });
    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;
}


let displayOrderSummary = function(){
    calculateOrderSummary();
    sideBarContainer.innerHTML = `
        <div class="tableRow">
            <div class="tableCell">Subtotal</div>
            <div class="tableCell">&dollar; ${subtotal.toFixed(2)}</div>
        </div>
        <div class="tableRow">
            <div class="tableCell">Shipping</div>
            <div class="tableCell">&dollar; ${shipping.toFixed(2)}</div>
        </div>
        <div class="tableRow">
            <div class="tableCell borderBottom">Sales Tax</div>
            <div class="tableCell borderBottom">&dollar; ${tax.toFixed(2)}</div>
        </div>
        <div class="tableRow">
            <div class="tableCell">Total</div>
            <div class="tableCell bold">&dollar; ${total.toFixed(2)}</div>
        </div>`
}
displayOrderSummary();





