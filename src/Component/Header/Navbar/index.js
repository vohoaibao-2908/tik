import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";


class navbar extends Component {
  province = [
    "An Giang",
    "Bà Rịa – Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre	",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ	",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk	",
    "Đắk Nông",
    "Điện Biên	",
    "Đồng Nai	",
    "	Đồng Tháp	",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam	",
    "Hà Nội",
    "Hà Tĩnh	",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang	",
    "Hòa Bình",
    "Hưng Yên	",
    "	Khánh Hòa	",
    "Kiên Giang",
    "komTum",
    "lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "	Ninh Bình",
    "	Ninh Thuận",
    "	Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "	Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "TP Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];
  user = JSON.parse(localStorage.getItem("credential"))
  state = {
    location: "Hồ Chí Minh",
    credential: this.user,
  };
  logout = () => { 
    let used = localStorage.removeItem("credential");
    this.setState({
      ...this.state,
      credential: used,
    });
  };
  render() {
    console.log(this.state.credential);
    return (
      <div className="navbarHeader">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img className="navbarLogo" src="./images/web-logo.png" alt="...logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <a href="#filmBlock">Lịch chiếu</a>
              <a href="#cinemaBlock">Cụm rạp</a>
              <a href="#newsBlock">Tin tức</a>
              <a href="#appBlock">Ứng dụng</a>
            </Nav>
            <Nav className="mr-auto">
              {!localStorage.getItem("credential") ? (
                <Nav.Link href="/login">
                  <img className="avatarLogin" src="./images/avatar.png" alt="...avatar"></img>
                  <p className="login">Đăng nhập</p>
                </Nav.Link>
              ) : (
                <NavItem>
                  <img className="avatarLogin" src="./images/avatar.png" alt="...avater"></img>
                  <p className="userName">
                    {this.state.credential.hoTen}
                  </p>
                  <a className="logout" onClick={this.logout()}>
                    Đăng xuất
                  </a>
                </NavItem>
              )}

              <Nav>
                <img className="location" src="./images/location-header.png" alt="...location"/>
                <NavDropdown
                  title={this.state.location}
                  id="basic-nav-dropdown"
                >
                  {this.province.map((value, index) => {
                    return (
                      <NavDropdown.Item key={index}>
                        <a
                          onClick={() => {
                            this.setState({
                              location: value,
                            });
                          }}
                        >
                          {value}
                        </a>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
