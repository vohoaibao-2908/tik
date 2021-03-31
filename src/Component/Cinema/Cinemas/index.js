import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../../Redux/Action/createAction";
import { fetchCinema } from "../../../Redux/Action/cinema";
import { GET_SYSTEMCODE } from "../../../Redux/Action/type";
class cinemas extends Component {
  constructor(props) {
    super(props);
    this.handleCinema = this.handleCinema.bind(this);
  }
  state = { active: 0 };
  handleCinema = (systemCode, index) => {
    this.setState({ active: index });
    this.props.dispatch(createAction(GET_SYSTEMCODE, systemCode));
  };

  render() {
    return (
      <ul className="Listcinema">
        {this.props.cinema.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={this.state.active === index ? "active" : null}
                onClick={() => this.handleCinema(item.maHeThongRap, index)}
              >
                <img src={item.logo} alt="...logo"></img>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinema);
  }
}
const mapStateToProp = (state) => {
  return { cinema: state.cinemas.cinema };
};
export default connect(mapStateToProp)(cinemas);
