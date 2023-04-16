const mongoose = require("mongoose");
var validator = require('validator');

const LoginSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Login",LoginSchema);
