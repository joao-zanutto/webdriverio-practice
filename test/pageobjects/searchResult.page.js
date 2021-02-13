class SearchResultPage {
    get searchResultContainer() { return $('.productShowCaseContent'); };
    get firstProduct() { return this.searchResultContainer.$$('li')[0]; };
    get firstProductTitle() { return this.firstProduct.$('.productTitle'); };
    get noResultFoundWarning() { return $('.header-not-found')}

    selectFirstProduct() {
        this.firstProduct.click();
    }

    scrollToSearchResult() {
        this.searchResultContainer.scrollIntoView();
    }
}

export default new SearchResultPage();