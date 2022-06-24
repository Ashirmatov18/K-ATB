import React, { useEffect } from "react";
import styles from "../../../styles/about.module.css";
import MainLayout from "../ui/MainLayout";
import News from "../News/News";
import Footer from "../Footer/Footer";
import ExpoSlider from "../Exploration/ExpoSlider";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.about_main}>
      <div className={styles.about_us}>
        <div data-aos="fade-down" className={styles.about_title}>
          <span>О нас</span>
        </div>
      </div>
      <MainLayout>
        <div className={styles.about_main_info}>
          <div className={styles.info_explore} data-aos="fade-up">
            <h1
              style={{ color: "#333333", fontWeight: "500", fontSize: "50px" }}
            >
              Настоящая Киргизия
            </h1>
            <span
              style={{ color: "#2F2F2F", fontSize: "32px", fontWeight: "500" }}
            >
              Швейцарская организация культурного развития Helvetas спонсировала
              несколько подобных проектов, в том числе «Жизнь Шепарда» и «Туризм
              на базе общин»
            </span>
            <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
              <br /> <br /> <br /> Приезжающих туристов привлекает красота
              окружающей среды. В 2010 году Кыргызстан присоединился к
              региональной инициативе (The Region Initiative (TRI)), которая
              является трехрегиональным объединением организаций, связанных с
              туризмом
            </span>
          </div>
          <div className={styles.about_img} data-aos="fade-down"></div>
        </div>

        <div className={styles.expo} data-aos="fade-down">
          <h1
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: "50px",
              paddingTop: "150px",
            }}
          >
            Бишкек
          </h1>
          <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
            это как будто ты оказался в частном секторе в районе Цнянского
            водохранилища, но с видом на снежные пики Тянь-Шаня.Первоначальное
            название города Пишпек
          </span>

          <div className={styles.about_stat}>
            <div className={styles.stat_info}>
              <h1>520</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>720</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>25</h1>
              <span>Lorem ipsum </span>
            </div>
            <div className={styles.stat_info}>
              <h1>100</h1>
              <span>Lorem ipsum </span>
            </div>
          </div>
        </div>
      </MainLayout>

      <ExpoSlider />
      <MainLayout>
        <div className={styles.about_text}>
          <h1
            style={{
              color: "#333333",
              fontWeight: "500",
              fontSize: "50px",
              paddingTop: "20px",
            }}
          >
            Первоначальное название
          </h1>
          <span style={{ color: "#2F2F2F", fontSize: "24px" }}>
            города Пишпек возникло из-за того, что русский офицер плохо услышал
            кыргызское «Бишкек». В свою очередь, кыргызы в советское время
            называли свой город не Фрунзе, а Пурунзе. Вокруг Белого дома в
            Бишкеке после революции 2020 года осталась лишь одна часть забора.
            Она используется как мемориальная доска в память о погибших в ходе
            столкновений 2010 года.
          </span>
        </div>
      </MainLayout>
      <News />
      <div className={styles.empty}></div>

      <Footer />
    </div>
  );
}
