import express from 'express';
import { validateEmail } from '../middleware/validators.js';
import { 
    sendWelcomeEmail, 
    sendCourseCompletionEmail, 
    sendPasswordResetEmail,
    addNewContact,
    updateContact,
    removeContact 
} from '../controllers/emailController.js';

const router = express.Router();

// Email sending routes
router.post('/welcome', validateEmail, sendWelcomeEmail);
router.post('/course-completion', validateEmail, sendCourseCompletionEmail);
router.post('/password-reset', validateEmail, sendPasswordResetEmail);

// Contact management routes
router.post('/contacts', validateEmail, addNewContact);
router.put('/contacts/:email', validateEmail, updateContact);
router.delete('/contacts/:email', validateEmail, removeContact);

export default router;