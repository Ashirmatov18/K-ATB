import React, { useEffect, useState } from "react";
import styles from "../../../styles/partners.module.css";
import {
  Email,
  Facebook,
  Insta,
  LineHeight,
  Mobile,
  Search,
  Whats,
} from "../OrderCars/OrderCarsSvg";
import MainLayout from "../ui/MainLayout";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import ModalsPag from "../ModalsPag";

export default function Partners() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const [modal, setModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const getInfo = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/services/`
    );
    return data.service;
  };

  const [description, setDescription] = useState([]);

  const getDescription = async () => {
    const { data } = await axios.get(
      `https://admin.tabiyat.kg/api/v1/services/`
    );
    return data.description[0].translations.ru;
  };

  const [state, setState] = useState([]);

  useEffect(() => {
    getInfo().then(setState);
    getDescription().then((data) => setDescription([data]));
  }, []);

  return (
    <div>
      <div className={styles.main_guides}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>ПАРТНЕРЫ</span>
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
                  </div>

                  <div data-aos="fade-down">
                    <p style={{ paddingTop: "20px" }}>{description}</p>
                  </div>
                </>
              ))}
          </div>
        </div>
        <div
          onClick={() => setModal(true)}
          className={styles.person_cards}
          // data-aos="fade-up"
        >
          <ModalsPag data={state} searchItem={searchItem} />
        </div>
      </MainLayout>
    </div>
  );
}
