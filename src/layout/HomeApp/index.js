import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default class homeApp extends Component {
  render() {
    return (
      <div id="appBlock">
        <Container>
          <Row xs="12">
            <Col md="6">
              <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
              <div>
                <p className="textLeft">người yêu điện ảnh</p>
                <br />
                <p className="textSmallLeft">
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br />
                <Button variant="danger">App miễn phí - Tải về ngay!</Button>
                <p className="textAppUnder">
                  TIX có hai phiên bản
                  <a
                    className="tagA"
                    target="_blank"
                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                  >
                    iOS
                  </a>
                  &
                  <a
                    className="tagA"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                  >
                    Android
                  </a>
                </p>
              </div>
            </Col>
            <Col md="6">
              <img src="/images/mobile.png" alt="...phone"></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
