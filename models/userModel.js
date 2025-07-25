const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'name is required']
    },
    number : {
        type : Number,
        required : [true, 'number is required']
    },
    date : {
        type : Date,
        required : [true, 'date is required']
    }
})

const userModel = new mongoose.model('user', userSchema);
module.exports = userModel;