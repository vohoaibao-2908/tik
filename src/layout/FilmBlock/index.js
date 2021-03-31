import React, { Component } from "react";
import { Button, NavLink } from "react-bootstrap";
import FlimSlider from "../../Component/Film/ShowingFilm";
class flimBlock extends Component {
  render() {
    return (
      <div id="filmBlock">
        <FlimSlider />
      </div>
    );
  }
}
export default flimBlock;
