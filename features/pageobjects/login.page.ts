import Page from "./page";

class LoginPage extends Page {
    
    public get header() {return $('//html/body/h1')}
    public get inputUsername() { return $('#email')}
    public get inputPassword() { return $('#password')}
    public get btnSubmit() { return $('#submit')}
    public get errorLogin() {return $('#error')}

    public async loginError (username: string, password: string){
        await this.header.getTitle();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    public async error (){
        await this.errorLogin.getText();
    }
    public open() {
        return super.open('loginError');
    }
}

export default new LoginPage();