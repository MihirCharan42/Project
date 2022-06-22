const router = require("express").Router();
const User= require("../models/User");
const Post= require ("../models/Post");
const { findById } = require("../models/User");

//create
router.post("/", async (req,res) => {
    const newPost= new Post(req.body);
    try {
        const savedPost= await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update
router.put("/:id", async (req,res)=> {
    try {
        const post= await Post.findById(req.params.id); 
        if(post.username === req.body.username){
        try {
            const updatePost=await Post.findByIdAndUpdate(req.params.id, {
                $set:req.body
            },
            { new:true }
        );
        res.status(200).json(updatePost);        
        } catch (err) {
            res.status(500).json(err);
        }
    }
    } catch (err ) {
        res.status(401).json("You can only update your post")
    }
});

//delete
router.delete("/:id", async (req,res)=> {
    try {
        const post= await Post.findById(req.params.id); 
        if(post.username === req.body.username){
        try {
        await post.delete();
        res.status(200).json("Post is deleted");        
        } catch (err) {
            res.status(500).json(err);
        }
    }
    } catch (err ) {
        res.status(401).json("You can only delete your post")
    }
});

//get
router.get("/:id", async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all 
router.get("/?",async (req,res) => {
    try {
        let posts;
        posts= await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        
    }
})

module.exports= router