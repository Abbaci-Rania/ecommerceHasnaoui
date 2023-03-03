import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
  const [count, setCount] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems, index) => {
          return (
            <Link to={`/detail/${productItems.id}`} key={index}>
              <div className="box">
                <div className="productSlider mtop">
                  <div className="img">
                    <span className="discount">
                      {productItems.discount}% Off
                    </span>
                    <img src={productItems.cover} alt="" />
                  </div>
                  <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="price">
                      <h4>{productItems.price}.00 DA</h4>
                      {/* <Link to="/"> */}
                      <button onClick={() => addToCart(productItems)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
