import { Search } from "../OrderCars/OrderCarsSvg";
import React from "react";
import styles from "../../../styles/tour.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import ModalsPag from "../ModalsPag";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainTour() {
  const [description, setDescription] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  const getTour = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/travel-companies/`
    );
    console.log(data.results);
    return data;
  };

  const getDescription = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/guides/`);
    console.log(data.description[0].translations.ru);
    return data.description[0].translations.ru;
  };

  getTour();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    getTour().then(setTour);
    getDescription().then((data) => setDescription([data]));
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
          <ModalsPag data-aos="fade-down" data={tour} searchItem={searchItem} />
        </div>
      </MainLayout>
    </div>
  );
}
