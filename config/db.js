const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    const connect = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Database connected to cluster ${connect.connection.host}`.blue.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
    }
};

module.exports = connectDB;