const express = require( 'express' );
const morgan = require('morgan');
const userRoutes = require( './routes/userRoutes');

const app = express();

if( process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
}


app.use('/api/users', userRoutes );
module.exports = app;