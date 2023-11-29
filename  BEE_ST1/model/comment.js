const { default: mongoose } = require('mongoose');

const User = new mongoose.Schema({
    commentSchema:[{
        commentId:{type:String},
        content:{type:String,required:true, max:1000},
        author:{type:String,required:true},
        createdAt:{type: Date,default: Date.now}
    }]
})
module.exports = mongoose.model("blogApp", User);