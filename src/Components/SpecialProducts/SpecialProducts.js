import React from "react";
import "./specialproducts.css";
import { TrendItems } from "../Helpers/TrendItems";
import { BsArrowRight } from "react-icons/bs";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
export const SpecialProducts = () => {
  const [currentMove, setCurrentMove] = React.useState(0);
  const moveBar = () => {
    if (currentMove === 0) {
      setCurrentMove(-1325);
    } else if (currentMove === -1325) {
      setCurrentMove(-2650);
    } else if (currentMove === -2650) {
      return currentMove;
    } else {
      return currentMove;
    }
  };
  const prevMoveBar = () => {
    if (currentMove === 0) {
      return currentMove;
    } else if (currentMove === -1325) {
      setCurrentMove(0);
    } else if (currentMove === -2650) {
      setCurrentMove(-1325);
    }
  };

  return (
    <section className="py-3" id="trendProduct">
      <div className="container-xxl">
        <div className="trend-area">
          <div className="trend-header-area d-flex justify-content-between align-items-center">
            <span className="trend-header">Special Products</span>
            <Link to="/" className="show-more">
              Show More <BsArrowRight color="#263c97" />
            </Link>
          </div>
          <div className="trends-main py-2">
            <div
              style={{ transform: `translateX(${currentMove}px)` }}
              className="trend-inner  d-flex align-items-center"
            >
              {TrendItems.map((products) => (
                
                  <article key={products.id} className="product-box">
                    <div className="product-img">
                      <Link to="/">
                        <img
                          className="img-fluid"
                          src={products.imgProduct}
                          alt="Loading..."
                        />
                        <div className="show-product">
                          <FaRegEye
                            color="#E91E63"
                            size={30}
                            className="eye-icon"
                          />
                        </div>
                        {products.sale !== null ? (
                          <span className="sale-icon featured-sale">
                            {products.saleIcon}
                          </span>
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                    <div className="product-titles text-center">
                      <span className="product-title">{products.header}</span>
                    </div>
                    <div className="product-price my-3 w-100 d-flex justify-content-between align-items-center">
                      <span className="price mx-2">
                        {products.price}{" "}
                        <span className="sale-price">{products.sale}</span>
                      </span>
                      <button className="buy-btn mx-2">BUY</button>
                    </div>
                  </article>
                
              ))}
            </div>

            <span
              onClick={prevMoveBar}
              className={`show-indicator left${
                currentMove === 0 ? " hidden-indicator" : " "
              }`}
            >
              <IoIosArrowDropleftCircle size={55} className="indicator-arrow" />
            </span>
            <span
              onClick={moveBar}
              className={`show-indicator right${
                currentMove === -2650 ? " hidden-indicator" : " "
              }`}
            >
              <IoIosArrowDroprightCircle
                size={55}
                className="indicator-arrow"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
SpecialProducts.propTypes ={
  imgProduct : propTypes.string
}