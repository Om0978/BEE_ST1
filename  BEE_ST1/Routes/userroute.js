const express=require("express");
const app = express();
const router=express.Router();
const userDataControl=require('../Controller/datacontrol');


app.use('/POST/api/posts',userDataControl.createdata)
app.use('/DELETE/api/posts',userDataControl.deletedata)
app.use('/PUT/api/posts',userDataControl.updatedata)
app.use('/GET/api/posts',userDataControl.getdata)



app.use('/POST/api/comments',userDataControl.createdata)
app.use('/DELETE/api/comments',userDataControl.deletedata)
app.use('/PUT/api/comments',userDataControl.updatedata)
app.use('/GET/api/comments',userDataControl.getdata)

app.use("",router)

module.exports=app;