const router = require("express").Router();
const User= require("../models/User");

router.post("/register", async (req,res)=> {
    try{
        const newUser= new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            phone:req.body.phone,
            remdeshvir:req.body.remdeshvir,
            NoOfBeds:req.body.NoOfBeds,
            NoOfVaccines:req.body.NoOfVaccines,
            NoOfO2Cylinders:req.body.NoOfO2Cylinders,
        });
        const user= await newUser.save();
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async(req,res) => {
    try{
        const user= await User.findOne({email: req.body.email});
        if(!user) 
            return res.status(400).json("Wrong credentials");
        const validated =await User.findOne({password: req.body.password});
        if(!validated) 
            return res.status(400).json("Wrong credentials");
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports= router