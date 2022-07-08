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
  const [description, setDescription] = useState([]);

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/news/`);
    console.log(data);
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
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title} data-aos="fade-down">
          <span>НОВОСТИ</span>
        </div>
      </div>
      <MainLayout>
        <div style={{ paddingTop: "150px" }} className={styles.kyrgyzstan}>
          {!!description?.length &&
            description.map(({ description, title }) => (
              <>
                <div data-aos="fade-up">
                  <span>{title}</span>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              </>
            ))}
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
                    <h1> {translations.ru.title}</h1>
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
