import { sgMail, sgClient } from '../config/sendgrid.js';

export const sendEmail = async ({ to, subject, text, html }) => {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject,
    text,
    html
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

export const addContact = async (contact) => {
  const request = {
    body: {
      contacts: [contact]
    },
    method: 'PUT',
    url: '/v3/marketing/contacts'
  };

  try {
    const [response] = await sgClient.request(request);
    return response;
  } catch (error) {
    throw new Error(`Adding contact failed: ${error.message}`);
  }
};