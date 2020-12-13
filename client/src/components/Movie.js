/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {NotificationContext} from "../Notifications"

const Movie = (props) => {
  const {setNotification} = useContext(NotificationContext);
  return (
    <tr>
      <td >{props.movie.MovieName}</td>
      <td>{props.movie.year.substring(0,10)}</td>
      <td>{props.movie.genre}</td>
      <td>{props.movie.description}</td>
      <td>
        <Link to={"/edit/" + props.movie._id } className= "btn btn-primary" >Edit</Link>
        <a
          href="#"
          onClick={() => {
            if (window.confirm("Are you sure to delete?")) {
              props.deleteMovie(props.movie._id)
            } else {
              //window.alert = "You did not want to delete";
              setNotification({
                type: "warning",
                message: "You did not want to delete"
              })
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
