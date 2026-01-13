class DashBoardPage{
    selectorList (){
        const selectors={
            dashbordGrid: '.orangehrm-dashboard-grid',
            // Esse dashbord vem do selectorlist da user.spec.cy
        }
        return selectors
    }
        checkDashboardPage (){
            cy.location('pathname').should('equal','/web/index.php/dashboard/index')
            //Para saber se estamos na pág certa 
            cy.get(this.selectorList().dashbordGrid).should('be.visible')
            // chamando a classe 
            }
}
    export default DashBoardPage