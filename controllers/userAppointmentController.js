const userModel = require('../models/userModel');
const bookController = async(req, res) => {
    try{
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).send({message : "Booked Successfully", success : true})

    }
    catch(error){
        console.log(error);
        res.status(500).send({success: false, message : `BookController ${error.message}`})
    }
}

module.exports = bookController;