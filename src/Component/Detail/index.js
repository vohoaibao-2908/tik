import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchFilm } from "../../Redux/Action/auth";
import { movieChoose } from "../localStorage";

class detail extends Component {
  fromDataRender = (data) => {
    return (
      <div className="detailMovie">
        <div className="detailBackground">
          <div className="detailImages">
            <img src={data.hinhAnh} alt="...detail"></img>
          </div>
          <div className="detailGradient"></div>
        </div>
        <Row className="detailMain">
          <Col sm={3} className="filmPoster">
            <a href={data.ticket} className="playTrailer">
              <img src="/images/play-video.png" alt="..video play"></img>
            </a>
            <img className="poster" src={data.hinhAnh} alt="poster"></img>
          </Col>
          <Col sm={5}></Col>
          <Col sm={3}></Col>
        </Row>
      </div>
    );
  };
  render() {
    let indon = [this.props.match.params.courseId];
    console.log(indon);
    if (this.props.movie) {
      console.log("from home");
      console.log(this.props.movie);
      return <div>{this.fromDataRender(this.props.movie)} </div>;
    } else {
      return () => {
        localStorage.getItem(movieChoose);
      };
    }
    //kiểm tra mảng
    return <h1> truy cập</h1>;
  }
  componentDidMount() {
    this.props.dispatch(fetchFilm);
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.filmComing.film,
  };
};
export default connect(mapStateToProps)(detail);
/* {this.props.movie.map((item, index) => {
            console.log(item.maPhim);
            if (item.maPhim == indon) return <div key={index}>2222</div>;
          })}
 */
/** if (this.props.movie.length === 0) {
      return <div> Trang được truy cập dáng tiếp qua home Screen</div>;
    } else if(this.props.movie){
      return <div className=""></div>
    }
    return <h1>have</h1>; */
