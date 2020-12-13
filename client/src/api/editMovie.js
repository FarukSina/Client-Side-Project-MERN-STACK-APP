/*
Principal author: IRONMAN
Sub: Tomoaki Morita (checkValidation)
*/

import Axios from "axios";
import {SERVER_URL} from "../links"
export const editMovie = (id, data, callback) => {
  Axios.post(
    SERVER_URL + "movie/update/" + id,
    data,
  )
    .then((res) => {
      console.log("editMovie res", res);
      callback(res.data);
    })
    .catch((err) => {
      callback(err.response.data);
      console.error("error editMovie", err.response);
    });
};