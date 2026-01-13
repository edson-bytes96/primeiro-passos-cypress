import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPages.js' //novo
import DashBoardPage from '../pages/dashBordPage.js' //novo
import MenuPage from '../pages/menuPage.js' //novo

const loginPage = new LoginPage() //Novo
const dashBordPage = new DashBoardPage() //novo
const menuPage = new MenuPage () 

describe('Oragen HRM tests', () => {
  //Basicamente uma lista de comandos onde voce coloca as classes que pega no cypress
  // ou no css selector 
  const selectorList ={
    
    
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    // chama generic por que usamos o css selector e essa classe engloba muitos 
    dateField: "[placeholder='yyyy-dd-mm']",
    dateClosed: ".--close", //o botão de fechar da caixinha de data 
    submitButton: "[type='submit']",
    genericComboBox: "[clear='false']",
  }
  

  // (it.only) quer dizer que esse será o uni rodando 
  it.only('User info Update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData. userSucess.password)
    dashBordPage.checkDashboardPage()
    menuPage.acessMyInfo()
    
    //cy.get(selectorList.myInfoButton).click()
    //cy.get (selectorList.firstNameField).clear().type('Edson')
    //cy.get (selectorList.lastNameField).clear().type('Ribeiro')
    //cy.get (selectorList.genericField).eq(3).clear().type ('Ribeiroeed')
    //cy.get (selectorList.genericField).eq(4).clear().type ('Other ID test')
    //cy.get (selectorList.genericField).eq(5).clear().type ('Drivers teste')
    //cy.get (selectorList.dateField).eq(0).clear().type ('2025-03-10')
    //cy.get (selectorList.dateClosed). click()
    //cy.get (selectorList.genericComboBox).eq(0).click()
    //cy.get ('.oxd-select-dropdown > :nth-child(2) > span').click()
    //cy.get (selectorList.genericComboBox).eq(1).click()
    //cy.get ('.oxd-select-dropdown > :nth-child(4)').click()
    //.get (selectorList.submitButton).eq(0).click()
   // cy.get('.oxd-toast-close')
    
  })
  it('login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
   
  })
})