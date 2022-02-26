const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');
const { JsonWebTokenError } = require('jsonwebtoken');
const { UserModel } = require('../models');


router.post('/addpost', [auth, multer], async(req, res)=> { 
    
    console.log({body:req.body})
    console.log(req.file);

    const post = await postCtrl.addPost({
        userId: req.userId,
        post: req.body.post, 
        image: req.file?.filename
        
        
    } )
    res.json(post)  
});


router.post('/editpost', [auth, multer], async(req, res)=>{
    console.log(req.file)
   try{
                const newPost = { 
                    
                    post: req.body.post,
                    image: req.file.filename
                }
            Object.keys(newPost).forEach((key)=>{
            if(newPost[key] === undefined || newPost[key] === null){
            delete newPost[key]
            }
            })
            if(Object.keys(newPost).length < 1){
            res.json({status: "failed", message: "you have not submitted any changes"})
            }
            const post = await postCtrl.editPost(req.userId, req.body.postId, newPost);
            res.json(post)

   } catch(err){
            console.log({error})
        res.status(500).json(err);

   }
  
   
})

//get all posts by a user for profile page
router.get("/profile/:userId", auth, async (req, res) => {
    try{
        const posts = await postCtrl.getPostsByUserId(req.params.userId, req.userId)
        res.status(200).json(posts)
    } catch(err){
        res.status(500).json(err);
    }
})

//get one post
router.get("/:postId", auth, async (req, res) => {
    try{
        const post = await postCtrl.getPostByPostId(req.params.postId, req.userId)
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err);
    }
})


//all posts
router.get("/", auth, async (req, res) => {
    try{
        const posts = await postCtrl.getAllPosts(req.userId)
        res.status(200).json(posts)
    } catch(err){
        res.status(500).json(err);
    }
})

//delete post
router.get("/delete/:postId", auth, async (req, res) =>{
    try{ 
        const post = await postCtrl.deletePost(req.params.postId, req.userId)
        res.json(post)

    }catch(err){
        res.status(500).json(err);
    }
}) 


module.exports = router;