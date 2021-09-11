const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrParser: true,
    useUnifiedTopology: true,

});

app.listen("5000", ()=>{
    console.log("Server site is running");
})

app.use("/lama", (req, res) => {
    console.log("hello sajjad run saver");
})