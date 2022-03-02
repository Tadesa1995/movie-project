import React, { useState, useEffect } from "react";
import movie from "./movie.css";
import MovieBar from "./MovieBar";
import axios from "axios";
// import Button from "semantic ui-button"


const Movies = () => {
  const [dramaMovies, setDramaMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);

  const getMovies = () => {
    axios.get("/api/movies").then((res) => {
      console.log("message from movie", res.data);
      setDramaMovies(res.data.drama);
      setActionMovies(res.data.action);
      setAdventureMovies(res.data.adventure);
    });
  };
  useEffect(getMovies, []);
  const getProtected = () => {
    axios.get("/api/users/hello").then((res) => {
      console.log("message from user", res.data);
    });
  };

  return (
    <>
      <h1>Movies</h1>
      <button onClick={getMovies}>get movies</button>
      <button onClick={getProtected}>get protected</button>
      <div>
        <MovieBar list={dramaMovies} listType="Drama"  />
        <MovieBar list={actionMovies} listType="Action" />
        <MovieBar list={adventureMovies} listType="Adventure" />
      </div>
    </>
  );
};

export default Movies;
