const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config()
const app = express();

// connect to mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to MongooDB')
    })
    .catch((err) => {
        console.log(err)
    })

// use middleware
app.use(cookieParser('secret-key'))
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

// define the routes
app.use(require('./routes/userAuth'))

// app listen on port
app.listen(4000, () => {
    console.log('listening on http://localhost:4000')
})
