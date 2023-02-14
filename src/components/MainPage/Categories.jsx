import React from "react";

const Categories = () => {
  return (
    <>
      <div className="category">
        <div className="article">
          <img src={require("../../assets/images/ads/prod3.png")}></img>
        </div>
        <div className="article">
          <img src={require("../../assets/images/ads/prod2.png")}></img>
        </div>
      </div>
      <div className="category">
        <div className="article">
          <img src={require("../../assets/images/ads/prod6.png")}></img>
        </div>
        <div className="article">
          <img src={require("../../assets/images/ads/prod4.png")}></img>
        </div>
      </div>
    </>
  );
};

export default Categories;
