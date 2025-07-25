const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    number:{
        type : Number,
        required : [true, 'number is required']
    },
    password:{
        type : String,
        required : [true, 'password is required']
    }

})

const adminModel = mongoose.model('admin', adminSchema);

module.exports = adminModel;