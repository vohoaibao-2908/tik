import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../Redux/Action/user";

class userService extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      logErrors: "",
    },
    valid: false,
  };
  // validate={(values) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   return errors;
  // }}
  handleChange = (e) => {
    let { name, value, type, pattern } = e.target;
    let errorsMessage = "";
    //kiểm tra rỗng của từng input
    if (value.trim() === "") {
      errorsMessage = "Vui lòng điền thông tin ";
    } else if ((type = "passWord")) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorsMessage =
          "a digit must occur at least once a lower case letter must occur at least once an upper case letter must occur at least once a special character must occur at least once no whitespace allowed in the entire stringanything, at least eight places though";
      }
    } 
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorsMessage };
    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        this.checkSubmit();
      }
    );
  };

  handleSubmit = (e) => {
    //cản sự kiện submit reload
    e.preventDefault();
    this.props.dispatch(login(this.state.values));
  };
  checkSubmit = () => {
    // khi có lỗi nút submit bị ẩn
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    console.log(valid);
    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  componentDidUpdate = () => {
    //nếu đang nhập thành công
    if (this.props.logStatus !== "") {
      this.props.history.push("/");
    
    }
  };
  render() {
    return (
      <div className="headerForm">
        <div className="header-login">
          <img src="./images/group@2x.png" alt="true" />
          <h3>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</h3>
          <form onSubmit={this.handleSubmit}>
            <label className="login">Tài Khoảng</label>
            <input
              type="text"
              name="taiKhoan"
              onChange={this.handleChange}
              className="formControl"
              placeholder="Enter your account "
              values={this.state.values.taikhoan}
            ></input>
            <p className="text-danger mt-2 mb-0">
              {this.state.errors.taiKhoan}
            </p>
            <label className="login">Mật khẩu</label>
            <input
              type="password"
              name="matKhau"
              onChange={this.handleChange}
              placeholder="enter your password "
              className="formControl"
              values={this.state.values.maKhau}
            >
              {/* {errors.matKhau && touched.matKhau} */}
            </input>
            <p className="text-danger mt-2 mb-0">{this.state.errors.matKhau}</p>
            <p className="text-danger mt-2 mb-0">{this.state.errors.logErrors}</p>
            {this.state.valid ? (
              <Button type="submit" className="login">
                Đăng nhập
              </Button>
            ) : (
              <Button type="submit" className="login" disabled>
                Đăng nhập
              </Button>
            )}
          </form>

          <a className="close" href="/">
            ×
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    logStatus: state.user.credentials,
  };
};
export default connect(mapStateToProps)(userService);
