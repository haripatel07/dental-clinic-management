const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

//mongoDB connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/admin', require('./routes/adminRoute'));
app.use('/api/v1/user', require("./routes/userRoute"));

//listen port
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`);
})