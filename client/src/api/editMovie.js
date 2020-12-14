/*
Principal author: Faruk Sina Kaya
Sub: Tomoaki Morita 
Sub: Parthkumar Patel
Sub: Burak Akcal
*/
import Axios from "axios";
import {SERVER_URL} from "../links"
export const editMovie = (id, data, setNotification, callback) => {
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
      setNotification({
        type: "danger",
        message: "Error movie didnt update"
      })
    });
};