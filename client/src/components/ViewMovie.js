
/*
Principal author: Tomoaki Morita
*/
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../history";
import "bootstrap/dist/css/bootstrap.min.css";
import {editMovie} from "../api/editMovie"
import {getMovie} from "../api/getMovie"
export default function ViewMovie(props) {
  const [movie, setMovie] = useState({
    id:0,
    MovieName: "",
    year: new Date(),
    genre: "Male",
    description: ""
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const id = props.match.params.id;
    getMovie(id, (res) => {
        setMovie({
            id:res._id,
            MovieName:res.MovieName,
            year:new Date(res.year),
            genre:res.genre,
            description:res.description
        });
    })
},[])
    
  const onClick = (e) => {
    history.push("/");
  }

  return (
    <div>
        <h3 className="m-3">{movie.MovieName}</h3>
        <div className="m-3">
            <h5>Year: { movie.year.getFullYear()}</h5>
        </div>
        <div className="m-3">
            <h5>Genre: { movie.genre}</h5>
        </div>
          <div className="m-3">
            <p>{ movie.description}</p>
          </div>
          <button className="btn btn-secondary m-3" onClick={ onClick}>Back to the list</button>
    </div>
  );
};
