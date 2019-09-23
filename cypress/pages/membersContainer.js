import ApplicationContainers from '../pages/ApplicationContainers';

class MemberContainer{
    
     get memberContainer(){
         return cy.get('.CrewMember-container');
     }
     get memberName(){
         return this.memberContainer.find('.CrewMemeber-name');
     }
     selectByName(name){
        return this.memberName.contains(name)
    }
    get moveButton(){
        return this.memberContainer.find('.CrewMember-toolbar .CrewMember-up').contains(">");
    }
    moveContainer(name){
        this.memberContainer.contains(name).find('.CrewMember-toolbar .CrewMember-up').contains(">").click();
         
     }
     
     selectColumn(columnName){
        ApplicationContainers.appColumn.children().contains(columnName);
     }
     getMemberInTheColumn(memberName, columnName){
        return ApplicationContainers.appColumn.contains(columnName).find('.CrewMemeber-name').contains(memberName);
     }
     moveApplicationContainer(userName, columnName){
         this.selectByName(userName)


     }
}
export default new MemberContainer();