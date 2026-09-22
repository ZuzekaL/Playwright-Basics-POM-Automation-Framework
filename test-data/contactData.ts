export const validContactData = [
    {
        name: 'Zuzeka Leso',
        email: 'zuzekaleso@gmail.com',
        phone: '+27821234567',
        subject: 'Automated Test Enquiry',
        message: 'This enquiry was submitted automatically using Playwright.'
    },
    {
        name: 'Kagiso Leso',
        email: 'percykgs2@gmail.com',
        phone: '+27821234567',
        subject: 'Automated Test Enquiry',
        message: 'This enquiry was submitted automatically using Playwright.'
    }
];

export const invalidContactData = [
    {
        name: 'Playwright Test User',
        email: 'invalid-email',
        phone: '+27821234567',
        subject: 'Invalid Email Test',
        message: 'Testing invalid email validation.'
    }
];

export const emptyContactData = [
    {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }
];