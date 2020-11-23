import React from "react";
import { Link } from "react-router-dom";
const Movie = (props) => {
  return (
    <tr>
      <td >{props.movie.MovieName}</td>
      <td>{props.movie.year}</td>
      <td>{props.movie.genre}</td>
      <td>{props.movie.description}</td>
      <td>
        <Link to={"/update/" + props.movie._id}  className= "btn btn-primary" >Edit</Link>
        <a
          href="#"
          onClick={() => {
            if (window.confirm("Are you sure to delete?")) {
              props.deleteMovie(props.movie._id)
            } else {
              window.alert = "You did not want to delete";
            }
          }}  className="btn btn-danger"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Movie;
