import { Search } from "../OrderCars/OrderCarsSvg";
import React, { useEffect } from "react";
import styles from "../../../styles/newsPage.module.css";
import MainLayout from "../ui/MainLayout";
import { ReadMore } from "../Main/MainIcons";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainNews() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title} data-aos="fade-down">
          <span>НОВОСТИ</span>
        </div>
      </div>
      <MainLayout>
        <div style={{ paddingTop: "150px" }} className={styles.kyrgyzstan}>
          <div data-aos="fade-up">
            <span>Последние новости</span>
            <div>
              <p>
                Никогда не садитесь за руль в Кыргызстане, если не уверены в
                себе. Потомки кочевников лихачат круче, чем это делают в Грузии
                а вы же наверняка слышали про грузинских водителей. Есть
                легенда, согласно которой
              </p>
            </div>
          </div>
        </div>
        <div className={styles.adv}>
          <div className={styles.info_detail} data-aos="fade-up">
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

          <div className={styles.info_detail} data-aos="fade-down">
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
              <Link href="/newsdetail">
                <div className={styles.read_more}>
                  <p>Подробнее</p>
                  <div className={styles.arrow}>
                    <ReadMore />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.info_detail} data-aos="fade-up">
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

          <div className={styles.info_detail} data-aos="fade-down">
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
