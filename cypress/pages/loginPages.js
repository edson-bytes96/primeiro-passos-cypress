class LoginPage{
    selectorList() { //aqui está em forma de função
        const selector={ //aqui é o objeto 
            usernameField: '[name="username"]', //para o login da pag
            passwordField: '[name="password"]', //para a senha da pag
            loginButton: '.oxd-button', //o botão para acessar a pag
        }
        
        return selector
    }

    acessLoginPage() { //funçao
        cy.visit('/auth/login')
        //Site que ta usando para fazer automação o link grande ta em cypress.config.js
    }
    loginWithUser (username, password){
        cy.get(this.selectorList(). usernameField).type(username)
     //Está usando o this para chamaralgo que está na mesma classe
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
} 

export default LoginPage //para fazer a conexão com outras paginas