const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    queries:{
        type:String,
        required:true
    }
});

const PostModel = mongoose.model("query",PostSchema)
module.exports = PostModel;
