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
    infinite: false,
    nextArrow: <Right />,
    prevArrow: <Left />,
  };
  return (
    <div className={styles.content}>
      <MainLayout>
        <div className={styles.slider_whole_but}>
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
        {/* <div className={styles.gallery_car}> */}
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
        <div className={styles.second}></div>
        {/* </div> */}
      </Slider>
    </div>
  );
}
