import React from "react";
import MainLayout from "../ui/MainLayout";
import styles from "../../../styles/News.module.css";
import { ReadMore } from "../Main/MainIcons";
import { Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function News() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
            <h1>НОВОСТИ</h1>
            <span>Наши новости</span>
            <div>
              <p>
                Мы оказываем полный спектр услуг по установке, настройке, <br />
                обновлению, обучению и сопровождению программных продуктов{" "}
                <br />
                1С Предприятие.
              </p>
            </div>
            <Link href="news" style={{ textDecoration: "none" }}>
              <div className={styles.but_article}>
                <button>Нажми меня</button>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.adv} data-aos="fade-down">
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
                <p>Подробнее</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_sec}></div>
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
                <p>Подробнее</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_third}></div>
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
                <p>Подробнее</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_detail}>
            <div className={styles.picture_fourth}></div>
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
                <p>Подробнее</p>
                <div className={styles.arrow}>
                  <ReadMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
