import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import ContactPage from '../pageobjects/contact.page';

Given(/^the user is on the login page$/, async () => {
	LoginPage.open();
	await browser.maximizeWindow();
});

Given(/^the header has text (.*)$/, async (headerText: string) => {
	await expect(LoginPage.header).toHaveText(headerText);
});

When(/^I login with incorrect (.*) and\/or (.*)$/, async (username: string, password: string) => {
	await LoginPage.login(username, password);
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
	await expect(LoginPage.loginError).toHaveText(message);
});

When(/^I login with correct (.*) and (.*)$/, async (username: string, password: string) => {
	await LoginPage.login(username, password);

	await browser.setTimeout({'script': 15000});
	await browser.executeAsync((done) => {
		console.log('This should not fail')
		setTimeout(done, 10000)
	})
});

Then(/^I should see a label on the contact list page saying (.*)$/, async (message) => {
	await expect(ContactPage.label).toHaveText(message);
});


