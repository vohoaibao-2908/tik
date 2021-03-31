import { createAction } from "./createAction";
import { SET_FILM } from "./type";
import axios from "axios";

export const fetchFilm = (dispatch) => {
  axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      //dispatch action
      dispatch(createAction(SET_FILM, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
