import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//carousel images

import img1 from "../../../assets/carousel/free_3d_logo_sign_mockup.jpg";
import img2 from "../../../assets/carousel/warehouse_render.jpg";

import img5 from "../../../assets/carousel/homepg.png";

import leftArrow from "../../../assets/carousel/arrow_back_ios_white_24dp.svg";
import rightArrow from "../../../assets/carousel/arrow_forward_ios_white_24dp.svg";

import classes from "./LandingSlider.module.css";

const LandingSlider = () => {
  const ArrowLeft = (props) => (
    <img
      src={leftArrow}
      {...props}
      className={classes["arrow-left-landing"]}
      alt="left arrow"
    />
  );
  const ArrowRight = (props) => (
    <img
      src={rightArrow}
      {...props}
      className={classes["arrow-right-landing"]}
      alt="rightarrow"
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
    <Container>
      <div className={classes.overlay}></div>
      <Carousel {...settings}>
        <Wrap>
          <img src={img1} alt="carousel1" />
        </Wrap>
        <Wrap>
          <img src={img2} alt="carousel2" />
        </Wrap>
        <Wrap>
          <img src={img5} alt="carousel3" />
        </Wrap>
      </Carousel>
    </Container>
  );
};
export default LandingSlider;
const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  border-radius: 10px;
  background: rgb(20, 21, 57);
  background: linear-gradient(
    180deg,
    rgba(20, 21, 57, 0.6169818269104517) 21%,
    rgba(0, 0, 0, 0.5833683815323004) 100%
  );
  @media (max-width: 500px) {
    position:relative
    height: 100vh;
    overflow-y: hidden;
    border-radius:0;  
    
  }
`;
const Carousel = styled(Slider)`
  width: 100%;
`;
const Wrap = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 500px) {
    height: 100%;
  }
  img {
    position:relative;
    top:40px;
    height: 100vh;
    width: 100%;
    @media (max-width: 500px) {
      object-fit: cover;
    }
  }
`;