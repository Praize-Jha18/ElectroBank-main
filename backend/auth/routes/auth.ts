import express from 'express';
import authController from '../controllers/authController';
import userInfoController from '../controllers/userInfo';
import authMiddleware from '../../middleware/authMiddleware';
import transaction from '../controllers/transactions';
import transacHistory from '../controllers/history'
import admin from '../controllers/admin'

const { verifyUser, requireAuth, adminAuth } = authMiddleware;

const router = express.Router()

//================  Authentication routes
router.post('/signup',authController.signup)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/getUser', verifyUser)

//================  User profile Route
router.post('/editprofile',requireAuth , userInfoController.editProfile)
router.post('/password', requireAuth, userInfoController.changePassword)
router.post('/upload-pfp',requireAuth, userInfoController.uploadPicture.single('file'), userInfoController.upload)
router.get('/getUpload',requireAuth,userInfoController.getUpload)

//================ Transaction Route
router.post('/transfer',requireAuth, transaction.bankTransfer)

//=============== History Route
router.get('/transact-statement',requireAuth, transacHistory.transac)
router.post('/support',requireAuth, transacHistory.support)

//=============== Admin Route
router.get('/admin',verifyUser,adminAuth, admin.allUsers)



export default router;
