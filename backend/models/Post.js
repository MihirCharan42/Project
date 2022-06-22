const mongoose =require("mongoose");

const PostSchema = new mongoose.Schema({
        resources:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
        },
        phone: {
            type:String,
            required:true
        }
    },
        { timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema);