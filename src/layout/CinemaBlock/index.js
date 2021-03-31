import React, { Component } from "react";
import Cinema from "../../Component/Cinema/Cinemas";
import ListCinema from "../../Component/Cinema/ListCinemas";
import ListMovie from "../../Component/Cinema/ListMovies";
export default class cinemaBlock extends Component {
  render() {
    return (
      <div className="cinemas" id="cinemaBlock">
        <div className="homeCinemaComplex" >
          <div className="cinema">
            <Cinema />
          </div>
          <div className="listCinemas">
            <ListCinema />
          </div>
          <div className="listMovies">
            <ListMovie />
          </div>
        </div>
      </div>
    );
  }
}
