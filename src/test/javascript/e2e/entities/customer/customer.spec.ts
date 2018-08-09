import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { CustomerComponentsPage, CustomerUpdatePage } from './customer.page-object';

describe('Customer e2e test', () => {
    let navBarPage: NavBarPage;
    let customerUpdatePage: CustomerUpdatePage;
    let customerComponentsPage: CustomerComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Customers', () => {
        navBarPage.goToEntity('customer');
        customerComponentsPage = new CustomerComponentsPage();
        expect(customerComponentsPage.getTitle()).toMatch(/Customers/);
    });

    it('should load create Customer page', () => {
        customerComponentsPage.clickOnCreateButton();
        customerUpdatePage = new CustomerUpdatePage();
        expect(customerUpdatePage.getPageTitle()).toMatch(/Create or edit a Customer/);
        customerUpdatePage.cancel();
    });

    it('should create and save Customers', () => {
        customerComponentsPage.clickOnCreateButton();
        customerUpdatePage.setFirstNameInput('firstName');
        expect(customerUpdatePage.getFirstNameInput()).toMatch('firstName');
        customerUpdatePage.setLastNameInput('lastName');
        expect(customerUpdatePage.getLastNameInput()).toMatch('lastName');
        customerUpdatePage.genderSelectLastOption();
        customerUpdatePage.setEmailInput('email');
        expect(customerUpdatePage.getEmailInput()).toMatch('email');
        customerUpdatePage.setPhoneInput('phone');
        expect(customerUpdatePage.getPhoneInput()).toMatch('phone');
        customerUpdatePage.setAdressLine1Input('adressLine1');
        expect(customerUpdatePage.getAdressLine1Input()).toMatch('adressLine1');
        customerUpdatePage.setAdressLine2Input('adressLine2');
        expect(customerUpdatePage.getAdressLine2Input()).toMatch('adressLine2');
        customerUpdatePage.setCountryInput('country');
        expect(customerUpdatePage.getCountryInput()).toMatch('country');
        customerUpdatePage.userSelectLastOption();
        customerUpdatePage.save();
        expect(customerUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
