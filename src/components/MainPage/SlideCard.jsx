import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h4>-50% PROMO</h4>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                  <button className="btn-cart welcome-add-cart">
                    Plus D'informations
                  </button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="product" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
