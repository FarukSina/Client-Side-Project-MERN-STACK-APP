/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

import axios from "axios";
import { SERVER_URL } from "../links";

export const getMovies = (callback) => {
  axios.get(SERVER_URL + "movie")
    .then((res) => {
      console.log("get all movie", res);
      callback(res.data);
    })
    .catch((err) => {
      console.error("error fetching all the movies", err.message);
    });
};