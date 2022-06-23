import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "../OrderCars/OrderCarsSvg";
import React from "react";
import styles from "../../../styles/cafe.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import { Left, Right } from "../Main/MainIcons";
import { Exit } from "../Navbar/NavbarIcons";
import axios from "axios";
import Paginanation from "../Paginanation";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Cafe() {
  // const [modal, setModal] = useState(false);
  const getCafe = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/restaurants/`
    );
    return data.results;
  };

  getCafe();
  const [restaraunt, setRestaraunt] = useState([]);
  useEffect(() => {
    getCafe().then(setRestaraunt);
  }, []);

  const [hotel, setHotel] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState(hotel);

  useEffect(() => {
    getCafe().then((data) => {
      setHotel(data);
      setFilteredHotels(data);
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
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

  // const next = (index) => {
  //   const currentImageIndex = imgs[0];
  //   if (currentImageIndex !== imgs.length) {
  //     setWordData(currentImageIndex + 1);
  //   } else if (wordData === imgs.length) {
  //     setWordData(0);
  //   }
  // };

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.main_search}>
          <input type="text" className={styles.search} placeholder="Поиск" />
          <Search className={styles.search_icon} />
        </div>
        <div data-aos="fade-down" className={styles.about_title}>
          <span> КАФЕ И РЕСТОРАНЫ</span>
        </div>
      </div>
      <MainLayout>
        <div style={{ paddingTop: "150px" }} className={styles.kyrgyzstan}>
          <div data-aos="fade-up">
            <span>Explore our world with us</span>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                ligula rhoncus, ut erat dictumst. Vitae non et <br />{" "}
                scelerisque libero. Odio auctor ut tortor bibendum. Sapien nisl,
                turpis quam convallis morbi vel. Elit faucibus sit <br /> cras
                iaculis
              </p>
            </div>
          </div>
        </div>
        <div className={styles.but_group} data-aos="fade-up">
          <button
            onClick={() => setFilteredHotels(hotel)}
            className={styles.but_filter}
          >
            Все
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Рестораны")}
          >
            Рестораны
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Кофейни")}
          >
            Кофейни
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Кафетерии")}
          >
            Кафетерии
          </button>
          <button
            className={styles.but_filter}
            onClick={() => filterResult("Пекарни")}
          >
            Пекарни
          </button>
        </div>
        <div data-aos="fade-down" className={styles.person_cards}>
          {" "}
          <Paginanation data={filteredHotels} />
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
