import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ProductsData from "../../../../data/data";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//carousel images

import leftArrow from "../../../assets/carousel/arrow_back_ios_white_24dp.svg";
import rightArrow from "../../../assets/carousel/arrow_forward_ios_white_24dp.svg";

import classes from "./ProductsSlider.module.css";

import Products from "./Products";


const ProductsSlider = () => {
  const Container = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Carousel = styled(Slider)`
  margin-top: 6rem;
  width: 100%;
  @media (max-width: 450px) {
  }
`;
const Wrap = styled.div``;

  const ArrowLeft = (props) => (
    <img
      src={leftArrow}
      {...props}
      className={classes["arrow-left"]}
      alt="left arrow"
    />
  );
  const ArrowRight = (props) => (
    <img
      src={rightArrow}
      {...props}
      className={classes["arrow-right"]}
      alt="right arrow"
    />
  );

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <div className="div" id="products">
    <Container>
      <div className={classes["product-heading"]}>
        <h1>Our Products</h1>
      </div>
      <Carousel {...settings}>
        {ProductsData.map((data) => {
          return (
            <Wrap key={data.model}>
              <Products img={data.img} desc={data.desc} model={data.model} />
              <div className={classes["product-redirect"]}>
              <Link to={`/products/${data.model}`}><span><strong>Learn More</strong></span></Link>
            </div>
              
            </Wrap>
          );
        })}
      </Carousel>
    </Container>
    </div>
  );
};
export default ProductsSlider;
