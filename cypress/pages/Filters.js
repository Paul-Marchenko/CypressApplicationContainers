class Filters{
    get filters(){
        return cy.get('#filters');
    }
    get nameField(){
        return cy.get('#name');
    }
    get cityField(){
        return cy.get('#city');
    }
    get submitButton(){
        return cy.get('[type="submit"]');
    }
    get clearButton(){
        return this.filters.find('[type="button"]');
    }
    pressButton(buttonName){
        `this.${buttonName}`.click();

    };
    filteringByName(value){
        this.nameField.type(value);
        this.submitButton.click();
    };
    filteringByCity(value){
        this.cityField.type(value);
        this.submitButton.click();
    };

}
export default new Filters();