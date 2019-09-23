class Base{
    get baseApp(){
        return cy.get('#root');
    }
}
export default new Base();