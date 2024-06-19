let cart = [];
sideBareContainer = document.querySelector("#sideBarContainer");
function clearStorageAndCart () {
    cart = [];
    let currentStorage = JSON.parse(localStorage.getItem('CART'));
    if(currentStorage) {
        cart = currentStorage
    }
}