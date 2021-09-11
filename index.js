const express = require('express');
const app = express();

app.listen("5000", ()=>{
    console.log("Server site is running");
})

app.use("/lama", (req, res) => {
    console.log("hello sajjad run saver");
})