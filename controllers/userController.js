const User = require( './../models/User' );

exports.index = async(req,res) => {
    try {
        const users =await User.find();

        res.status(200).json({
            count: users.length,
            data:{
                users
            }
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

exports.show = async (req,res) => {
    try {
        const user = await User.findById( req.params.id );

        res.status(200).json({
            data:{ user }
        })
    } catch (error) {
        res.status(404).json({
            status: 'error',
            message: error
        })
    }
}

exports.create = async (req, res) => {
    console.log(req.body);
   try {
       const newUser = await User.create( req.body );

       res.status(201).json({
           status:'success',
           data:{
               user:newUser
           }
       })
   } catch (error) {
       res.status(400).json({
           status:'fail',
           message:error
       })
   }
}

exports.update = async( req, res) => {
    try {
        const user = await User.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });

        res.status(200).json({
            status:'success',
            data:{
                user
            }
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
            message:error
        })        
    }
}

exports.delete = async (req, res) => {
   try{
       await User.findOneAndDelete( req.params.id );

       res.status(204).json({
           status:'success',
           data:null
       })
   } catch( error ) {
       res.status(404).json({
           status:'fail',
           message:error
       })
   }
}
