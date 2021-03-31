import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../../Redux/Action/createAction";
import { fetchListCinema } from "../../../Redux/Action/cinema";
import {  GET_ADDRESS } from "../../../Redux/Action/type";

class listCinema extends Component {
  constructor(props) {
    super(props);
    this.handlelistMovie = this.handlelistMovie.bind(this);
  }
  state = { active: 0 };

  componentDidMount() {
    let cinemaDefault = "BHDStar";
    this.props.dispatch(fetchListCinema(cinemaDefault));
  }
  componentDidUpdate(prevProps) {
    if (this.props.systemCode !== prevProps.systemCode) {
      this.props.dispatch(fetchListCinema(this.props.systemCode));
    }
  }

  handlelistMovie = (data, index) => {
    this.setState({ active: index });
    this.props.dispatch(createAction(GET_ADDRESS, data));
  };

  render() {
    if (this.props.cinemasList)
      return (
        <div id="list">
          {this.props.cinemasList.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  this.state.active === index
                    ? "active cinemaAddress"
                    : "cinemaAddress"
                }
              >
                <a
                  className="cinemaList"
                  onClick={() => {
                    this.handlelistMovie(item.maCumRap, index);
                  }}
                >
                  <span className="nameCinema">{item.tenCumRap}</span>
                  <br />
                  <span className="address">{item.diaChi}</span>
                  <br />
                </a>
                <a className="detailClick">[chi tiết]</a>
              </div>
            );
          })}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    cinemasList: state.cinemas.cinemasList,
    systemCode: state.cinemas.systemCode,
  };
};
export default connect(mapStateToProps)(listCinema);
