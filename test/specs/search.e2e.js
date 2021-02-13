import HeaderPage from  '../pageobjects/header.page';
import SearchResultPage from '../pageobjects/searchResult.page'

describe('Funcionalidade de Busca', () => {
    it('deve realizer a busca por um produto', () => {
        browser.url(`/`);

        HeaderPage.searchFor('bola de pilates'); // Realiza busca por termo
        SearchResultPage.scrollToSearchResult(); // Move até os resultados de busca
        expect(SearchResultPage.firstProductTitle).toHaveTextContaining('pilate'); // Faz assert do título do primeiro resultado com o termo de busca
    });

    it('não deve trazer resultado para palavra de busca inválida', () => {
		browser.url(`/`);

		HeaderPage.searchFor('aaaaaaaaaaaaaaaaaaaa'); // Realiza busca por termo inválido
		expect(SearchResultPage.noResultFoundWarning).toBePresent() // Faz assert por mensagem de lista de resultado vazia
	});
});