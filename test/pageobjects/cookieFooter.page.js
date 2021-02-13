class CookieFooterPage {
    get closeCookieBtn() { return $('.text-button-cookie'); };

    closeCookieSnackbar() {
        this.closeCookieBtn.click()
    }
};

export default new CookieFooterPage();