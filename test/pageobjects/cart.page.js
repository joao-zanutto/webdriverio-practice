class CartPage {
    get emptyCartMessage() { return $('.EmptyBasket-box'); };
    get firstProductTitle() { return $('p'); };

};

export default new CartPage();