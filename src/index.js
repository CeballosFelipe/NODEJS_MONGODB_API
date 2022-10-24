const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
require("dotenv").config();
const userRoutes= require("./routes/user");

const app = express();
const port = process.env.port || 9000;
  
//middleware
app.use(express.json());
app.use('/api', userRoutes)

//routes
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname+'/views/index.html'));
});

//mongoose connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log ('server listening on port', port));