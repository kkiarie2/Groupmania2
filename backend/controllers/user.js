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
    if(!userId) return {status:'failed', message:'user does not exist'} 
    const existingUser = await UserModel.findOne({where:{id:userId}})
    if(!existingUser){
      return {status:'failed', message:'user does not exist'} 
    } else{
        const res = await existingUser.destroy()
        return { status: "successful", res}
    }

  } catch(err){
    ////console.log({err})
    return {status:'failed', message:'unexpected error occurred'}

  }
}


async function getUser (userId){
  try{
    const profile = await UserModel.findOne({where: {id:userId}}, {attributes:{include:["id", "birthday", "image", "firstname", "lastname", "hobbies", "email"]}})
    if(profile) {
      delete profile.dataValues.password
      return  { status: "successful", user:{...profile.dataValues}};}
    return {status:'failed', message:'user does not exist'} 
  }catch(err){
    return {status:'failed', message:'unexpected error occurred'}
  }
}





async function login(email, password){
  try{const result = await UserModel.findOne(
    {
     where: { email: email}
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


//edit profile
async function editUser(userId, newProfile){
  try{
      const existingUser = await UserModel.findOne({where: {id:userId}})
      if(! existingUser ){
        return {status:'failed', message:'you are not allowed to edit this profile'} 
      } else{
        
        const res = await existingUser.update(newProfile)
        ////console.log(Object.keys(res))
        delete res.dataValues.password
        return {status:"successful", res}
      }

  } catch(err){
    ////console.log({err})
    return {status:'failed', message:'unexpected error occurred'} 
  }

}











module.exports ={signup, login, deleteAccount, getUser, editUser}












