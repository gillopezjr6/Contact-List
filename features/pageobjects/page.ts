/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open () {
        return browser.url(`https://thinking-tester-contact-list.herokuapp.com`)
    }
    // public open (path: string) {
    //     return browser.url(`https://thinking-tester-contact-list.herokuapp.com/${path}`)
    // } 
}
