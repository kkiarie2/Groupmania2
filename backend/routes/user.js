const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

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


router.get('/deleteaccount', auth, async(req, res) => {
    const account = await userCtrl.deleteAccount(req.userId)
    res.json(account)
})




router.post('/myprofile', [auth, multer], async(req, res)=>{
    console.log(req.file)
   try{
                const newProfile = {
                    firstname: req.body.firstname, 
                    lastname: req.body.lastname, 
                     hobbies: req.body.hobbies, 
                     image: req.file?.filename,
                     birthday: req.body.birthday
                    }

            Object.keys(newProfile).forEach((key)=>{
            if(newProfile[key] === undefined || newProfile[key] === null){
            delete newProfile[key]
            }
            })
            if(Object.keys(newProfile).length < 1){
            res.json({status: "failed", message: "you have not submitted any changes"})
            }
            const user = await userCtrl.editUser(req.userId, newProfile);
            res.json(user)

   } catch(err){
            console.log({error})
        res.status(500).json(err);

   }
  
   
})



//get profile
router.get("/myprofile", auth, async (req, res) => {
    try{
        const user = await userCtrl.getUser(req.userId)
        res.status(200).json(user)
    } catch(err){
        res.status(500).json(err);
    }
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