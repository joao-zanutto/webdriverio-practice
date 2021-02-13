class HeaderPage {
    get searchField() { return $('.field-input-search'); };
    get cartBtn() { return $('.icon-cart') }

    searchFor(searchTerm) {
        this.searchField.setValue(searchTerm);
        browser.keys('Enter');
    };

    goToCart() {
        this.cartBtn.click()
    }
}

export default new HeaderPage();