import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { createAction } from "../../../Redux/Action/createAction";
import { fetchListMovie, fetchMovie } from "../../../Redux/Action/movie";
import { SET_TICKET } from "../../../Redux/Action/type";

class listMovie extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovie);
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.systemCode !== prevProps.systemCode)
      this.props.dispatch(fetchListMovie(this.props.systemCode));
  };
  goToCheckTicket = (movie, location) => {
    this.props.dispatch(createAction(SET_TICKET, location));
    return this.props.history.push("/ticket/" + movie.tenPhim);
  };
  handleShowMovie(address) {
    return this.props.listMovie.map((cinema) => {
      return cinema.lstCumRap.map((item, index) => {
        return (
          <div key={index}>
            {item.maCumRap === address ? (
              item.danhSachPhim.map((movie, index) => {
                return (
                  <div key={index} className="movie">
                    <img src={movie.hinhAnh} className="movieImg" alt="...movie poster"></img>
                    <div className="movieName">
                      <p>{movie.tenPhim}</p>
                      <div className="timeShow">
                        {movie.lstLichChieuTheoPhim.map(
                          (movieTypeTime, index) => {
                            return (
                              <a
                                target="_blank"
                                className="timeChoose"
                                onClick={() => {
                                  this.goToCheckTicket(movie, movieTypeTime);
                                }}
                                key={index}
                              >
                                <span>
                                  {movieTypeTime.ngayChieuGioChieu.substr(11)}
                                </span>
                              </a>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        );
      });
    });
  }
  render() {
    //nếu mảng rỗng
    if (
      this.props.cinemaAddress.length < 1 ||
      this.props.cinemaAddress.length === undefined
    ) {
      var addressDefault = "bhd-star-cineplex-3-2";
      return this.handleShowMovie(addressDefault);
    } else if (this.props.cinemaAddress) {
      return this.handleShowMovie(this.props.cinemaAddress);
    }
    return <div>...wating</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    systemCode: state.cinemas.systemCode,
    listMovie: state.cinemas.listMovie,
    cinemaAddress: state.cinemas.cinemaAddress,
  };
};
export default compose(withRouter, connect(mapStateToProps))(listMovie);
