const bcrypt = require('bcryptjs');
const {UserModel} = require('../models/index')
const jwt = require('jsonwebtoken');



async function signup(email, password){
  try{const result = await UserModel.create(
    {
      email: email,
      password: bcrypt.hashSync(password, 10)
  })
      return {status:"successfully", ...result.dataValues}

}
  catch(error){
    switch(error.name){
      case 'SequelizeUniqueConstraintError':
        return {status:'failed', message:'you already have an account'} 
        default:
          return {status:'failed', message:'unexpected error occurred'} 
    }
  }
    
}


async function deleteAccount( userId){
  try{
    const existingUser = await UserModel.findOne({id:userId})
    if(!existingUser){
      return {status:'failed', message:'user does not exist'} 
    } else{
        const res = await existingUser.destroy()
        return { status: "successful", res}
    }

  } catch(err){
    return {status:'failed', message:'unexpected error occurred'}
  }
}


async function getUser (userId){
  try{
    const user = await UserModel.findOne({id:userId}, {attributes:{include:["id", "email"]}})
    if(user) return { status: "successful", user};
    return {status:'failed', message:'user does not exist'} 
      

  }catch(err){
    return {status:'failed', message:'unexpected error occurred'}
  }
}





async function login(email, password){
  try{const result = await UserModel.findOne(
    {
      email: email
  })
  if(result === null){
    return ({status: 'failed', message:'you dont have an account; sign up in instead'})
  } else{
    const isPasswordCorrect = bcrypt.compareSync(password, result.password);
    if(isPasswordCorrect){
      const user = result.dataValues
      const token = jwt.sign({payload:{email, userId:user.id}}, process.env.jwtSecret, {expiresIn:(7*24*60*60)})
      delete user.password
      var today = new Date()
      var oneWeekLater = today.setDate(today.getDate()+7)
      return {status:"successfully", ...user, expiresIn:new Date(oneWeekLater).toDateString(), token}
    } else{
      return ({status: 'failed', message:'password incorrect'})
    }
  }
     

}
  catch(error){
    switch(error.name){
      case 'SequelizeUniqueConstraintError':
        return {status:'failed', message:'you dont have an account; sign up in instead'} 
        default:
          return {status:'failed', message:'unexpected error occurred'} 
    }
  }
    
}








module.exports ={signup, login, deleteAccount, getUser}












/*

exports.signup = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const result = await UserModel.create(
    {
      email: req.body.email,
      password: hash
        })
    return res.json(result)






  //bcrypt.hash(req.body.password, 10).then(
    //  async (hash) => {
    


        
        const user = new User({
          email: req.body.email,
          password: hash
        });
        
        //console.log(hash);
        user.save().then(
          () => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          })
          .catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
          

        );

        

      }
    );
   
  };
   */

  /*
  
  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(400).json({
            error: 'User not found!'
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { userId: user._id },
              process.env.jwtSecret,
              { expiresIn: '24h' });
            res.status(200).json({
              userId: user._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }

  */