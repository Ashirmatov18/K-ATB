import { Search } from "../OrderCars/OrderCarsSvg";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/newsPage.module.css";
import MainLayout from "../ui/MainLayout";
import { ReadMore } from "../Main/MainIcons";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export default function MainNews({ news }) {
  const [state, setState] = useState([]);

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/news/`);
    console.log(data);
    return data;
  };

  getInfo();

  useEffect(() => {
    getInfo().then(setState);
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
          {!!state?.length &&
            state.map(({ image, translations, id }) => (
              <Link href={"/newsdetails/[id]"} as={`/newsdetails/${id}`}>
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
                    <div className={styles.read_more}>
                      <p>Подробнее</p>
                      <div className={styles.arrow}>
                        <ReadMore />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </MainLayout>
    </div>
  );
}
