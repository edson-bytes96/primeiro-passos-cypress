import userData from '../fixtures/userData.json'


describe('Oragen HRM tests', () => {
  const selectorList ={
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    dashbordGrid: '.orangehrm-dashboard-grid',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateClosed: ".--close",
    submitButton: "[type='submit']",
  }
  

  
  it.only('User info Update - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashbordGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get (selectorList.firstNameField).clear().type('Edson')
    cy.get (selectorList.lastNameField).clear().type('Ribeiro')
    cy.get (selectorList.genericField).eq(3).clear().type ('Ribeiroeed')
    cy.get (selectorList.genericField).eq(4).clear().type ('Other ID test')
    cy.get (selectorList.genericField).eq(5).clear().type ('Drivers teste')
    cy.get (selectorList.dateField).eq(0).clear().type ('2025-03-10')
    cy.get (selectorList.dateClosed). click()
    cy.get (selectorList.submitButton).eq(0).click()
    cy.get('.oxd-toast-close')
    
  })
  it('login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
   
  })
})