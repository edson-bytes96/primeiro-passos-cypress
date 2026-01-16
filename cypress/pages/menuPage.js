class MenuPage {

    selectorList() {
        const selectors= {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton:'[href="/web/index.php/pim/viewPimModule"]',
        }
        return selectors
    }
    acessMyInfo(){
        cy.get(this.selectorList().myInfoButton).click()
    }
    acessAdmin(){
        cy.get(this.selectorList().adminButton).click()
    }
    acessPim(){
        cy.get(this.selectorList().pimButton).click()
    }
}
    export default MenuPage