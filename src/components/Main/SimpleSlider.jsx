import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import styles from "../../../styles/Main.module.css";
import { LeftSlider, RightSlider } from "./MainIcons";

export default function SimpleSlider() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    className: "slide",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <RightSlider />,
    prevArrow: <LeftSlider />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.content}>
      <div className={styles.slider_whole_but}>
        <LeftSlider
          className={styles.slider_left}
          onClick={sliderRef?.slickPrev}
        />
        <RightSlider
          className={styles.slider_right}
          onClick={sliderRef?.slickNext}
        />
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        <div className={styles.first_image}></div>
        <div className={styles.second_image}></div>
        <div className={styles.third_image}></div>
      </Slider>
    </div>
  );
}
