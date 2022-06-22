const router = require("express").Router();
const User= require("../models/User");
const Post= require ("../models/Post")

router.put("/:id", async (req,res)=> {
    try {
        const user= await User.findById(req.params.id); 
        try {
            const updateUser=await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            },
            { new:true }
        );
        res.status(200).json(updateUser);        
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err ) {
        res.status(401).json("You can only update your account")
    }
});

router.delete("/:id", async (req,res)=> {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
            } catch(err){
                res.status(500).json(err);
            }
        } catch (err) {
            res.status(404).json("User not found");
            
        }
    } else{
        res.status(401).json("You can update only your profile");
    }
});

router.get("/:id", async (req,res) => {
    console.log(req.body.userId)
    console.log(req.params.id);
    try {
        const user = await User.findById(req.params.id);
        const { password, email,  ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get("/?",async (req,res) => {
    try {
        let users;
        users= await User.find();
        res.status(200).json(users);
    } catch (err) {
        
    }
})

module.exports= router