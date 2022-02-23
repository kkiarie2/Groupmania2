const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');
const { UserModel } = require('../models');

router.post('/signup', async(req, res)=> {
    console.log({body:req.body})
    const user = await userCtrl.signup(req.body.email, req.body.password)
    res.json(user)
});


router.post('/login', async(req, res)=> {
    console.log({body:req.body})
    const user = await userCtrl.login(req.body.email, req.body.password)
    res.json(user)
});


router.get('/deleteaccount', async(req, res) => {
    const account = await userCtrl.deleteAccount(req.userId)
    res.json(account)
})
/*
//router.post('/login', userCtrl.login);
//find  a user
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const userId = req.query.username;

    try{ 
    const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({username: username});
     const { password, updatedAt, ...other}= user._doc;
        res.status(200).json(other);
    } catch(err){
        res.status(500).json(err)
    }
})

*/




module.exports = router;