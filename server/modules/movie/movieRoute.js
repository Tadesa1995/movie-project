const express = require("express");
const router = express.Router();
const movieLogic = require("./movieLogic");

router.get("/", (req, res) => {
  console.log("user data is : ", req.user);
  const callback = (movie) => {
    console.log(movie);
    res.send(movie);
  };
  movieLogic.getMovies(callback);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const cb = (movieDetails) => {
    res.send(movieDetails);
  };
  movieLogic.getMovieById(id, cb);
});
router.get("/koko", (req, res) => {
  res.send({ msg: "kokokkkok" });
});

module.exports = router;
