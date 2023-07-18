import Page from './page';

class ContactListPage extends Page {
    // Define selectors using getter methods
    public get label() { return $('//html/body/div/p[1]')}
    public get contactButton() { return $('#add-contact')}
}

export default new ContactListPage();
