import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { fetchSlider } from "../../../Redux/Action/slider";
import SliderItem from "../SliderItem";
class slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCinema: false,
      isShowDate: false,
      isShowTime: false,
    };
    this.stateDate = this.stateDate.bind(this);
  }
  buyTicket = () => {
    if (this.state.isShowTime) {
      document.getElementsByClassName("buy-ticket").disabled = false;
    }
  };
  handleSetCinema = (item) => {
    this.setState({
      isShowCinema: true,
    });
    this.props.dispatch(fetchSlider(item))
  };
  stateDate() {
    this.setState({
      isShowDate: true,
    });
  }
  handleGetCinema = () => {
    if (this.props.movieCode.heThongRapChieu) {
      return this.props.movieCode.heThongRapChieu.map((item) => {
        return item.cumRapChieu.map((item, index) => {
          return (
            <a key={index} className="dropdown-item" onClick={this.stateDate}>
              {item.maCumRap}
            </a>
          );
        });
      });
    }
  };
  selFilm = () => {
    return this.props.filmList.map((item, index) => {
      return (
        <a
          key={index}
          className="dropdown-item"
          onClick={() => this.handleSetCinema(item.maPhim)}
        >
          {item.tenPhim}
        </a>
      );
    });
  };
  handleGetDate = () => {
    
  }
  renderSlider = () => {
    return this.props.filmList.map((item, index) => {
      if (index === 0) {
        return (
          <div className="carousel-item active" key={index}>
            <SliderItem item={item}></SliderItem>
          </div>
        );
      } else if (index < 4) {
        return (
          <div className="carousel-item" key={index}>
            <SliderItem item={item} />
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">{this.renderSlider()}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control" aria-hidden="true" />
            <img src="./images/back.png" alt="...back"></img>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-prev" aria-hidden="true" />
            <img src="./images/next.png" alt="...next"></img>
          </a>
        </div>

        <div className="dropdown-bar">
          <div className="dropdown-bar">
            <div className="dropdown">
              <div className="dropdown__item1 dropdown__line">
                <button
                  className="btn btn-secondary dropdown-toggle item1"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Phim
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.selFilm()}
                </div>
              </div>
              <div className="dropdown__item2 dropdown__line">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Rạp
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.state.isShowCinema ? (
                    this.handleGetCinema()
                  ) : (
                    <p>Vui lòng chọn phim </p>
                  )}
                </div>
              </div>
              <div className="dropdown__item3 dropdown__line">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ngày xem
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.state.isShowDate ? (
                   this.handleGetDate()
                  ) : (
                    <p>Vui lòng chọn phim và rạp</p>
                  )}
                </div>
              </div>
              <div className="dropdown__item4 dropdown__line">
                <button
                  className="btn btn-secondary dropdown-toggle item4"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Suất chiếu
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {this.state.isShowTime ? (
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  ) : (
                    <p> vui lòng chọn phim , rạp và ngày xem</p>
                  )}
                </div>
              </div>
              <button className="buy-ticket active" disabled>
                Mua vé ngay{this.buyTicket()}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filmList: state.filmComing.filmList,
    movieCode: state.cinemas.movieCode,
  };
};
export default compose(withRouter, connect(mapStateToProps))(slider);
