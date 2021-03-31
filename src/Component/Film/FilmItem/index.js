import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import {  withRouter } from "react-router-dom";

class filmItem extends Component {

  goToDetail = (maPhim) => {
    return this.props.history.push("/detail/" + maPhim);
  };
  render() {
    const { hinhAnh, tenPhim, maPhim } = this.props.item;
    return (
      <Card>
        <Card.Img variant="top" style={{ height: 300 }} src={hinhAnh} />
        <Card.Body>
          <a>
            <div className="nameFilm">
              <Card.Title>{tenPhim}</Card.Title>
            </div>
            <Button
              className="detailButton"
              variant="danger"
              onClick={() => this.goToDetail(maPhim)}
            >
              Mua vé
            </Button>
          </a>
        </Card.Body>
      </Card>
    );
  }
}
export default withRouter(filmItem);
