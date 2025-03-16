import express from 'express';
import authController from '../controllers/authController';
import userInfoController from '../controllers/userInfo';
import authMiddleware from '../../middleware/authMiddleware';
import transaction from '../controllers/transactions';
import transacHistory from '../controllers/history'

const { verifyUser, requireAuth } = authMiddleware;

const router = express.Router()

//================  Authentication routes
router.post('/signup',authController.signup)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/getUser', verifyUser)

//================  User profile Route
router.post('/editprofile',requireAuth , userInfoController.editProfile)
router.post('/password', requireAuth, userInfoController.changePassword)

//================ Transaction Route
router.post('/transfer',requireAuth, transaction.bankTransfer)

//=============== History Route
router.post('/transact-statement',requireAuth, transacHistory.transac)

export default router;
