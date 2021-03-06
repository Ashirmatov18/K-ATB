import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState } from "react";
import styles from "../../../styles/Exploration.module.css";
import { Left, Right } from "../Main/MainIcons";
import Slider from "react-slick";
import MainLayout from "../ui/MainLayout";

export default function ExpoSlider() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    infinite: true,
    // lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,

    nextArrow: <Right />,
    prevArrow: <Left />,
    responsive: [
      // {
      //   breakpoint: 850,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     // initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className={styles.content}>
      <MainLayout>
        <div style={{ cursor: "pointer" }} className={styles.slider_whole_but}>
          <Left
            style={{ color: "black" }}
            className={styles.slider_left}
            onClick={sliderRef?.slickPrev}
          />
          <Right
            className={styles.slider_right}
            onClick={sliderRef?.slickNext}
          />
        </div>
      </MainLayout>

      <Slider ref={setSliderRef} {...sliderSettings}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
        <div className={styles.second}></div>
      </Slider>
    </div>
  );
}
