class CartPage {
    get emptyCartMessage() { return $('.EmptyBasket-box'); };
    get firstProductTitle() { return $('p'); };
    get cartTitle() { return $('.BasketPage-title') }
};

export default new CartPage();