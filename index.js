// Import the 3rd party packages;
const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv');

// import routes
const productsRoute = require('./routes/product')
const authRoutes = require('./routes/auth')

const connectDB = require('./config/db');

// app initialization 
dotenv.config({path:'./config/config.env'});
const port = process.env.PORT || 8080;

// Connect to DataBase
connectDB();
const app = express();

// use Middlewares
app.use(express.json())
app.use('/api/products', productsRoute)
app.use('/api/auth', authRoutes)

// Express Error Handler
app.use((error, req, res, next)=> {
    res.status(500).json({error: error.meessage});
})

app.listen(port, console.log(`Server is running on port ${port}`.yellow.underline));

