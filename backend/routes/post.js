const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post');
const { JsonWebTokenError } = require('jsonwebtoken');

router.post('/addpost', auth, async(req, res)=> {
    console.log({body:req.body})
    console.log(req.file);
    res.end();
/*    const url = req.protocol + '://' + req.get('host');

    const post = await postCtrl.addPost({
        
        userId: req.userId,
        post: req.body.post, 
        imageUrl: url + '/images/' + req.file.filename,
        likes: 0,
        comments: 0 
    } )
    res.json(post)  */
});


/*

router.get('/', productCtrl.getAllPosts);
router.post('/', auth, multer, productCtrl.addPost);
router.post('/:id/like', auth, productCtrl.likePosts);
router.get('/:id', auth, productCtrl.getOnePost);
router.put('/:id', auth, multer, productCtrl.modifyPost);
router.delete('/:id', auth, productCtrl.deletePost);

*/

module.exports = router;