const jwt = require('jsonwebtoken');
const {getUser} = require('../controllers/user')

module.exports = (req, res, next) => {
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
      const user = getUser(userId)
      if(user.status === "successful"){
        console.log({user})
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





