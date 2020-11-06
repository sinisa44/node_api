const mongoose = require( 'mongoose' );

const authSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, 'username is required']
        },
        password:{
            type:String,
            required:[true, 'password is required']
        },
        token:{
            type:String
        }
    }
)

const Auth = mongoose.model( 'Auth', authSchema );

module.exports = Auth;