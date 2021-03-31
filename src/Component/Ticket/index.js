import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Action/createAction";
import { fetchSeat } from "../../Redux/Action/seat";
import { GET_SEATS } from "../../Redux/Action/type";
class ticket extends Component {
  state = {
    total: 0,
    numberTicket: 0,
  };
  BookSeats() {
    this.setState({
      total: this.state.total + 1,
      numberTicket: this.state.numberTicket + 1,
    });
  }

  render() {
    const { danhSachGhe, thongTinPhim } = this.props.seat;
    var size = Object.keys(this.props.seat).length;
    console.log(this.props.seat);
    if (size !== 0) {
      return (
        <div className="checkout">
          <div className="stepCheckout"></div>
          <div className="seatCheckout"></div>
          <div className="detailCheckout">
            <div className="total">
              <p>{this.state.total} Đ</p>
            </div>
            <div className="cinema">
              <div className="filmName">
                <span>{thongTinPhim.tenPhim}</span>
              </div>
              <div className="contentCinema">
                <span>{thongTinPhim.tenCumRap}</span>
                <span>{thongTinPhim.tenRap}</span>
                <span>{thongTinPhim.diaChi}</span>
              </div>
              <div className="account">
                <form></form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>...wating</div>;
  }
  componentDidMount() {
    this.props.dispatch(fetchSeat(this.props.ticket.maLichChieu))
  }
}
const mapStateToProps = (state) => {
  return {
    ticket: state.cinemas.ticket,
    seat: state.cinemas.seat,
  };
};
export default connect(mapStateToProps)(ticket);
