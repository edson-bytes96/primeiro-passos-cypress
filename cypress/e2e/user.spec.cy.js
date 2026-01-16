import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPages.js' //novo
import DashBoardPage from '../pages/dashBordPage.js' //novo
import MenuPage from '../pages/menuPage.js' //novo
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage() //Novo
const dashBordPage = new DashBoardPage() //novo
const menuPage = new MenuPage () 
const myInfoPage= new MyInfoPage()

describe('Oragen HRM tests', () => {
  //Basicamente uma lista de comandos onde voce coloca as classes que pega no cypress
  // ou no css selector 
  const selectorList ={
    
    
    
  }
  

  // (it.only) quer dizer que esse será o uni rodando 
  it('User info Update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData. userSucess.password)
    
    dashBordPage.checkDashboardPage()
   
    menuPage.acessMyInfo()
    //menuPage.acessAdmin()
   
    myInfoPage.fillPersonalDetails('firstName', 'lastName', 'nickName')
    myInfoPage.fillEmployeeDetails('otherId', '1234556','2025-01-15')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
     
  })
  it.only('login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData. userFail.password)
    //cy.get(selectorList.usernameField).type(userData.userFail.username)
    //cy.get(selectorList.passwordField).type(userData.userFail.password)
    //cy.get(selectorList.loginButton).click()
   
  })
})