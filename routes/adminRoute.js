const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const {adminLogin, authController, getList, deleteAppointment} = require('../controllers/adminLoginController');

const router = express.Router();

//admin Login || POST
router.post('/adminLogin', adminLogin);

//Auth || POST
router.post('/adminLogin', authMiddleware, authController)

//get apppointment List || GET
router.get('/appointment', getList)

//DELETE

router.delete('/delete', deleteAppointment);
module.exports = router