import ApplicationContainers from '../pages/ApplicationContainers';

class MemberContainer{
    
    get memberContainer(){
        return cy.get('.CrewMember-container');
    }
    get memberName(){
        return this.memberContainer.find('.CrewMemeber-name');
    }
    selectByName(name){
        return this.memberName.contains(name);
    }
    get moveButton(){
        return this.memberContainer.find('.CrewMember-toolbar .CrewMember-up').contains(">");
    }
    moveContainerRight(name){
        this.memberContainer.contains(name).parent().parent().parent().find('.CrewMember-toolbar .CrewMember-up').contains(">").click();
    };
     
    moveContainerLeft(name){
        this.memberContainer.contains(name).parent().parent().parent().find('.CrewMember-toolbar [type="button"]').contains("<").click();
    };

    getMemberInTheColumn(memberName, columnName){
        return ApplicationContainers.appColumn.contains(columnName).parent().find('.CrewMemeber-name').contains(memberName);
    };
}
export default new MemberContainer();