const jwt = require('jsonwebtoken');
const {getUser} = require('../controllers/user')

module.exports = async (req, res, next) => {
//console.log({body:req.body, headers:req.headers})
  try {
    const token = req.headers.authorization.split(' ')[1];
    //console.log(token)
    
    const decodedToken = jwt.verify(token, process.env.jwtSecret);
    
 //   console.log({userId,decodedToken})
  //req.auth = {userId};
    if (req.body.userId && req.body.userId != userId) {
      throw 'Invalid user ID';
    } else {
      const payload = decodedToken.payload;
      const userId = payload.userId;
      const user = await getUser(userId)
      console.log({user})
      if(user.status === "successful"){
        
        req.userId = userId
        next();
      } else{
        throw 'Invalid user ID';
      }
      
    }
  } catch(err) {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};





