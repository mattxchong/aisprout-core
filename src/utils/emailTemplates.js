export const getEmailTemplates = (templateName, data) => {
    const templates = {
        welcome: {
            text: `Hi ${data.name},\n\nWelcome to our learning platform! We're excited to have you on board.\n\nBest regards,\nThe Learning Team`,
            html: `
                <h1>Welcome to Our Learning Platform!</h1>
                <p>Hi ${data.name},</p>
                <p>We're excited to have you on board!</p>
                <br>
                <p>Best regards,</p>
                <p>The Learning Team</p>
            `
        },
        courseCompletion: {
            text: `Congratulations ${data.name}!\n\nYou've successfully completed ${data.courseName}.\nYou can download your certificate here: ${data.certificateUrl}\n\nBest regards,\nThe Learning Team`,
            html: `
                <h1>Congratulations!</h1>
                <p>Hi ${data.name},</p>
                <p>You've successfully completed ${data.courseName}!</p>
                <p>You can download your certificate <a href="${data.certificateUrl}">here</a>.</p>
                <br>
                <p>Best regards,</p>
                <p>The Learning Team</p>
            `
        },
        passwordReset: {
            text: `You requested a password reset.\n\nClick here to reset your password: ${data.resetUrl}\n\nIf you didn't request this, please ignore this email.\n\nBest regards,\nThe Learning Team`,
            html: `
                <h1>Password Reset Request</h1>
                <p>You requested a password reset.</p>
                <p>Click <a href="${data.resetUrl}">here</a> to reset your password.</p>
                <p>If you didn't request this, please ignore this email.</p>
                <br>
                <p>Best regards,</p>
                <p>The Learning Team</p>
            `
        }
    };

    return templates[templateName];
};