require("dotenv").config();
const express = require ("express");
const cors = require("cors");
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
    origin : process.env.CLIENT_URL,
    method : ["GET","POST","DELETE","PUT"],
    allowedHeaders: ["Content-Type","Authorization"], 
});

app.use(express.json());

//database connection
mongoose
.connect(MONGO_URI)
.then(()=> console.log("Connected to DB"))
.catch((e)=> console.log(e));


//routes configuration



app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        success : false,
        message : "Something went wrong",
    });
});


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
})

