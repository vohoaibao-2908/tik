import React, { Component } from "react";

export default class newBlock extends Component {
  render() {
    return (
      <div id="newsBlock">
        <a className="active">Điện ảnh 24h</a>
        <div className="news">
          <div className="itemNews">
            <img src="./images/news/beta.jpg" alt="...news"/>
            <a>
              <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
            </a>
            <p>
              Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
              độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại
              360 Giải Phóng!
            </p>
          </div>
          <div className="itemNews">
            <img src="./images/news/tiec-trang-mau.png"  alt="...movie"/>
            <a>
              <p>
                Tiệc trăng máu chính thức cán mốc 100 tỷ sau 2 tuần công chiếu
              </p>
            </a>
            <p>
              Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
              phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
              “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung
              hình để ăn mừng thành tích ấn tượng của tác phẩm.
            </p>
          </div>
        </div>
        <div className="moreNews">
          <div className="itemNews">
            <img src="./images/news/ngo-thanh-van.jpg" alt="...moive"></img>
            <a>
              <p>
                NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC
                CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
              </p>
            </a>
            <p>
              Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức
              phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN
              với tổng giá trị giải thưởng lên đến 60 triệu đồng.
            </p>
          </div>
          <div className="itemNews">
            <img src="./images/news/antebellum.png" alt="...movie"></img>
            <a>
              <p>
                [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                Antebellum: Bẫy Thực Tại Kinh Hoàng
              </p>
            </a>
            <p>
              Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
              mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham
              gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn
              tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do
              khác khiến người yêu phim không thể bỏ lỡ Ante
            </p>
          </div>
          <div className="itemNews">
            <div className="smallerNews">
              <img  src="./images/news/khi-phu-nu.jpg" alt="...movie"></img>
              <a>
                <p>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</p>
              </a>
            </div>
            <div className="smallerNews">
              <img src="./images/news/da-n-my-nhan.png" alt="...movie"></img>
              <a>
                <p>
                  Dàn mỹ nhân trong thế giới điện ảnh trong quái kiệt
                  Christopher...
                </p>
              </a>
            </div>
            <div className="smallerNews">
              <img src="./images/news/truy-cung-giet-tan.png" alt="...movie"></img>
              <a>
                <p>
                  Truy Cùng Giết Tận - Cuộc tái ngộ của hau 'Ông hoàng phong...
                </p>
              </a>
            </div>
            <div className="smallerNews">
              <img src="./images/news/6-dao-dien.png" alt="...movie"></img>
              <a>
                <p>
                  6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình...
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
