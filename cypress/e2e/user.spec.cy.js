import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPages.js' //novo
import DashBoardPage from '../pages/dashBordPage.js' //novo
import MenuPage from '../pages/menuPage.js' //novo
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage() //Novo
const dashBordPage = new DashBoardPage() //novo
const menuPage = new MenuPage () 
const myInfoPage= new MyInfoPage()

describe('Oragen HRM tests', () => { 
  it('User info Update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData. userSucess.password)
    
    dashBordPage.checkDashboardPage()
   
    menuPage.acessMyInfo()
    //menuPage.acessAdmin()
   
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), 'nickName')
    myInfoPage.fillEmployeeDetails('otherId', '1234556','2025-01-15')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
     
  })
  
})