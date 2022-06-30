import { Search } from "../OrderCars/OrderCarsSvg";
import React from "react";
import styles from "../../../styles/tour.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import Paginanation from "../Paginanation";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainTour() {
  const [searchItem, setSearchItem] = useState("");

  const getTour = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/travel-companies/`
    );
    console.log(data.results);
    return data.results;
  };

  getTour();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    getTour().then(setTour);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>Турфирмы</span>
        </div>
      </div>
      <MainLayout>
        <div className={styles.kyrgyzstan}>
          <div>
            <div className={styles.search_explore}>
              <span>Открой мир с нами</span>
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
                Никогда не садитесь за руль в Кыргызстане, если не уверены в
                себе. Потомки кочевников лихачат круче, чем это делают в Грузии
                а вы же наверняка слышали про грузинских водителей. Есть
                легенда, согласно которой
              </p>
            </div>
          </div>
        </div>

        <div className={styles.person_cards}>
          <Paginanation
            data-aos="fade-down"
            data={tour}
            searchItem={searchItem}
          />
        </div>
      </MainLayout>
    </div>
  );
}
