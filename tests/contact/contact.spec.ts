import { test, expect } from '@playwright/test';
import { ContactPage } from '../../pages/contactPage';
import { validContactData } from '../../test-data/contactData';

for (const data of validContactData) {

    test(`User can submit a valid contact enquiry - ${data.name}`, async ({ page }) => {

        const contactPage = new ContactPage(page);

        // Navigate to Contact page
        await contactPage.navigate();

        // Verify Contact page
        await page.goto('/contact');

        // Verify all form fields are visible
        await expect(contactPage.fullName).toBeVisible();
        await expect(contactPage.email).toBeVisible();
        await expect(contactPage.phoneNumber).toBeVisible();
        await expect(contactPage.subject).toBeVisible();
        await expect(contactPage.message).toBeVisible();
        await expect(contactPage.sendMessageButton).toBeVisible();


        // Fill form using test data
        await contactPage.fillContactForm(
            data.name,
            data.email,
            data.phone,
            data.subject,
            data.message
        );

        // Submit enquiry
        await contactPage.submitForm();

        // Verify successful submission
        await expect(contactPage.successMessage).toBeVisible();
    });
}