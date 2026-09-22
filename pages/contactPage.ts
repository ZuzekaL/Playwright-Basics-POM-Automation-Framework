import { Page, Locator } from '@playwright/test';

export class ContactPage {

    readonly page: Page;

    readonly fullName: Locator;
    readonly email: Locator;
    readonly phoneNumber: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly sendMessageButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.fullName = page.getByRole('textbox', { name: 'Full Name' });
        this.email = page.getByRole('textbox', { name: 'Email Address' });
        this.phoneNumber = page.getByRole('textbox', { name: 'Phone Number' });
        this.subject = page.getByRole('textbox', { name: 'Subject' });
        this.message = page.getByRole('textbox', { name: 'Message' });
        this.sendMessageButton = page.getByRole('button', { name: 'Send Message' });
        this.successMessage = page.getByText("Thank you! We've emailed you a confirmation and will be in touch soon.",
            { exact: true }
);
    }

    async navigate() {
        await this.page.goto('https://athandilesolutions.co.za/contact');
    }

    async fillContactForm(
        name: string,
        email: string,
        phone: string,
        subject: string,
        message: string
    ) {
        await this.fullName.fill(name);
        await this.email.fill(email);
        await this.phoneNumber.fill(phone);
        await this.subject.fill(subject);
        await this.message.fill(message);
    }

    async submitForm() {
        await this.sendMessageButton.click();
    }
}



























