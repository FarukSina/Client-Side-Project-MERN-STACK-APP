/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

import React,{useState,useEffect,  useContext} from 'react'
import {getMovies} from "../api/getMovies"
import Movie from "./Movie"
import axios from "axios"
import {SERVER_URL} from "../links"
import {NotificationContext} from "../Notifications"
export default function MoviesList() {
    const [movies, setMovies] = useState([])
    const {setNotification} = useContext(NotificationContext)
    useEffect(() => {
       getMovies((value)=>{
           setMovies(value);
       })
    }, [])

    console.log(movies,"Movies");

    const deleteMovie = (id) => {
        axios
          .post(SERVER_URL + "movie/destroy/"+ id)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log("Error: " + err));
        setMovies(movies.filter((el) => el._id !== id));
        setNotification({
          type: "success",
          message: "You have deleted the movie successfully"
        })
        console.log("Movies after delete", movies);
      };
    return (
        <div >
      <h3 className="m-3">All Movies</h3>
      <table className="table table-stripe" >
        <thead className="thead-light">
          <tr>
            <th>Movie Name</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <Movie
                movie={movie}
                deleteMovie = {deleteMovie}
                key={movie._id}
              />
            );
          })}
        </tbody>
      </table>
      <p><strong>{`There are ${movies.length} movies in the table`}</strong></p>
    </div>
    )
}
