import { element, by, promise, ElementFinder } from 'protractor';

export class CustomerComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-customer div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getText();
    }
}

export class CustomerUpdatePage {
    pageTitle = element(by.id('jhi-customer-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    firstNameInput = element(by.id('field_firstName'));
    lastNameInput = element(by.id('field_lastName'));
    genderSelect = element(by.id('field_gender'));
    emailInput = element(by.id('field_email'));
    phoneInput = element(by.id('field_phone'));
    adressLine1Input = element(by.id('field_adressLine1'));
    adressLine2Input = element(by.id('field_adressLine2'));
    countryInput = element(by.id('field_country'));
    userSelect = element(by.id('field_user'));

    getPageTitle() {
        return this.pageTitle.getText();
    }

    setFirstNameInput(firstName): promise.Promise<void> {
        return this.firstNameInput.sendKeys(firstName);
    }

    getFirstNameInput() {
        return this.firstNameInput.getAttribute('value');
    }

    setLastNameInput(lastName): promise.Promise<void> {
        return this.lastNameInput.sendKeys(lastName);
    }

    getLastNameInput() {
        return this.lastNameInput.getAttribute('value');
    }

    setGenderSelect(gender): promise.Promise<void> {
        return this.genderSelect.sendKeys(gender);
    }

    getGenderSelect() {
        return this.genderSelect.element(by.css('option:checked')).getText();
    }

    genderSelectLastOption(): promise.Promise<void> {
        return this.genderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }
    setEmailInput(email): promise.Promise<void> {
        return this.emailInput.sendKeys(email);
    }

    getEmailInput() {
        return this.emailInput.getAttribute('value');
    }

    setPhoneInput(phone): promise.Promise<void> {
        return this.phoneInput.sendKeys(phone);
    }

    getPhoneInput() {
        return this.phoneInput.getAttribute('value');
    }

    setAdressLine1Input(adressLine1): promise.Promise<void> {
        return this.adressLine1Input.sendKeys(adressLine1);
    }

    getAdressLine1Input() {
        return this.adressLine1Input.getAttribute('value');
    }

    setAdressLine2Input(adressLine2): promise.Promise<void> {
        return this.adressLine2Input.sendKeys(adressLine2);
    }

    getAdressLine2Input() {
        return this.adressLine2Input.getAttribute('value');
    }

    setCountryInput(country): promise.Promise<void> {
        return this.countryInput.sendKeys(country);
    }

    getCountryInput() {
        return this.countryInput.getAttribute('value');
    }

    userSelectLastOption(): promise.Promise<void> {
        return this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    userSelectOption(option): promise.Promise<void> {
        return this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
