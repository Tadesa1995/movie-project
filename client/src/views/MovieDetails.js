import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState({ Images: [] });
  const getMoviesById = () => {
    axios.get(`/api/movies/${params.id}`).then((res) => {
      console.log("message from movie", res.data);
      setMovie(res.data);
    });
  };
  useEffect(getMoviesById, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Images[0]} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            MOVIE Plot:{movie.Plot}
           <p>imdbRating:{movie.imdbRating}</p>
          <p>Actors:{movie.Actors}</p> 
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

 
  );
}

export default MovieDetails;

{
  /* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */
}
