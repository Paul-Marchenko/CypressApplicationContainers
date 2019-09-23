class Header{
    get appHeader(){
        return cy.get('.App-header');
    }
    get logo(){
        return this.appHeader.find('.App-logo');
    }

}
export default new Header();