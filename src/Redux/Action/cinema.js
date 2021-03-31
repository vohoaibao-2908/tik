import Axios from "axios";
import { createAction } from "./createAction";
import { GET_CINEMA, SET_CINEMA } from "./type";

export const fetchCinema = (dispatch) => {
  Axios({
    url:
      "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      dispatch(createAction(SET_CINEMA, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const fetchListCinema = (data) => {
  return (dispatch) => {
      Axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${data}`,
          method: "GET",
        })
          .then((res) => {
            console.log(res);
            dispatch(createAction(GET_CINEMA, res.data));
          })
          .catch((err) => {
            console.log(err);
          });
  }
}
