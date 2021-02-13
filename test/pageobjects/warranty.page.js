class WarrantyPage {
    get additionalServiceDescription() { return $('tbody tr:nth-child(2) td'); };
    get continueToCartButton() { return $('.btn-buy-warranty'); };

    continueToCart(){
        this.continueToCartButton.scrollIntoView();
        this.continueToCartButton.click();
    }
};

export default new WarrantyPage();