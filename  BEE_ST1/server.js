const express = require('express');
const mongoose = require('mongoose');

const userData = require('./model/userModel')



const app=express(); 
app.use(express.json());


const db=require("./Middlewares/db");
db.connecttoDB();



const routes=require("./Routes/userroute");
app.use("/",routes);




app.listen(3003,()=>{
    console.log(`Server is started on 3003`)
})




