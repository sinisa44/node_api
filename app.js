const express = require( 'express' );
const morgan = require('morgan');
const bodyParser = require( 'body-parser' );
const userRoutes = require( './routes/userRoutes');
const authRoutes = require( './routes/authRoutes' );
const authMiddleware = require( './middleware/Auth' );

const app = express();

if( process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/users',authMiddleware.authenticateJWT, userRoutes );
app.use('/auth', authRoutes );
module.exports = app;