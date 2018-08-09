import { element, by, promise, ElementFinder } from 'protractor';

export class ProductCategoryComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-product-category div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getText();
    }
}

export class ProductCategoryUpdatePage {
    pageTitle = element(by.id('jhi-product-category-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    descriptinoInput = element(by.id('field_descriptino'));

    getPageTitle() {
        return this.pageTitle.getText();
    }

    setNameInput(name): promise.Promise<void> {
        return this.nameInput.sendKeys(name);
    }

    getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    setDescriptinoInput(descriptino): promise.Promise<void> {
        return this.descriptinoInput.sendKeys(descriptino);
    }

    getDescriptinoInput() {
        return this.descriptinoInput.getAttribute('value');
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
