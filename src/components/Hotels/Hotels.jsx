import React from "react";
import styles from "../../../styles/hotels.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalsPag from "../ModalsPag";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hotels() {
  // const [modal, setModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const getHotel = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/houses/`);
    return data.results;
  };

  const [hotel, setHotel] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState(hotel);

  useEffect(() => {
    getHotel().then((data) => {
      setHotel(data);
      setFilteredHotels(data);
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const filterResult = (f) => {
    const result = hotel.filter((curDate) => {
      return curDate.translations.ru.type_of_house == f;
    });
    setFilteredHotels(result);
  };

  // const imgs = [
  //   { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
  //   { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
  //   { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
  // ];

  // const [wordData, setWordData] = useState(imgs[0]);
  // const [slideIndex, setSlideIndex] = useState(1);

  // const handleClick = (index) => {
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>ОТЕЛИ</span>
        </div>
      </div>
      <MainLayout>
        <div style={{ paddingTop: "150px" }} className={styles.kyrgyzstan}>
          <div data-aos="fade-up">
            <span>Лучшие Отели</span>
            <div>
              <p>
                Никогда не садитесь за руль в Кыргызстане, если не уверены в
                себе. Потомки кочевников лихачат круче, чем это делают в Грузии
                а вы же наверняка слышали про грузинских водителей. Есть
                легенда, согласно которой
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" className={styles.but_group}>
          <button
            onClick={() => setFilteredHotels(hotel)}
            className={styles.but_filter}
          >
            Все
          </button>
          <button
            onClick={() => filterResult("Отели")}
            className={styles.but_filter}
          >
            Отели
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Гостиницы")}
          >
            Гостиницы
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Гостевые дома")}
          >
            Гостевые дома
          </button>
          <button
            onClick={() => filterResult("Юрты")}
            className={styles.but_filter}
          >
            Юрты
          </button>
        </div>
        <div className={styles.person_cards}>
          {/* {filt.length > 0 && <Paginanation data={filt} />} */}
          <ModalsPag data={filteredHotels} searchItem={searchItem} />
        </div>
      </MainLayout>
      {/* {modal && (
        <div className={styles.modal}>
          <div className={styles.main}>
            <div className={styles.controllers}>
              <div>
                <Left className={styles.next_prev} />
                <Right />
              </div>
              <div>
                <Exit onClick={() => setModal(false)} />
              </div>
            </div>
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
      )} */}
    </div>
  );
}
