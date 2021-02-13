class ProductPage {
    get buyButton() { return $('.button__buy'); };

    addProductToCart() {
        this.buyButton.scrollIntoView();
        this.buyButton.click();
    }
};

export default new ProductPage();