// task to concent to mongoclinet and check
// if the user exist in the collectation an print hey 
const jwt = require("jsonwebtoken");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const secret = "uiggjkj";
const login = (cb,userName, password) => { 
   
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        const dbo = db.db("bookfinal")
dbo.collection("users").findOne({userName},function(err,doc){
    if(err )   return cb(err);
    if(!doc)  return cb("no user");


    if (doc.password==password)
    {
    const token=jwt.sign({userName, password}, secret, { expiresIn: '1h' });
  const userData={token,userName}
    cb(err,userData);
    }
    else{
        throw "incorrect password";
    }
});

});

};



module.exports = { login };
