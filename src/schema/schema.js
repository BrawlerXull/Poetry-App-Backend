const mongoose = require("mongoose");

const PoemSchema = mongoose.Schema({
    name:{
        required : true,
        type:String
    },
    poem:{
        required : true,
        unique:true,
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    likes:{
        default:0,
        type:Number
    },
    dislikes:{
        default:0,
        type:Number
    }
});

module.exports = mongoose.model("Poem",PoemSchema);