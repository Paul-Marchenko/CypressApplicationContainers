

class ApplicationContainers{
    
    get appColumn(){
        return cy.get('.App-column');
    }
    get columnHeader(){
        return this.appColumn.contains();
    }
    

    

}
export default new ApplicationContainers();