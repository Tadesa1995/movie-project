import React,{ useState} from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
function MovieBar({ list, listType }) {
  const history = useHistory();
  const goToUserPage = (movie) => {
    history.push(`/movie-Details/${movie.imdbID}`);
  };
  const [currentMovie,setCurrentMovie]= useState(0)
 const length=list.length;
  return (
    <>
    {listType}
      {list.map((movie, i) => {
        return (
          <> 
           
            <Carousel key={i}>
              <Carousel.Item interval={1000}>
              <h3>{movie.Title}</h3>
                <img
                  className="d-block w-50"
                  src={movie.Images[0]}
                  onClick={() => {
                    goToUserPage(movie);
                  }}
                />
              
            
              </Carousel.Item>
            </Carousel>
          </>
        );
      })}
    </>
  );
}

export default MovieBar;
//

//   return (
//     <div>
//       {listType}
//       <div>
//         {list.map((movie, i) => {
//           return (
//             <div className="movie-card" key={i}>
//               <div className="movie-title">{movie.Title}</div>
//               <div
//                 className="movie-images"
//                 onClick={() => {
//                   goToUserPage(movie);
//                 }}
//               >
//                 <img src={movie.Images[0]} />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// <Carousel>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
