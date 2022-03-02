const jwt = require("jsonwebtoken");
const secret = "uiggjkj";
const user = (req, res, next) => {
    var token = req.headers['roni']; 
    if(token){
           var decoded = jwt.verify(token, secret);
    console.log("data is encoded; ",decoded)
  req.user = decoded;
    }
   next();
};

module.exports = user;
