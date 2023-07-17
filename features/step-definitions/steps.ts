import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^the user is on the login page$/, async () => {
	// await pages[page].open()
	await browser.url('https://thinking-tester-contact-list.herokuapp.com');
	await browser.maximizeWindow();
});

Given(/^the header has text (.*)$/, async (headerText: string) => {
	await expect(LoginPage.header).toHaveText(headerText);
});

When(/^I login with incorrect (.*) and\/or (.*)$/, async (username: string, password: string) => {
	await LoginPage.loginError(username, password);

	await browser.setTimeout({'script': 15000});
	await browser.executeAsync((done) => {
		console.log('This should not fail')
		setTimeout(done, 10000)
	})
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
	await expect(LoginPage.errorLogin).toHaveText(message);
});


