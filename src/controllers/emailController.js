import { sendEmail, addContact } from '../services/emailService.js';
import { getEmailTemplates } from '../utils/emailTemplates.js';

export const sendWelcomeEmail = async (req, res) => {
    try {
        const { email, name } = req.body;
        const template = getEmailTemplates('welcome', { name });

        await sendEmail({
            to: email,
            subject: 'Welcome to Our Learning Platform!',
            text: template.text,
            html: template.html
        });

        res.json({
            success: true,
            message: 'Welcome email sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const sendCourseCompletionEmail = async (req, res) => {
    try {
        const { email, name, courseName, certificateUrl } = req.body;
        const template = getEmailTemplates('courseCompletion', { 
            name, 
            courseName, 
            certificateUrl 
        });

        await sendEmail({
            to: email,
            subject: `Congratulations on Completing ${courseName}!`,
            text: template.text,
            html: template.html
        });

        res.json({
            success: true,
            message: 'Course completion email sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const sendPasswordResetEmail = async (req, res) => {
    try {
        const { email, resetToken } = req.body;
        const template = getEmailTemplates('passwordReset', { 
            resetToken,
            resetUrl: `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`
        });

        await sendEmail({
            to: email,
            subject: 'Password Reset Request',
            text: template.text,
            html: template.html
        });

        res.json({
            success: true,
            message: 'Password reset email sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const addNewContact = async (req, res) => {
    try {
        const { email, firstName, lastName, customFields } = req.body;

        const contactData = {
            email,
            first_name: firstName,
            last_name: lastName,
            custom_fields: customFields
        };

        const response = await addContact(contactData);

        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const updateContact = async (req, res) => {
    try {
        const { email } = req.params;
        const updateData = req.body;

        const response = await updateContactInList(email, updateData);

        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const removeContact = async (req, res) => {
    try {
        const { email } = req.params;
        
        await removeContactFromList(email);

        res.json({
            success: true,
            message: 'Contact removed successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};