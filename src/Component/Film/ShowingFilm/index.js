import React, { Component } from "react";

import { connect } from "react-redux";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";

import { fetchFilm } from "../../../Redux/Action/auth";
import FilmItem from "../FilmItem";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

class filmSlider extends Component {
  render() {
    return (
      <div className="upComingFilm">
        {this.props.filmList.length > 0 ?   <Swiper
          spaceBetween={90}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {this.props.filmList.map((item, index) => {
              return (
                <SwiperSlide key={index} >
                  <FilmItem item={item}></FilmItem>
                </SwiperSlide>
              );
            })}
        </Swiper>
    : ( <div>...loading</div>)}
        </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchFilm);
  }
}
const mapStateToProps = (state) => {
  return {
    filmList: state.filmComing.filmList,
  };
};
export default connect(mapStateToProps)(filmSlider);
