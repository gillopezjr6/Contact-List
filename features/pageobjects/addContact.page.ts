import Page from './page';

class AddContactPage extends Page {
    // Define selectors using getter methods
    public get fName() {return $('#firstName')}
    public get lName() {return $('#lastName')}
    public get dob() {return $('#birthdate')}
    public get emailAddress() {return $('#email')}
    public get phoneNumber() {return $('#phone')}
    public get street() {return $('#street1')}
    public get city() {return $('#city')}
    public get stateProvince() {return $('#stateProvince')}
    public get zipCode() {return $('#postalCode')}
    public get nation() {return $('#country')}

    public async enterContact (firstName: string, lastName: string, birthdate: string, email: string, phone: string, address: string, city: string, state: string, zip: string, country: string){
        await this.fName.setValue(firstName);
        await this.lName.setValue(lastName);
        await this.dob.setValue(birthdate);
        await this.emailAddress.setValue(email);
        await this.phoneNumber.setValue(phone);
        await this.street.setValue(address);
        await this.city.setValue(city);
        await this.stateProvince.setValue(state);
        await this.zipCode.setValue(zip);
        await this.nation.setValue(country);
    }
}

export default new AddContactPage();
