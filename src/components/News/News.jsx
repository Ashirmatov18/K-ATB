import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/News.module.css";
import { ReadMore } from "../Main/MainIcons";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function News() {
  const [state, setState] = useState([]);
  const [description, setDescription] = useState([]);

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/news/`);
    return data.news;
  };

  const getDescription = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/news/`);
    return data.description[0].translations.ru;
  };
  getInfo();

  useEffect(() => {
    getInfo().then(setState);
    getDescription().then((data) => setDescription([data]));

    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.main_news} style={{ backgroundColor: "#F4F4F4" }}>
      <MainLayout>
        <div
          style={{ paddingTop: "100px" }}
          className={styles.kyrgyzstan}
          data-aos="fade-down"
        >
          <div>
            <h1>НОВОСТИ</h1>{" "}
            {!!description?.length &&
              description.map(({ description, title }) => (
                <>
                  <span>{title}</span>
                  <div>
                    <p>{description}</p>
                  </div>
                </>
              ))}
            <Link href="news" style={{ textDecoration: "none" }}>
              <div className={styles.but_article}>
                <button>Нажми меня</button>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className={styles.adv} data-aos="fade-down">
          <div className={styles.info_detail}>
            <div className={styles.picture_first}></div>
            <div className={styles.pic_info}>
              <h1>Новости </h1>
              <p>
                Мы оказываем полный спектр <br /> услуг по установке, настройке,{" "}
                <br />
                обновлению, обучению и сопровождению <br /> программных
                продуктов <br />
                1С Предприятие.
              </p>
              <div className={styles.read_more}>
                <p className={styles.p_read}>Подробнее</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.adv}>
          {!!state?.length &&
            state.map(({ image, translations }) => (
              <div className={styles.info_detail} data-aos="fade-up">
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={styles.picture_first}
                ></div>
                <div className={styles.pic_info}>
                  <h1>Новости </h1>
                  <p className={styles.info_description}>
                    {translations.ru.description}
                  </p>
                  <Link style={{ textDecoration: "none" }} href="/news">
                    <div className={styles.read_more}>
                      <p>Подробнее</p>
                      <div className={styles.arrow}>
                        <ReadMore />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </MainLayout>
    </div>
  );
}
