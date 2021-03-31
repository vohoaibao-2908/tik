import Axios from "axios";
import { createAction } from "./createAction";
import { GET_SEATS } from "./type";

export const fetchSeat = (links) => {
    return (dispatch) => {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${links}`,
            method: "GET",
          })
            .then((res) => {
              console.log(res);
                dispatch(createAction(GET_SEATS, res.data));
            })
            .catch((err) => {
              console.log(err);
            });
    } 
}