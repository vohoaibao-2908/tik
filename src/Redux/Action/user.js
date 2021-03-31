import Axios from "axios";
import { createAction } from "./createAction";
import { FETCH_CREDENTIAL } from "./type";

export const login = (data) => {
  console.log(data);
  return (dispatch) => {
    Axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data,
    })
      .then((res) => {
        console.log(res);
        dispatch(createAction(FETCH_CREDENTIAL, res.data));
        localStorage.setItem("credential", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createAction(FETCH_CREDENTIAL, err));
      });
  };
};
