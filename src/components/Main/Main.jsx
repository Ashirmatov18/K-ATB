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

  const getInfo = async () => {
    const { data } = await axios.get(`https://admin.tabiyat.kg/api/v1/`);
    console.log(data[0].translations.ru);
    return data[0].translations.ru;
  };

  getInfo();

  useEffect(() => {
    getInfo().then((data) => setState([data]));
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.mount}>
        <MainLayout>
          <div className={styles.information}>
            {/* {!!state?.length && */}
            {/* state.map(({(description, title)}) => ( */}
            <div>
              <h1>
                ДОБРО <br /> ПОЖАЛОВАТЬ
                {/* {title} */}
              </h1>
              <span>
                Профессионализм наших сотрудников, высокое <br /> качество
                оказания услуг помогают компании находить
              </span>
            </div>
            {/* ))} */}
            <div className={styles.button_click}>
              <button>Нажми</button>
            </div>
          </div>
          <div className={styles.sli} data-aos="fade-down">
            <SimpleSlider />
          </div>
        </MainLayout>
      </div>
      <MainLayout>
        <div className={styles.about}>
          <div data-aos="fade-down">
            <h1 className={styles.about_us}>О НАС</h1>
            <div>
              <h1 className={styles.explore}>
                Информация о <br />
                нас
              </h1>
              <div className={styles.about_info}>
                <span>
                  Мы оказываем полный спектр услуг по установке, настройке,
                  обновлению, обучению и сопровождению программных продуктов
                  1С:Предприятие.
                </span>
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
