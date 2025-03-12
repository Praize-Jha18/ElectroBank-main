import express from 'express';
import authController from '../controllers/authController';
import userInfoController from '../controllers/userInfo';
import authMiddleware from '../../middleware/authMiddleware';

const { verifyUser, requireAuth } = authMiddleware;

const router = express.Router()

router.post('/signup',authController.signup)
router.post('/login', authController.login)
router.get('/getUser', verifyUser)
router.post('/editprofile',requireAuth , userInfoController.editProfile)

export default router;

