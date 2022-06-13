import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/gallery.module.css";
import { Left, Right } from "../Main/MainIcons";
import MainLayout from "../ui/MainLayout";

export default function Gallery() {
  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  // const [slider, setSlider] = useState({
  //   currentImageIndex: 0,
  // });

  const { currentImageIndex } = wordData;

  const handleClick = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  function next() {
    setWordData((wordData) => {
      return {
        currentImageIndex: wordData.currentImageIndex + 1,
      };
    });
  }

  function prev() {
    setWordData((wordData) => {
      return {
        currentImageIndex: wordData.currentImageIndex - 1,
      };
    });
  }

  return (
    <div style={{ marginBottom: "120px" }}>
      <MainLayout>
        <div className={styles.gallery}>
          <h1 style={{ color: "#A80F02", fontSize: "32px" }}>Галлерея</h1>
          <div className={styles.control}>
            <Left className={styles.arrow} onClick={prev} />
            <Right onClick={next} />
          </div>
        </div>
        {/* <Carousel
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
        </Carousel> */}
        <div className={styles.carousel}>
          <div className={styles.modal}>
            <div className={styles.main}>
              <img src={wordData.value} className={styles.main_carousel} />
              <div className={styles.flex_row}>
                {imgs.map((data, i) => (
                  <div className={styles.thumbnail} key={i}>
                    <img
                      // className={wordData.id == i ? "clicked" : ""}
                      className={styles.mini_carousel}
                      src={data.value}
                      onClick={() => handleClick(i)}
                      height="70"
                      width="100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
