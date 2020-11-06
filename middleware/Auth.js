const express = require( 'express' );
const jwt = require('jsonwebtoken');

exports.authenticateJWT = ( req, res, next ) => {
    const authHeader = req.headers.authorization;

    if( authHeader ) {
        const token = authHeader.split(' ')[1];
        console.log(token);

        jwt.verify(token, process.env.TOKEN, (err, user) => {
            console.log(process.env.TOKEN);
            if( err ) {
                return res.status( 403 ).json({err});

            }

            req.user = user;

            next();
        })
    }else{
        res.status(401);
    }
}