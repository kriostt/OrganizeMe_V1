const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/calendarDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
