const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    remdeshvir:{
        type: Number,
        required:true
    },
    NoOfBeds:{
        type: Number,
        required:true
    },
    NoOfVaccines:{
        type: Number,
        required:true
    },
    NoOfO2Cylinders:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model("User",UserSchema);