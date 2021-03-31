import Axios from 'axios'
import { createAction } from './createAction'
import { GET_LISTMOVIE } from './type'

export const fetchMovie = (dispatch) => {
         Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01",
            method: "GET"
         }
        ).then((res)=> {
            console.log("true",res);
            dispatch(createAction(GET_LISTMOVIE,res.data))
        }).catch((err)=>{console.log(err);})
}
export const fetchListMovie = (data) => {
    return (dispatch) => {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${data}&maNhom=GP01`,
            method: "GET",
          })
            .then((res) => {
              dispatch(createAction(GET_LISTMOVIE, res.data));
            })
            .catch((err) => {
              console.log(err);
            });
    }
}