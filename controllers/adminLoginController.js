const adminModel = require('../models/adminModel');
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLogin = async (req, res) => {
    try{
        const admin = await adminModel.findOne({number : req.body.number});
        if (!admin){
            return res.status(200).send({message : "Not admin", success : false});
        }
        const isMatch = await bcrypt.compare(req.body.password, admin.password);
        if(!isMatch){
            return res.status(200).send({message: "Invalid number or password", success : false});
        }
        const token = jwt.sign({id : admin._id}, process.env.JWT_SECRET, {expiresIn : '1d'})
        res.status(200).send({message: "Login Success", success : true, token})

    }
    catch(error){
        console.log(error);
        res.status(500).send({message: `Error in Login CTRL ${error.message}`})
    }

}

const authController = async (req, res) => {
    try{
        const admin = await adminModel.findOne({_id: req.body.userId})
        if (!admin){
            return res.status(200).send({
                message : "not admin",
                success : false
            })
        }
        else{
            res.status(200).send({
                success : true,
            })
        }

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            message : "auth error",
            success : false,
            error
        })
    }

}

const getList = async(req, res) => {
    try{
        const list = await userModel.find()
        res.status(200).send({
            message : "data fetched successfully",
            success : true,
            data : list,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            message: "Failed to get list",
            success : false
        })
    }
}
const deleteAppointment = async (req, res) => {
    try {
        const id = req.body.userId
        const appointment = await userModel.findOne(id);
        if (!appointment) {
            return res.status(404).send({message : 'Not found', success : false})
        }
        const ack = await userModel.deleteOne(id)
        if (ack.acknowledged){
            res.status(200).send({ message: 'Appointment deleted successfully', success : true});
        }
        else{
            res.status(200).send({ message: 'Error deleting', success : false});
        }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error deleting appointment', success : false });
    }
  };
  
module.exports = {adminLogin, authController, getList, deleteAppointment}