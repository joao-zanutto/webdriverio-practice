class SearchResultPage {
    get searchResultContainer() { return $('.productShowCaseContent'); };
    get firstProduct() { return this.searchResultContainer.$$('li')[0]; };
    get firstProductTitle() { return this.firstProduct.$('.productTitle'); };

    scrollToSearchResult() {
        this.searchResultContainer.scrollIntoView();
    }
}

export default new SearchResultPage();