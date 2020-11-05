const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, 'name is required'],
        },
        email:{
            type:String,
            required:[true, 'email is required']
        },
        phone_number:{
            type: Number,
            required:[true, 'phone_number is required']
        },
        address:{
            type:String,
            required:[true, 'address is required']
        },
        age: {
            type:Number,
            required:true
        }
    }
)

const User = mongoose.model( 'User', userSchema );

module.exports = User;