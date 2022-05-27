import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import styles from "../../../styles/Main.module.css";
import { LeftSlider, RightSlider } from "./MainIcons";
// import Mount from "../../../public/images/moun.jpg";
// import Horses from "../../../public/images/horses.jpg";
// import Waterf from "../../../public/images/waterf.jpg";
import { Image } from "next/image";

export default function SimpleSlider() {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <RightSlider />,
    prevArrow: <LeftSlider />,
  };

  // const hotelCards = [
  //   {
  //     imageSrc: { mount },
  //     title: "Studio Room",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     title: "Deluxe Room",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  //     title: "King Deluxe Room",
  //   },
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //     title: "Royal Suite",
  //   },
  // ];
  return (
    <div className={styles.content}>
      <div className={styles.slider_whole_but}>
        <LeftSlider
          className={styles.slider_but}
          onClick={sliderRef?.slickPrev}
        />
        <RightSlider
          className={styles.slider_but}
          onClick={sliderRef?.slickNext}
        />
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        <div className={styles.first_image}></div>
        <div className={styles.second_image}></div>
        <div className={styles.third_image}></div>

        {/* {hotelCards.map((card, index) => (
          <div key={index}>
            <h2>{card.title}</h2>
            <img alt={card.title} src={card.imageSrc} />
          </div>
        ))} */}
      </Slider>
    </div>
  );
}
