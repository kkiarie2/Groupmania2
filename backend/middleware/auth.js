const jwt = require('jsonwebtoken');
//const { router, response } = require('../app');
const user = require('../models/user');

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
      req.userId = userId
      next();
    }
  } catch(err) {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};





