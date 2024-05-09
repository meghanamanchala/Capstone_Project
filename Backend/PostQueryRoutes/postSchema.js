const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    query:{
        type:String
    }
});

const PostModel = mongoose.model("query",PostSchema)
module.exports = PostModel;
