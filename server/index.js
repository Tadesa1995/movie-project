const express = require("express");
const app = express();
const port =3000;
app.use(express.json());
const userMid = require("./modules/user/middleware/userMid");
const movieRoute = require("./modules/movie/movieRoute");
const userRoute = require("./modules/user/userRoute");
//movies routes
app.use("/api/movies", movieRoute);
app.use("/api/users", userMid, userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
