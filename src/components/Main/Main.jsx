import React, { useEffect, useState } from "react";
import styles from "../../../styles/Main.module.css";
import MainLayout from "../ui/MainLayout";
import { ReadMore } from "./MainIcons";
import SimpleSlider from "./SimpleSlider";
import MainVideo from "./MainVideo";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default function Main() {
  const [state, setState] = useState([]);
  const [about, setAbout] = useState([]);

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    return data.floor_one[0].translations.ru;
  };

  const getAbout = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    return data.about_us;
  };

  getInfo();
  getAbout();

  useEffect(() => {
    getInfo().then((data) => setState([data]));
    getAbout().then(setAbout);
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className={styles.mount}>
        <MainLayout>
          <div className={styles.information}>
            {!!state?.length &&
              state.map(({ title, description }) => (
                <div className={styles.title_descr}>
                  <h1>{title}</h1>
                  <span>{description}</span>
                </div>
              ))}
            <Link style={{ textDecoration: "none" }} href="/kyrgyzstan">
              <div className={styles.button_click}>
                <button>Нажми</button>
              </div>
            </Link>
          </div>
          <div className={styles.sli} data-aos="fade-down">
            <SimpleSlider />
          </div>
        </MainLayout>
      </div>
      <MainLayout>
        <div className={styles.about}>
          <div className={styles.about_title} data-aos="fade-down">
            <h1 className={styles.about_us}>О НАС</h1>
            <div>
              <div className={styles.about_info}>
                {!!about?.length &&
                  about.map(({ description, title }) => (
                    <>
                      <h1 className={styles.explore}>{title}</h1>
                      <span>{description}</span>
                    </>
                  ))}
              </div>
              <Link href="/about" style={{ textDecoration: "none" }}>
                <div className={styles.read_more}>
                  <span>Подробнее</span>
                  <div
                    className={styles.pic_vid}
                    styles={{ paddingTop: "10px" }}
                  >
                    <ReadMore />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.about_second} data-aos="fade-up">
            <div>
              <MainVideo />
            </div>
            <div className={styles.first_img}></div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
