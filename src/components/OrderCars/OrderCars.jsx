import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "./OrderCarsSvg";
import React from "react";
import styles from "../../../styles/cars.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import { Left, Right } from "../Main/MainIcons";
import { Exit } from "../Navbar/NavbarIcons";
import { Pagination } from "@mui/material";
import axios from "axios";

export default function OrderCars() {
  const [modal, setModal] = useState(false);
  const getInfo = async () => {
    const { data } = await axios.get(`http://3.90.235.96/api/v1/car-rentals/`);
    console.log(data.results);
    return data.results;
  };

  getInfo();
  const [state, setState] = useState([]);

  useEffect(() => {
    getInfo().then(setState);
  }, []);

  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleClick = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title}>
          <span>АРЕНДА МАШИН</span>
        </div>
      </div>
      <MainLayout>
        <div className={styles.kyrgyzstan}>
          <div>
            <div className={styles.search_explore}>
              <span>Explore our world with us</span>
              <div className={styles.main_search}>
                <input
                  type="text"
                  className={styles.search}
                  placeholder="Поиск"
                />
                <Search className={styles.search_icon} />
              </div>
            </div>
            <div>
              <p style={{ paddingTop: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                ligula rhoncus, ut erat dictumst. Vitae non et <br />{" "}
                scelerisque libero. Odio auctor ut tortor bibendum. Sapien nisl,
                turpis quam convallis morbi vel. Elit faucibus sit <br /> cras
                iaculis
              </p>
            </div>
          </div>
        </div>
        <div className={styles.person_cards}>
          <Pagination data={state} />
        </div>
      </MainLayout>
      {modal && (
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
      )}
    </div>
  );
}
