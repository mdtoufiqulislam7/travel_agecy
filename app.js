const express = require("express")
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config();
const fileuploader = require('express-fileupload')
app.use(fileuploader({
    useTempFiles:true
}))
// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle MongoDB connection events
mongoose.connection.on("error", (err) => {
  console.log("Connection failed", err); // Optional: Log the error message
});

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors({
    origin: 'http://localhost:3000'
}))
const umradataroute = require('./route/umrainfo')
app.use('/api',umradataroute)
app.use((req,res,next)=>{
    res.status(400).json({
        message:'bad request|| url not founded'
    })
})


module.exports = app 