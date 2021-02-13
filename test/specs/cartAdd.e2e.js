import HeaderPage from '../pageobjects/header.page'
import CartPage from '../pageobjects/cart.page'
import SearchResultPage from '../pageobjects/searchResult.page';
import ProductPage from '../pageobjects/product.page'

describe('Funcionalidade de adicionar ao carrinho', () => {
    it('deve ter o carrinho inicialmente vazio', () => {
        browser.url(`/`);

        HeaderPage.goToCart(); // Navega até o carrinho
        expect(CartPage.emptyCartMessage).toBePresent(); // Faz assert para verificar que carrinho está vazio
    })

    it('deve adicionar o produto corretamente ao carrinho', () => {
		browser.url(`/`);

		HeaderPage.searchFor('bola de pilates'); // Busca por produto
		SearchResultPage.scrollToSearchResult(); // Navega até os resultados
		const firstProductTitle = SearchResultPage.firstProductTitle.getText(); // Grava o título do primeiro produto
		SearchResultPage.selectFirstProduct(); // Abre o primeiro produto
		ProductPage.addProductToCart() // Adiciona o produto ao carrinho e é redirecionado para ele
		expect(CartPage.firstProductTitle).toHaveTextContaining(firstProductTitle); // Faz assert do título do produto com o título gravado antesriormente
	});
});