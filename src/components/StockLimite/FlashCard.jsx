import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ productItems, addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const history = useHistory();
  const handleCardClick = (productItemId) => {
    history.push(`/detail/${productItemId}`);
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div
              className="box"
              key={productItems}
              onClick={() => handleCardClick(productItems.id)}
            >
              <div className="product mtop">
                <div className="img">
                  <img src={productItems.cover} alt="" />
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <h5>Quantité restante: {productItems.qtereste}</h5>
                  <div className="price">
                    <h4>{productItems.price}.00 DA</h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
