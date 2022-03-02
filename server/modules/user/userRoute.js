// 3 thigs
// 1.decalre express;
// 2.decalre route equle to express.Route
// 3.go to the dilder that hold the function
const express = require("express");
const router = express.Router();
const userLogic = require("./userLogic");
const userAuth = require("./middleware/userAuth");
router.get("/", (req, res) => {
  res.send(req.user);
});
router.post("/login", (req, res) => {
  const { userName, password } = req.body;
  const callback = (tokenString)=>{console.log(tokenString)}
  const emptyCallback = (err,tokenObj)=> {
    if(err)
    res.send({err});
    else{
      res.send(tokenObj);
    }
  }
 
  userLogic.login(emptyCallback,userName, password);
 
 
});

router.get("/hello", userAuth, (req, res) => {
  const userName = req.user.userName;
  res.send(`hello ${userName} world`);
});

module.exports = router;
(tokenString)=>{console.log(tokenString)}