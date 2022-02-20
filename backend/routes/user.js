const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

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

//router.post('/login', userCtrl.login);



module.exports = router;