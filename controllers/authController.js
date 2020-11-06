const Auth = require( '../models/Auth' );
const jwt = require('jsonwebtoken');

exports.login = async(req,res ) => {
  try{
    const check = await Auth.find({username:req.body.username, password:req.body.password})
                
    
    if( check ) {
       const accessToken = jwt.sign({username:check[0].username, password:check[0].password}, process.env.TOKEN )
        res.status(201).json({
            status:'200',
            data:{
               accessToken
            }
        })
    } else {
        res.send( 'username or password incorrect' );
    }
  } catch( error ) {
      res.status(400).json({
          status:'fail',
          message:error
      })
  }
}

exports.index = async(req, res ) => {
    try {
        const auth = await Auth.find();

        res.status(200).json({
            data:{
                auth
            }
        })
    } catch (error) {
        res.status(404).json({
            error:error
        })
    }
}