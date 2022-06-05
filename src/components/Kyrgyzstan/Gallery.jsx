import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../../styles/gallery.module.css";
import Image from "next/image";
import fff from "../../../public/images/fff.jpg";
import first from "../../../public/images/first.jpg";
import sec from "../../../public/images/sec.jpg";
import third from "../../../public/images/third.jpg";
import firstCar from "../../../public/images/cars.jpg";
import secondCar from "../../../public/images/scar.jpg";
import { Left, Right } from "../Main/MainIcons";
import MainLayout from "../ui/MainLayout";

export default function Gallery() {
  const [slider, setSlider] = useState({
    currentImageIndex: 0,
  });
  const { currentImageIndex } = slider;

  function next() {
    setSlider((slider) => {
      return {
        currentImageIndex: slider.currentImageIndex + 1,
      };
    });
  }

  function prev() {
    setSlider((slider) => {
      return {
        currentImageIndex: slider.currentImageIndex - 1,
      };
    });
  }

  return (
    <div style={{ marginBottom: "120px" }}>
      <MainLayout>
        <div className={styles.gallery}>
          <h1 style={{ color: "#A80F02", fontSize: "32px" }}>Галлерея</h1>
          <div>
            <Left className={styles.arrow} onClick={prev} />
            <Right onClick={next} />
          </div>
        </div>
        <Carousel
          selectedItem={currentImageIndex}
          transitionTime={200}
          useKeyboardArrows
          showArrows={false}
          showIndicators={false}
          className={styles.main_slider}
        >
          <div>
            <Image src={fff} styles={{ width: "330px", height: "200px" }} />
            <img src={fff} alt="" />
          </div>
          <div>
            <Image src={first} />
            <img src={fff} alt="" />
          </div>
          <div>
            <Image src={sec} />
            <img src={fff} alt="" />
          </div>
          <div>
            <Image src={third} />
            <img src={fff} alt="hello" />
          </div>
          <div>
            <Image src={firstCar} />
            <img src={fff} alt="" />
          </div>
          <div>
            <Image src={secondCar} />
            <img src={fff} alt="" />
          </div>
        </Carousel>
      </MainLayout>
    </div>
  );
}
