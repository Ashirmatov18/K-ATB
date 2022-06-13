import { Search } from "../OrderCars/OrderCarsSvg";
import React from "react";
import styles from "../../../styles/tour.module.css";
import MainLayout from "../ui/MainLayout";
import { useState, useEffect } from "react";
import Paginanation from "../Paginanation";
import axios from "axios";

export default function MainTour() {
  const getTour = async () => {
    const { data } = await axios.get(
      `http://3.90.235.96/api/v1/travel-companies/`
    );
    console.log(data.results);
    return data.results;
  };

  getTour();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    getTour().then(setTour);
  }, []);

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title}>
          <span>Турфирмы</span>
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
          <Paginanation data={tour} />
        </div>
      </MainLayout>
    </div>
  );
}
