import express from 'express';
import authController from '../controllers/authController';
import verifyUser from '../../middleware/authMiddleware';

const router = express.Router()

router.post('/signup',authController.signup)
router.post('/login', authController.login)
router.get('/getUser', verifyUser)

export default router;

