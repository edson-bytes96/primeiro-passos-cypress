import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPages.js' //novo
import DashBoardPage from '../pages/dashBordPage.js' //novo

const loginPage = new LoginPage() //Novo
const dashBordPage = new DashBoardPage() //novo

describe('Login Oragen HRM tests', () => {
  
  it('login sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData. userSucess.password)
    dashBordPage.checkDashboardPage()
  })
  it.only('login Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData. userFail.password)
    
   
  })
})