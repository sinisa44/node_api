const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({'path': `${__dirname}/config.env`});
const app = require( './app' );

mongoose.connect( process.env.DATABASE, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})
.then(() => { console.log(`DB Connection Successfull`);})
.catch((error) => { console.log( error)})

const port = process.env.PORT || 5000;
app.listen( port, () => { console.log(`App running on port ${port}`);})
