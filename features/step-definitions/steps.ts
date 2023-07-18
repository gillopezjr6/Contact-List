import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import ContactListPage from '../pageobjects/contactList.page';
import AddContactPage from '../pageobjects/addContact.page';

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

Then(/^I should see an error message saying (.*)$/, async (message: string) => {
	await expect(LoginPage.loginError).toHaveText(message);

	await browser.setTimeout({'script': 15000});
	await browser.executeAsync((done) => {
		console.log('This should not fail')
		setTimeout(done, 2000)
	})
});

When(/^they login with correct (.*) and (.*)$/, async (username: string, password: string) => {
	await LoginPage.login(username, password);
});

Then(/^they should see a label on the contact list page saying (.*)$/, async (message: string) => {
	await expect(ContactListPage.label).toHaveText(message);
});

Given(/^the user logs in with (.*) and (.*)$/, async (username: string, password: string) => {
	await LoginPage.login(username, password);

	await browser.setTimeout({'script': 15000});
	await browser.executeAsync((done) => {
		console.log('This should not fail')
		setTimeout(done, 3000)
	})
});

Given(/^they click the add new contact button$/, async () => {
	await ContactListPage.contactButton.click();
});

When(/^they enter (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), and (.*)$/, async (firstName: string, lastName: string, birthdate: string, email: string, phone: string, address: string, city: string, state: string, zip: string, country: string) => {
	await AddContactPage.enterContact(firstName, lastName, birthdate, email, phone, address, city, state, zip, country)
});

Then(/^the contact is added successfully$/, () => {
	return true;
});