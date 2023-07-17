import { BrowsingContextNavigateResult } from "webdriver/build/bidi/localTypes";
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
    }

    public open() {
        return super.open();
    }
    
}

export default new LoginPage();