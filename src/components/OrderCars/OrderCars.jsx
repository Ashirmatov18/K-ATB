import { Search } from "./OrderCarsSvg";
import React from "react";
import styles from "../../../styles/cars.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import { Left, Right } from "../Main/MainIcons";
import { Exit } from "../Navbar/NavbarIcons";
import axios from "axios";
import ModalsPag from "../ModalsPag";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OrderCars() {
  const [modal, setModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const getInfo = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/car-rentals/`
    );
    return data.results;
  };

  const [state, setState] = useState([]);

  useEffect(() => {
    getInfo().then(setState);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // console.log(state[0].title);

  const imgs = [
    { id: 0, value: "https://wallpaperaccess.com/full/2637581.jpg" },
    { id: 1, value: "https://source.unsplash.com/user/c_v_r/1900x800" },
    { id: 2, value: "https://source.unsplash.com/user/c_v_r/100x100" },
  ];
  console.log(state);
  const [wordData, setWordData] = useState(imgs[0]);
  const [slideIndex, setSlideIndex] = useState(1);

  const handleClick = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
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
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                  }}
                />
                <Search className={styles.search_icon} />
              </div>
            </div>
            <div data-aos="fade-up">
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
        <div data-aos="fade-up" className={styles.person_cards}>
          <ModalsPag
            data={state}
            searchItem={searchItem}
            //
          />
        </div>
      </MainLayout>
    </div>
  );
}
