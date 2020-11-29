import Axios from "axios";
import {SERVER_URL} from "../links"
export const createMovie = (data, callback) => {
  Axios.post(SERVER_URL + "movie",
    data,
  )
    .then((res) => {
      console.log("createMovie res", res);
      callback(res.data);
    })
    .catch((err) => {
      callback(err.response.data);
      console.error("error createMovie", err.response);
    });
};