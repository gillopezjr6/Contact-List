import Page from "./page";

class LoginPage extends Page {
    
    public get header() {return $('//html/body/h1')}
    public get inputUsername() { return $('#email')}
    public get inputPassword() { return $('#password')}
    public get btnSubmit() { return $('#submit')}
    public get loginError() {return $('#error')}

    public async login (username: string, password: string){
        await this.header.getTitle();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.loginError.getText();
    }
    public async error (message){
        await this.loginError.getText();
    }
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();