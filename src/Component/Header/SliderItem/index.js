import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { createAction } from "../../../Redux/Action/createAction";
import { FETCH_CHOOSEFILM } from "../../../Redux/Action/type";
import { movieChoose } from "../../localStorage";
class silderItem extends Component {
  goToDetail = () => {
    this.props.dispatch(createAction(FETCH_CHOOSEFILM, this.props.item));
    this.props.history.push("/detail/" + this.props.item.maPhim);
    localStorage.setItem(movieChoose, JSON.stringify(this.props.item));
  };

  render() {
    const { hinhAnh } = this.props.item;
    return (
      <a>
        <img src={hinhAnh} className="d-block w-100 h-100" alt="..." />
        <Button className="playButton" onClick={this.goToDetail}>
          <img src="./images/play-video.png" alt="...play button"></img>
        </Button>
      </a>
    );
  }
}

export default compose(withRouter, connect(null, null))(silderItem);
