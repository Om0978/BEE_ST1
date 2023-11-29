const { default: mongoose } = require('mongoose');

const User = new mongoose.Schema({
    postSchema:[ {
        id:{type:Number,required:true},
        title:{type:String,required:true, max:255},
        content:{type:String,required:true, max:5000},
        author:{type:String,required:true},
        tags:{type:String},
        comments:{type:String}
    }]
})
module.exports = mongoose.model("blogApp", User);