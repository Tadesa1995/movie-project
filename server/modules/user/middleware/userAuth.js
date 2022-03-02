const user = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send({ msg: "u are not log in" });
  }
};

module.exports = user;
