/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../history";
import "bootstrap/dist/css/bootstrap.min.css";
import {createMovie} from "../api/createMovie"
export default function CreateMovie() {
  const [movie, setMovie] = useState({
    MovieName: "",
    year: new Date(),
    genre: "Male",
    description: ""
  });

  const [message, setMessage] = useState('');

  const onChange = (e) => {
    const { value, name } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const onChangeDate = (year) => {
    setMovie({ ...movie, year });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const mov = {
        MovieName: movie.MovieName,
        year: movie.year,
        genre: movie.genre,
        description: movie.description,
      };
      console.log("new person created", mov);
      createMovie(mov, (res) => {
        history.push("/");
      });
    }
  };

  // do the form validation
  const checkValidation = () => {
    console.log('come here validationfdsfdsf');
    if (movie.MovieName === '') {
      setMessage('Movie name is blank');
    } else if (movie.description === '') {
      setMessage('Description is blank');
    } else if (movie.description.length < 10) {
      setMessage('Description length must be more than 10');
    } else {
      return true;
    }
    return false;
  }

  return (
    <div>
      <h3 className="m-3">Create New Movie</h3>
      <form onSubmit={onSubmit}>
        {message && (
          <div class="alert alert-danger text-center" role="alert">
            {message}
          </div>
        )}
        <div className={"form-group"}>
          <label>Movie Name:</label>
          <input
            required
            name="MovieName"
            placeholder="Batman"
            className="form-control"
            value={movie.MovieName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <div>
            <DatePicker
              name="year"
              selected={movie.year}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <select name="genre" id="text"
          className="form-control" 
          required
          onChange={onChange}
          ><option>Sci-Fi</option>
          <option >Action</option>
          <option >Romantic</option>
          <option >Comedy</option>
          <option >Adventure</option>
          <option >Fantasy</option>
          <option >Drama</option>
          <option >Horror</option>
          <option >Romance</option>
          <option >Thriller</option>
          <option >Mystery</option>
          </select>
        </div>
        <div className="form-group">
        <label>Description:</label>
          <input
            name="description"
            type="text"
            required
            className="form-control"
            value={movie.description}
            onChange={onChange}
          />
        </div>
         
        <div className="form-group">
          <input
            type="submit"
            value="Create Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};