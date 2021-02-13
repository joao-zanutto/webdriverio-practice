import HeaderPage from  '../pageobjects/header.page';
import SearchResultPage from '../pageobjects/searchResult.page'

describe('Funcionalidade de Busca', () => {
    it('deve realizer a busca por um produto', () => {
        browser.url(`/`);

        HeaderPage.searchFor('bola de pilates');
        SearchResultPage.scrollToSearchResult();
        expect(SearchResultPage.firstProductTitle).toHaveTextContaining('pilate');
    });
});


