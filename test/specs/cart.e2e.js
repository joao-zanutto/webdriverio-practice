import HeaderPage from '../pageobjects/header.page'
import CartPage from '../pageobjects/cart.page'

describe('Funcionalidade de adicionar ao carrinho', () => {
    it('deve ter o carrinho inicialmente vazio', () => {
        browser.url(`/`);

        HeaderPage.goToCart();
        expect(CartPage.emptyCartMessage).toBePresent();
    })
});