const User = require( './../models/User' );

exports.index = (req,res) => {
    res.status(200).json(
        {
            message:'index'
        }
    )
}

exports.show = (req,res) => {
    res.status(200).json(
        {
            message: 'show'
        }
    )
}

exports.create = (req, res) => {
    res.status(200).json(
        {
            message:'create'
        }
    )
}

exports.update = ( req, res) => {
    res.status(200).json(
        {
            message:'update'
        }
    )
}

exports.delete = ( req, res) => {
    res.status( 200 ).json(
        {
            message: 'delete'
        }
    )
}
