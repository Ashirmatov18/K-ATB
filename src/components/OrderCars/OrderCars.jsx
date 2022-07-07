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
  const [description, setDescription] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  const getInfo = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/car-rentals/`
    );
    console.log(data);
    return data.car - rentals;
  };

  const getDescription = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/car-rentals/`
    );
    return data.description[0].translations.ru;
  };

  const [state, setState] = useState([]);

  useEffect(() => {
    getInfo().then(setState);
    getDescription().then((data) => setDescription([data]));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
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
            {!!description?.length &&
              description.map(({ description, title }) => (
                <>
                  <div className={styles.search_explore}>
                    <span>{title}</span>
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

                  <div data-aos="fade-down">
                    <p style={{ paddingTop: "20px" }}>{description}</p>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div className={styles.person_cards}>
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
