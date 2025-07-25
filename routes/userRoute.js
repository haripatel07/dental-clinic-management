const express = require ('express');
const bookController = require('../controllers/userAppointmentController');


const router = express.Router();

//routes
//Book appointment || POST
router.post('/appointment', bookController)


module.exports = router;