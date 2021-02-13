import HeaderPage from '../pageobjects/header.page'
import CartPage from '../pageobjects/cart.page'
import SearchResultPage from '../pageobjects/searchResult.page';
import ProductPage from '../pageobjects/product.page'
import CookieFooterPage from '../pageobjects/cookieFooter.page'
import WarrantyPage from '../pageobjects/warranty.page'

describe('Funcionalidade de adicionar ao carrinho', () => {
	// Adicionado before para fechar a janela de aceitação de cookies no inicio do test suite
	//  para prevenir que interfira nos testes
	before( () => {
        browser.url(`/`);
        CookieFooterPage.closeCookieSnackbar();
    });

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

	it('deve passar pela página de garantia para produtos aplicáveis', () => {
		browser.url('/');

		HeaderPage.searchFor('smartphone'); // Procura por produto que se aplica a garantia estendida
		SearchResultPage.scrollToSearchResult(); // Navega até o elemento estar visível
		SearchResultPage.selectFirstProduct(); // Seleciona o primeiro produto
		ProductPage.addProductToCart(); // Adiciona ao carrinho
		expect(WarrantyPage.additionalServiceDescription).toHaveTextContaining('consertos'); // Verifica se está na página de garantia
        WarrantyPage.continueToCart(); // Continua para o carrinho
        expect(CartPage.cartTitle).toHaveText('Sacola'); // Verifica se foi levado ao carrinho
	});
});