import Axios from "axios";
import { createAction } from "./createAction";
import { SET_MOVIECODE } from "./type";

export const fetchSlider = (data) => {
    return (dispatch)=> {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${data}`,
            method: "GET",
          })
            .then((res) => {
              console.log(res);
              dispatch(createAction(SET_MOVIECODE, res.data));
            })
            .catch((err) => {
              console.log(err);
            });
    }
}