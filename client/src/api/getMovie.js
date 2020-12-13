/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita (checkValidation)
*/

import axios from "axios";
import { SERVER_URL } from "../links";

export const getMovie = (id, callback) => {
  axios.get(SERVER_URL + "movie/" + id)
    .then((res) => {
      console.log("get a movie", res);
      callback(res.data);
    })
    .catch((err) => {
      console.error("error fetching the movie", err.message);
    });
};