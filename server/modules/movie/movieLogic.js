const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
function getMovies(callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("bookfinal");
    const movie = function (err, docs) {
      if (err) throw err;
      console.log("found douments", docs);
      const data = {
        drama: [],
        action: [],
        adventure: [],
      };

      docs.map((movie, i) => {
        if (movie.Genre.trim() == "Action") {
          data.action.push(movie);
        } else if (movie.Genre.trim() == "Drama") {
          data.drama.push(movie);
        } else if (movie.Genre.trim() == "Adventure") {
          data.adventure.push(movie);
        }
      });

      callback(data);
    };
    dbo.collection("movies").find({}).toArray(movie);
  });
}
function getMovieById(id,cb) {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("bookfinal");

    const callback = (err, data) => {
      if (err) throw err;
      cb(data)
    
    };

    dbo.collection("movies").findOne({imdbID:id},callback);
  });
}

module.exports = {
  getMovies,
  getMovieById,
};
