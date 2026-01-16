class MyInfoPage {

    selectorList() {
        const selectors= {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            // chama generic por que usamos o css selector e essa classe engloba muitos 
            dateField: "[placeholder='yyyy-dd-mm']",
            dateClosed: ".--close", //o botão de fechar da caixinha de data 
            submitButton: "[type='submit']",
            genericComboBox: "[clear='false']",
            secondItemCombox: '.oxd-select-dropdown > :nth-child(2) > span',
            thirdItemCombox: '.oxd-select-dropdown > :nth-child(4)',
        }
        return selectors
    }
    fillPersonalDetails(firstName, lastName, nickName){
        cy.get (this.selectorList().firstNameField).clear().type(firstName)
        cy.get (this.selectorList().lastNameField).clear().type(lastName)
        cy.get (this.selectorList().genericField).eq(3).clear().type (nickName)
        // Foi feito assim como variavel por que irá colocar os nomes na pag pricipal
        // para não ficar voltando aqui 
    }
    fillEmployeeDetails(otherId, driversLicenseData, driversExpiryDate ){
        cy.get (this.selectorList().genericField).eq(4).clear().type (otherId)
        cy.get (this.selectorList().genericField).eq(5).clear().type (driversLicenseData)
        cy.get (this.selectorList().dateField).eq(0).clear().type (driversExpiryDate)
        cy.get (this.selectorList().dateClosed). click()
    }
    saveForm(){
         cy.get (this.selectorList().submitButton).eq(0).click()
         //cy.get('.oxd-toast-close')
    }
    fillStatus(){
        cy.get (this.selectorList().genericComboBox).eq(0).click()
        cy.get (this.selectorList().secondItemCombox).click()
        cy.get (this.selectorList().genericComboBox).eq(1).click()
        cy.get (this.selectorList().thirdItemCombox).click()
}
    
}
    export default MyInfoPage